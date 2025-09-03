import { createClient } from "@/utils/supabase/server";
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
import { MoreHorizontal, Search, Filter, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function SubmissionsPage() {
  const supabase = await createClient();

  // Fetch submissions from all form tables
  const [
    { data: airFreightSubmissions },
    { data: oceanFreightSubmissions },
    { data: contactRequests },
    { data: inlandServices },
    { data: bunkeringOilSupply },
    { data: buyContainerForm },
    { data: buyVesselForm },
    { data: containerInlandServices },
    { data: customsClearance },
    { data: handlingStevedoringStorage },
    { data: shipAgency },
    { data: shipMaintenance },
    { data: shipManagement },
    { data: specialServices },
    { data: suezCanalForm },
    { data: outGaugeForm },
    { data: investorForm },
    { data: oceanFreightForms }
  ] = await Promise.all([
    supabase.from('air_freight_services').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('ocean_freight_quotations').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('ContactRequests').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('local_inland_services').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('bunkering_oil_supply').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('buy_container_form').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('buy_vessel_form').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('container_inland_services').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('customs_clearance').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('handling_stevedoring_storage').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('ship_agency').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('ship_maintenance').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('ship_management').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('special_services').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('suez_canal_form').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('out_gauge_form').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('investor_form').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('ocean_freight_forms').select('*').order('created_at', { ascending: false }).limit(10)
  ]);

  const getServiceTypeBadge = (type: string): "default" | "secondary" | "outline" | "destructive" => {
    const variants: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
      'air_freight': 'default',
      'ocean_freight': 'secondary',
      'contact': 'outline',
      'inland': 'destructive',
      'bunkering_oil': 'default',
      'buy_container': 'secondary',
      'buy_vessel': 'outline',
      'container_inland': 'destructive',
      'customs_clearance': 'default',
      'handling_stevedoring': 'secondary',
      'ship_agency': 'outline',
      'ship_maintenance': 'destructive',
      'ship_management': 'default',
      'special_services': 'secondary',
      'suez_canal': 'outline',
      'out_gauge': 'destructive',
      'investor': 'default',
      'project_cargo_quotation': 'default',
      'roll_on_off_quotation': 'secondary',
      'heavy_lift_quotation': 'outline',
      'dangerous_cargo_quotation': 'destructive',
      'break_bulk_quotation': 'default',
      'ocean_freight_quotation': 'secondary'
    };
    return variants[type] || 'outline';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Form Submissions</h2>
          <p className="text-gray-600 mt-2">
            Review and manage all form submissions from customers
          </p>
        </div>
        <Button className="flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Export Data</span>
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search submissions..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Submissions Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="air-freight">Air Freight</TabsTrigger>
          <TabsTrigger value="ocean-freight">Ocean Freight</TabsTrigger>
          <TabsTrigger value="contacts">Contact</TabsTrigger>
          <TabsTrigger value="inland">Inland</TabsTrigger>
          <TabsTrigger value="other">Other Services</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service Type</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Contact Person</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Air Freight Submissions */}
                  {airFreightSubmissions?.map((submission) => (
                    <TableRow key={`air-${submission.id}`}>
                      <TableCell>
                        <Badge variant={getServiceTypeBadge('air_freight')}>
                          Air Freight
                        </Badge>
                      </TableCell>
                      <TableCell>{submission.company_name}</TableCell>
                      <TableCell>{submission.contact_person_name}</TableCell>
                      <TableCell>{submission.company_email}</TableCell>
                      <TableCell>{formatDate(submission.created_at)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Mark as Processed</DropdownMenuItem>
                            <DropdownMenuItem>Send Response</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}

                  {/* Ocean Freight Submissions */}
                  {oceanFreightSubmissions?.map((submission) => (
                    <TableRow key={`ocean-${submission.id}`}>
                      <TableCell>
                        <Badge variant={getServiceTypeBadge('ocean_freight')}>
                          Ocean Freight
                        </Badge>
                      </TableCell>
                      <TableCell>{submission.company_name}</TableCell>
                      <TableCell>{submission.contact_person}</TableCell>
                      <TableCell>{submission.email}</TableCell>
                      <TableCell>{formatDate(submission.created_at)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Mark as Processed</DropdownMenuItem>
                            <DropdownMenuItem>Send Response</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}

                  {/* Contact Requests */}
                  {contactRequests?.map((contact) => (
                    <TableRow key={`contact-${contact.id}`}>
                      <TableCell>
                        <Badge variant={getServiceTypeBadge('contact')}>
                          Contact Request
                        </Badge>
                      </TableCell>
                      <TableCell>{contact.company_name}</TableCell>
                      <TableCell>{contact.name}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{formatDate(contact.created_at)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Mark as Responded</DropdownMenuItem>
                            <DropdownMenuItem>Send Follow-up</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="air-freight">
          <Card>
            <CardHeader>
              <CardTitle>Air Freight Submissions ({airFreightSubmissions?.length || 0})</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Contact Person</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Transportation</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {airFreightSubmissions?.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell>{submission.company_name}</TableCell>
                      <TableCell>{submission.contact_person_name}</TableCell>
                      <TableCell>{submission.company_email}</TableCell>
                      <TableCell>{submission.transportation_method}</TableCell>
                      <TableCell>{formatDate(submission.created_at)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Process Request</DropdownMenuItem>
                            <DropdownMenuItem>Send Quote</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contacts">
          <Card>
            <CardHeader>
              <CardTitle>Contact Requests ({contactRequests?.length || 0})</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contactRequests?.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell>{contact.name}</TableCell>
                      <TableCell>{contact.company_name}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.number}</TableCell>
                      <TableCell className="max-w-xs truncate">{contact.message}</TableCell>
                      <TableCell>{formatDate(contact.created_at)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Full Message</DropdownMenuItem>
                            <DropdownMenuItem>Mark as Responded</DropdownMenuItem>
                            <DropdownMenuItem>Send Follow-up</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="other">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bunkering & Oil Supply */}
            <Card>
              <CardHeader>
                <CardTitle>Bunkering & Oil Supply ({bunkeringOilSupply?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bunkeringOilSupply?.slice(0, 5).map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.company_name}</TableCell>
                        <TableCell>{submission.contact_person}</TableCell>
                        <TableCell>{submission.service_type}</TableCell>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Buy Container */}
            <Card>
              <CardHeader>
                <CardTitle>Buy Container ({buyContainerForm?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Container Type</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {buyContainerForm?.slice(0, 5).map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.company_name}</TableCell>
                        <TableCell>{submission.contact_person}</TableCell>
                        <TableCell>{submission.container_type}</TableCell>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Buy Vessel */}
            <Card>
              <CardHeader>
                <CardTitle>Buy Vessel ({buyVesselForm?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Vessel Type</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {buyVesselForm?.slice(0, 5).map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.company_name}</TableCell>
                        <TableCell>{submission.contact_person}</TableCell>
                        <TableCell>{submission.vessel_type}</TableCell>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Customs Clearance */}
            <Card>
              <CardHeader>
                <CardTitle>Customs Clearance ({customsClearance?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customsClearance?.slice(0, 5).map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.company_name}</TableCell>
                        <TableCell>{submission.contact_person}</TableCell>
                        <TableCell>{submission.service_type}</TableCell>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Handling & Stevedoring */}
            <Card>
              <CardHeader>
                <CardTitle>Handling & Stevedoring ({handlingStevedoringStorage?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {handlingStevedoringStorage?.slice(0, 5).map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.company_name}</TableCell>
                        <TableCell>{submission.contact_person}</TableCell>
                        <TableCell>{submission.service_type}</TableCell>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Ship Agency */}
            <Card>
              <CardHeader>
                <CardTitle>Ship Agency ({shipAgency?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {shipAgency?.slice(0, 5).map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.company_name}</TableCell>
                        <TableCell>{submission.contact_person}</TableCell>
                        <TableCell>{submission.service_type}</TableCell>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Ship Maintenance */}
            <Card>
              <CardHeader>
                <CardTitle>Ship Maintenance ({shipMaintenance?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {shipMaintenance?.slice(0, 5).map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.company_name}</TableCell>
                        <TableCell>{submission.contact_person}</TableCell>
                        <TableCell>{submission.service_type}</TableCell>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Ship Management */}
            <Card>
              <CardHeader>
                <CardTitle>Ship Management ({shipManagement?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {shipManagement?.slice(0, 5).map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.company_name}</TableCell>
                        <TableCell>{submission.contact_person}</TableCell>
                        <TableCell>{submission.service_type}</TableCell>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Special Services */}
            <Card>
              <CardHeader>
                <CardTitle>Special Services ({specialServices?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {specialServices?.slice(0, 5).map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.company_name}</TableCell>
                        <TableCell>{submission.contact_person}</TableCell>
                        <TableCell>{submission.service_type}</TableCell>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Suez Canal */}
            <Card>
              <CardHeader>
                <CardTitle>Suez Canal ({suezCanalForm?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {suezCanalForm?.slice(0, 5).map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.company_name}</TableCell>
                        <TableCell>{submission.contact_person}</TableCell>
                        <TableCell>{submission.service_type}</TableCell>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Out Gauge */}
            <Card>
              <CardHeader>
                <CardTitle>Out Gauge ({outGaugeForm?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {outGaugeForm?.slice(0, 5).map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.company_name}</TableCell>
                        <TableCell>{submission.contact_person}</TableCell>
                        <TableCell>{submission.service_type}</TableCell>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Ocean Freight Forms */}
            <Card>
              <CardHeader>
                <CardTitle>Ocean Freight Forms ({oceanFreightForms?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Form Type</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {oceanFreightForms?.slice(0, 5).map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.company_name}</TableCell>
                        <TableCell>{submission.contact_person_name}</TableCell>
                        <TableCell>{submission.form_type || 'Ocean Freight'}</TableCell>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Investor Form */}
            <Card>
              <CardHeader>
                <CardTitle>Investor Form ({investorForm?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Investment Type</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {investorForm?.slice(0, 5).map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.name}</TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>{submission.investment_type}</TableCell>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 