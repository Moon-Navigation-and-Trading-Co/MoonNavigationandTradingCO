import { Truck, Globe, Warehouse, Shield, Route, Box, Map, Users, TrendingUp } from "lucide-react"

const services = [
    { icon: Truck, label: "Inland Freight" },
    { icon: Warehouse, label: "Ocean Freight" },
    { icon: Shield, label: "Air Freight" },
    { icon: Route, label: "Container Management" },
    { icon: Box, label: "Ship Agency and Management" },
    { icon: Map, label: "Docking and Maintenance" },
    { icon: Globe, label: "International Trading" },
    { icon: Globe, label: "Buy/Sell Containers" },
    { icon: Globe, label: "Buy/Sell Vessels" },
]

export default function ServicesWithLogo() {
    return (
        <div className="bg-transparent p-6 md:pt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-6 text-muted-foreground">
                {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-4 w-full p-4 ">
                        <service.icon strokeWidth={1.3} className="w-8 h-8 text-primary" />
                        <span className="text-sm font-medium">{service.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}