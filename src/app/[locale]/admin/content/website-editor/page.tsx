"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Save, 
  Eye, 
  ArrowLeft, 
  Image, 
  Link, 
  Globe,
  FileText,
  Settings,
  Palette,
  Layout,
  Type,
  Image as ImageIcon,
  Navigation,
  Mail,
  Phone,
  MapPin,
  Plus,
  Trash2,
  Edit,
  Copy,
  Move
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WebsiteEditorPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("pages");

  // Mock website data
  const [websiteData, setWebsiteData] = useState({
    pages: {
      home: {
        title: "Moon Navigation and Trading Co.",
        sections: [
          {
            id: "hero",
            type: "hero",
            title: "Your Trusted Partner in Global Shipping",
            subtitle: "Comprehensive freight services, container management, and international trading solutions",
            description: "We provide end-to-end logistics solutions for businesses worldwide, ensuring your cargo reaches its destination safely and on time.",
            buttonText: "Get Started",
            buttonLink: "/contact",
            image: "/hero-image.jpg"
          },
          {
            id: "services",
            type: "services",
            title: "Our Services",
            subtitle: "Comprehensive shipping and logistics solutions",
            services: [
              {
                title: "Air Freight",
                description: "Fast and reliable air freight services worldwide",
                icon: "✈️"
              },
              {
                title: "Ocean Freight",
                description: "Cost-effective ocean freight solutions",
                icon: "🚢"
              },
              {
                title: "Container Services",
                description: "Full container load and less than container load",
                icon: "📦"
              }
            ]
          }
        ]
      },
      about: {
        title: "About Us",
        sections: [
          {
            id: "company-info",
            type: "content",
            title: "Our Story",
            content: "Founded with a vision to simplify global trade, Moon Navigation and Trading Co. has been at the forefront of logistics innovation."
          }
        ]
      }
    },
    global: {
      header: {
        logo: "/logo.png",
        navigation: [
          { label: "Home", link: "/" },
          { label: "About", link: "/about" },
          { label: "Services", link: "/services" },
          { label: "Contact", link: "/contact" }
        ]
      },
      footer: {
        companyName: "Moon Navigation and Trading Co.",
        description: "Your trusted partner in global shipping and logistics",
        address: "123 Business Street, City, Country",
        phone: "+1 234 567 8900",
        email: "info@moonnavigation.com"
      },
      design: {
        colors: {
          primary: "#2563eb",
          secondary: "#64748b",
          background: "#ffffff",
          text: "#1f2937"
        },
        typography: {
          headingFont: "Inter",
          bodyFont: "Inter",
          headingSize: "2rem",
          bodySize: "1rem"
        }
      }
    }
  });

  const [editingSection, setEditingSection] = useState<string | null>(null);

  const handleSave = () => {
    console.log("Saving website data:", websiteData);
    alert("Website changes saved successfully!");
  };

  const handlePreview = () => {
    window.open("/", "_blank");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            onClick={() => router.back()}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Website Editor</h2>
            <p className="text-gray-600 mt-1">Edit your entire website content and design</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={handlePreview}>
            <Eye className="h-4 w-4 mr-2" />
            Preview Website
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save All Changes
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="global">Global Settings</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="preview">Live Preview</TabsTrigger>
        </TabsList>

        {/* Pages Tab */}
        <TabsContent value="pages" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Page Navigation */}
            <Card>
              <CardHeader>
                <CardTitle>Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.keys(websiteData.pages).map((pageId) => (
                    <Button
                      key={pageId}
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      {websiteData.pages[pageId as keyof typeof websiteData.pages].title}
                    </Button>
                  ))}
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Page
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Page Content */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Home Page</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {websiteData.pages.home.sections.map((section) => (
                      <div key={section.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{section.type}</Badge>
                            <h3 className="font-medium">{section.title}</h3>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              onClick={() => setEditingSection(editingSection === section.id ? null : section.id)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline">
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {editingSection === section.id ? (
                          <div className="space-y-4">
                            <div>
                              <Label>Section Title</Label>
                              <Input
                                value={section.title}
                                onChange={(e) => {
                                  const newData = { ...websiteData };
                                  newData.pages.home.sections.find(s => s.id === section.id)!.title = e.target.value;
                                  setWebsiteData(newData);
                                }}
                              />
                            </div>
                            {section.subtitle && (
                              <div>
                                <Label>Subtitle</Label>
                                <Input
                                  value={section.subtitle}
                                  onChange={(e) => {
                                    const newData = { ...websiteData };
                                    newData.pages.home.sections.find(s => s.id === section.id)!.subtitle = e.target.value;
                                    setWebsiteData(newData);
                                  }}
                                />
                              </div>
                            )}
                            {section.description && (
                              <div>
                                <Label>Description</Label>
                                <Textarea
                                  value={section.description}
                                  onChange={(e) => {
                                    const newData = { ...websiteData };
                                    newData.pages.home.sections.find(s => s.id === section.id)!.description = e.target.value;
                                    setWebsiteData(newData);
                                  }}
                                  rows={3}
                                />
                              </div>
                            )}
                            <div className="flex space-x-2">
                              <Button onClick={() => setEditingSection(null)}>
                                Save Section
                              </Button>
                              <Button variant="outline" onClick={() => setEditingSection(null)}>
                                Cancel
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="text-sm text-gray-600">
                            {section.description || "Click edit to modify this section"}
                          </div>
                        )}
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Section
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Global Settings Tab */}
        <TabsContent value="global" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Header Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Navigation className="h-5 w-5" />
                  <span>Header Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Logo URL</Label>
                  <Input
                    value={websiteData.global.header.logo}
                    onChange={(e) => {
                      const newData = { ...websiteData };
                      newData.global.header.logo = e.target.value;
                      setWebsiteData(newData);
                    }}
                  />
                </div>
                <div>
                  <Label>Navigation Menu</Label>
                  {websiteData.global.header.navigation.map((item, index) => (
                    <div key={index} className="flex space-x-2 mt-2">
                      <Input
                        placeholder="Label"
                        value={item.label}
                        onChange={(e) => {
                          const newData = { ...websiteData };
                          newData.global.header.navigation[index].label = e.target.value;
                          setWebsiteData(newData);
                        }}
                      />
                      <Input
                        placeholder="Link"
                        value={item.link}
                        onChange={(e) => {
                          const newData = { ...websiteData };
                          newData.global.header.navigation[index].link = e.target.value;
                          setWebsiteData(newData);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Footer Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Footer Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Company Name</Label>
                  <Input
                    value={websiteData.global.footer.companyName}
                    onChange={(e) => {
                      const newData = { ...websiteData };
                      newData.global.footer.companyName = e.target.value;
                      setWebsiteData(newData);
                    }}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={websiteData.global.footer.description}
                    onChange={(e) => {
                      const newData = { ...websiteData };
                      newData.global.footer.description = e.target.value;
                      setWebsiteData(newData);
                    }}
                    rows={3}
                  />
                </div>
                <div>
                  <Label>Contact Information</Label>
                  <div className="space-y-2">
                    <Input
                      placeholder="Address"
                      value={websiteData.global.footer.address}
                      onChange={(e) => {
                        const newData = { ...websiteData };
                        newData.global.footer.address = e.target.value;
                        setWebsiteData(newData);
                      }}
                    />
                    <Input
                      placeholder="Phone"
                      value={websiteData.global.footer.phone}
                      onChange={(e) => {
                        const newData = { ...websiteData };
                        newData.global.footer.phone = e.target.value;
                        setWebsiteData(newData);
                      }}
                    />
                    <Input
                      placeholder="Email"
                      value={websiteData.global.footer.email}
                      onChange={(e) => {
                        const newData = { ...websiteData };
                        newData.global.footer.email = e.target.value;
                        setWebsiteData(newData);
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Design Tab */}
        <TabsContent value="design" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Colors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="h-5 w-5" />
                  <span>Colors</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(websiteData.global.design.colors).map(([key, value]) => (
                  <div key={key}>
                    <Label className="capitalize">{key} Color</Label>
                    <div className="flex space-x-2 mt-1">
                      <Input
                        value={value}
                        onChange={(e) => {
                          const newData = { ...websiteData };
                          newData.global.design.colors[key as keyof typeof websiteData.global.design.colors] = e.target.value;
                          setWebsiteData(newData);
                        }}
                      />
                      <div 
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: value }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Typography */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Type className="h-5 w-5" />
                  <span>Typography</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(websiteData.global.design.typography).map(([key, value]) => (
                  <div key={key}>
                    <Label className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</Label>
                    <Input
                      value={value}
                      onChange={(e) => {
                        const newData = { ...websiteData };
                        newData.global.design.typography[key as keyof typeof websiteData.global.design.typography] = e.target.value;
                        setWebsiteData(newData);
                      }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Layout */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Layout className="h-5 w-5" />
                  <span>Layout</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Container Width</Label>
                  <Input placeholder="1200px" />
                </div>
                <div>
                  <Label>Spacing</Label>
                  <Input placeholder="1rem" />
                </div>
                <div>
                  <Label>Margins</Label>
                  <Input placeholder="2rem" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Live Preview Tab */}
        <TabsContent value="preview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Website Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-6 bg-white">
                <div className="text-center space-y-4">
                  <h1 className="text-3xl font-bold" style={{ color: websiteData.global.design.colors.text }}>
                    {websiteData.pages.home.title}
                  </h1>
                  <p className="text-lg" style={{ color: websiteData.global.design.colors.secondary }}>
                    {websiteData.pages.home.sections[0].subtitle}
                  </p>
                  <p className="max-w-md mx-auto" style={{ color: websiteData.global.design.colors.text }}>
                    {websiteData.pages.home.sections[0].description}
                  </p>
                  <Button style={{ backgroundColor: websiteData.global.design.colors.primary }}>
                    {websiteData.pages.home.sections[0].buttonText}
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" onClick={handlePreview}>
                  <Eye className="h-4 w-4 mr-2" />
                  View Full Website
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 