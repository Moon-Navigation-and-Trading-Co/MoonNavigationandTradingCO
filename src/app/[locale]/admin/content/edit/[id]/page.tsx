"use client";

import { useState, useEffect } from "react";
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
  Bold, 
  Italic,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight
} from "lucide-react";
import { useRouter, useParams } from "next/navigation";

export default function ContentEditorPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const [content, setContent] = useState({
    title: "Home Page Hero Section",
    subtitle: "Welcome to Moon Navigation and Trading Co.",
    description: "Your trusted partner in global shipping and logistics solutions. We provide comprehensive freight services, container management, and international trading solutions.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    image: "/hero-image.jpg",
    status: "published"
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Save content logic here
    console.log("Saving content:", content);
    setIsEditing(false);
  };

  const handlePreview = () => {
    // Preview logic here
    console.log("Previewing content:", content);
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
            <h2 className="text-3xl font-bold text-gray-900">Edit Content</h2>
            <p className="text-gray-600 mt-1">Editing: {content.title} (ID: {id})</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant={content.status === 'published' ? 'default' : 'secondary'}>
            {content.status}
          </Badge>
          <Button variant="outline" onClick={handlePreview}>
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Editor */}
        <Card>
          <CardHeader>
            <CardTitle>Content Editor</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={content.title}
                onChange={(e) => setContent({ ...content, title: e.target.value })}
                placeholder="Enter page title"
              />
            </div>

            <div>
              <Label htmlFor="subtitle">Subtitle</Label>
              <Input
                id="subtitle"
                value={content.subtitle}
                onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
                placeholder="Enter subtitle"
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={content.description}
                onChange={(e) => setContent({ ...content, description: e.target.value })}
                placeholder="Enter description"
                rows={4}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="buttonText">Button Text</Label>
                <Input
                  id="buttonText"
                  value={content.buttonText}
                  onChange={(e) => setContent({ ...content, buttonText: e.target.value })}
                  placeholder="Button text"
                />
              </div>
              <div>
                <Label htmlFor="buttonLink">Button Link</Label>
                <Input
                  id="buttonLink"
                  value={content.buttonLink}
                  onChange={(e) => setContent({ ...content, buttonLink: e.target.value })}
                  placeholder="/contact"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                value={content.image}
                onChange={(e) => setContent({ ...content, image: e.target.value })}
                placeholder="/path/to/image.jpg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Live Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg p-6 bg-white">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  {content.title}
                </h1>
                <h2 className="text-xl text-gray-600">
                  {content.subtitle}
                </h2>
                <p className="text-gray-600 max-w-md mx-auto">
                  {content.description}
                </p>
                <div className="pt-4">
                  <Button>
                    {content.buttonText}
                  </Button>
                </div>
                {content.image && (
                  <div className="mt-6">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <Image className="h-12 w-12 text-gray-400" aria-label="Image preview placeholder" />
                      <span className="text-sm text-gray-500 ml-2">Image Preview</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Advanced Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label>Content Status</Label>
              <div className="flex space-x-2 mt-2">
                <Button
                  variant={content.status === 'published' ? 'default' : 'outline'}
                  onClick={() => setContent({ ...content, status: 'published' })}
                >
                  Published
                </Button>
                <Button
                  variant={content.status === 'draft' ? 'default' : 'outline'}
                  onClick={() => setContent({ ...content, status: 'draft' })}
                >
                  Draft
                </Button>
              </div>
            </div>

            <div>
              <Label>SEO Settings</Label>
              <div className="space-y-2 mt-2">
                <Input placeholder="Meta title" />
                <Textarea placeholder="Meta description" rows={2} />
              </div>
            </div>

            <div>
              <Label>Display Options</Label>
              <div className="space-y-2 mt-2">
                <Button variant="outline" className="w-full justify-start">
                  <AlignLeft className="h-4 w-4 mr-2" />
                  Left Align
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlignCenter className="h-4 w-4 mr-2" />
                  Center Align
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlignRight className="h-4 w-4 mr-2" />
                  Right Align
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button variant="outline" onClick={handlePreview}>
          <Eye className="h-4 w-4 mr-2" />
          Preview
        </Button>
        <Button onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
} 