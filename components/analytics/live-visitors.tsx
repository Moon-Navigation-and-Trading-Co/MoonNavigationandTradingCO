"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Users, Globe, Monitor, Smartphone, Tablet } from "lucide-react";

interface LiveVisitor {
  sessionId: string;
  page: string;
  country: string;
  city: string;
  deviceType: string;
  timestamp: number;
  flag: string;
}

interface LiveVisitorsData {
  current: number;
  countries: LiveVisitor[];
  pages: { page: string; visitors: number }[];
  devices: { device: string; visitors: number }[];
}

export default function LiveVisitors() {
  const [liveData, setLiveData] = useState<LiveVisitorsData>({
    current: 0,
    countries: [],
    pages: [],
    devices: []
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        const response = await fetch('/api/analytics/live');
        if (response.ok) {
          const data = await response.json();
          setLiveData(data);
        }
      } catch (error) {
        console.error('Failed to fetch live data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch initial data
    fetchLiveData();

    // Set up real-time updates every 30 seconds
    const interval = setInterval(fetchLiveData, 30000);

    return () => clearInterval(interval);
  }, []);

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType) {
      case 'desktop':
        return <Monitor className="h-4 w-4" />;
      case 'mobile':
        return <Smartphone className="h-4 w-4" />;
      case 'tablet':
        return <Tablet className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  const getCountryFlag = (country: string) => {
    const flagMap: { [key: string]: string } = {
      'United States': '🇺🇸',
      'United Kingdom': '🇬🇧',
      'Germany': '🇩🇪',
      'Canada': '🇨🇦',
      'Australia': '🇦🇺',
      'France': '🇫🇷',
      'Netherlands': '🇳🇱',
      'Italy': '🇮🇹',
      'Spain': '🇪🇸',
      'Sweden': '🇸🇪',
      'Japan': '🇯🇵',
      'China': '🇨🇳',
      'India': '🇮🇳',
      'Brazil': '🇧🇷',
      'Mexico': '🇲🇽',
      'South Korea': '🇰🇷',
      'Singapore': '🇸🇬',
      'United Arab Emirates': '🇦🇪',
      'Saudi Arabia': '🇸🇦',
      'Egypt': '🇪🇬'
    };
    return flagMap[country] || '🌍';
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-green-600" />
            <span>Live Visitors</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Loading...
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-green-600" />
          <span>Live Visitors</span>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            {liveData.current} active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Live Countries */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3 flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              Live by Country
            </h4>
            <div className="space-y-2">
              {liveData.countries.slice(0, 6).map((visitor, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getCountryFlag(visitor.country)}</span>
                    <div>
                      <span className="text-sm font-medium">{visitor.country}</span>
                      <div className="text-xs text-gray-500">{visitor.city}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getDeviceIcon(visitor.deviceType)}
                    <Badge variant="outline">1</Badge>
                  </div>
                </div>
              ))}
              {liveData.countries.length === 0 && (
                <div className="text-center text-gray-500 py-4">
                  No live visitors at the moment
                </div>
              )}
            </div>
          </div>

          {/* Live Pages */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Live by Page
            </h4>
            <div className="space-y-2">
              {liveData.pages.map((page, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm font-medium">{page.page}</span>
                  <Badge variant="outline">{page.visitors}</Badge>
                </div>
              ))}
              {liveData.pages.length === 0 && (
                <div className="text-center text-gray-500 py-4">
                  No page activity
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Device Distribution */}
        <div className="mt-6">
          <h4 className="font-medium text-gray-900 mb-3">Device Distribution</h4>
          <div className="grid grid-cols-3 gap-4">
            {liveData.devices.map((device, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded">
                <div className="flex justify-center mb-2">
                  {getDeviceIcon(device.device)}
                </div>
                <div className="text-sm font-medium">{device.device}</div>
                <div className="text-xs text-gray-500">{device.visitors} visitors</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 