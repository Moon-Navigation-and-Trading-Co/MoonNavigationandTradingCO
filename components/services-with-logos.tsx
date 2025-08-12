import { Truck, Globe, Warehouse, Shield, Route, Box, Map } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Warehouse, label: "Ocean Freight", href: "/ocean-freight-forms" },
  { icon: Truck, label: "Inland Freight", href: "/inland-services-forms" },
  { icon: Shield, label: "Air Freight", href: "/air-freight-forms" },
  {
    icon: Route,
    label: "Container Services",
    href: "/container-services-forms",
  },
  { icon: Box, label: "Ship Agency", href: "/ship-agency-forms" },
  {
    icon: Map,
    label: "Docking and Maintenance",
    href: "/ship-maintenance-forms",
  },
  {
    icon: Globe,
    label: "International Trading",
    href: "/international-trading-forms",
  },
  {
    icon: Globe,
    label: "Buy/Rent Containers",
    href: "/buy-rent-container-forms",
  },
  { icon: Globe, label: "Buy/Rent Vessels", href: "/buy-rent-vessels-forms" },
  { icon: Globe, label: "Special Services", href: "/learn/special" },
];

export default function ServicesWithLogo() {
  return (
    <div className="bg-transparent p-6 md:pt-0">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-6 text-muted-foreground">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="flex items-center space-x-4 w-full hover:text-primary p-4 dark:hover:text-white rounded-lg"
          >
            <service.icon strokeWidth={1.3} className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">{service.label}</span>
          </Link>
        ))}
      </div>

      <div></div>
    </div>
  );
}
