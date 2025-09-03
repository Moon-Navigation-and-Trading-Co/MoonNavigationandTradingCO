import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    
    // Check if request body is empty or invalid
    const text = await request.text();
    if (!text || text.trim() === '') {
      return NextResponse.json({ error: 'Empty request body' }, { status: 400 });
    }
    
    let data;
    try {
      data = JSON.parse(text);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    
    const { 
      id: sessionId, 
      timestamp, 
      page, 
      userAgent, 
      referrer, 
      screenResolution, 
      timezone, 
      language, 
      country, 
      city, 
      ip, 
      event, 
      sessionDuration, 
      lastActivity 
    } = data;

    // Determine device type from user agent
    const getDeviceType = (userAgent: string | undefined) => {
      if (!userAgent) return 'desktop';
      if (userAgent.includes('Mobile') || userAgent.includes('Android') || userAgent.includes('iPhone')) {
        return 'mobile';
      } else if (userAgent.includes('iPad') || userAgent.includes('Tablet')) {
        return 'tablet';
      }
      return 'desktop';
    };

    // Determine traffic source from referrer
    const getTrafficSource = (referrer: string | undefined) => {
      if (!referrer || referrer === '') return 'direct';
      if (referrer.includes('google.com') || referrer.includes('bing.com')) return 'organic_search';
      if (referrer.includes('facebook.com') || referrer.includes('twitter.com') || referrer.includes('linkedin.com')) return 'social_media';
      if (referrer.includes('mail') || referrer.includes('email')) return 'email';
      return 'referral';
    };

    // Insert page view data
    const pageViewData = {
      session_id: sessionId || null,
      timestamp: new Date(timestamp).toISOString(),
      page,
      user_agent: userAgent,
      referrer,
      screen_resolution: screenResolution,
      timezone,
      language,
      country,
      city,
      ip_address: ip,
      device_type: getDeviceType(userAgent),
      traffic_source: getTrafficSource(referrer),
      event_type: 'page_view'
    };

    const { error: pageViewError } = await supabase
      .from('analytics_page_views')
      .insert(pageViewData);

    if (pageViewError) {
      console.error('Error inserting page view:', pageViewError);
    }

    // Insert session data if it's a session event
    if (event && ['session_start', 'session_end', 'session_pause', 'session_resume'].includes(event)) {
      const sessionData = {
        session_id: sessionId || null,
        event_type: event,
        timestamp: new Date(timestamp).toISOString(),
        session_duration: sessionDuration,
        last_activity: lastActivity,
        page,
        country,
        city,
        device_type: getDeviceType(userAgent)
      };

      const { error: sessionError } = await supabase
        .from('analytics_sessions')
        .insert(sessionData);

      if (sessionError) {
        console.error('Error inserting session data:', sessionError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json({ error: 'Failed to track analytics' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { searchParams } = new URL(request.url);
    const timeRange = searchParams.get('range') || '7d';
    const page = searchParams.get('page') || '';

    const now = new Date();
    let startDate = new Date();

    // Calculate start date based on time range
    switch (timeRange) {
      case '1d':
        startDate.setDate(now.getDate() - 1);
        break;
      case '7d':
        startDate.setDate(now.getDate() - 7);
        break;
      case '30d':
        startDate.setDate(now.getDate() - 30);
        break;
      case '90d':
        startDate.setDate(now.getDate() - 90);
        break;
      default:
        startDate.setDate(now.getDate() - 7);
    }

    // Fetch page views from Supabase
    let query = supabase
      .from('analytics_page_views')
      .select('*')
      .gte('timestamp', startDate.toISOString())
      .order('timestamp', { ascending: false });

    if (page) {
      query = query.eq('page', page);
    }

    const { data: pageViews, error } = await query;

    if (error) {
      console.error('Error fetching analytics:', error);
      return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
    }

    // Process the data
    const processedData: any = {
      totalVisitors: pageViews?.length || 0,
      uniqueVisitors: new Set(pageViews?.map(pv => pv.session_id)).size,
      pageViews: pageViews?.length || 0,
      dailyStats: [],
      hourlyStats: [],
      topPages: [],
      trafficSources: [],
      devices: [],
      countries: []
    };

    if (pageViews && pageViews.length > 0) {
      // Process daily stats
      const dailyMap = new Map();
      pageViews.forEach(pv => {
        const date = new Date(pv.timestamp).toISOString().split('T')[0];
        if (!dailyMap.has(date)) {
          dailyMap.set(date, { visitors: 0, unique: new Set(), pageViews: 0 });
        }
        const day = dailyMap.get(date);
        day.visitors++;
        day.unique.add(pv.session_id);
        day.pageViews++;
      });

      processedData.dailyStats = Array.from(dailyMap.entries()).map(([date, data]) => ({
        date,
        visitors: data.visitors,
        unique: data.unique.size,
        pageViews: data.pageViews,
        bounceRate: Math.random() * 20 + 25 // Mock bounce rate for now
      })).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

      // Process hourly stats
      const hourlyMap = new Map();
      for (let i = 0; i < 24; i++) {
        const hour = `${i.toString().padStart(2, '0')}:00`;
        hourlyMap.set(hour, { visitors: 0, unique: new Set() });
      }

      pageViews.forEach(pv => {
        const hour = new Date(pv.timestamp).getHours().toString().padStart(2, '0') + ':00';
        const hourData = hourlyMap.get(hour);
        if (hourData) {
          hourData.visitors++;
          hourData.unique.add(pv.session_id);
        }
      });

      processedData.hourlyStats = Array.from(hourlyMap.entries()).map(([hour, data]) => ({
        hour,
        visitors: data.visitors,
        unique: data.unique.size
      }));

      // Process top pages
      const pageMap = new Map();
      pageViews.forEach(pv => {
        const page = pv.page;
        if (!pageMap.has(page)) {
          pageMap.set(page, { views: 0, visitors: new Set() });
        }
        const pageData = pageMap.get(page);
        pageData.views++;
        pageData.visitors.add(pv.session_id);
      });

      processedData.topPages = Array.from(pageMap.entries()).map(([page, data]) => ({
        page,
        views: data.views,
        visitors: data.visitors.size,
        bounceRate: Math.random() * 30 + 20 // Mock bounce rate
      })).sort((a, b) => b.views - a.views).slice(0, 10);

      // Process traffic sources
      const sourceMap = new Map();
      pageViews.forEach(pv => {
        const source = pv.traffic_source || 'direct';
        if (!sourceMap.has(source)) {
          sourceMap.set(source, 0);
        }
        sourceMap.set(source, sourceMap.get(source) + 1);
      });

      const totalVisitors = processedData.totalVisitors;
      processedData.trafficSources = Array.from(sourceMap.entries()).map(([source, count]) => ({
        source: source.replace('_', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
        visitors: count,
        percentage: Math.round((count / totalVisitors) * 100)
      })).sort((a, b) => b.visitors - a.visitors);

      // Process devices
      const deviceMap = new Map();
      pageViews.forEach(pv => {
        const device = pv.device_type || 'desktop';
        if (!deviceMap.has(device)) {
          deviceMap.set(device, 0);
        }
        deviceMap.set(device, deviceMap.get(device) + 1);
      });

      processedData.devices = Array.from(deviceMap.entries()).map(([device, count]) => ({
        device: device.charAt(0).toUpperCase() + device.slice(1),
        visitors: count,
        percentage: Math.round((count / totalVisitors) * 100)
      })).sort((a, b) => b.visitors - a.visitors);

      // Process countries
      const countryMap = new Map();
      pageViews.forEach(pv => {
        const country = pv.country || 'Unknown';
        if (!countryMap.has(country)) {
          countryMap.set(country, 0);
        }
        countryMap.set(country, countryMap.get(country) + 1);
      });

      processedData.countries = Array.from(countryMap.entries()).map(([country, count]) => ({
        country,
        visitors: count,
        percentage: Math.round((count / totalVisitors) * 100)
      })).sort((a, b) => b.visitors - a.visitors).slice(0, 10);
    }

    return NextResponse.json(processedData);
  } catch (error) {
    console.error('Analytics fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
} 