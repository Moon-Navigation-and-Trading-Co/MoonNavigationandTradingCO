import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Plane, 
  Ship, 
  Container, 
  Truck, 
  Globe, 
  UserCheck, 
  Wrench, 
  Settings, 
  Anchor, 
  Package,
  Route,
  Zap,
  Building2,
  FileText
} from 'lucide-react'

const forms = [
  {
    title: 'Air Freight Forms',
    description: 'Air cargo and freight services forms',
    href: '/air-freight-forms',
    icon: Plane,
    category: 'Freight Services'
  },
  {
    title: 'Buy/Rent Container Forms',
    description: 'Container purchase and rental forms',
    href: '/buy-rent-container-forms',
    icon: Container,
    category: 'Container Services'
  },
  {
    title: 'Buy/Rent Vessels Forms',
    description: 'Vessel purchase and rental forms',
    href: '/buy-rent-vessels-forms',
    icon: Ship,
    category: 'Vessel Services'
  },
  {
    title: 'Container Services Forms',
    description: 'Container handling and services forms',
    href: '/container-services-forms',
    icon: Package,
    category: 'Container Services'
  },
  {
    title: 'Inland Services Forms',
    description: 'Inland transportation and logistics forms',
    href: '/inland-services-forms',
    icon: Truck,
    category: 'Inland Services'
  },
  {
    title: 'International Trading Forms',
    description: 'International trade and commerce forms',
    href: '/international-trading-forms',
    icon: Globe,
    category: 'Trading Services'
  },
  {
    title: 'Investor Form',
    description: 'Investment and partnership forms',
    href: '/investor-form',
    icon: UserCheck,
    category: 'Investment'
  },
  {
    title: 'Ocean Freight Forms',
    description: 'Ocean shipping and freight forms',
    href: '/ocean-freight-forms',
    icon: Ship,
    category: 'Freight Services'
  },
  {
    title: 'Out Gauge Forms',
    description: 'Oversized and out-of-gauge cargo forms',
    href: '/out-gauge-forms',
    icon: Package,
    category: 'Special Cargo'
  },
  {
    title: 'Ship Agency Forms',
    description: 'Ship agency and port services forms',
    href: '/ship-agency-forms',
    icon: Anchor,
    category: 'Ship Services'
  },
  {
    title: 'Ship Maintenance Forms',
    description: 'Vessel maintenance and repair forms',
    href: '/ship-maintenance-forms',
    icon: Wrench,
    category: 'Ship Services'
  },
  {
    title: 'Ship Management Forms',
    description: 'Ship management and operations forms',
    href: '/ship-management-forms',
    icon: Settings,
    category: 'Ship Services'
  },
  {
    title: 'Special Services Forms',
    description: 'Specialized cargo and services forms',
    href: '/special-services-forms',
    icon: Zap,
    category: 'Special Services'
  },
  {
    title: 'Suez Canal Form',
    description: 'Suez Canal transit and services forms',
    href: '/suez-canal-form',
    icon: Route,
    category: 'Canal Services'
  }
]

// Group forms by category
const groupedForms = forms.reduce((acc, form) => {
  if (!acc[form.category]) {
    acc[form.category] = []
  }
  acc[form.category].push(form)
  return acc
}, {} as Record<string, typeof forms>)

export default function FormsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">All Forms</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Access all our service forms organized by category. Select the form you need to get started with your request.
        </p>
      </div>

      <div className="space-y-12">
        {Object.entries(groupedForms).map(([category, categoryForms]) => (
          <div key={category} className="space-y-6">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">{category}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryForms.map((form) => {
                const IconComponent = form.icon
                return (
                  <Card key={form.href} className="hover:shadow-lg transition-shadow duration-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{form.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="mb-4">
                        {form.description}
                      </CardDescription>
                      <Link href={form.href}>
                        <Button className="w-full">
                          <FileText className="h-4 w-4 mr-2" />
                          Open Form
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-muted/50 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
          <p className="text-muted-foreground mb-4">
            Can't find the form you're looking for? Contact our support team for assistance.
          </p>
          <Link href="/contact">
            <Button variant="outline">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
