"use client";

import { useEffect, useState } from 'react';

interface VisitorData {
  id: string;
  timestamp: number;
  page: string;
  userAgent: string;
  referrer: string;
  screenResolution: string;
  timezone: string;
  language: string;
  country?: string;
  city?: string;
  ip?: string;
}

interface AnalyticsTrackerProps {
  apiEndpoint?: string;
  enableGeolocation?: boolean;
  trackPageViews?: boolean;
  trackUserBehavior?: boolean;
}

export default function AnalyticsTracker({
  apiEndpoint = '/api/analytics/track',
  enableGeolocation = true,
  trackPageViews = true,
  trackUserBehavior = true
}: AnalyticsTrackerProps) {
  const [sessionId] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('analytics_session_id') || 
             Math.random().toString(36).substring(2, 15) + 
             Math.random().toString(36).substring(2, 15);
    }
    return '';
  });

  const [visitorData, setVisitorData] = useState<VisitorData | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Store session ID
    localStorage.setItem('analytics_session_id', sessionId);

    // Collect visitor data
    const collectVisitorData = async () => {
      const data: VisitorData = {
        id: sessionId,
        timestamp: Date.now(),
        page: window.location.pathname,
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        screenResolution: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
      };

      // Get geolocation if enabled
      if (enableGeolocation) {
        try {
          const response = await fetch('https://ipapi.co/json/');
          const geoData = await response.json();
          data.country = geoData.country_name;
          data.city = geoData.city;
          data.ip = geoData.ip;
        } catch (error) {
          console.log('Geolocation not available');
        }
      }

      setVisitorData(data);

      // Send data to analytics endpoint
      try {
        await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.error('Failed to send analytics data:', error);
      }
    };

    // Track initial page view
    if (trackPageViews) {
      collectVisitorData();
    }

    // Track page changes
    if (trackPageViews) {
      const handleRouteChange = () => {
        setTimeout(collectVisitorData, 100);
      };

      // Listen for route changes (Next.js)
      window.addEventListener('popstate', handleRouteChange);
      
      // For Next.js router changes
      if (typeof window !== 'undefined') {
        const originalPushState = history.pushState;
        history.pushState = function(...args) {
          originalPushState.apply(history, args);
          handleRouteChange();
        };
      }

      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, [sessionId, apiEndpoint, enableGeolocation, trackPageViews]);

  // Track user behavior
  useEffect(() => {
    if (!trackUserBehavior || typeof window === 'undefined') return;

    let sessionStartTime = Date.now();
    let lastActivityTime = Date.now();
    let isActive = true;

    const updateActivity = () => {
      lastActivityTime = Date.now();
      if (!isActive) {
        isActive = true;
        // Send session resume event
        sendBehaviorEvent('session_resume', { sessionId });
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isActive = false;
        // Send session pause event
        sendBehaviorEvent('session_pause', { 
          sessionId,
          sessionDuration: Date.now() - sessionStartTime 
        });
      } else {
        updateActivity();
      }
    };

    const sendBehaviorEvent = async (event: string, data: any) => {
      try {
        await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...data,
            event,
            timestamp: Date.now(),
            page: window.location.pathname,
          }),
        });
      } catch (error) {
        console.error('Failed to send behavior data:', error);
      }
    };

    // Track user interactions
    const events = ['click', 'scroll', 'mousemove', 'keypress'];
    events.forEach(event => {
      window.addEventListener(event, updateActivity, { passive: true });
    });

    // Track visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Track session end
    const handleBeforeUnload = () => {
      sendBehaviorEvent('session_end', {
        sessionId,
        sessionDuration: Date.now() - sessionStartTime,
        lastActivity: lastActivityTime - sessionStartTime
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, updateActivity);
      });
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [trackUserBehavior, apiEndpoint]);

  // This component doesn't render anything visible
  return null;
} 