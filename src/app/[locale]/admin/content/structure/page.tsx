"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  FolderTree,
  FileText,
  Folder,
  Plus,
  Trash2,
  Edit,
  Move,
  Copy,
  Eye,
  Settings,
  Globe,
  Navigation,
  Layout,
  Palette,
  ChevronRight,
  ChevronDown
} from "lucide-react";

export default function WebsiteStructurePage() {
  const [websiteStructure, setWebsiteStructure] = useState({
    pages: [
      {
        id: "home",
        name: "Home",
        path: "/",
        type: "page",
        status: "published",
        children: [
          { id: "hero", name: "Hero Section", type: "section" },
          { id: "services", name: "Services Overview", type: "section" },
          { id: "about", name: "About Preview", type: "section" },
          { id: "contact", name: "Contact CTA", type: "section" }
        ]
      },
      {
        id: "about",
        name: "About Us",
        path: "/about",
        type: "page",
        status: "published",
        children: [
          { id: "story", name: "Our Story", type: "section" },
          { id: "team", name: "Our Team", type: "section" },
          { id: "values", name: "Our Values", type: "section" }
        ]
      },
      {
        id: "services",
        name: "Services",
        path: "/services",
        type: "page",
        status: "published",
        children: [
          { id: "air-freight", name: "Air Freight", type: "section" },
          { id: "ocean-freight", name: "Ocean Freight", type: "section" },
          { id: "container", name: "Container Services", type: "section" },
          { id: "inland", name: "Inland Services", type: "section" }
        ]
      },
      {
        id: "contact",
        name: "Contact",
        path: "/contact",
        type: "page",
        status: "published",
        children: [
          { id: "form", name: "Contact Form", type: "section" },
          { id: "info", name: "Contact Information", type: "section" },
          { id: "map", name: "Location Map", type: "section" }
        ]
      }
    ],
    components: [
      {
        id: "header",
        name: "Header",
        type: "component",
        status: "active",
        children: [
          { id: "logo", name: "Logo", type: "element" },
          { id: "nav", name: "Navigation", type: "element" },
          { id: "cta", name: "Call to Action", type: "element" }
        ]
      },
      {
        id: "footer",
        name: "Footer",
        type: "component",
        status: "active",
        children: [
          { id: "company", name: "Company Info", type: "element" },
          { id: "links", name: "Quick Links", type: "element" },
          { id: "social", name: "Social Media", type: "element" }
        ]
      }
    ],
    templates: [
      {
        id: "service-page",
        name: "Service Page Template",
        type: "template",
        status: "active"
      },
      {
        id: "contact-page",
        name: "Contact Page Template",
        type: "template",
        status: "active"
      }
    ]
  });

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      'published': 'default',
      'draft': 'secondary',
      'active': 'default',
      'inactive': 'destructive'
    };
    return variants[status] || 'outline';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page': return <FileText className="h-4 w-4" />;
      case 'section': return <Layout className="h-4 w-4" />;
      case 'component': return <Globe className="h-4 w-4" />;
      case 'element': return <Navigation className="h-4 w-4" />;
      case 'template': return <Folder className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const renderStructureItem = (item: any, level: number = 0) => {
    const isExpanded = expandedItems.has(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className="space-y-1">
        <div 
          className={cn(
            "flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer",
            selectedItem === item.id && "bg-blue-50 border border-blue-200"
          )}
          style={{ paddingLeft: `${level * 20 + 12}px` }}
          onClick={() => setSelectedItem(item.id)}
        >
          <div className="flex items-center space-x-2">
            {hasChildren && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpanded(item.id);
                }}
                className="p-1 hover:bg-gray-200 rounded"
              >
                {isExpanded ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </button>
            )}
            {getTypeIcon(item.type)}
            <span className="font-medium">{item.name}</span>
            <Badge variant="outline" className="text-xs">
              {item.type}
            </Badge>
            {item.status && (
              <Badge variant={getStatusBadge(item.status)} className="text-xs">
                {item.status}
              </Badge>
            )}
          </div>
          <div className="flex space-x-1">
            <Button variant="ghost">
              <Eye className="h-3 w-3" />
            </Button>
            <Button variant="ghost">
              <Edit className="h-3 w-3" />
            </Button>
            <Button variant="ghost">
              <Copy className="h-3 w-3" />
            </Button>
            <Button variant="ghost">
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        {hasChildren && isExpanded && (
          <div className="ml-4">
            {item.children.map((child: any) => renderStructureItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Website Structure</h2>
          <p className="text-gray-600 mt-2">
            Manage your entire website architecture, pages, and components
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add New Page
          </Button>
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Component
          </Button>
          <Button>
            <Settings className="h-4 w-4 mr-2" />
            Structure Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Website Structure */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FolderTree className="h-5 w-5" />
                <span>Website Structure</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Pages */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Folder className="h-4 w-4" />
                    <span className="font-semibold">Pages</span>
                    <Badge variant="outline">{websiteStructure.pages.length}</Badge>
                  </div>
                  <div className="space-y-1">
                    {websiteStructure.pages.map(page => renderStructureItem(page))}
                  </div>
                </div>

                {/* Components */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Globe className="h-4 w-4" />
                    <span className="font-semibold">Components</span>
                    <Badge variant="outline">{websiteStructure.components.length}</Badge>
                  </div>
                  <div className="space-y-1">
                    {websiteStructure.components.map(component => renderStructureItem(component))}
                  </div>
                </div>

                {/* Templates */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Folder className="h-4 w-4" />
                    <span className="font-semibold">Templates</span>
                    <Badge variant="outline">{websiteStructure.templates.length}</Badge>
                  </div>
                  <div className="space-y-1">
                    {websiteStructure.templates.map(template => renderStructureItem(template))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Properties Panel */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Properties</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedItem ? (
                <div className="space-y-4">
                  <div>
                    <Label>Name</Label>
                    <Input placeholder="Item name" />
                  </div>
                  <div>
                    <Label>Type</Label>
                    <Input placeholder="Item type" disabled />
                  </div>
                  <div>
                    <Label>Status</Label>
                    <select className="w-full p-2 border rounded">
                      <option>Published</option>
                      <option>Draft</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div>
                    <Label>Path</Label>
                    <Input placeholder="/path" />
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1">Save</Button>
                    <Button variant="outline" className="flex-1">Cancel</Button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Select an item to edit its properties</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Page
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Section
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Copy className="h-4 w-4 mr-2" />
                  Duplicate Page
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Move className="h-4 w-4 mr-2" />
                  Move Item
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Page Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Total Pages</p>
                <p className="text-2xl font-bold">{websiteStructure.pages.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Components</p>
                <p className="text-2xl font-bold">{websiteStructure.components.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Folder className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Templates</p>
                <p className="text-2xl font-bold">{websiteStructure.templates.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Layout className="h-5 w-5 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">Sections</p>
                <p className="text-2xl font-bold">
                  {websiteStructure.pages.reduce((acc, page) => acc + (page.children?.length || 0), 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Helper function for className concatenation
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
} 