import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  FileText, 
  Edit, 
  Plus, 
  Trash2, 
  Eye, 
  Settings,
  Image,
  Palette,
  Globe,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createClient } from "@/utils/supabase/server";

export default async function ContentManagementPage() {
  const supabase = await createClient();

  // Fetch real content data from Supabase
  const [
    { data: pages },
    { data: contentBlocks },
    { data: mediaFiles },
    { data: settings }
  ] = await Promise.all([
    supabase.from('pages').select('*').order('updated_at', { ascending: false }),
    supabase.from('content_blocks').select('*').order('updated_at', { ascending: false }),
    supabase.from('media_files').select('*').order('created_at', { ascending: false }),
    supabase.from('site_settings').select('*')
  ]);

  // Transform data for display
  const pagesData = pages?.map(page => ({
    id: page.id,
    title: page.title || 'Untitled Page',
    slug: page.slug || '/',
    status: page.status || 'draft',
    lastModified: page.updated_at || page.created_at,
    type: 'page'
  })) || [];

  const contentBlocksData = contentBlocks?.map(block => ({
    id: block.id,
    name: block.name || 'Untitled Block',
    type: block.type || 'content',
    location: block.location || 'Global',
    status: block.status || 'active'
  })) || [];

  const mediaFilesData = mediaFiles?.map(file => ({
    id: file.id,
    name: file.name || 'Untitled File',
    type: file.type || 'image',
    size: file.size || 0,
    url: file.url || '#',
    uploadedAt: file.created_at
  })) || [];

  const settingsData = settings?.map(setting => ({
    id: setting.id,
    name: setting.name || 'Setting',
    value: setting.value || '',
    type: setting.type || 'text',
    category: setting.category || 'general'
  })) || [];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge variant="default">Published</Badge>;
      case 'draft':
        return <Badge variant="secondary">Draft</Badge>;
      case 'active':
        return <Badge variant="default">Active</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Content Management</h2>
          <p className="text-gray-600 mt-2">
            Manage website content, pages, and design settings
          </p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Content</span>
        </Button>
      </div>

      <Tabs defaultValue="pages" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="content">Content Blocks</TabsTrigger>
          <TabsTrigger value="design">Design Settings</TabsTrigger>
          <TabsTrigger value="media">Media Library</TabsTrigger>
        </TabsList>

        {/* Pages Tab */}
        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Website Pages</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Slug</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Modified</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pagesData.length > 0 ? (
                    pagesData.map((page) => (
                      <TableRow key={page.id}>
                        <TableCell className="font-medium">{page.title}</TableCell>
                        <TableCell>{page.slug}</TableCell>
                        <TableCell>{getStatusBadge(page.status)}</TableCell>
                        <TableCell>{formatDate(page.lastModified)}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <Edit className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                        No pages found. Create your first page to get started.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Blocks Tab */}
        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Content Blocks</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contentBlocksData.length > 0 ? (
                    contentBlocksData.map((block) => (
                      <TableRow key={block.id}>
                        <TableCell className="font-medium">{block.name}</TableCell>
                        <TableCell>{block.type}</TableCell>
                        <TableCell>{block.location}</TableCell>
                        <TableCell>{getStatusBadge(block.status)}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <Edit className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                        No content blocks found. Create your first content block to get started.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Design Settings Tab */}
        <TabsContent value="design" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {settingsData.length > 0 ? (
              settingsData.map((setting) => (
                <Card key={setting.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Palette className="h-5 w-5" />
                      <span>{setting.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{setting.name}</span>
                        <span className="text-sm text-gray-500">{setting.value}</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Edit className="h-4 w-4 mr-2" />
                        <span>Edit</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-8 text-gray-500">
                No design settings found. Configure your site settings to get started.
              </div>
            )}
          </div>

          {/* Quick Design Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Design Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>Change Logo</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Palette className="h-4 w-4" />
                  <span>Color Scheme</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                  <span>Layout Options</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Media Library Tab */}
        <TabsContent value="media" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Image className="h-5 w-5" />
                <span>Media Library</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {mediaFilesData.length > 0 ? (
                  mediaFilesData.map((file) => (
                    <div key={file.id} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Image className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-xs text-gray-600 truncate">{file.name}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8 text-gray-500">
                    No media files uploaded yet. Upload your first file to get started.
                  </div>
                )}
              </div>
              <div className="mt-4">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Upload Media</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Content Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add New Page</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Edit className="h-4 w-4" />
              <span>Edit Homepage</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Update Contact Info</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Manage Services</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 