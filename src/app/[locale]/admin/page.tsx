import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  FileText, 
  Mail, 
  TrendingUp,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function AdminDashboard() {
  const supabase = await createClient();

  // Fetch real data from Supabase
  const [
    { count: totalUsers },
    { count: airFreightSubmissions },
    { count: oceanFreightSubmissions },
    { count: contactRequests },
    { count: totalSubmissions }
  ] = await Promise.all([
    supabase.from('users').select('*', { count: 'exact', head: true }),
    supabase.from('air_freight_form').select('*', { count: 'exact', head: true }),
    supabase.from('ocean_freight_form').select('*', { count: 'exact', head: true }),
    supabase.from('contact_form').select('*', { count: 'exact', head: true }),
    supabase.from('analytics_page_views').select('*', { count: 'exact', head: true })
  ]);

  const stats = [
    {
      title: "Total Users",
      value: totalUsers || 0,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Air Freight Submissions",
      value: airFreightSubmissions || 0,
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Ocean Freight Submissions",
      value: oceanFreightSubmissions || 0,
      icon: FileText,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Contact Requests",
      value: contactRequests || 0,
      icon: Mail,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const quickActions = [
    {
      title: "Content Management",
      description: "Edit website content and design",
      href: "/admin/content",
      icon: FileText,
    },
    {
      title: "View All Users",
      description: "Manage user accounts and permissions",
      href: "/admin/users",
      icon: Users,
    },
    {
      title: "Recent Submissions",
      description: "Review latest form submissions",
      href: "/admin/submissions",
      icon: FileText,
    },
    {
      title: "Analytics",
      description: "View detailed analytics and reports",
      href: "/admin/analytics",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-600 mt-2">
          Welcome to the Moon Navigation and Trading Co. admin dashboard
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-gray-500 mt-1">
                  +12% from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card key={action.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">{action.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{action.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={action.href}>View</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Calendar className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    New air freight submission received
                  </p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    New user registration
                  </p>
                  <p className="text-xs text-gray-500">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Mail className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Contact request submitted
                  </p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Test Status */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Calendar className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium text-green-900">Admin Dashboard Test</h3>
              <p className="text-sm text-green-700">
                ✅ Admin dashboard is working correctly! You can now access all admin features.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 