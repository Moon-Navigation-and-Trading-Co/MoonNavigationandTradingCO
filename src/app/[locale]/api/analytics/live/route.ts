import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    
    // Get visitors from the last 5 minutes
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();

    const { data: recentVisitors, error } = await supabase
      .from('analytics_page_views')
      .select('*')
      .gte('timestamp', fiveMinutesAgo)
      .order('timestamp', { ascending: false });

    if (error) {
      console.error('Error fetching live visitors:', error);
      return NextResponse.json({ error: 'Failed to fetch live data' }, { status: 500 });
    }

    const liveData: any = {
      current: 0,
      countries: [],
      pages: [],
      devices: []
    };

    if (recentVisitors && recentVisitors.length > 0) {
      // Count unique sessions (current visitors)
      const uniqueSessions = new Set(recentVisitors.map(v => v.session_id));
      liveData.current = uniqueSessions.size;

      // Process countries
      const countryMap = new Map();
      recentVisitors.forEach(visitor => {
        const country = visitor.country || 'Unknown';
        if (!countryMap.has(country)) {
          countryMap.set(country, {
            sessionId: visitor.session_id,
            page: visitor.page,
            country,
            city: visitor.city || 'Unknown',
            deviceType: visitor.device_type || 'desktop',
            timestamp: visitor.timestamp
          });
        }
      });

      liveData.countries = Array.from(countryMap.values()).slice(0, 6);

      // Process pages
      const pageMap = new Map();
      recentVisitors.forEach(visitor => {
        const page = visitor.page;
        if (!pageMap.has(page)) {
          pageMap.set(page, 0);
        }
        pageMap.set(page, pageMap.get(page) + 1);
      });

      liveData.pages = Array.from(pageMap.entries())
        .map(([page, visitors]) => ({ page, visitors }))
        .sort((a, b) => b.visitors - a.visitors)
        .slice(0, 5);

      // Process devices
      const deviceMap = new Map();
      recentVisitors.forEach(visitor => {
        const device = visitor.device_type || 'desktop';
        if (!deviceMap.has(device)) {
          deviceMap.set(device, 0);
        }
        deviceMap.set(device, deviceMap.get(device) + 1);
      });

      liveData.devices = Array.from(deviceMap.entries())
        .map(([device, visitors]) => ({ device, visitors }));
    }

    return NextResponse.json(liveData);

  } catch (error) {
    console.error('Live analytics error:', error);
    return NextResponse.json({ error: 'Failed to fetch live data' }, { status: 500 });
  }
} 