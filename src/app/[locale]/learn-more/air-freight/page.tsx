import AccordionLearnMore from "@/components/accordion-learn-more"

export default function ExampleUsage() {
    const airFreightData = {
        title: "Air Freight",
        description: "Fast and efficient air transportation solutions",
        subcategories: [
            {
                subcategory: "Express Air Freight",
                description: "Rapid delivery for time-sensitive shipments"
            },
            {
                subcategory: "Standard Air Freight",
                description: "Cost-effective option for less urgent air shipments"
            },
            {
                subcategory: "Charter Services",
                description: "Dedicated aircraft for special cargo needs"
            },
            {
                subcategory: "Perishable Goods",
                description: "Specialized handling for temperature-sensitive items"
            }
        ],
        link: "/air-freight-forms"
    }

    return (
        <div className="p-20">
            <AccordionLearnMore {...airFreightData} />
        </div>
    )
}