"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Eye, 
  TrendingUp, 
  TrendingDown,
  Clock,
  Calendar,
  Globe,
  MapPin,
  Monitor,
  Smartphone,
  Tablet,
  BarChart3,
  Activity,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Download,
  Filter
} from "lucide-react";
import LiveVisitors from "@/components/analytics/live-visitors";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart
} from 'recharts';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d");
  const [isLoading, setIsLoading] = useState(false);

  // Real analytics data from Supabase
  const [analyticsData, setAnalyticsData] = useState({
    overview: {
      totalVisitors: 0,
      uniqueVisitors: 0,
      pageViews: 0,
      bounceRate: 0,
      avgSessionDuration: "0m 0s",
      conversionRate: 0
    },
    liveVisitors: {
      current: 0,
      trend: "0%",
      countries: [],
      pages: [],
      devices: []
    },
    dailyStats: [],
    hourlyStats: [],
    topPages: [],
    trafficSources: [],
    devices: [],
    countries: []
  });

  // Helper function to get country flags
  const getCountryFlag = useCallback((country: string) => {
    const flags: { [key: string]: string } = {
      'United States': '🇺🇸',
      'United Kingdom': '🇬🇧',
      'Germany': '🇩🇪',
      'Canada': '🇨🇦',
      'Australia': '🇦🇺',
      'France': '🇫🇷',
      'Japan': '🇯🇵',
      'Italy': '🇮🇹',
      'Spain': '🇪🇸',
      'Netherlands': '🇳🇱'
    };
    return flags[country] || '🌍';
  }, []);

  // Fetch real analytics data from API
  const fetchAnalyticsData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/en/api/analytics/track');
      if (response.ok) {
        const data = await response.json();
        
        // Transform API data to match component structure
        setAnalyticsData({
          overview: {
            totalVisitors: data.totalVisitors || 0,
            uniqueVisitors: data.uniqueVisitors || 0,
            pageViews: data.pageViews || 0,
            bounceRate: data.dailyStats?.[0]?.bounceRate || 0,
            avgSessionDuration: "2m 30s", // Default for now
            conversionRate: 1.2 // Default for now
          },
          liveVisitors: {
            current: data.totalVisitors || 0,
            trend: "+5%",
            countries: data.countries?.map((c: any) => ({
              country: c.country,
              visitors: c.visitors,
              flag: getCountryFlag(c.country)
            })) || [],
            pages: data.topPages?.map((p: any) => ({
              page: p.page,
              visitors: p.visitors
            })) || [],
            devices: data.devices?.map((d: any) => ({
              device: d.device,
              visitors: d.visitors
            })) || []
          },
          dailyStats: data.dailyStats || [],
          hourlyStats: data.hourlyStats || [],
          topPages: data.topPages || [],
          trafficSources: data.trafficSources || [],
          devices: data.devices || [],
          countries: data.countries || []
        });
      }
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [getCountryFlag]);

  // Fetch data on component mount and when timeRange changes
  useEffect(() => {
    fetchAnalyticsData();
  }, [timeRange, fetchAnalyticsData]);

  // Auto-refresh data every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchAnalyticsData();
    }, 30000);

    return () => clearInterval(interval);
  }, [fetchAnalyticsData]);

  const handleRefresh = () => {
    fetchAnalyticsData();
  };

  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
  };

  // Chart colors
  const chartColors = {
    primary: "#3b82f6",
    secondary: "#10b981",
    accent: "#f59e0b",
    danger: "#ef4444",
    purple: "#8b5cf6",
    pink: "#ec4899"
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Real-time insights into your website performance</p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={handleRefresh}
            disabled={isLoading}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Time Range Selector */}
      <div className="flex items-center gap-2">
        <Button
          variant={timeRange === "1d" ? "default" : "outline"}
          className="h-8 px-3 text-sm"
          onClick={() => handleTimeRangeChange("1d")}
        >
          1D
        </Button>
        <Button
          variant={timeRange === "7d" ? "default" : "outline"}
          className="h-8 px-3 text-sm"
          onClick={() => handleTimeRangeChange("7d")}
        >
          7D
        </Button>
        <Button
          variant={timeRange === "30d" ? "default" : "outline"}
          className="h-8 px-3 text-sm"
          onClick={() => handleTimeRangeChange("30d")}
        >
          30D
        </Button>
        <Button
          variant={timeRange === "90d" ? "default" : "outline"}
          className="h-8 px-3 text-sm"
          onClick={() => handleTimeRangeChange("90d")}
        >
          90D
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.overview.totalVisitors.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.overview.uniqueVisitors.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8%</span> from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.overview.pageViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15%</span> from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.overview.bounceRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">+2.1%</span> from last period
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Live Visitors */}
      <LiveVisitors />

      {/* Charts */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
          <TabsTrigger value="geography">Geography</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Daily Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Daily Visitor Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={analyticsData.dailyStats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="visitors" 
                      stroke={chartColors.primary} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="unique" 
                      stroke={chartColors.secondary} 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Hourly Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Hourly Visitor Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analyticsData.hourlyStats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="visitors" fill={chartColors.primary} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Traffic Sources */}
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={analyticsData.trafficSources}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ source, percentage }) => `${source}: ${percentage}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="visitors"
                    >
                      {analyticsData.trafficSources.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={Object.values(chartColors)[index % Object.keys(chartColors).length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Top Pages */}
            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analyticsData.topPages} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="page" type="category" width={80} />
                    <Tooltip />
                    <Bar dataKey="visitors" fill={chartColors.secondary} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="geography" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Countries */}
            <Card>
              <CardHeader>
                <CardTitle>Visitor Countries</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analyticsData.countries} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="country" type="category" width={80} />
                    <Tooltip />
                    <Bar dataKey="visitors" fill={chartColors.accent} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Countries Pie Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={analyticsData.countries}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ country, percentage }) => `${country}: ${percentage}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="visitors"
                    >
                      {analyticsData.countries.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={Object.values(chartColors)[index % Object.keys(chartColors).length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="devices" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Device Types */}
            <Card>
              <CardHeader>
                <CardTitle>Device Types</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={analyticsData.devices}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ device, percentage }) => `${device}: ${percentage}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="visitors"
                    >
                      {analyticsData.devices.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={Object.values(chartColors)[index % Object.keys(chartColors).length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Device Bar Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Device Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analyticsData.devices}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="device" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="visitors" fill={chartColors.purple} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 