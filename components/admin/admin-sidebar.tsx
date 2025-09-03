"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  FileText,
  Plane,
  Ship,
  Package,
  Truck,
  Mail,
  BarChart,
  Settings,
  Edit,
  FolderTree
} from "lucide-react";

interface AdminSidebarProps {
  userRole: string;
}

const navigationItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Website Editor",
    href: "/admin/content/website-editor",
    icon: Edit,
  },
  {
    name: "Website Structure",
    href: "/admin/content/structure",
    icon: FolderTree,
  },
  {
    name: "Content Management",
    href: "/admin/content",
    icon: FileText,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    name: "Form Submissions",
    href: "/admin/submissions",
    icon: FileText,
  },
  {
    name: "Air Freight",
    href: "/admin/air-freight",
    icon: Plane,
  },
  {
    name: "Ocean Freight",
    href: "/admin/ocean-freight",
    icon: Ship,
  },
  {
    name: "Container Services",
    href: "/admin/container-services",
    icon: Package,
  },
  {
    name: "Inland Services",
    href: "/admin/inland-services",
    icon: Truck,
  },
  {
    name: "Contact Requests",
    href: "/admin/contact-requests",
    icon: Mail,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar({ userRole }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isActive && "bg-blue-600 text-white hover:bg-blue-700"
                )}
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.name}
              </Button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
} 