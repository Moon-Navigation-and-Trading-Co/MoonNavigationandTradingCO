import { Truck, Globe, Warehouse, Shield, Route, Box, Map, Ship, Container, Wrench, Plane, Building2, Anchor, Package, Zap, DollarSign } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Anchor, label: "Ship Agency", href: "/learn-more/ship-agency" },
  { icon: Ship, label: "Ocean Freight (Chartering)", href: "/learn-more/ocean-freight" },
  {
    icon: Container,
    label: "Container Services",
    href: "/learn-more/container",
  },
  {
    icon: Wrench,
    label: "Docking and Maintenance", 
    href: "/learn/dockingandmaintenance",
  },
  { icon: Truck, label: "Inland Freight", href: "/learn-more/inland-freight" },
  { icon: Plane, label: "Air Freight", href: "/learn-more/air-freight" },
  {
    icon: Globe,
    label: "International Trading",
    href: "/learn/international-trading",
  },
  {
    icon: Zap,
    label: "Expand your Fleet",
    href: "/learn/vessel",
  },
  { icon: DollarSign, label: "Invest", href: "/invest" },
];

export default function ServicesWithLogo() {
  return (
    <div className="bg-transparent p-6 md:pt-0">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-6 text-muted-foreground">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="flex flex-col items-center justify-center text-center space-y-3 w-full hover:text-primary p-4 dark:hover:text-white rounded-lg"
          >
            <div className="w-12 h-12 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <service.icon strokeWidth={1.5} className="w-6 h-6 md:w-5 md:h-5 text-blue-600" />
            </div>
            <span className="text-base font-medium">{service.label}</span>
          </Link>
        ))}
      </div>

      <div></div>
    </div>
  );
}
