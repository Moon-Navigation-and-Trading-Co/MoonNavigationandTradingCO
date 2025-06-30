"use client";

import React, { useState, useMemo } from "react";
import { Input } from "./ui/input";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { useTranslations } from "next-intl";

interface FAQItem {
    question: string;
    answer: string;
}

const defaultFAQs: FAQItem[] = [
    // About Us section
    {
        question: "What services does Moon Navigation and Trading Co. Offer?",
        answer: "At Moon Navigation and Trading Co., we provide freight, maritime, and logistics solutions across all Egyptian ports and the Suez transit canal. We handle ocean, air, and inland freight, including FCL, LCL, breakbulk, RoRo, oversized, and dangerous goods. As a licensed ship agent, we offer port call management, customs clearance, crew change, bunkering, and ship chandlery. Our logistics services cover ship management, docking, stevedoring, and transit spare parts delivery. We also support international trade, customs compliance, and risk management, ensuring seamless operations and global market access."
    },
    {
        question: "Where are your headquarters located?",
        answer: "We are headquartered in Egypt and operate regionally and internationally through a wide logistics and port network."
    },
    {
        question: "Can you customize services to my business needs?",
        answer: "Yes, all our logistics and shipping solutions are fully tailored to meet your operational and commercial objectives."
    },
    {
        question: "How can I request a quotation?",
        answer: "You can request a quote by filling out the online form on our website, providing details about your required services. A tailored quotation will be sent to your email promptly."
    },
    {
        question: "How long does it take to receive a quotation?",
        answer: "You will typically receive a personalized quotation shortly after submitting your request. Our system ensures a fast and accurate response."
    },
    {
        question: "Is there any cost associated with requesting a quote?",
        answer: "No. Requesting a quotation from Moon Navigation and Trading Co. is completely free."
    },
    {
        question: "What should I do if I have questions about my quotation or need further assistance?",
        answer: "You can contact our support team using the communication channels provided on our website. We are always available to answer your questions or clarify your quotation."
    },
    {
        question: "How does your company ensure quality management and customer satisfaction?",
        answer: "Our commitment to quality management revolves around efficient processes and ensuring compliance with international standards while prioritizing environmental responsibility to meet customer expectations. We position ourselves as a trusted partner, the \"unconventional partner\" and the \"genius partner\" working closely with clients to provide innovative solutions that drive long-term success and satisfaction. Our approach ensures that we exceed expectations and maintain the highest standards of service."
    },
    {
        question: "Do you operate internationally or only within Egypt?",
        answer: "While our base is in Egypt, we operate globally through strategic partnerships and a vast logistics network, enabling us to support imports, exports, and transit cargo worldwide."
    },
    {
        question: "What types of cargo can you handle?",
        answer: "We handle a wide range of cargo, including containerized freight (FCL/LCL), breakbulk, RoRo (vehicles and machinery), project and oversized cargo, temperature-sensitive goods, and dangerous goods (DG), in full compliance with international regulations."
    },
    {
        question: "Do you offer end-to-end logistics solutions?",
        answer: "Yes. From pickup to delivery, we provide full-service logistics solutions including customs clearance, documentation, warehousing, freight booking, and last-mile delivery."
    },
    {
        question: "Is my cargo insured during transit?",
        answer: "We offer optional cargo insurance to protect your goods during transit. Our team can advise you on the best insurance options based on your cargo type and route."
    },

    // Ship Management Services
    {
        question: "What is ship management and why is it important?",
        answer: "Ship management is the end-to-end supervision of vessel operations including crewing, maintenance, safety, compliance, and finances. It ensures vessels operate efficiently, remain seaworthy, and adhere to international regulations such as ISM, MARPOL, SOLAS, and STCW."
    },
    {
        question: "What types of ship management services do you provide?",
        answer: "We offer a full spectrum of services: Technical Management, Crew Management, Operational Management, Safety & Quality Management, Procurement & Supply Chain, Dry Docking & Project Management, Insurance & Claims Handling, Financial Management & Budget Control, Fuel & Provision Management, Regulatory Compliance & Certification, Customized Ship Management Solutions"
    },
    {
        question: "Do you offer full or partial ship management options?",
        answer: "Yes. We offer both full management packages and customized solutions. Owners can choose only the services they need, such as technical, crewing, or compliance support."
    },
    {
        question: "How does your crew management process work?",
        answer: "We handle the full lifecycle of crew operations: Careful recruitment and selection, Certification and STCW-compliant training, Scheduling, travel, visas, and documentation, Payroll, insurance, and welfare support"
    },
    {
        question: "What is included in your technical management service?",
        answer: "Our technical management covers: Preventive maintenance, Condition monitoring, Dry docking supervision, Spare parts logistics, Repairs and troubleshooting, Regulatory inspections and class compliance"
    },
    {
        question: "How do you ensure vessels are compliant with regulations?",
        answer: "We ensure adherence to all relevant international and local standards. This includes: ISM, MARPOL, SOLAS compliance, Coordination with flag states and class societies, Certification management and audit readiness, Environmental regulation monitoring"
    },
    {
        question: "What kind of safety and quality systems do you implement?",
        answer: "We operate a Safety Management System (SMS) based on the ISM Code. Our safety practices include: Regular drills and onboard training, Risk assessments and incident investigations, Port state control preparedness, Internal audits and inspections"
    },
    {
        question: "How do you handle emergencies or crises?",
        answer: "We have a robust Crisis & Emergency Response Management protocol that includes: 24/7 emergency communication, Fire, collision, pollution, and flooding response plans, Crew drills and training, Real-time coordination with authorities and stakeholders, Post-incident analysis and documentation"
    },
    {
        question: "How do you monitor vessel performance?",
        answer: "Through performance dashboards and analytics, we track: Fuel and energy efficiency, Voyage and KPI reports, Downtime, emissions, and operating speeds, Preventive measures based on trends"
    },
    {
        question: "Can you assist with insurance and claims?",
        answer: "Yes. We handle all aspects including: Arranging Hull & Machinery, P&I, and War Risk coverage, Incident documentation, Claims processing, Risk evaluations and certificate renewals"
    },
    {
        question: "What happens during dry docking?",
        answer: "Our dry docking management includes: Pre-docking work scope and yard selection, Budget and timeline planning, Onsite supervision and quality checks, Post-docking reporting, Retrofits and upgrade project execution"
    },
    {
        question: "How do you manage costs and financial planning?",
        answer: "We provide full financial transparency through: Monthly reporting and variance tracking, Cost control and expenditure monitoring, Budget forecasting, Audit assistance and owner consultations"
    },
    {
        question: "Why should I choose Moon Navigation and Trading Co.?",
        answer: "We offer: Complete 360° ship management solutions, Transparent, owner-focused communication, Compliance with global maritime standards, Scalable services for any fleet size, Proven risk management and proactive support, Competitive pricing with no compromise on quality"
    },

    // Docking & Maintenance Services
    {
        question: "What is docking in ship management?",
        answer: "Docking is the process of bringing a vessel into a dock or berth for inspection, repair, maintenance, or overhaul. It includes dry docking, where the vessel is lifted out of the water, and wet docking, where repairs are done afloat."
    },
    {
        question: "What is the difference between dry docking and wet docking?",
        answer: "Dry Docking: The vessel is taken out of the water for major repairs, hull cleaning, painting, structural maintenance, and regulatory inspections. Wet Docking: Repairs and servicing are performed while the vessel remains afloat, ideal for minor fixes and maintenance without interrupting operations."
    },
    {
        question: "What types of vessels do you serve?",
        answer: "We handle docking and maintenance for a wide range of vessels, including: Cargo Ships & Container Vessels, Bulk Carriers & Tankers, Offshore Support Vessels (OSVs), Fishing & Research Vessels, Passenger & Cruise Ships, Tugboats & Barges"
    },
    {
        question: "What services are included in your dry docking solutions?",
        answer: "Hull inspections and coating renewal, Steel repairs and structural modifications, Propeller and rudder maintenance, Ballast tank servicing and class survey prep, Dockyard coordination and technical supervision, Full post-docking reporting and certification support"
    },
    {
        question: "What is involved in your port docking and berthing services?",
        answer: "Advance berth booking, Tug and pilot coordination, Mooring and unmooring operations, Onshore logistical support, Port authority compliance"
    },
    {
        question: "What is included in your emergency docking services?",
        answer: "We provide immediate docking access and technical support in emergency scenarios such as: Grounding or collision, System failures or mechanical breakdowns, Salvage and refloating operations, Rapid deployment of emergency response teams"
    },
    {
        question: "What does vessel maintenance include?",
        answer: "Our vessel maintenance services cover: Preventive Maintenance (routine checks and servicing), Corrective Maintenance (quick repair of issues), Condition-Based Monitoring (using sensors and diagnostics)"
    },
    {
        question: "What are your capabilities for engine and mechanical repair?",
        answer: "Main and auxiliary engine overhauls, Pump, valve, and compressor repairs, Fuel system maintenance and calibration, Propulsion system alignment and testing"
    },
    {
        question: "How do you ensure hull and structural integrity?",
        answer: "Anti-corrosion coating and anti-fouling treatments, Steel renewal, crack detection, and ultrasonic thickness tests, Ballast and fuel tank cleaning and recoating, Deck and superstructure maintenance"
    },
    {
        question: "Do you provide support for electrical and automation systems?",
        answer: "Yes. Our services include: Generator servicing and electrical panel repairs, PLC, sensors, and automation system troubleshooting, Navigation, lighting, and alarm system maintenance, Cable testing and control system calibration"
    },
    {
        question: "How do you manage environmental compliance and waste?",
        answer: "Servicing oily water separators and bilge systems, Garbage and sludge handling, Hazardous waste disposal, MARPOL documentation and inspection readiness"
    },
    {
        question: "What fuel system services do you offer?",
        answer: "Bunkering support and supervision, Fuel line and filter cleaning, Fuel tank inspections and leak testing, Separator and pump maintenance"
    },
    {
        question: "Do you service safety and life-saving equipment?",
        answer: "Absolutely. We offer: Lifeboat and life raft inspections, Fire extinguisher servicing and recharging, Fire detection and suppression system testing, PPE checks and safety equipment certification"
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for docking and maintenance?",
        answer: "Proven expertise in marine operations and international standards, Strong relationships with global dockyards and port authorities, Personalized and scalable service offerings, Emergency readiness and round-the-clock support, Full compliance with maritime and environmental regulations"
    },

    // International Trading Services
    {
        question: "What is international trading?",
        answer: "International trading is the exchange of goods and services across national borders, enabling businesses to access global markets, diversify supply chains, and expand revenue opportunities. It plays a vital role in global economic growth."
    },
    {
        question: "What international trade services do you provide?",
        answer: "We offer comprehensive services including: Import & export management, Customs clearance & compliance, Freight services (ocean, air, inland), Trade finance & risk management, Warehousing & logistics, Consulting on market entry & trade strategies, Handling of hazardous/dangerous cargo"
    },
    {
        question: "Can you help with customs clearance?",
        answer: "Yes, our Customs Brokerage Services handle all aspects of customs processing. We ensure your shipments meet regulatory requirements, are properly documented, and clear customs efficiently---minimizing delays and penalties."
    },
    {
        question: "How do you manage international payment risks?",
        answer: "We provide a range of financial safeguards, including: Letters of Credit (LCs), Bank Guarantees, Foreign Exchange (FX) advisory, Cargo Insurance. These services protect both importers and exporters from non-payment and currency fluctuation risks."
    },
    {
        question: "Do you offer both FCL and LCL freight services?",
        answer: "Yes, our Ocean Freight services include: Full Container Load (FCL) for bulk or high-volume goods, Less-than-Container Load (LCL) for smaller shipments. We also offer air freight for time-sensitive cargo and inland/intermodal freight for efficient delivery to final destinations."
    },
    {
        question: "What trade compliance support do you offer?",
        answer: "We assist with: Import/export permits & licenses, Regulations for restricted/hazardous goods, Food safety and sanitary certifications, Duty and tax optimization, Adherence to trade laws across countries"
    },
    {
        question: "Can you help my business expand into new international markets?",
        answer: "Absolutely. Our Trade Consulting & Entry Strategies provide expert guidance on: Best trade routes, Supply chain optimization, FTAs & tariff reduction opportunities, Country-specific certifications and regulations. We tailor strategies to help you enter and thrive in new markets."
    },
    {
        question: "What kind of cargo can you handle?",
        answer: "We handle a wide range of cargo types, including: Consumer goods and machinery, Perishable goods (with cold chain solutions), Hazardous/dangerous materials, High-value or time-sensitive shipments"
    },
    {
        question: "Do you offer warehousing and storage solutions?",
        answer: "Yes. We provide secure and strategically located storage facilities to house your goods safely until they are ready for delivery, supporting both short-term and long-term needs."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for international trade?",
        answer: "Deep expertise in global trade, logistics, and compliance, Strong global network and partnerships, Tailored solutions for different industries and cargo types, Reliable risk management and financial tools, End-to-end support from documentation to final delivery"
    },

    // Inland Freight Services
    {
        question: "What is inland freight?",
        answer: "Inland freight is the transportation of goods from seaports to inland destinations or between landlocked regions using land and water-based transportation methods such as trucks, trains, and barges."
    },
    {
        question: "What types of inland freight transportation do you offer?",
        answer: "We provide a full range of inland freight options: Truck Freight (Road), Rail Freight (Train), Inland Waterway Transport (Barge), Intermodal Freight (Combining two or more methods)"
    },
    {
        question: "What cargo types can you handle?",
        answer: "We are fully equipped to transport: Containers (FCL & LCL), General Cargo, Dangerous Goods (Hazardous Materials), Breakbulk & Oversized Cargo, Bulk Commodities (e.g., coal, grain, cement)"
    },
    {
        question: "What is the advantage of intermodal freight transport?",
        answer: "Intermodal freight offers a seamless, cost-effective way to move cargo using multiple modes while keeping it in a single container. Key benefits include: Lower long-distance shipping costs, Reduced carbon emissions, Enhanced cargo security, Flexibility for a wide range of cargo"
    },
    {
        question: "What is the difference between FTL and LTL trucking services?",
        answer: "FTL (Full Truckload): A full truck is dedicated to your shipment---ideal for large or urgent deliveries. LTL (Less-than-Truckload): Your cargo is combined with others, lowering costs for smaller shipments."
    },
    {
        question: "How do you transport oversized or heavy cargo?",
        answer: "We use specialized solutions such as: Lowbed trailers, Flatbeds, Multi-axle carriers, Custom railcars. Our team handles route planning, permitting, and secure loading/unloading to ensure safe project cargo transport."
    },
    {
        question: "Are you equipped to transport dangerous goods?",
        answer: "Yes. We adhere to ADR and other international safety standards for hazardous material transport, ensuring: Certified containers and packaging, Proper labeling, Trained and certified personnel"
    },
    {
        question: "What are the benefits of rail freight over road transport?",
        answer: "More cost-effective for bulk or long-distance cargo, Higher capacity for heavy and large-volume goods, Lower emissions and environmental impact, Reliable scheduling for industrial logistics"
    },
    {
        question: "Why use inland waterway transport?",
        answer: "Inland barge transport is ideal for: Heavy or bulky items (e.g., construction materials, chemicals), Reducing road congestion and fuel use, Efficiently connecting ports with inland destinations"
    },
    {
        question: "Can you handle customs and documentation for inland freight?",
        answer: "Absolutely. Our team provides full customs and compliance support: Duty and tariff management, Cargo documentation, Regulatory compliance with Egyptian and international laws"
    },
    {
        question: "How do you ensure the safety of cargo in transit?",
        answer: "We ensure safety through: Proper handling and secured packaging, Adherence to all cargo-specific safety standards, Use of sealed units and monitoring systems for high-value or sensitive shipments"
    },
    {
        question: "Do you support last-mile delivery for inland freight?",
        answer: "Yes. We manage the entire logistics chain---from port pickup to final inland destination, even in remote or hard-to-reach areas."
    },
    {
        question: "How do you calculate inland freight rates?",
        answer: "Rates depend on several factors: Cargo weight and volume, Type of cargo (e.g., hazardous, oversized), Distance and route complexity, Mode of transport (road, rail, barge), Urgency or delivery timeline. We provide customized quotes based on your specific requirements."
    },
    {
        question: "What documents are required for inland freight transport?",
        answer: "Typical documents include: Bill of Lading (B/L), Commercial Invoice, Packing List, Customs Declaration (if crossing borders), Dangerous Goods Declaration (if applicable). Our team assists with all necessary paperwork and compliance."
    },
    {
        question: "Can I ship cargo to landlocked countries or remote areas?",
        answer: "Yes. We specialize in delivering to landlocked and remote inland locations through multimodal solutions, including road, rail, and barge connections from major ports."
    },
    {
        question: "How long does inland freight delivery take?",
        answer: "Delivery time depends on: Distance to destination, Mode of transport used, Border/customs clearance times (if international). We always aim for the fastest and most efficient route while balancing cost and reliability."
    },
    {
        question: "Do you provide insurance for inland freight shipments?",
        answer: "Yes. We offer cargo insurance options to protect against damage, loss, or theft during inland transportation. Insurance coverage can be tailored to your cargo type and value."
    },
    {
        question: "Can I schedule regular or recurring inland shipments?",
        answer: "Absolutely. We offer contract-based and recurring inland freight services for businesses that need regular deliveries, especially for supply chains or production lines."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for inland freight?",
        answer: "Extensive logistics network with access to diverse transport options, Specialization in project cargo & oversized shipments, Tailored freight solutions to meet specific route and budget needs, Strong safety and compliance culture for all cargo types, Integrated freight tracking & regulatory support"
    },

    // Air Freight
    {
        question: "What is air freight and why should I use it?",
        answer: "Air freight is the transportation of goods via aircraft, offering the fastest option for moving cargo globally. It is ideal for urgent, time-sensitive, high-value, or perishable shipments that require speed, security, and reliability."
    },
    {
        question: "What types of air freight services do you offer?",
        answer: "We offer several flexible options to meet diverse shipping needs: Express (NFO): Same-day or next flight out for urgent, high-value cargo, Standard Air Freight: 1-3 day delivery for general goods and perishables, Economy Air Freight: 4-7 days for cost-sensitive, non-urgent shipments, Charter Services: Custom scheduling for oversized or special cargo"
    },
    {
        question: "What kind of cargo can you handle via air freight?",
        answer: "We handle a broad range of air cargo including: General Cargo (electronics, machinery, retail goods), Perishables (fresh food, flowers, pharmaceuticals), Dangerous Goods (in compliance with IATA & ICAO), Oversized & Project Cargo, Time-Sensitive Shipments (critical documents, spare parts)"
    },
    {
        question: "How do you handle temperature-sensitive cargo?",
        answer: "We specialize in Cold Chain Logistics, maintaining required temperature conditions for: Pharmaceuticals and vaccines, Fresh produce, seafood, and flowers, Chemicals and hazardous goods. We ensure end-to-end temperature control to preserve cargo quality."
    },
    {
        question: "Are you certified to ship dangerous goods?",
        answer: "Yes, our certified dangerous goods specialists manage shipments in full compliance with IATA and ICAO regulations. We handle: Flammable liquids and gases, Lithium batteries, Radioactive materials, Corrosives and other hazardous substances"
    },
    {
        question: "Can you handle oversized or heavy air cargo?",
        answer: "Absolutely. We manage project and oversized cargo using specialized equipment and chartered aircraft. Our services cover: Aerospace, military, and industrial shipments, Custom cargo plans and special routing, Out-of-gauge and high-weight loads"
    },
    {
        question: "What are Sea-Air solutions and how can they benefit my business?",
        answer: "Sea-Air shipping combines ocean freight with air transport to balance speed and cost. It is ideal for: Reducing delivery time for ocean cargo, Managing budget-sensitive air freight, Improving environmental impact with optimized transit modes"
    },
    {
        question: "Do you assist with customs clearance and documentation?",
        answer: "Yes, we provide comprehensive customs support, including: Preparation of import/export documentation, Handling duties and permits, Ensuring full compliance with international regulations"
    },
    {
        question: "How do you ensure the security of shipments?",
        answer: "We maintain strict security protocols throughout the logistics chain: Sealed cargo handling, Secure airline partnerships, Trained staff for high-value and sensitive shipments"
    },
    {
        question: "What industries do you serve?",
        answer: "We offer tailored air freight solutions for multiple sectors, including: Manufacturing & Automotive, Healthcare & Pharmaceuticals, Technology & Electronics, Retail & Fashion, Aerospace & Defense"
    },
    {
        question: "How much does air freight cost?",
        answer: "Air freight costs are calculated based on: Chargeable weight (actual vs. volumetric), Distance and route, Type of cargo (e.g., dangerous goods, perishables), Service level (express vs. economy). We provide transparent, customized quotes depending on your shipment's needs."
    },
    {
        question: "How long does air freight take?",
        answer: "Typical transit times: Express/NFO: Same-day or next-day delivery, Standard Air Freight: 1-3 business days, Economy Air Freight: 4-7 business days. Exact delivery time depends on origin, destination, and customs clearance."
    },
    {
        question: "Can individuals ship personal items via air freight?",
        answer: "Yes. While we primarily handle commercial shipments, we can arrange air freight for personal items, urgent documents, and relocation cargo --- depending on customs regulations and cargo type."
    },
    {
        question: "What makes Moon Navigation & Trading Co. different?",
        answer: "24/7 support & dedicated account managers, Global network with guaranteed airline space, Custom solutions for every industry and cargo type, Transparent pricing with competitive global rates, Expert handling of specialized, sensitive, and hazardous cargo"
    },

    // Investment Opportunities
    {
        question: "What types of investment opportunities do you offer?",
        answer: "We offer six structured models: Joint Venture Partnerships, Asset-Based Investment, Project-Based Financing, Revenue-Sharing Agreements, Convertible Notes / Debt Investment, Equity Investment. Each is designed to match your preferred level of involvement, risk appetite, and return expectations."
    },
    {
        question: "What is the minimum investment amount required?",
        answer: "Minimum capital requirements vary depending on the investment type and project scale. Specific figures will be shared during our investment consultation, based on your selected model."
    },
    {
        question: "Are these investments secure?",
        answer: "Yes. Most investment opportunities are asset-backed (e.g., vessels, containers, infrastructure), offering tangible security. We also provide structured agreements, clear ROI terms, and regular reporting for full transparency."
    },
    {
        question: "Can I invest passively, without being involved in operations?",
        answer: "Absolutely. Models such as Revenue-Sharing Agreements, Project-Based Financing, and Convertible Notes are designed for passive investors who prefer minimal involvement but steady returns."
    },
    {
        question: "What returns can I expect?",
        answer: "Returns depend on the investment type, duration, and market conditions. We provide: Fixed income or profit-sharing options, Equity growth with dividends (for shareholders), Project-specific ROI timelines. All expected returns are discussed in detail before any agreement is made."
    },
    {
        question: "How long is the investment term?",
        answer: "It varies by model: Project-Based Financing: Typically 1-3 years, Convertible Notes: 2-5 years, with equity option, Equity Investment: Long-term, with capital appreciation, Asset-Based Investments: Flexible, with exit strategies"
    },
    {
        question: "Can I exit or sell my investment later?",
        answer: "Yes. We offer exit options such as resale of owned assets, equity buybacks, or transfer to other investors---depending on your chosen model and terms agreed upon."
    },
    {
        question: "Will I receive regular financial reports?",
        answer: "Yes. We provide structured, periodic reports that include: Operational performance, Financial statements, ROI tracking, Project progress (if applicable)"
    },
    {
        question: "Who manages the operations related to my investment?",
        answer: "Moon Navigation and Trading Co. handles all operations, asset management, and logistics unless you opt for a co-management or joint venture model."
    },
    {
        question: "How do I get started with investing?",
        answer: "Simply fill out the investor inquiry form. Our team will: Schedule a meeting to understand your goals, Present customized investment opportunities, Share expected returns, terms, and timelines, Guide you through documentation and onboarding"
    },
    {
        question: "Is Moon Navigation & Trading Co. licensed and legally registered?",
        answer: "Yes. We are a fully registered and licensed company operating under Egyptian and international maritime laws. All investment agreements are legally binding and structured for maximum security and transparency."
    },
    {
        question: "Can foreign or non-Egyptian investors participate?",
        answer: "Absolutely. We welcome international investors and offer tailored structures that comply with foreign investment laws, currency exchange regulations, and cross-border remittance policies."
    },
    {
        question: "What industries or sectors do your investment opportunities cover?",
        answer: "Our investments span across: Maritime Logistics & Shipping, Transportation Infrastructure, Storage & Warehousing, International Trading, Vessel Operations and Maintenance. Each project is backed by real operations with growth potential and measurable KPIs."
    },
    {
        question: "Are your investment opportunities Sharia-compliant?",
        answer: "Yes. For investors seeking Sharia-compliant structures, we offer models free from interest (riba), involving asset-backed ventures, profit-sharing, and transparent risk allocation, in line with Islamic finance principles."
    },

    // Container Purchases & Rentals
    {
        question: "What types of containers do you offer?",
        answer: "We offer a wide range of containers, including: Standard Dry Containers (20ft & 40ft), High Cube Containers, Open Top Containers, Flat Rack Containers, Tank Containers, Refrigerated Containers (Reefers), Special Purpose & Modified Containers. All units are CSC/ISO certified for safety and compliance."
    },
    {
        question: "Can I rent containers on a short-term basis?",
        answer: "Yes. We offer daily, weekly, and monthly rental agreements to meet your short-term or temporary storage needs."
    },
    {
        question: "What are the conditions of the containers you provide?",
        answer: "You can choose from various container conditions based on your budget and use: New (One-Trip) -- Like new and ideal for long-term use, Cargo-Worthy (CW) -- Certified for shipping, Wind & Watertight (WWT) -- Great for secure storage, As-Is -- Budget-friendly units for non-critical purposes"
    },
    {
        question: "Do you offer customized container solutions?",
        answer: "Yes. We provide container modifications such as: Shelving, lighting, and insulation, Branding and painting, Doors, windows, and ventilation, Electrical and flooring upgrades"
    },
    {
        question: "Do you assist with container delivery and offloading?",
        answer: "Absolutely. We manage full logistics including: Transport coordination, Quick delivery to ports, cities, or remote sites, Crane or trailer offloading (on request), Cross-border logistics (if needed)"
    },
    {
        question: "Is maintenance included with rental containers?",
        answer: "Yes, all maintenance and repair services are included throughout the rental period at no additional cost."
    },
    {
        question: "Can I trade in or sell back a container I have bought or rented?",
        answer: "Yes, we offer: Trade-in options for upgrades, Buy-back plans for used or rental return containers, Responsible recycling and disposal"
    },
    {
        question: "How quickly can I get a container after placing a request?",
        answer: "We strive for rapid response and delivery times. Once you submit your inquiry, our team provides: Availability confirmation, Quotation with pricing, Delivery timeline, Technical assistance if needed"
    },
    {
        question: "Do you support large-scale or bulk container purchases?",
        answer: "Yes. We support bulk orders for projects, industrial use, and business operations, offering competitive pricing and logistical support."
    },
    {
        question: "How do I get started with a container rental or purchase?",
        answer: "Simply fill out our online inquiry form or contact us directly. Our specialists will guide you through selection, pricing, and delivery --- with expert support at every step."
    },
    {
        question: "What is the difference between renting and buying a container?",
        answer: "Renting is ideal for short-term or flexible storage needs with lower upfront cost. Buying is a better long-term investment, especially if you plan to modify or frequently use the container. We offer both options with full logistics support."
    },
    {
        question: "Can I use your containers for shipping or just for storage?",
        answer: "Yes, depending on the condition selected: Cargo-worthy and new containers are certified for international shipping. Wind & Watertight (WWT) and As-Is units are suitable for storage or static use. Please advise us your purpose, and we will recommend the best option."
    },
    {
        question: "Do you provide container leasing for international trade routes?",
        answer: "Yes. We offer flexible leasing solutions for global logistics operators, including: Cross-border container rentals, Fleet leasing for freight forwarders or NVOCCs, Support for repositioning and returns"
    },
    {
        question: "Are your containers insured during transport or rental?",
        answer: "Insurance is optional but highly recommended. We offer: Transit insurance for delivery to your location, Rental insurance against major damages or loss (if requested). Let us know if you'd like to include coverage in your agreement."
    },

    // Vessel Purchases & Rentals
    {
        question: "What types of vessels do you offer?",
        answer: "We provide a wide range of vessels for sale and rent, including: Tankers, General Cargo Vessels, Bulk Carriers, Container Ships, Offshore Support Vessels (OSVs), Tugboats and Barges, Landing Craft & Ro-Ro Vessels, Crew Boats & Utility Boats"
    },
    {
        question: "Can I rent a vessel for a short period?",
        answer: "Yes, our rental options are highly flexible. We offer daily, monthly, and long-term charters, including: Time Charter, Voyage Charter, Bareboat Charter, Project Charter"
    },
    {
        question: "Is maintenance included with vessel rentals?",
        answer: "Yes, routine maintenance and repairs are included in most charter agreements to ensure smooth operations throughout the rental period."
    },
    {
        question: "What is the difference between buying and renting a vessel?",
        answer: "Purchase: Long-term, Higher upfront (ownership), Less flexible, Buyer's maintenance responsibility. Rental/Charter: Short- to medium-term, Lower (operating cost), Highly flexible, Included in rental/charter agreement. Our team will help you decide what is best based on your project scope and budget."
    },
    {
        question: "Are your vessels certified and compliant?",
        answer: "Yes. All vessels are: Class certified, Flag registered, Fully insured, Delivered with pre-inspection reports and regulatory compliance documents"
    },
    {
        question: "Can I customize the vessel before delivery?",
        answer: "Absolutely. We offer a range of vessel modifications to meet operational requirements, including: Deck strengthening, Cargo gear or crane installations, Communication and navigation systems, Accommodation and safety equipment upgrades"
    },
    {
        question: "Do you provide technical support after purchase or rental?",
        answer: "Yes. Our support includes: Expert consultations, On-demand technical support, Maintenance history for pre-owned vessels, Crew coordination for chartered vessels"
    },
    {
        question: "Do you support international delivery or deployment?",
        answer: "Yes. We provide global vessel delivery and deployment services, including: Voyage planning and routing, Port handling and custom clearance, Transit documentation, Crew logistics and changeovers"
    },
    {
        question: "What industries do you serve with your vessel solutions?",
        answer: "We serve a wide range of sectors, including: Offshore oil & gas operations, Marine construction and dredging, International shipping and logistics, Infrastructure and energy projects, Port development and crew operations"
    },
    {
        question: "How can I get started with purchasing or chartering a vessel?",
        answer: "Simply fill out our vessel inquiry form with your requirements. A dedicated maritime consultant will contact you to discuss: Available vessels matching your criteria, A detailed quotation, Delivery schedule and port arrangements, Any necessary technical assistance or compliance requirements"
    },
    {
        question: "How do you price your vessels for sale or charter?",
        answer: "Our pricing is determined by several factors: Vessel type, age, and condition, Duration and type of charter (bareboat, voyage, etc.), Customization or equipment requirements, Delivery location and associated logistics. We provide clear and competitive quotes with no hidden charges."
    },
    {
        question: "Can individuals or small businesses rent or buy vessels?",
        answer: "Yes. We support a wide range of clients---from corporations to independent operators and SMEs. Our services are tailored to your business scale and operational objectives."
    },
    {
        question: "Are pre-owned vessels available for purchase?",
        answer: "Yes. We offer: New vessels (made to order or ready-built), Pre-owned vessels (fully inspected, with maintenance records and class certification). We also support refurbishment and upgrades before delivery."
    },
    {
        question: "Can I generate income from a vessel I purchase?",
        answer: "Yes. You may: Lease the vessel back to us through a charter or management agreement, Operate the vessel in commercial markets with our support, Resell or upgrade it through our trade-in and buyback programs"
    },

    // Handling, Stevedoring & Storage
    {
        question: "What is the difference between handling, stevedoring, and storage?",
        answer: "Handling involves the movement of cargo during loading, unloading, and internal port transfer. Stevedoring refers specifically to the loading and discharging of cargo from vessels, requiring skilled manpower and equipment. Storage is the safekeeping of cargo in warehouses or open yards until it is ready for further movement."
    },
    {
        question: "What types of cargo do you handle?",
        answer: "We handle all cargo types --- including containerised, breakbulk, heavy lift, bulk, project cargo, Ro-Ro units, and OOG (Out of Gauge) cargo --- using both manual expertise and mechanized equipment."
    },
    {
        question: "Are your stevedoring services available for all vessel types?",
        answer: "Yes. We offer professional stevedoring for general cargo vessels, bulk carriers, Ro-Ro ships, container vessels, and project cargo ships, ensuring safe and efficient operations."
    },
    {
        question: "How do you ensure cargo safety during handling and stevedoring?",
        answer: "We follow international safety standards (IMO, ISPS), use modern lifting equipment, and employ experienced professionals. Our services include cargo securing, lashing/unlashing, and stowage planning to prevent damage or loss."
    },
    {
        question: "Do you offer bonded warehousing options?",
        answer: "Yes, bonded warehouse access is available upon request for clients needing duty-free storage for imports awaiting customs clearance or re-export."
    },
    {
        question: "What kind of storage infrastructure do you offer?",
        answer: "We provide: Covered warehouses for general cargo, Open yards for breakbulk and oversized goods, Container stacking and maintenance zones, Heavy lift handling areas. All facilities are equipped with 24/7 surveillance, fire protection, and controlled access systems."
    },
    {
        question: "Can I store cargo long-term at your facilities?",
        answer: "Absolutely. We offer both short-term and long-term storage options, based on your logistics needs and the nature of the cargo."
    },
    {
        question: "Do you provide inventory tracking or cargo management services?",
        answer: "Yes. We offer: Inventory control with regular status updates, Cargo traceability systems, Sorting, segregation, and consolidation zones, Repackaging and inspection support. We provide timely updates and full visibility on request."
    },
    {
        question: "Do you assist with customs inspections or clearance during handling?",
        answer: "Yes. Our team coordinates with customs authorities for cargo inspections, documentation checks, and compliance verifications, ensuring rapid clearance and minimal disruptions."
    },
    {
        question: "Can I track my cargo during storage and handling?",
        answer: "Our team provides regular updates on cargo status, movement, and location throughout the storage and handling process to ensure full visibility and peace of mind."
    },
    {
        question: "Are your handling and storage facilities located at major ports?",
        answer: "Yes. Our facilities are strategically located across Egypt's major seaports and inland logistics hubs, providing easy access to vessel berths, roads, and rail connections."
    },
    {
        question: "How do I request a quote for your handling or storage services?",
        answer: "Simply fill out our quick form on the website. Once submitted, our team will assess your cargo needs and send a tailored quotation with clear pricing and service specifications."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for handling, stevedoring, and storage?",
        answer: "Highly experienced workforce and certified port operators, Modern handling equipment and safety-compliant procedures, Integrated storage and inventory control systems with regular cargo status updates, Flexible solutions for complex or high-value cargo, Seamless coordination with port authorities, customs, and transport partners"
    },

    // Customs Clearance Services
    {
        question: "What is customs clearance and why is it important?",
        answer: "Customs clearance is the process of ensuring that goods comply with all regulations before entering or leaving a country. It involves documentation, inspection, classification, and payment of duties or taxes. Efficient customs clearance prevents delays, fines, and legal complications."
    },
    {
        question: "What documents are required for customs clearance?",
        answer: "Common documents include the Bill of Lading (B/L), Commercial Invoice, Packing List, Certificate of Origin, and import/export licences. Our team prepares and verifies all necessary documents on your behalf."
    },
    {
        question: "How long does the customs clearance process take?",
        answer: "Clearance time depends on the cargo type, origin/destination country, and regulatory requirements. In general, our process ensures quick clearance, often within 1-3 working days, barring any inspections or additional approvals."
    },
    {
        question: "Do you handle customs clearance for hazardous or regulated cargo?",
        answer: "Yes. We specialize in hazardous, perishable, and high-value cargo and secure special permits for goods like chemicals, pharmaceuticals, and food products, ensuring full regulatory compliance."
    },
    {
        question: "Can you help with customs duties and tax optimization?",
        answer: "Absolutely. We identify duty exemptions, apply FTAs, and assist in accurate HS code classification and customs valuation to reduce costs and ensure compliance."
    },
    {
        question: "What is bonded warehousing and how does it help?",
        answer: "Bonded warehousing allows goods to be stored without immediate payment of duties or taxes. This is ideal for re-exports or delayed distribution, helping to improve your cash flow and logistics efficiency."
    },
    {
        question: "Do you offer support for import/export licenses and restricted goods?",
        answer: "Yes, we help clients obtain required licenses and ensure that all cargo complies with import/export restrictions, including prohibited and regulated goods."
    },
    {
        question: "Do you offer 24/7 support during the clearance process?",
        answer: "Yes. Our team is available 24/7 to provide status updates and assist with any issues throughout the customs clearance process. We ensure clear and timely communication at every stage."
    },
    {
        question: "What happens if my shipment is held by customs?",
        answer: "If a shipment is held, we immediately coordinate with customs officials to resolve the issue. We'll notify you of the cause (e.g., missing documents, inspection), guide you on next steps, and expedite clearance where possible."
    },
    {
        question: "What countries or regions do you serve for customs clearance?",
        answer: "We specialize in customs clearance services within Egypt, covering all major ports, airports, and free zones. Our local expertise ensures smooth handling of both import and export shipments across the country."
    },
    {
        question: "Can you assist with temporary importation or ATA Carnets?",
        answer: "Yes. We support temporary import procedures and ATA Carnets for goods used in exhibitions, events, or project-based operations, helping avoid unnecessary duties."
    },
    {
        question: "Do you offer customs brokerage services?",
        answer: "Yes. Our licensed customs brokers act on your behalf to manage all interactions with customs authorities, ensuring correct declarations, classifications, and duty payments."
    },
    {
        question: "Can you assist with post-clearance audits or customs disputes?",
        answer: "Yes. We offer advisory support for audits, classification reviews, valuation disputes, and customs appeals. Our experts help resolve issues while ensuring long-term compliance."
    },
    {
        question: "How can I get a quote for customs clearance services?",
        answer: "Simply fill out the \"Quotation by Request\" form on our website. Once submitted, our team will review your cargo details and respond with a tailored quote via email."
    },

    // Project Cargo Services
    {
        question: "What is Project Cargo?",
        answer: "Project cargo is the transportation of oversized, heavy, high-value, or complex pieces of equipment often tied to large-scale industrial or infrastructure projects. These shipments require specialized handling, equipment, planning, and coordination due to their size, weight, or unique logistical requirements."
    },
    {
        question: "What makes project cargo different from standard cargo?",
        answer: "Key differences include: Size & Weight: Exceeds standard container dimensions and weight limits. Handling Requirements: Requires cranes, flat racks, heavy-lift vessels, etc. Logistics Complexity: Involves permits, route surveys, and coordination with authorities. Shipping Costs: Higher due to custom logistics and special equipment."
    },
    {
        question: "What types of industries benefit from your project cargo services?",
        answer: "We serve a wide range of industries, including: Energy (Oil, Gas, Renewable), Construction & Infrastructure, Mining & Heavy Machinery, Aerospace, Marine & Shipbuilding"
    },
    {
        question: "What equipment is used to transport project cargo?",
        answer: "Depending on the cargo's specifications, we use: Heavy-lift vessels, Flat racks and open-top containers, Modular and low-bed trailers, Self-propelled modular transporters (SPMTs), High-capacity cranes and hydraulic lifting platforms"
    },
    {
        question: "How do you ensure safety and compliance for complex shipments?",
        answer: "We follow strict protocols, including: Detailed pre-shipment surveys and engineering analysis, Permit acquisition and customs compliance, Secure packaging, lashing, and bracing methods, Real-time cargo monitoring and safety checks, Specialized cargo insurance coverage"
    },
    {
        question: "Can you manage multimodal transport for project cargo?",
        answer: "Yes, we offer fully integrated multimodal solutions, coordinating sea, road, rail, and air transport as needed. This allows us to optimize routes and ensure safe cargo delivery from origin to final project site."
    },
    {
        question: "What regions or destinations can you serve?",
        answer: "With a global partner network and local logistics teams, we can move project cargo to and from virtually any location worldwide, including remote and challenging project sites."
    },
    {
        question: "How early should I contact you for project cargo planning?",
        answer: "Due to the complexity of these shipments, we recommend reaching out as early as possible in your project timeline. This allows us to: Conduct feasibility and route assessments, Secure permits and approvals, Plan equipment and manpower requirements, Ensure compliance with local and international regulations"
    },
    {
        question: "Do you offer turnkey logistics services for entire projects?",
        answer: "Yes. We provide comprehensive project logistics, including: Site surveys and risk assessments, Engineering and load planning, Vessel chartering and heavy-lift handling, Customs clearance and documentation, On-site supervision and final delivery"
    },
    {
        question: "How do you handle customs clearance for project cargo?",
        answer: "We manage the full customs clearance process, including documentation, duty assessment, and coordination with local authorities. Our team ensures compliance with all import/export regulations, including oversized and restricted cargo requirements."
    },
    {
        question: "Can you assist with route surveys and feasibility studies?",
        answer: "Yes. Before any movement, we conduct detailed route surveys and feasibility studies to assess road conditions, bridge capacities, height restrictions, and escort vehicle requirements---ensuring safe and compliant transport."
    },
    {
        question: "What permits are needed for transporting oversized or heavy cargo?",
        answer: "Depending on the region and cargo, permits may include: Oversize load permits, Road closure permissions, Police or escort convoy approvals, Port and terminal access clearances. We handle the entire permit process for you."
    },
    {
        question: "Do you provide cargo insurance for project shipments?",
        answer: "Yes. We offer specialized insurance options tailored to high-value and sensitive project cargo, including coverage for loading/unloading, transit, storage, and handling risks."
    },
    {
        question: "What if the cargo needs temporary storage before delivery?",
        answer: "We provide secure warehousing and laydown yards near ports, job sites, and key transit points. Options include bonded storage, covered warehousing, and open-air laydown space with crane access."
    },
    {
        question: "Can you help with cargo packing, lashing, and securing?",
        answer: "Absolutely. We offer professional packing, lashing, and securing services using industry-approved materials and techniques. All methods comply with international maritime and transport safety standards."
    },
    {
        question: "What information should I provide for a project cargo quote?",
        answer: "To generate an accurate quote, please provide: Cargo dimensions and weight, Origin and destination details, Project timeline and required delivery date, Special handling or permits needed, Preferred transport mode(s). You can send this via our online Quotation Request Form or contact our project logistics team directly."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for Project Cargo?",
        answer: "Decades of experience in complex logistics, Dedicated project cargo specialists, Global network with strong local presence, Specialized handling and lifting equipment, Rigorous planning and risk management, Full transparency and continuous support"
    },

    // RoRo Shipping Services
    {
        question: "What is Roll-on/Roll-off (RoRo) shipping?",
        answer: "RoRo shipping is a method of transporting wheeled cargo---such as cars, trucks, buses, and machinery---by driving or towing it onto and off a vessel using built-in ramps. This eliminates the need for cranes and reduces handling time."
    },
    {
        question: "What types of cargo can be transported via RoRo?",
        answer: "We handle a broad range of rolling and wheeled cargo, including: Passenger vehicles (cars, motorcycles), Commercial vehicles (trucks, trailers, buses), Agricultural machinery, Construction equipment (excavators, cranes, bulldozers), Military vehicles, Trains and railcars, Oversized and non-standard rolling units"
    },
    {
        question: "How is cargo secured during RoRo shipping?",
        answer: "Cargo is secured using lashing straps, wheel chocks, and tie-downs. All vessels are equipped with dedicated decks and anchoring systems to ensure the safe, stable transport of vehicles throughout the voyage."
    },
    {
        question: "Why choose RoRo over container shipping?",
        answer: "RoRo shipping offers several advantages: Faster loading/unloading via drive-on ramps, Lower handling risk and reduced chance of cargo damage, More economical for large or operable vehicles, No need for disassembly, crating, or container packing"
    },
    {
        question: "Is RoRo suitable for transporting heavy or oversized equipment?",
        answer: "Yes. Our RoRo vessels accommodate oversized and heavy cargo using reinforced decks and custom ramps. We provide specialized handling for industrial, mining, and construction equipment."
    },
    {
        question: "What is the process for loading and unloading RoRo cargo?",
        answer: "1. Vehicles/machinery are driven or towed onto the ship using a ramp. 2. Cargo is positioned and secured using approved lashing systems. 3. Upon arrival, cargo is driven off efficiently at the destination port."
    },
    {
        question: "Can you handle door-to-door or port-to-port services?",
        answer: "Yes. We offer full-service logistics solutions, including: Inland transportation from origin to port, Ocean freight via RoRo vessels, Customs clearance and delivery to final destination"
    },
    {
        question: "How do you ensure compliance with customs and regulations?",
        answer: "Our team handle all documentation, permits, and inspections, and ensure that cargo complies with international customs, safety, and environmental regulations. We also assist with emissions certificates, taxes, and port formalities."
    },
    {
        question: "What regions do your RoRo services cover?",
        answer: "We provide global RoRo shipping services, with strong partnerships across major international ports. Our coverage includes intercontinental routes, ensuring timely delivery between key trade corridors in Asia, Europe, the Americas, Africa, and the Middle East."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for RoRo shipping?",
        answer: "Specialized RoRo vessels with secure cargo decks and ramps, Expert handling of vehicles, machinery, and oversized equipment, Fast, reliable turnaround with minimal port delays, Customs and documentation support, Global connectivity through trusted carrier partnerships, Tailored logistics solutions for every client"
    },
    {
        question: "How long does RoRo shipping take?",
        answer: "Transit times vary based on origin, destination, and route frequency. Typically, RoRo services offer faster port operations than containerized options. Estimated timelines will be provided at the quotation stage."
    },
    {
        question: "Can I ship non-operational or damaged vehicles via RoRo?",
        answer: "Yes, as long as the vehicle can be safely towed. We offer towing and loading assistance for non-running vehicles, along with customized handling solutions based on condition."
    },
    {
        question: "What documentation is required for RoRo shipping?",
        answer: "Essential documents include: Bill of Lading (B/L), Commercial Invoice, Vehicle Title or Registration, Import/export permits, Customs declarations. Our team prepares and processes all necessary paperwork on your behalf."
    },

    // Dangerous Cargo Transport Services
    {
        question: "What is considered dangerous cargo?",
        answer: "Dangerous cargo refers to materials that pose risks to health, safety, property, or the environment during transportation. These include: Explosives, Flammable substances, Toxic chemicals, Radioactive materials, Corrosives. These are strictly regulated under the IMDG Code (maritime), IATA DGR (air), and ADR (road)."
    },
    {
        question: "What are the classifications of dangerous goods?",
        answer: "Dangerous goods are categorized into 9 hazard classes: 1. Explosives, 2. Gases, 3. Flammable Liquids, 4. Flammable Solids and Reactive Substances, 5. Oxidizing Substances and Organic Peroxides, 6. Toxic and Infectious Substances, 7. Radioactive Materials, 8. Corrosive Substances, 9. Miscellaneous Dangerous Goods"
    },
    {
        question: "What documentation is required for transporting dangerous cargo?",
        answer: "Required documents include: Material Safety Data Sheet (MSDS), Dangerous Goods Declaration (DGD), UN identification numbers, Hazard class labels and placards, Certified packaging documentation. Moon Navigation and Trading Co. manages all paperwork to ensure full international compliance."
    },
    {
        question: "How is dangerous cargo packaged and labelled?",
        answer: "Cargo must be: Packaged in certified containers specific to the hazard class (e.g., explosion-proof drums, cryo tanks). Labels must clearly display: UN number, Hazard class label, Handling instructions. We strictly adhere to IMDG, IATA, and ADR packaging and labeling standards."
    },
    {
        question: "What safety measures do you take during transport?",
        answer: "We implement multiple layers of safety: Hazmat-trained personnel, Specialized vehicles and containers, Emergency kits and protocols, Safety route planning and risk assessments, Compliance audits and monitoring systems"
    },
    {
        question: "Can you transport radioactive or biohazard materials?",
        answer: "Yes. We are licensed to transport: Class 7 -- Radioactive materials, Class 6.2 -- Infectious substances. We use shielded containers and follow strict health, radiation, and biohazard safety regulations."
    },
    {
        question: "What happens in the event of an emergency or spill?",
        answer: "Our team is trained in full emergency response procedures, including: On-site containment with spill kits, Fire safety and medical readiness, Immediate notification to authorities, Coordinated environmental cleanup if required"
    },
    {
        question: "What international regulations do you follow?",
        answer: "We comply with: IMDG Code (International Maritime Dangerous Goods), IATA DGR (Dangerous Goods Regulations by Air), ADR (European Agreement concerning the International Carriage of Dangerous Goods by Road), Local and international port and customs requirements in each country of operation."
    },
    {
        question: "Can you provide end-to-end transport solutions for hazardous cargo?",
        answer: "Yes. We offer full project handling, including: Route surveys and risk assessment, Certified packaging and labeling, Customs clearance and documentation, Multimodal transport (sea, road, air), Delivery to destination."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for dangerous cargo transport?",
        answer: "Certified compliance with global safety standards, Expertise in all nine classes of dangerous goods, Tailored transport strategies for high-risk cargo, Dedicated support for customs and regulatory hurdles, Reliable global network of carriers and agents, Focus on safety, compliance, and risk mitigation"
    },
    {
        question: "How do I know if my cargo is classified as hazardous?",
        answer: "Check the product's MSDS or consult our team with product specifications. We'll verify its classification under relevant regulations (IMDG, IATA, ADR)."
    },
    {
        question: "Can you assist with Dangerous Goods training or certification?",
        answer: "Yes. We offer guidance and partner training programs for companies that frequently handle or ship DG cargo, including packaging teams and logistics staff."
    },

    // Livestock Transportation Services
    {
        question: "What is livestock transportation?",
        answer: "Livestock transportation involves the safe and regulated movement of live animals---such as cattle, sheep, goats, pigs, and horses---from one location to another for breeding, farming, racing, conservation, or trade. It requires specialized equipment, trained personnel, and strict compliance with animal welfare standards."
    },
    {
        question: "What types of animals do you transport?",
        answer: "We offer transportation services for a wide variety of live animals, including: Farm animals: Cattle, sheep, goats, and pigs, Horses: For breeding, racing, and equestrian events, Exotic and endangered species: For zoos, wildlife reserves, and conservation programs"
    },
    {
        question: "What measures do you take to ensure animal welfare during transport?",
        answer: "At Moon Navigation and Trading Co., animal welfare is our top priority. We provide: Spacious, non-slip, and ventilated pens, Temperature-controlled environments, Low stress loading and unloading systems, Onboard veterinarians and trained animal handlers, Routine health monitoring throughout the voyage"
    },
    {
        question: "How are animals fed and hydrated during transport?",
        answer: "Our vessels are fitted with automated feeding and watering systems, ensuring animals have constant access to clean water and are fed at regular intervals---even on long international journeys."
    },
    {
        question: "Do you comply with international animal transport regulations?",
        answer: "Yes. We strictly follow: IMO Animal Transport Standards, WOAH (World Organization for Animal Health) Guidelines, Country-specific veterinary import/export laws. This guarantees animal welfare and smooth customs clearance."
    },
    {
        question: "What happens in the case of a medical emergency during shipment?",
        answer: "We have veterinary staff onboard trained to handle medical emergencies. Animals are monitored continuously, and our team can administer immediate emergency care or implement quarantine protocols when necessary."
    },
    {
        question: "What biosecurity measures do you follow?",
        answer: "We implement strict hygiene, disinfection, and disease prevention protocols before, during, and after transport. This includes: Thorough pre-cleaning of vessels, Quarantine procedures, Monitoring for infectious diseases"
    },
    {
        question: "Can you handle documentation and customs for live animal shipments?",
        answer: "Yes, we provide full logistical support, including: Health and vaccination certificates, Veterinary and pedigree records, Import/export permits, Customs clearance and documentation"
    },
    {
        question: "Do you offer long-distance international livestock transport?",
        answer: "Absolutely. We offer: Short-haul regional transport (domestic and neighboring countries), Long-haul global shipping through a network of trusted ports, airlines, and logistics partners"
    },
    {
        question: "How do you reduce animal stress during transport?",
        answer: "We use low-noise loading techniques, minimize human-animal contact, and limit transit times wherever possible. Stress reduction is built into our transport design."
    },
    {
        question: "Are your livestock services insured?",
        answer: "Yes. We offer specialized livestock cargo insurance covering injury, illness, and mortality risks during transport."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for livestock transportation?",
        answer: "Specialized vessels and infrastructure for livestock, Veterinary care and welfare-focused handling, Global compliance and documentation management, Advanced biosecurity protocols, Tailored transport plans to suit your operation"
    },

    // Tankers in Ocean Freight
    {
        question: "What is a tanker in ocean freight?",
        answer: "A tanker is a specially designed ship used for transporting bulk liquids such as crude oil, refined petroleum, chemicals, and liquefied gases (LNG/LPG). These vessels are engineered with safety features like double hulls, segregated tanks, and advanced monitoring systems."
    },
    {
        question: "What types of tankers do you operate?",
        answer: "We operate a full range of specialized tankers to meet diverse cargo needs, including: Crude Oil Tankers -- For unrefined petroleum, Product Tankers -- For refined fuels like gasoline and diesel, Chemical Tankers -- For hazardous industrial chemicals, Liquefied Gas Carriers -- For LNG and LPG with cryogenic handling"
    },
    {
        question: "Which industries do you serve?",
        answer: "Our tanker services support various industries, including: Oil & Gas, Chemical Manufacturing, Agriculture & Food (e.g., edible oils, biofuels), Industrial and Energy sectors"
    },
    {
        question: "How do you ensure safety when transporting hazardous liquids?",
        answer: "Safety is our top priority. We ensure: Double-hull vessel construction for leak protection, Cargo condition monitoring, Compliance with IMO, SOLAS, MARPOL, and ISGOTT regulations, Fire suppression, gas detection, and emergency response systems, Crews trained in hazardous material (HAZMAT) handling and onboard emergency protocols"
    },
    {
        question: "Do you offer temperature-controlled and segregated tanks?",
        answer: "Yes. Our vessels include: Temperature-Controlled Holds for sensitive liquids, Fully Segregated Tanks for multi-product cargo, preventing cross-contamination"
    },
    {
        question: "Can I ship hazardous chemicals or cryogenic gases with you?",
        answer: "Absolutely. Our tankers are certified and equipped for: Hazardous chemicals (toxic, corrosive, or flammable), Cryogenic gases like LNG and LPG, maintained using advanced containment and insulation technologies"
    },
    {
        question: "Do you provide door-to-door tanker logistics?",
        answer: "Yes, we provide comprehensive end-to-end logistics, including: Inland trucking or rail transport, Port and terminal coordination, Regulatory documentation and customs clearance, Secure ocean freight and final-mile delivery"
    },
    {
        question: "What environmental practices do your tankers follow?",
        answer: "We are committed to green shipping practices, including: Use of IMO 2020-compliant low-sulfur fuels, Ballast water treatment systems to protect marine ecosystems, Emissions monitoring and pollution prevention planning, Ongoing investment in eco-efficient technologies"
    },
    {
        question: "Do you offer flexible contract options?",
        answer: "Yes. Depending on your needs, we offer: Spot shipments for one-time or urgent cargo, Long-term contracts with stable pricing and availability, Customized solutions including routing, storage, and temperature control"
    },
    {
        question: "What is the difference between product and crude oil tankers?",
        answer: "Crude oil tankers transport unrefined petroleum directly from oil extraction points, while product tankers carry refined products like diesel, gasoline, jet fuel, and lubricants. Product tankers often have multiple segregated tanks for transporting various products simultaneously."
    },
    {
        question: "How are chemical tankers cleaned between shipments?",
        answer: "Chemical tankers undergo a multi-stage tank cleaning process using hot water, steam, and chemical agents to eliminate residue and prevent cross-contamination. All procedures follow ISGOTT and MARPOL Annex II cleaning protocols."
    },
    {
        question: "What certifications do your tankers and crews hold?",
        answer: "Our vessels and crews are certified under: SOLAS (Safety of Life at Sea), ISM Code (International Safety Management), ISGOTT (International Safety Guide for Oil Tankers and Terminals), STCW (Standards of Training, Certification, and Watchkeeping) for maritime professionals"
    },
    {
        question: "Are your vessels compliant with SOLAS and ISM Code requirements?",
        answer: "Yes. All our operations meet SOLAS safety standards and ISM Code requirements for shipboard safety management, operational efficiency, and environmental compliance."
    },
    {
        question: "How do I get a quote for tanker transportation?",
        answer: "Use our Quotation by Request form on the website. Submit details such as cargo type, volume, destination, and special requirements. We'll send you a customized quote promptly via email."
    },

    // Heavy lift cargo
    {
        question: "What is considered heavy lift cargo?",
        answer: "Heavy lift cargo includes extremely heavy or oversized units---typically over 100 metric tons or exceeding standard container dimensions. Examples include turbines, oil rig modules, transformers, and industrial equipment."
    },
    {
        question: "What equipment is used to handle heavy lift cargo?",
        answer: "We deploy advanced, high-capacity handling equipment tailored for each operation, including: Hydraulic & floating cranes, Lifting frames and spreader bars, Hydraulic jacking systems, Self-Propelled Modular Transporters (SPMTs), Custom rigging and lifting gear"
    },
    {
        question: "What vessels do you use for transport?",
        answer: "We operate a specialized fleet that includes: Heavy Lift Vessels (HLVs) with high-capacity cranes, Semi-Submersible Vessels for floating and offshore structures, Deck Barges and Ro-Ro Ships for industrial machinery and wheeled cargo"
    },
    {
        question: "How do you ensure safety during heavy lift operations?",
        answer: "Safety is at the core of every project. We ensure it through: Engineering load plans & lifting studies, Load distribution and structural analysis, Certified lifting systems and operators, Use of certified equipment and licensed operators, Route and terminal feasibility studies, Compliance with international lifting and marine safety standards"
    },
    {
        question: "Can you manage inland transport for heavy cargo?",
        answer: "Yes. We provide full inland logistics solutions using: Modular and multi-axle trailers, Escorts and special transport permits, Route and bridge analysis, On-site coordination from port to project site"
    },
    {
        question: "What modes of transport are used for heavy lift cargo?",
        answer: "Heavy lift shipments often use a combination of road, sea, rail, or even air freight (for urgent loads). Sea transport is most common, using HLVs, barges, or semi-submersibles depending on cargo type and location."
    },
    {
        question: "Which industries use heavy lift services?",
        answer: "We serve diverse heavy industries, including: Oil & Gas, Renewable Energy (e.g., Wind Turbines), Power Generation, Mining & Infrastructure, Marine and Shipbuilding"
    },
    {
        question: "Do you provide route surveys and feasibility studies?",
        answer: "Absolutely. Our experts conduct: Bridge load and tunnel height clearance evaluations, Road strength and turning radius analysis, Port and crane capacity checks, Risk assessments with contingency planning"
    },
    {
        question: "What compliance support do you offer?",
        answer: "We handle all aspects of regulatory compliance, including: Oversized cargo transport permits, Customs clearance & documentation, Equipment safety certifications, Full cargo insurance and risk mitigation"
    },
    {
        question: "How can I request a quote for heavy lift cargo?",
        answer: "Use our Quotation by Request form on the website. Provide cargo dimensions, weight, destination, and any special requirements. Our team will respond with a tailored solution and pricing."
    },
    {
        question: "What is the difference between heavy lift and project cargo?",
        answer: "Heavy lift cargo refers to single oversized or heavy units, while project cargo covers complex shipments involving multiple pieces, often for industrial installations."
    },
    {
        question: "Can heavy lift cargo be shipped by air?",
        answer: "Yes, but it's rare and expensive. Only ultra-urgent or compact heavy loads are flown using aircraft like the Antonov An-124 or Boeing 747 freighters."
    },
    {
        question: "How much does it cost to ship heavy equipment internationally?",
        answer: "Costs vary based on cargo size, route, required equipment, and destination. Contact us for an accurate, all-inclusive quote."
    },
    {
        question: "What are Self-Propelled Modular Transporters (SPMTs)?",
        answer: "SPMTs are specialized vehicles with multiple axles used to move extremely heavy cargo across land, especially over short distances like from port to plant."
    },
    {
        question: "How long does it take to arrange a heavy lift shipment?",
        answer: "Depending on the complexity, planning can take from a few days to several weeks. We handle all engineering, permits, and coordination to meet your deadlines."
    },

    // Breakbulk Cargo
    {
        question: "What is breakbulk cargo?",
        answer: "Breakbulk cargo includes large, heavy, or oversized items that are transported individually rather than in standard shipping containers. These may include machinery, steel beams, vehicles, and industrial equipment that are too large or irregularly shaped to be containerized."
    },
    {
        question: "How is breakbulk cargo different from containerized or heavy-lift cargo?",
        answer: "Breakbulk cargo is shipped piece by piece and is generally lighter than heavy-lift cargo. It is not containerized but does not always require the extremely high-capacity lifting gear used for ultra-heavy cargo. It's commonly transported on multi-purpose or breakbulk vessels."
    },
    {
        question: "What types of cargo are commonly transported as breakbulk?",
        answer: "Typical examples of breakbulk shipments include: Construction machinery and vehicles, Steel coils, beams, and pipes, Industrial manufacturing equipment, Prefabricated building units, Railway vehicles and oversized pallets"
    },
    {
        question: "What types of vessels are used for breakbulk shipping?",
        answer: "We utilize: Breakbulk Vessels: Specially designed for non-containerized cargo, Multi-Purpose Vessels (MPVs): Flexible vessels that carry both containerized and breakbulk cargo, Heavy Lift Vessels: Equipped with onboard cranes for particularly large or heavy items"
    },
    {
        question: "How is breakbulk cargo loaded and unloaded?",
        answer: "Breakbulk items are individually handled using heavy-duty equipment such as gantry cranes, floating cranes, forklifts, and reach stackers. We match the right gear to the cargo to ensure efficient, safe operations."
    },
    {
        question: "What kind of securing methods are used?",
        answer: "We use custom lashing and securing techniques, including: Steel chains and straps, Wooden bracing, Shock-absorbing materials. This ensures the cargo remains stable during transit and protected from weather or impact."
    },
    {
        question: "Do you handle inland delivery for breakbulk shipments?",
        answer: "Yes. We offer full port-to-site delivery, using specialized trucks, trailers (such as low-beds or extendables), and support vehicles. We also manage all required permits and escort arrangements for oversized loads."
    },
    {
        question: "How do you handle customs and regulatory compliance?",
        answer: "Our customs specialists manage all documentation, including bills of lading, packing lists, cargo manifests, and permits. We ensure compliance with international maritime regulations and handle tax, duty classifications, and exemptions as needed."
    },
    {
        question: "How can I request a breakbulk shipping quote?",
        answer: "Simply use our Quotation by Request system. Fill in your cargo details---dimensions, weight, origin, and destination---and our team will quickly assess your shipment to provide a tailored quote with optimal route and pricing options."
    },
    {
        question: "Is breakbulk shipping expensive?",
        answer: "It is often more costly than container shipping due to special handling, equipment, and longer port stays---but it's the only option for certain oversized cargo."
    },
    {
        question: "Is breakbulk suitable for time-sensitive shipments?",
        answer: "While breakbulk is not as fast as air freight or containers, proper planning and vessel scheduling allow for efficient, timely delivery."
    },
    {
        question: "Is insurance required for breakbulk cargo?",
        answer: "Yes. We highly recommend full marine insurance to protect against transit risks. Our team can arrange it as part of the service."
    },
    {
        question: "Can breakbulk cargo be shipped by air?",
        answer: "Typically, no---due to size and weight. However, smaller breakbulk items may be air-shipped if urgently required."
    },
    {
        question: "Why should I choose Moon Navigation and Trading Co. for breakbulk cargo?",
        answer: "Expertise in handling oversized and non-containerized cargo, End-to-end logistics covering stowage, vessel selection, and delivery, Advanced equipment and lifting capabilities, Global network of carriers and ports, Regulatory compliance and dedicated support team"
    },

    // Less than Container Load (LCL)
    {
        question: "LCL vs. FCL: Which is Cheaper?",
        answer: "The cost of shipping via Less than Container Load (LCL) or Full Container Load (FCL) depends largely on the size and volume of your cargo. If you are shipping small boxes or palletized goods that occupy only a portion of a container, LCL is typically the more economical choice. Conversely, if your shipment fills most or all of a container, FCL becomes the more cost-effective option. Understanding your shipment requirements is crucial in making an informed decision that aligns with your budget and logistical needs."
    },
    {
        question: "Which is better: LCL or FCL shipping?",
        answer: "Both LCL and FCL are excellent shipping options, but the better choice depends on your specific cargo and requirements of your shipment. LCL is ideal for smaller shipments, efficiently cargo that doesn't fill an entire container, allowing you to share container space and reduce costs. However, as your shipment size increases, opting for FCL is worth considering, even if your cargo doesn't completely fill the container. While the upfront cost may be slightly higher, the benefits of FCL include faster expedited transit times and enhanced security for your goods, making it a worthwhile investment for larger shipments."
    },
    {
        question: "What is the maximum CBM allowed for LCL shipping?",
        answer: "Single Package: The maximum weight is 3,000 kg and the maximum volume is 29 CBM. Booking Limits: The maximum weight per booking is 20,000 kg and the maximum volume per booking is 60 CBM. Pallet Entry Specifications: The maximum weight is 3,000 kg. Dimensions: The maximum dimensions for a single package in LCL shipping are 249 cm (Width), 340 cm (Height), and 610 cm (Length). Additional Charges: Any cargo receipt exceeding the maximum dimension limits will incur a CFS handling fee of up to MYR 1,000 to be borne by the shipper per handling instance. Please ensure compliance with these guidelines to facilitate smooth shipping operations."
    },
    {
        question: "What should I do if my LCL cargo exceeds the maximum limits?",
        answer: "Please reach out to our LCL specialists for further assistance. In case your LCL cargo exceeds the limits of 3,000 kg and 29 CBM per package, or the total of 20,000 kg and 60 CBM. Our LCL specialists can help assess the best logistics solution---whether reconfiguration, split shipment, or switching to FCL."
    },
    {
        question: "Can I Include Customs Clearance Services with My LCL Shipment?",
        answer: "Yes. You can request customs clearance directly within the \"Value-Added Services\" section of our LCL quotation form. Our team will handle documentation, tax classification, and compliance on your behalf."
    },
    {
        question: "What does LCL stand for in shipping?",
        answer: "LCL stands for Less than Container Load, a shipping method where multiple shippers share space in one container."
    },
    {
        question: "Is LCL shipping safe?",
        answer: "Yes, LCL is safe when handled by professionals. However, since cargo is shared with others, there may be more handling, so proper packaging is crucial."
    },
    {
        question: "How long does LCL shipping take?",
        answer: "LCL may take slightly longer than FCL due to consolidation and deconsolidation at ports."
    },
    {
        question: "What are the disadvantages of LCL?",
        answer: "Potential disadvantages include: Longer transit time, Higher handling risks, Possible delays if other shipments in the container are held"
    },
    {
        question: "Can I track my LCL shipment?",
        answer: "Yes. We provide regular updates for all LCL shipments"
    },
    {
        question: "How Can I Get a Quote for LCL Shipping?",
        answer: "Getting a quote is easy: Simply fill out our Quotation by Request form with your shipment details. Our team will review your submission and reply with a customized LCL shipping quote via email."
    },

    // Full Container Load (FCL) Services
    {
        question: "What is FCL (Full Container Load) shipping?",
        answer: "FCL shipping means your cargo exclusively occupies an entire container. This method provides enhanced security, faster transit times, and reduced handling, making it ideal for large-volume or high-value shipments."
    },
    {
        question: "How is FCL different from LCL (Less than Container Load)?",
        answer: "FCL (Full Container Load): Higher (you pay for the full container), Suitable for large shipments, Faster (Direct shipping), Best when you can fill the container, Higher (Dedicated Container). LCL (Less than Container Load): Lower (pay for space used), Ideal for small to medium shipments, Slightly longer (Requires Consolidation), More flexible for frequent smaller loads, Shared space and increased handling"
    },
    {
        question: "When should I use FCL shipping?",
        answer: "Choose FCL if: You have enough cargo to fill a 20-ft or 40-ft container, Your shipment includes high-value or sensitive goods or urgent cargo, Your priority is speed and cargo integrity, You require temperature control or specialized handling."
    },
    {
        question: "What types of containers do you offer for FCL shipments?",
        answer: "We provide a range of container types to suit different cargo needs: Standard Containers: For general dry goods and machinery, Reefer Containers: For temperature-sensitive cargo, Dangerous Goods Containers: For hazardous materials, Open Top Containers: For oversized/tall cargo"
    },
    {
        question: "Can you handle dangerous or regulated cargo in FCL?",
        answer: "Yes. We specialize in transporting dangerous goods (DG) in compliance with IMO and ADR standards. Services include: Classification & labeling, Proper packaging and documentation, Use of DG-certified containers, Emergency response planning and risk management"
    },
    {
        question: "What are reefer containers and what can they carry?",
        answer: "Reefer (refrigerated) containers are used for transporting temperature-sensitive cargo, such as: Fresh or frozen food items, Pharmaceuticals and vaccines, Flowers, plants, and climate-sensitive goods. We monitor and update temperature data at key intervals throughout the journey to ensure cargo integrity and cold chain compliance."
    },
    {
        question: "How do you ensure the safety and security of my FCL shipment?",
        answer: "We use sealed containers, minimize cargo handling, and ensure proper loading and cargo securing procedures. Our end-to-end tracking and support team monitors your shipment to ensure safe, on-time delivery."
    },
    {
        question: "Do you provide documentation and customs support for FCL shipments?",
        answer: "Yes. Our team handles: Bill of Lading preparation (B/L), Commercial invoice and packing list, Import/export licenses and permits, Regulatory compliance for hazardous or perishable goods"
    },
    {
        question: "Can you provide international FCL shipping services?",
        answer: "Absolutely. We offer: Global routes across Europe, Asia, MENA, and the Americas, Priority space on top carrier lines, Flexible, cost-effective shipping schedules, Port-to-door solutions worldwide"
    },
    {
        question: "Is FCL cheaper than LCL for large shipments?",
        answer: "Yes, for large volumes, FCL often becomes more cost-effective due to flat container pricing."
    },
    {
        question: "How long does FCL shipping take?",
        answer: "Transit time depends on the route but is generally faster than LCL due to direct shipping and no consolidation."
    },
    {
        question: "Can I track my FCL shipment?",
        answer: "Yes, we offer regular shipment updates."
    },
    {
        question: "What size containers are available in FCL shipping?",
        answer: "Standard 20-ft and 40-ft containers, plus special types like High Cube, Open Top, and Reefers"
    },
    {
        question: "How can I get a quote for your services and FCL?",
        answer: "Simply fill out the \"Quotation by Request\" form on our website. Our team will promptly review your request and send you a tailored quotation via email."
    },
    {
        question: "What makes Moon Navigation and Trading Co. a trusted partner for FCL shipping?",
        answer: "Comprehensive Service: From booking to delivery, Industry Expertise: Specialized handling of reefer and DG cargo, Global Network: Strong partnerships with leading ocean carriers, 24/7 Support: Real-time updates and proactive issue resolution, Cost Efficiency: Competitive rates and optimized logistics"
    },

    // Reefer Container (Refrigerated) Shipping Services
    {
        question: "What is a reefer container?",
        answer: "A reefer container is a refrigerated shipping container designed to transport temperature-sensitive cargo. It maintains specific temperature and humidity conditions throughout the journey using built-in climate control systems."
    },
    {
        question: "What types of cargo require reefer containers?",
        answer: "We handle a wide range of temperature-sensitive goods, including: Perishable Foods -- Fruits, vegetables, seafood, meat, dairy, ice cream, Pharmaceuticals -- Vaccines, biologics, temperature-controlled drugs, Chemical Products -- Temperature-sensitive industrial materials, Floral Products -- Flowers, plants, and horticultural items, Beverages -- Wine, dairy drinks, and juices"
    },
    {
        question: "What temperature ranges do your reefer containers support?",
        answer: "Our units can maintain temperatures from -30°C to +30°C, with options for: Humidity control systems, Air ventilation for fresh produce, Multi-zone temperature settings for different cargo types"
    },
    {
        question: "How is temperature monitored during shipment?",
        answer: "We ensure cold chain integrity through: Continuous digital temperature tracking, 24/7 monitoring with alerts, Pre-Trip Inspections (PTIs) before loading, On-call technical support throughout transit"
    },
    {
        question: "What makes Moon Navigation and Trading Co. different for reefer shipping?",
        answer: "Modern reefer fleet with precision climate control, Cold chain compliance across all global standards, Full-service logistics: pickup, warehousing, shipping, delivery, Cold storage and consolidation hubs in key locations, 24/7 cargo supervision and proactive coordination"
    },
    {
        question: "Can you handle door-to-door reefer transport?",
        answer: "Yes. We offer fully managed door-to-door refrigerated logistics, minimizing handovers and maintaining an unbroken cold chain from your facility to the end customer."
    },
    {
        question: "Do you provide cold storage and refrigerated warehousing?",
        answer: "Absolutely. We offer: Short- and long-term temperature-controlled storage, Strategic cold storage locations near major ports, Consolidation and distribution services"
    },
    {
        question: "Can you handle multimodal reefer transport?",
        answer: "Absolutely. We coordinate sea, air, and inland transport with: Seamless temperature control across all modes, Efficient transitions without thermal disruptions, Custom options based on urgency, cost, and destination"
    },
    {
        question: "Is my temperature-sensitive cargo insured?",
        answer: "Yes, we provide specialized reefer cargo insurance that covers: Temperature deviation losses, Equipment malfunctions, Spoilage due to unforeseen delays, Claims assistance and loss prevention planning"
    },
    {
        question: "Can you ship hazardous or regulated goods in reefer containers?",
        answer: "Yes. We are certified to handle IMO/IMDG-class dangerous goods that require temperature control. Our services include: Proper documentation & labeling, Safety-compliant packaging, Full regulatory compliance throughout the cold chain"
    },
    {
        question: "Do I receive reefer shipment updates?",
        answer: "Yes. We provide: Regular shipment updates on cargo location and temperature status, Compliance-ready temperature and transit logs, Timely communication from our operations team at each critical stage of the journey."
    },
    {
        question: "Can reefer containers freeze cargo?",
        answer: "Yes, they can reach temperatures as low as -30°C, ideal for frozen goods."
    },
    {
        question: "How long can reefer containers keep cargo cold?",
        answer: "As long as needed---reefer units are powered during transit and at terminals to maintain set conditions."
    },
    {
        question: "Do reefer containers need special documentation?",
        answer: "Yes, especially for perishable goods or DG cargo---our team handles all necessary permits and customs compliance."
    },
    {
        question: "What are the sizes available for reefer containers?",
        answer: "Common sizes include 20ft and 40ft, with high-cube options for extra capacity."
    },
    {
        question: "How can I get a shipping quote?",
        answer: "To request a quote, simply fill out the Quotation Request Form on our website. Our team will review your request and respond promptly with a tailored solution and pricing via email."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for reefer container shipments?",
        answer: "We deliver more than just refrigerated shipping---we ensure the integrity of your cargo with: Modern reefer fleet featuring advanced temperature & humidity controls, Cold chain expertise from pickup to delivery, Customized routing to preserve shelf life and reduce transit time, Regulatory compliance for perishable, pharmaceutical, and DG goods, Reliable support & updates throughout every step of the shipment. Your sensitive cargo deserves specialized care---and that is our standard."
    },

    // Dangerous Goods (DG) Container Shipments
    {
        question: "What are Dangerous Goods (DG)?",
        answer: "Dangerous Goods are substances or items that pose a risk to health, safety, property, or the environment during transport. These include explosives, flammable substances, toxic chemicals, radioactive materials, and more, and are regulated under frameworks such as the IMDG Code, ADR, and IATA."
    },
    {
        question: "What are the classifications of dangerous goods?",
        answer: "Dangerous goods are categorized into 9 hazard classes: 1. Explosives, 2. Gases, 3. Flammable Liquids, 4. Flammable Solids and Reactive Substances, 5. Oxidizing Substances and Organic Peroxides, 6. Toxic and Infectious Substances, 7. Radioactive Materials, 8. Corrosive Substances, 9. Miscellaneous Dangerous Goods"
    },
    {
        question: "What documentation is required for transporting dangerous cargo?",
        answer: "Required documents include: Material Safety Data Sheet (MSDS), Dangerous Goods Declaration (DGD), UN identification numbers, Hazard class labels and placards, Certified packaging documentation. Moon Navigation and Trading Co. manages all paperwork to ensure full international compliance."
    },
    {
        question: "How is dangerous cargo packaged and labelled?",
        answer: "Cargo must be: Packaged in certified containers specific to the hazard class (e.g., explosion-proof drums, cryo tanks). Labels must clearly display: UN number, Hazard class label, Handling instructions. We strictly adhere to IMDG, IATA, and ADR packaging and labeling standards."
    },
    {
        question: "What safety measures do you take during transport?",
        answer: "We implement multiple layers of safety: Hazmat-trained personnel, Specialized vehicles and containers, Emergency kits and protocols, Safety route planning and risk assessments, Compliance audits and monitoring systems"
    },
    {
        question: "Can you transport radioactive or biohazard materials?",
        answer: "Yes. We are licensed to transport: Class 7 -- Radioactive materials, Class 6.2 -- Infectious substances. We use shielded containers and follow strict health, radiation, and biohazard safety regulations."
    },
    {
        question: "What happens in the event of an emergency or spill?",
        answer: "Our team is trained in full emergency response procedures, including: On-site containment with spill kits, Fire safety and medical readiness, Immediate notification to authorities, Coordinated environmental cleanup if required"
    },
    {
        question: "What international regulations do you follow?",
        answer: "We comply with: IMDG Code (International Maritime Dangerous Goods), IATA DGR (Dangerous Goods Regulations by Air), ADR (European Agreement concerning the International Carriage of Dangerous Goods by Road), Local and international port and customs requirements in each country of operation."
    },
    {
        question: "Can you provide end-to-end transport solutions for hazardous cargo?",
        answer: "Yes. We offer full project handling, including: Route surveys and risk assessment, Certified packaging and labeling, Customs clearance and documentation, Multimodal transport (sea, road, air), Delivery to destination."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for dangerous cargo transport?",
        answer: "Certified compliance with global safety standards, Expertise in all nine classes of dangerous goods, Tailored transport strategies for high-risk cargo, Dedicated support for customs and regulatory hurdles, Reliable global network of carriers and agents, Focus on safety, compliance, and risk mitigation"
    },
    {
        question: "How do I know if my cargo is classified as hazardous?",
        answer: "Check the product's MSDS or consult our team with product specifications. We'll verify its classification under relevant regulations (IMDG, IATA, ADR)."
    },
    {
        question: "Can you assist with Dangerous Goods training or certification?",
        answer: "Yes. We offer guidance and partner training programs for companies that frequently handle or ship DG cargo, including packaging teams and logistics staff."
    },

    // Livestock Transportation Services
    {
        question: "What is livestock transportation?",
        answer: "Livestock transportation involves the safe and regulated movement of live animals---such as cattle, sheep, goats, pigs, and horses---from one location to another for breeding, farming, racing, conservation, or trade. It requires specialized equipment, trained personnel, and strict compliance with animal welfare standards."
    },
    {
        question: "What types of animals do you transport?",
        answer: "We offer transportation services for a wide variety of live animals, including: Farm animals: Cattle, sheep, goats, and pigs, Horses: For breeding, racing, and equestrian events, Exotic and endangered species: For zoos, wildlife reserves, and conservation programs"
    },
    {
        question: "What measures do you take to ensure animal welfare during transport?",
        answer: "At Moon Navigation and Trading Co., animal welfare is our top priority. We provide: Spacious, non-slip, and ventilated pens, Temperature-controlled environments, Low stress loading and unloading systems, Onboard veterinarians and trained animal handlers, Routine health monitoring throughout the voyage"
    },
    {
        question: "How are animals fed and hydrated during transport?",
        answer: "Our vessels are fitted with automated feeding and watering systems, ensuring animals have constant access to clean water and are fed at regular intervals---even on long international journeys."
    },
    {
        question: "Do you comply with international animal transport regulations?",
        answer: "Yes. We strictly follow: IMO Animal Transport Standards, WOAH (World Organization for Animal Health) Guidelines, Country-specific veterinary import/export laws. This guarantees animal welfare and smooth customs clearance."
    },
    {
        question: "What happens in the case of a medical emergency during shipment?",
        answer: "We have veterinary staff onboard trained to handle medical emergencies. Animals are monitored continuously, and our team can administer immediate emergency care or implement quarantine protocols when necessary."
    },
    {
        question: "What biosecurity measures do you follow?",
        answer: "We implement strict hygiene, disinfection, and disease prevention protocols before, during, and after transport. This includes: Thorough pre-cleaning of vessels, Quarantine procedures, Monitoring for infectious diseases"
    },
    {
        question: "Can you handle documentation and customs for live animal shipments?",
        answer: "Yes, we provide full logistical support, including: Health and vaccination certificates, Veterinary and pedigree records, Import/export permits, Customs clearance and documentation"
    },
    {
        question: "Do you offer long-distance international livestock transport?",
        answer: "Absolutely. We offer: Short-haul regional transport (domestic and neighboring countries), Long-haul global shipping through a network of trusted ports, airlines, and logistics partners"
    },
    {
        question: "How do you reduce animal stress during transport?",
        answer: "We use low-noise loading techniques, minimize human-animal contact, and limit transit times wherever possible. Stress reduction is built into our transport design."
    },
    {
        question: "Are your livestock services insured?",
        answer: "Yes. We offer specialized livestock cargo insurance covering injury, illness, and mortality risks during transport."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for livestock transportation?",
        answer: "Specialized vessels and infrastructure for livestock, Veterinary care and welfare-focused handling, Global compliance and documentation management, Advanced biosecurity protocols, Tailored transport plans to suit your operation"
    },

    // Tankers in Ocean Freight
    {
        question: "What is a tanker in ocean freight?",
        answer: "A tanker is a specially designed ship used for transporting bulk liquids such as crude oil, refined petroleum, chemicals, and liquefied gases (LNG/LPG). These vessels are engineered with safety features like double hulls, segregated tanks, and advanced monitoring systems."
    },
    {
        question: "What types of tankers do you operate?",
        answer: "We operate a full range of specialized tankers to meet diverse cargo needs, including: Crude Oil Tankers -- For unrefined petroleum, Product Tankers -- For refined fuels like gasoline and diesel, Chemical Tankers -- For hazardous industrial chemicals, Liquefied Gas Carriers -- For LNG and LPG with cryogenic handling"
    },
    {
        question: "Which industries do you serve?",
        answer: "Our tanker services support various industries, including: Oil & Gas, Chemical Manufacturing, Agriculture & Food (e.g., edible oils, biofuels), Industrial and Energy sectors"
    },
    {
        question: "How do you ensure safety when transporting hazardous liquids?",
        answer: "Safety is our top priority. We ensure: Double-hull vessel construction for leak protection, Cargo condition monitoring, Compliance with IMO, SOLAS, MARPOL, and ISGOTT regulations, Fire suppression, gas detection, and emergency response systems, Crews trained in hazardous material (HAZMAT) handling and onboard emergency protocols"
    },
    {
        question: "Do you offer temperature-controlled and segregated tanks?",
        answer: "Yes. Our vessels include: Temperature-Controlled Holds for sensitive liquids, Fully Segregated Tanks for multi-product cargo, preventing cross-contamination"
    },
    {
        question: "Can I ship hazardous chemicals or cryogenic gases with you?",
        answer: "Absolutely. Our tankers are certified and equipped for: Hazardous chemicals (toxic, corrosive, or flammable), Cryogenic gases like LNG and LPG, maintained using advanced containment and insulation technologies"
    },
    {
        question: "Do you provide door-to-door tanker logistics?",
        answer: "Yes, we provide comprehensive end-to-end logistics, including: Inland trucking or rail transport, Port and terminal coordination, Regulatory documentation and customs clearance, Secure ocean freight and final-mile delivery"
    },
    {
        question: "What environmental practices do your tankers follow?",
        answer: "We are committed to green shipping practices, including: Use of IMO 2020-compliant low-sulfur fuels, Ballast water treatment systems to protect marine ecosystems, Emissions monitoring and pollution prevention planning, Ongoing investment in eco-efficient technologies"
    },
    {
        question: "Do you offer flexible contract options?",
        answer: "Yes. Depending on your needs, we offer: Spot shipments for one-time or urgent cargo, Long-term contracts with stable pricing and availability, Customized solutions including routing, storage, and temperature control"
    },
    {
        question: "What is the difference between product and crude oil tankers?",
        answer: "Crude oil tankers transport unrefined petroleum directly from oil extraction points, while product tankers carry refined products like diesel, gasoline, jet fuel, and lubricants. Product tankers often have multiple segregated tanks for transporting various products simultaneously."
    },
    {
        question: "How are chemical tankers cleaned between shipments?",
        answer: "Chemical tankers undergo a multi-stage tank cleaning process using hot water, steam, and chemical agents to eliminate residue and prevent cross-contamination. All procedures follow ISGOTT and MARPOL Annex II cleaning protocols."
    },
    {
        question: "What certifications do your tankers and crews hold?",
        answer: "Our vessels and crews are certified under: SOLAS (Safety of Life at Sea), ISM Code (International Safety Management), ISGOTT (International Safety Guide for Oil Tankers and Terminals), STCW (Standards of Training, Certification, and Watchkeeping) for maritime professionals"
    },
    {
        question: "Are your vessels compliant with SOLAS and ISM Code requirements?",
        answer: "Yes. All our operations meet SOLAS safety standards and ISM Code requirements for shipboard safety management, operational efficiency, and environmental compliance."
    },
    {
        question: "How do I get a quote for tanker transportation?",
        answer: "Use our Quotation by Request form on the website. Submit details such as cargo type, volume, destination, and special requirements. We'll send you a customized quote promptly via email."
    },

    // Heavy lift cargo
    {
        question: "What is considered heavy lift cargo?",
        answer: "Heavy lift cargo includes extremely heavy or oversized units---typically over 100 metric tons or exceeding standard container dimensions. Examples include turbines, oil rig modules, transformers, and industrial equipment."
    },
    {
        question: "What equipment is used to handle heavy lift cargo?",
        answer: "We deploy advanced, high-capacity handling equipment tailored for each operation, including: Hydraulic & floating cranes, Lifting frames and spreader bars, Hydraulic jacking systems, Self-Propelled Modular Transporters (SPMTs), Custom rigging and lifting gear"
    },
    {
        question: "What vessels do you use for transport?",
        answer: "We operate a specialized fleet that includes: Heavy Lift Vessels (HLVs) with high-capacity cranes, Semi-Submersible Vessels for floating and offshore structures, Deck Barges and Ro-Ro Ships for industrial machinery and wheeled cargo"
    },
    {
        question: "How do you ensure safety during heavy lift operations?",
        answer: "Safety is at the core of every project. We ensure it through: Engineering load plans & lifting studies, Load distribution and structural analysis, Certified lifting systems and operators, Use of certified equipment and licensed operators, Route and terminal feasibility studies, Compliance with international lifting and marine safety standards"
    },
    {
        question: "Can you manage inland transport for heavy cargo?",
        answer: "Yes. We provide full inland logistics solutions using: Modular and multi-axle trailers, Escorts and special transport permits, Route and bridge analysis, On-site coordination from port to project site"
    },
    {
        question: "What modes of transport are used for heavy lift cargo?",
        answer: "Heavy lift shipments often use a combination of road, sea, rail, or even air freight (for urgent loads). Sea transport is most common, using HLVs, barges, or semi-submersibles depending on cargo type and location."
    },
    {
        question: "Which industries use heavy lift services?",
        answer: "We serve diverse heavy industries, including: Oil & Gas, Renewable Energy (e.g., Wind Turbines), Power Generation, Mining & Infrastructure, Marine and Shipbuilding"
    },
    {
        question: "Do you provide route surveys and feasibility studies?",
        answer: "Absolutely. Our experts conduct: Bridge load and tunnel height clearance evaluations, Road strength and turning radius analysis, Port and crane capacity checks, Risk assessments with contingency planning"
    },
    {
        question: "What compliance support do you offer?",
        answer: "We handle all aspects of regulatory compliance, including: Oversized cargo transport permits, Customs clearance & documentation, Equipment safety certifications, Full cargo insurance and risk mitigation"
    },
    {
        question: "How can I request a quote for heavy lift cargo?",
        answer: "Use our Quotation by Request form on the website. Provide cargo dimensions, weight, destination, and any special requirements. Our team will respond with a tailored solution and pricing."
    },
    {
        question: "What is the difference between heavy lift and project cargo?",
        answer: "Heavy lift cargo refers to single oversized or heavy units, while project cargo covers complex shipments involving multiple pieces, often for industrial installations."
    },
    {
        question: "Can heavy lift cargo be shipped by air?",
        answer: "Yes, but it's rare and expensive. Only ultra-urgent or compact heavy loads are flown using aircraft like the Antonov An-124 or Boeing 747 freighters."
    },
    {
        question: "How much does it cost to ship heavy equipment internationally?",
        answer: "Costs vary based on cargo size, route, required equipment, and destination. Contact us for an accurate, all-inclusive quote."
    },
    {
        question: "What are Self-Propelled Modular Transporters (SPMTs)?",
        answer: "SPMTs are specialized vehicles with multiple axles used to move extremely heavy cargo across land, especially over short distances like from port to plant."
    },
    {
        question: "How long does it take to arrange a heavy lift shipment?",
        answer: "Depending on the complexity, planning can take from a few days to several weeks. We handle all engineering, permits, and coordination to meet your deadlines."
    },

    // Breakbulk Cargo
    {
        question: "What is breakbulk cargo?",
        answer: "Breakbulk cargo includes large, heavy, or oversized items that are transported individually rather than in standard shipping containers. These may include machinery, steel beams, vehicles, and industrial equipment that are too large or irregularly shaped to be containerized."
    },
    {
        question: "How is breakbulk cargo different from containerized or heavy-lift cargo?",
        answer: "Breakbulk cargo is shipped piece by piece and is generally lighter than heavy-lift cargo. It is not containerized but does not always require the extremely high-capacity lifting gear used for ultra-heavy cargo. It's commonly transported on multi-purpose or breakbulk vessels."
    },
    {
        question: "What types of cargo are commonly transported as breakbulk?",
        answer: "Typical examples of breakbulk shipments include: Construction machinery and vehicles, Steel coils, beams, and pipes, Industrial manufacturing equipment, Prefabricated building units, Railway vehicles and oversized pallets"
    },
    {
        question: "What types of vessels are used for breakbulk shipping?",
        answer: "We utilize: Breakbulk Vessels: Specially designed for non-containerized cargo, Multi-Purpose Vessels (MPVs): Flexible vessels that carry both containerized and breakbulk cargo, Heavy Lift Vessels: Equipped with onboard cranes for particularly large or heavy items"
    },
    {
        question: "How is breakbulk cargo loaded and unloaded?",
        answer: "Breakbulk items are individually handled using heavy-duty equipment such as gantry cranes, floating cranes, forklifts, and reach stackers. We match the right gear to the cargo to ensure efficient, safe operations."
    },
    {
        question: "What kind of securing methods are used?",
        answer: "We use custom lashing and securing techniques, including: Steel chains and straps, Wooden bracing, Shock-absorbing materials. This ensures the cargo remains stable during transit and protected from weather or impact."
    },
    {
        question: "Do you handle inland delivery for breakbulk shipments?",
        answer: "Yes. We offer full port-to-site delivery, using specialized trucks, trailers (such as low-beds or extendables), and support vehicles. We also manage all required permits and escort arrangements for oversized loads."
    },
    {
        question: "How do you handle customs and regulatory compliance?",
        answer: "Our customs specialists manage all documentation, including bills of lading, packing lists, cargo manifests, and permits. We ensure compliance with international maritime regulations and handle tax, duty classifications, and exemptions as needed."
    },
    {
        question: "How can I request a breakbulk shipping quote?",
        answer: "Simply use our Quotation by Request system. Fill in your cargo details---dimensions, weight, origin, and destination---and our team will quickly assess your shipment to provide a tailored quote with optimal route and pricing options."
    },
    {
        question: "Is breakbulk shipping expensive?",
        answer: "It is often more costly than container shipping due to special handling, equipment, and longer port stays---but it's the only option for certain oversized cargo."
    },
    {
        question: "Is breakbulk suitable for time-sensitive shipments?",
        answer: "While breakbulk is not as fast as air freight or containers, proper planning and vessel scheduling allow for efficient, timely delivery."
    },
    {
        question: "Is insurance required for breakbulk cargo?",
        answer: "Yes. We highly recommend full marine insurance to protect against transit risks. Our team can arrange it as part of the service."
    },
    {
        question: "Can breakbulk cargo be shipped by air?",
        answer: "Typically, no---due to size and weight. However, smaller breakbulk items may be air-shipped if urgently required."
    },
    {
        question: "Why should I choose Moon Navigation and Trading Co. for breakbulk cargo?",
        answer: "Expertise in handling oversized and non-containerized cargo, End-to-end logistics covering stowage, vessel selection, and delivery, Advanced equipment and lifting capabilities, Global network of carriers and ports, Regulatory compliance and dedicated support team"
    },

    // Less than Container Load (LCL)
    {
        question: "LCL vs. FCL: Which is Cheaper?",
        answer: "The cost of shipping via Less than Container Load (LCL) or Full Container Load (FCL) depends largely on the size and volume of your cargo. If you are shipping small boxes or palletized goods that occupy only a portion of a container, LCL is typically the more economical choice. Conversely, if your shipment fills most or all of a container, FCL becomes the more cost-effective option. Understanding your shipment requirements is crucial in making an informed decision that aligns with your budget and logistical needs."
    },
    {
        question: "Which is better: LCL or FCL shipping?",
        answer: "Both LCL and FCL are excellent shipping options, but the better choice depends on your specific cargo and requirements of your shipment. LCL is ideal for smaller shipments, efficiently cargo that doesn't fill an entire container, allowing you to share container space and reduce costs. However, as your shipment size increases, opting for FCL is worth considering, even if your cargo doesn't completely fill the container. While the upfront cost may be slightly higher, the benefits of FCL include faster expedited transit times and enhanced security for your goods, making it a worthwhile investment for larger shipments."
    },
    {
        question: "What is the maximum CBM allowed for LCL shipping?",
        answer: "Single Package: The maximum weight is 3,000 kg and the maximum volume is 29 CBM. Booking Limits: The maximum weight per booking is 20,000 kg and the maximum volume per booking is 60 CBM. Pallet Entry Specifications: The maximum weight is 3,000 kg. Dimensions: The maximum dimensions for a single package in LCL shipping are 249 cm (Width), 340 cm (Height), and 610 cm (Length). Additional Charges: Any cargo receipt exceeding the maximum dimension limits will incur a CFS handling fee of up to MYR 1,000 to be borne by the shipper per handling instance. Please ensure compliance with these guidelines to facilitate smooth shipping operations."
    },
    {
        question: "What should I do if my LCL cargo exceeds the maximum limits?",
        answer: "Please reach out to our LCL specialists for further assistance. In case your LCL cargo exceeds the limits of 3,000 kg and 29 CBM per package, or the total of 20,000 kg and 60 CBM. Our LCL specialists can help assess the best logistics solution---whether reconfiguration, split shipment, or switching to FCL."
    },
    {
        question: "Can I Include Customs Clearance Services with My LCL Shipment?",
        answer: "Yes. You can request customs clearance directly within the \"Value-Added Services\" section of our LCL quotation form. Our team will handle documentation, tax classification, and compliance on your behalf."
    },
    {
        question: "What does LCL stand for in shipping?",
        answer: "LCL stands for Less than Container Load, a shipping method where multiple shippers share space in one container."
    },
    {
        question: "Is LCL shipping safe?",
        answer: "Yes, LCL is safe when handled by professionals. However, since cargo is shared with others, there may be more handling, so proper packaging is crucial."
    },
    {
        question: "How long does LCL shipping take?",
        answer: "LCL may take slightly longer than FCL due to consolidation and deconsolidation at ports."
    },
    {
        question: "What are the disadvantages of LCL?",
        answer: "Potential disadvantages include: Longer transit time, Higher handling risks, Possible delays if other shipments in the container are held"
    },
    {
        question: "Can I track my LCL shipment?",
        answer: "Yes. We provide regular updates for all LCL shipments"
    },
    {
        question: "How Can I Get a Quote for LCL Shipping?",
        answer: "Getting a quote is easy: Simply fill out our Quotation by Request form with your shipment details. Our team will review your submission and reply with a customized LCL shipping quote via email."
    },

    // Full Container Load (FCL) Services
    {
        question: "What is FCL (Full Container Load) shipping?",
        answer: "FCL shipping means your cargo exclusively occupies an entire container. This method provides enhanced security, faster transit times, and reduced handling, making it ideal for large-volume or high-value shipments."
    },
    {
        question: "How is FCL different from LCL (Less than Container Load)?",
        answer: "FCL (Full Container Load): Higher (you pay for the full container), Suitable for large shipments, Faster (Direct shipping), Best when you can fill the container, Higher (Dedicated Container). LCL (Less than Container Load): Lower (pay for space used), Ideal for small to medium shipments, Slightly longer (Requires Consolidation), More flexible for frequent smaller loads, Shared space and increased handling"
    },
    {
        question: "When should I use FCL shipping?",
        answer: "Choose FCL if: You have enough cargo to fill a 20-ft or 40-ft container, Your shipment includes high-value or sensitive goods or urgent cargo, Your priority is speed and cargo integrity, You require temperature control or specialized handling."
    },
    {
        question: "What types of containers do you offer for FCL shipments?",
        answer: "We provide a range of container types to suit different cargo needs: Standard Containers: For general dry goods and machinery, Reefer Containers: For temperature-sensitive cargo, Dangerous Goods Containers: For hazardous materials, Open Top Containers: For oversized/tall cargo"
    },
    {
        question: "Can you handle dangerous or regulated cargo in FCL?",
        answer: "Yes. We specialize in transporting dangerous goods (DG) in compliance with IMO and ADR standards. Services include: Classification & labeling, Proper packaging and documentation, Use of DG-certified containers, Emergency response planning and risk management"
    },
    {
        question: "What are reefer containers and what can they carry?",
        answer: "Reefer (refrigerated) containers are used for transporting temperature-sensitive cargo, such as: Fresh or frozen food items, Pharmaceuticals and vaccines, Flowers, plants, and climate-sensitive goods. We monitor and update temperature data at key intervals throughout the journey to ensure cargo integrity and cold chain compliance."
    },
    {
        question: "How do you ensure the safety and security of my FCL shipment?",
        answer: "We use sealed containers, minimize cargo handling, and ensure proper loading and cargo securing procedures. Our end-to-end tracking and support team monitors your shipment to ensure safe, on-time delivery."
    },
    {
        question: "Do you provide documentation and customs support for FCL shipments?",
        answer: "Yes. Our team handles: Bill of Lading preparation (B/L), Commercial invoice and packing list, Import/export licenses and permits, Regulatory compliance for hazardous or perishable goods"
    },
    {
        question: "Can you provide international FCL shipping services?",
        answer: "Absolutely. We offer: Global routes across Europe, Asia, MENA, and the Americas, Priority space on top carrier lines, Flexible, cost-effective shipping schedules, Port-to-door solutions worldwide"
    },
    {
        question: "Is FCL cheaper than LCL for large shipments?",
        answer: "Yes, for large volumes, FCL often becomes more cost-effective due to flat container pricing."
    },
    {
        question: "How long does FCL shipping take?",
        answer: "Transit time depends on the route but is generally faster than LCL due to direct shipping and no consolidation."
    },
    {
        question: "Can I track my FCL shipment?",
        answer: "Yes, we offer regular shipment updates."
    },
    {
        question: "What size containers are available in FCL shipping?",
        answer: "Standard 20-ft and 40-ft containers, plus special types like High Cube, Open Top, and Reefers"
    },
    {
        question: "How can I get a quote for your services and FCL?",
        answer: "Simply fill out the \"Quotation by Request\" form on our website. Our team will promptly review your request and send you a tailored quotation via email."
    },
    {
        question: "What makes Moon Navigation and Trading Co. a trusted partner for FCL shipping?",
        answer: "Comprehensive Service: From booking to delivery, Industry Expertise: Specialized handling of reefer and DG cargo, Global Network: Strong partnerships with leading ocean carriers, 24/7 Support: Real-time updates and proactive issue resolution, Cost Efficiency: Competitive rates and optimized logistics"
    },

    // Reefer Container (Refrigerated) Shipping Services
    {
        question: "What is a reefer container?",
        answer: "A reefer container is a refrigerated shipping container designed to transport temperature-sensitive cargo. It maintains specific temperature and humidity conditions throughout the journey using built-in climate control systems."
    },
    {
        question: "What types of cargo require reefer containers?",
        answer: "We handle a wide range of temperature-sensitive goods, including: Perishable Foods -- Fruits, vegetables, seafood, meat, dairy, ice cream, Pharmaceuticals -- Vaccines, biologics, temperature-controlled drugs, Chemical Products -- Temperature-sensitive industrial materials, Floral Products -- Flowers, plants, and horticultural items, Beverages -- Wine, dairy drinks, and juices"
    },
    {
        question: "What temperature ranges do your reefer containers support?",
        answer: "Our units can maintain temperatures from -30°C to +30°C, with options for: Humidity control systems, Air ventilation for fresh produce, Multi-zone temperature settings for different cargo types"
    },
    {
        question: "How is temperature monitored during shipment?",
        answer: "We ensure cold chain integrity through: Continuous digital temperature tracking, 24/7 monitoring with alerts, Pre-Trip Inspections (PTIs) before loading, On-call technical support throughout transit"
    },
    {
        question: "What makes Moon Navigation and Trading Co. different for reefer shipping?",
        answer: "Modern reefer fleet with precision climate control, Cold chain compliance across all global standards, Full-service logistics: pickup, warehousing, shipping, delivery, Cold storage and consolidation hubs in key locations, 24/7 cargo supervision and proactive coordination"
    },
    {
        question: "Can you handle door-to-door reefer transport?",
        answer: "Yes. We offer fully managed door-to-door refrigerated logistics, minimizing handovers and maintaining an unbroken cold chain from your facility to the end customer."
    },
    {
        question: "Do you provide cold storage and refrigerated warehousing?",
        answer: "Absolutely. We offer: Short- and long-term temperature-controlled storage, Strategic cold storage locations near major ports, Consolidation and distribution services"
    },
    {
        question: "Can you handle multimodal reefer transport?",
        answer: "Absolutely. We coordinate sea, air, and inland transport with: Seamless temperature control across all modes, Efficient transitions without thermal disruptions, Custom options based on urgency, cost, and destination"
    },
    {
        question: "Is my temperature-sensitive cargo insured?",
        answer: "Yes, we provide specialized reefer cargo insurance that covers: Temperature deviation losses, Equipment malfunctions, Spoilage due to unforeseen delays, Claims assistance and loss prevention planning"
    },
    {
        question: "Can you ship hazardous or regulated goods in reefer containers?",
        answer: "Yes. We are certified to handle IMO/IMDG-class dangerous goods that require temperature control. Our services include: Proper documentation & labeling, Safety-compliant packaging, Full regulatory compliance throughout the cold chain"
    },
    {
        question: "Do I receive reefer shipment updates?",
        answer: "Yes. We provide: Regular shipment updates on cargo location and temperature status, Compliance-ready temperature and transit logs, Timely communication from our operations team at each critical stage of the journey."
    },
    {
        question: "Can reefer containers freeze cargo?",
        answer: "Yes, they can reach temperatures as low as -30°C, ideal for frozen goods."
    },
    {
        question: "How long can reefer containers keep cargo cold?",
        answer: "As long as needed---reefer units are powered during transit and at terminals to maintain set conditions."
    },
    {
        question: "Do reefer containers need special documentation?",
        answer: "Yes, especially for perishable goods or DG cargo---our team handles all necessary permits and customs compliance."
    },
    {
        question: "What are the sizes available for reefer containers?",
        answer: "Common sizes include 20ft and 40ft, with high-cube options for extra capacity."
    },
    {
        question: "How can I get a shipping quote?",
        answer: "To request a quote, simply fill out the Quotation Request Form on our website. Our team will review your request and respond promptly with a tailored solution and pricing via email."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for reefer container shipments?",
        answer: "We deliver more than just refrigerated shipping---we ensure the integrity of your cargo with: Modern reefer fleet featuring advanced temperature & humidity controls, Cold chain expertise from pickup to delivery, Customized routing to preserve shelf life and reduce transit time, Regulatory compliance for perishable, pharmaceutical, and DG goods, Reliable support & updates throughout every step of the shipment. Your sensitive cargo deserves specialized care---and that is our standard."
    },

    // Dangerous Goods (DG) Container Shipments
    {
        question: "What are Dangerous Goods (DG)?",
        answer: "Dangerous Goods are substances or items that pose a risk to health, safety, property, or the environment during transport. These include explosives, flammable substances, toxic chemicals, radioactive materials, and more, and are regulated under frameworks such as the IMDG Code, ADR, and IATA."
    },
    {
        question: "What are the classifications of dangerous goods?",
        answer: "Dangerous goods are categorized into 9 hazard classes: 1. Explosives, 2. Gases, 3. Flammable Liquids, 4. Flammable Solids and Reactive Substances, 5. Oxidizing Substances and Organic Peroxides, 6. Toxic and Infectious Substances, 7. Radioactive Materials, 8. Corrosive Substances, 9. Miscellaneous Dangerous Goods"
    },
    {
        question: "What documentation is required for transporting dangerous cargo?",
        answer: "Required documents include: Material Safety Data Sheet (MSDS), Dangerous Goods Declaration (DGD), UN identification numbers, Hazard class labels and placards, Certified packaging documentation. Moon Navigation and Trading Co. manages all paperwork to ensure full international compliance."
    },
    {
        question: "How is dangerous cargo packaged and labelled?",
        answer: "Cargo must be: Packaged in certified containers specific to the hazard class (e.g., explosion-proof drums, cryo tanks). Labels must clearly display: UN number, Hazard class label, Handling instructions. We strictly adhere to IMDG, IATA, and ADR packaging and labeling standards."
    },
    {
        question: "What safety measures do you take during transport?",
        answer: "We implement multiple layers of safety: Hazmat-trained personnel, Specialized vehicles and containers, Emergency kits and protocols, Safety route planning and risk assessments, Compliance audits and monitoring systems"
    },
    {
        question: "Can you transport radioactive or biohazard materials?",
        answer: "Yes. We are licensed to transport: Class 7 -- Radioactive materials, Class 6.2 -- Infectious substances. We use shielded containers and follow strict health, radiation, and biohazard safety regulations."
    },
    {
        question: "What happens in the event of an emergency or spill?",
        answer: "Our team is trained in full emergency response procedures, including: On-site containment with spill kits, Fire safety and medical readiness, Immediate notification to authorities, Coordinated environmental cleanup if required"
    },
    {
        question: "What international regulations do you follow?",
        answer: "We comply with: IMDG Code (International Maritime Dangerous Goods), IATA DGR (Dangerous Goods Regulations by Air), ADR (European Agreement concerning the International Carriage of Dangerous Goods by Road), Local and international port and customs requirements in each country of operation."
    },
    {
        question: "Can you provide end-to-end transport solutions for hazardous cargo?",
        answer: "Yes. We offer full project handling, including: Route surveys and risk assessment, Certified packaging and labeling, Customs clearance and documentation, Multimodal transport (sea, road, air), Delivery to destination."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for dangerous cargo transport?",
        answer: "Certified compliance with global safety standards, Expertise in all nine classes of dangerous goods, Tailored transport strategies for high-risk cargo, Dedicated support for customs and regulatory hurdles, Reliable global network of carriers and agents, Focus on safety, compliance, and risk mitigation"
    },
    {
        question: "How do I know if my cargo is classified as hazardous?",
        answer: "Check the product's MSDS or consult our team with product specifications. We'll verify its classification under relevant regulations (IMDG, IATA, ADR)."
    },
    {
        question: "Can you assist with Dangerous Goods training or certification?",
        answer: "Yes. We offer guidance and partner training programs for companies that frequently handle or ship DG cargo, including packaging teams and logistics staff."
    },

    // Livestock Transportation Services
    {
        question: "What is livestock transportation?",
        answer: "Livestock transportation involves the safe and regulated movement of live animals---such as cattle, sheep, goats, pigs, and horses---from one location to another for breeding, farming, racing, conservation, or trade. It requires specialized equipment, trained personnel, and strict compliance with animal welfare standards."
    },
    {
        question: "What types of animals do you transport?",
        answer: "We offer transportation services for a wide variety of live animals, including: Farm animals: Cattle, sheep, goats, and pigs, Horses: For breeding, racing, and equestrian events, Exotic and endangered species: For zoos, wildlife reserves, and conservation programs"
    },
    {
        question: "What measures do you take to ensure animal welfare during transport?",
        answer: "At Moon Navigation and Trading Co., animal welfare is our top priority. We provide: Spacious, non-slip, and ventilated pens, Temperature-controlled environments, Low stress loading and unloading systems, Onboard veterinarians and trained animal handlers, Routine health monitoring throughout the voyage"
    },
    {
        question: "How are animals fed and hydrated during transport?",
        answer: "Our vessels are fitted with automated feeding and watering systems, ensuring animals have constant access to clean water and are fed at regular intervals---even on long international journeys."
    },
    {
        question: "Do you comply with international animal transport regulations?",
        answer: "Yes. We strictly follow: IMO Animal Transport Standards, WOAH (World Organization for Animal Health) Guidelines, Country-specific veterinary import/export laws. This guarantees animal welfare and smooth customs clearance."
    },
    {
        question: "What happens in the case of a medical emergency during shipment?",
        answer: "We have veterinary staff onboard trained to handle medical emergencies. Animals are monitored continuously, and our team can administer immediate emergency care or implement quarantine protocols when necessary."
    },
    {
        question: "What biosecurity measures do you follow?",
        answer: "We implement strict hygiene, disinfection, and disease prevention protocols before, during, and after transport. This includes: Thorough pre-cleaning of vessels, Quarantine procedures, Monitoring for infectious diseases"
    },
    {
        question: "Can you handle documentation and customs for live animal shipments?",
        answer: "Yes, we provide full logistical support, including: Health and vaccination certificates, Veterinary and pedigree records, Import/export permits, Customs clearance and documentation"
    },
    {
        question: "Do you offer long-distance international livestock transport?",
        answer: "Absolutely. We offer: Short-haul regional transport (domestic and neighboring countries), Long-haul global shipping through a network of trusted ports, airlines, and logistics partners"
    },
    {
        question: "How do you reduce animal stress during transport?",
        answer: "We use low-noise loading techniques, minimize human-animal contact, and limit transit times wherever possible. Stress reduction is built into our transport design."
    },
    {
        question: "Are your livestock services insured?",
        answer: "Yes. We offer specialized livestock cargo insurance covering injury, illness, and mortality risks during transport."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for livestock transportation?",
        answer: "Specialized vessels and infrastructure for livestock, Veterinary care and welfare-focused handling, Global compliance and documentation management, Advanced biosecurity protocols, Tailored transport plans to suit your operation"
    },

    // Tankers in Ocean Freight
    {
        question: "What is a tanker in ocean freight?",
        answer: "A tanker is a specially designed ship used for transporting bulk liquids such as crude oil, refined petroleum, chemicals, and liquefied gases (LNG/LPG). These vessels are engineered with safety features like double hulls, segregated tanks, and advanced monitoring systems."
    },
    {
        question: "What types of tankers do you operate?",
        answer: "We operate a full range of specialized tankers to meet diverse cargo needs, including: Crude Oil Tankers -- For unrefined petroleum, Product Tankers -- For refined fuels like gasoline and diesel, Chemical Tankers -- For hazardous industrial chemicals, Liquefied Gas Carriers -- For LNG and LPG with cryogenic handling"
    },
    {
        question: "Which industries do you serve?",
        answer: "Our tanker services support various industries, including: Oil & Gas, Chemical Manufacturing, Agriculture & Food (e.g., edible oils, biofuels), Industrial and Energy sectors"
    },
    {
        question: "How do you ensure safety when transporting hazardous liquids?",
        answer: "Safety is our top priority. We ensure: Double-hull vessel construction for leak protection, Cargo condition monitoring, Compliance with IMO, SOLAS, MARPOL, and ISGOTT regulations, Fire suppression, gas detection, and emergency response systems, Crews trained in hazardous material (HAZMAT) handling and onboard emergency protocols"
    },
    {
        question: "Do you offer temperature-controlled and segregated tanks?",
        answer: "Yes. Our vessels include: Temperature-Controlled Holds for sensitive liquids, Fully Segregated Tanks for multi-product cargo, preventing cross-contamination"
    },
    {
        question: "Can I ship hazardous chemicals or cryogenic gases with you?",
        answer: "Absolutely. Our tankers are certified and equipped for: Hazardous chemicals (toxic, corrosive, or flammable), Cryogenic gases like LNG and LPG, maintained using advanced containment and insulation technologies"
    },
    {
        question: "Do you provide door-to-door tanker logistics?",
        answer: "Yes, we provide comprehensive end-to-end logistics, including: Inland trucking or rail transport, Port and terminal coordination, Regulatory documentation and customs clearance, Secure ocean freight and final-mile delivery"
    },
    {
        question: "What environmental practices do your tankers follow?",
        answer: "We are committed to green shipping practices, including: Use of IMO 2020-compliant low-sulfur fuels, Ballast water treatment systems to protect marine ecosystems, Emissions monitoring and pollution prevention planning, Ongoing investment in eco-efficient technologies"
    },
    {
        question: "Do you offer flexible contract options?",
        answer: "Yes. Depending on your needs, we offer: Spot shipments for one-time or urgent cargo, Long-term contracts with stable pricing and availability, Customized solutions including routing, storage, and temperature control"
    },
    {
        question: "What is the difference between product and crude oil tankers?",
        answer: "Crude oil tankers transport unrefined petroleum directly from oil extraction points, while product tankers carry refined products like diesel, gasoline, jet fuel, and lubricants. Product tankers often have multiple segregated tanks for transporting various products simultaneously."
    },
    {
        question: "How are chemical tankers cleaned between shipments?",
        answer: "Chemical tankers undergo a multi-stage tank cleaning process using hot water, steam, and chemical agents to eliminate residue and prevent cross-contamination. All procedures follow ISGOTT and MARPOL Annex II cleaning protocols."
    },
    {
        question: "What certifications do your tankers and crews hold?",
        answer: "Our vessels and crews are certified under: SOLAS (Safety of Life at Sea), ISM Code (International Safety Management), ISGOTT (International Safety Guide for Oil Tankers and Terminals), STCW (Standards of Training, Certification, and Watchkeeping) for maritime professionals"
    },
    {
        question: "Are your vessels compliant with SOLAS and ISM Code requirements?",
        answer: "Yes. All our operations meet SOLAS safety standards and ISM Code requirements for shipboard safety management, operational efficiency, and environmental compliance."
    },
    {
        question: "How do I get a quote for tanker transportation?",
        answer: "Use our Quotation by Request form on the website. Submit details such as cargo type, volume, destination, and special requirements. We'll send you a customized quote promptly via email."
    },

    // Heavy lift cargo
    {
        question: "What is considered heavy lift cargo?",
        answer: "Heavy lift cargo includes extremely heavy or oversized units---typically over 100 metric tons or exceeding standard container dimensions. Examples include turbines, oil rig modules, transformers, and industrial equipment."
    },
    {
        question: "What equipment is used to handle heavy lift cargo?",
        answer: "We deploy advanced, high-capacity handling equipment tailored for each operation, including: Hydraulic & floating cranes, Lifting frames and spreader bars, Hydraulic jacking systems, Self-Propelled Modular Transporters (SPMTs), Custom rigging and lifting gear"
    },
    {
        question: "What vessels do you use for transport?",
        answer: "We operate a specialized fleet that includes: Heavy Lift Vessels (HLVs) with high-capacity cranes, Semi-Submersible Vessels for floating and offshore structures, Deck Barges and Ro-Ro Ships for industrial machinery and wheeled cargo"
    },
    {
        question: "How do you ensure safety during heavy lift operations?",
        answer: "Safety is at the core of every project. We ensure it through: Engineering load plans & lifting studies, Load distribution and structural analysis, Certified lifting systems and operators, Use of certified equipment and licensed operators, Route and terminal feasibility studies, Compliance with international lifting and marine safety standards"
    },
    {
        question: "Can you manage inland transport for heavy cargo?",
        answer: "Yes. We provide full inland logistics solutions using: Modular and multi-axle trailers, Escorts and special transport permits, Route and bridge analysis, On-site coordination from port to project site"
    },
    {
        question: "What modes of transport are used for heavy lift cargo?",
        answer: "Heavy lift shipments often use a combination of road, sea, rail, or even air freight (for urgent loads). Sea transport is most common, using HLVs, barges, or semi-submersibles depending on cargo type and location."
    },
    {
        question: "Which industries use heavy lift services?",
        answer: "We serve diverse heavy industries, including: Oil & Gas, Renewable Energy (e.g., Wind Turbines), Power Generation, Mining & Infrastructure, Marine and Shipbuilding"
    },
    {
        question: "Do you provide route surveys and feasibility studies?",
        answer: "Absolutely. Our experts conduct: Bridge load and tunnel height clearance evaluations, Road strength and turning radius analysis, Port and crane capacity checks, Risk assessments with contingency planning"
    },
    {
        question: "What compliance support do you offer?",
        answer: "We handle all aspects of regulatory compliance, including: Oversized cargo transport permits, Customs clearance & documentation, Equipment safety certifications, Full cargo insurance and risk mitigation"
    },
    {
        question: "How can I request a quote for heavy lift cargo?",
        answer: "Use our Quotation by Request form on the website. Provide cargo dimensions, weight, destination, and any special requirements. Our team will respond with a tailored solution and pricing."
    },
    {
        question: "What is the difference between heavy lift and project cargo?",
        answer: "Heavy lift cargo refers to single oversized or heavy units, while project cargo covers complex shipments involving multiple pieces, often for industrial installations."
    },
    {
        question: "Can heavy lift cargo be shipped by air?",
        answer: "Yes, but it's rare and expensive. Only ultra-urgent or compact heavy loads are flown using aircraft like the Antonov An-124 or Boeing 747 freighters."
    },
    {
        question: "How much does it cost to ship heavy equipment internationally?",
        answer: "Costs vary based on cargo size, route, required equipment, and destination. Contact us for an accurate, all-inclusive quote."
    },
    {
        question: "What are Self-Propelled Modular Transporters (SPMTs)?",
        answer: "SPMTs are specialized vehicles with multiple axles used to move extremely heavy cargo across land, especially over short distances like from port to plant."
    },
    {
        question: "How long does it take to arrange a heavy lift shipment?",
        answer: "Depending on the complexity, planning can take from a few days to several weeks. We handle all engineering, permits, and coordination to meet your deadlines."
    },

    // Breakbulk Cargo
    {
        question: "What is breakbulk cargo?",
        answer: "Breakbulk cargo includes large, heavy, or oversized items that are transported individually rather than in standard shipping containers. These may include machinery, steel beams, vehicles, and industrial equipment that are too large or irregularly shaped to be containerized."
    },
    {
        question: "How is breakbulk cargo different from containerized or heavy-lift cargo?",
        answer: "Breakbulk cargo is shipped piece by piece and is generally lighter than heavy-lift cargo. It is not containerized but does not always require the extremely high-capacity lifting gear used for ultra-heavy cargo. It's commonly transported on multi-purpose or breakbulk vessels."
    },
    {
        question: "What types of cargo are commonly transported as breakbulk?",
        answer: "Typical examples of breakbulk shipments include: Construction machinery and vehicles, Steel coils, beams, and pipes, Industrial manufacturing equipment, Prefabricated building units, Railway vehicles and oversized pallets"
    },
    {
        question: "What types of vessels are used for breakbulk shipping?",
        answer: "We utilize: Breakbulk Vessels: Specially designed for non-containerized cargo, Multi-Purpose Vessels (MPVs): Flexible vessels that carry both containerized and breakbulk cargo, Heavy Lift Vessels: Equipped with onboard cranes for particularly large or heavy items"
    },
    {
        question: "How is breakbulk cargo loaded and unloaded?",
        answer: "Breakbulk items are individually handled using heavy-duty equipment such as gantry cranes, floating cranes, forklifts, and reach stackers. We match the right gear to the cargo to ensure efficient, safe operations."
    },
    {
        question: "What kind of securing methods are used?",
        answer: "We use custom lashing and securing techniques, including: Steel chains and straps, Wooden bracing, Shock-absorbing materials. This ensures the cargo remains stable during transit and protected from weather or impact."
    },
    {
        question: "Do you handle inland delivery for breakbulk shipments?",
        answer: "Yes. We offer full port-to-site delivery, using specialized trucks, trailers (such as low-beds or extendables), and support vehicles. We also manage all required permits and escort arrangements for oversized loads."
    },
    {
        question: "How do you handle customs and regulatory compliance?",
        answer: "Our customs specialists manage all documentation, including bills of lading, packing lists, cargo manifests, and permits. We ensure compliance with international maritime regulations and handle tax, duty classifications, and exemptions as needed."
    },
    {
        question: "How can I request a breakbulk shipping quote?",
        answer: "Simply use our Quotation by Request system. Fill in your cargo details---dimensions, weight, origin, and destination---and our team will quickly assess your shipment to provide a tailored quote with optimal route and pricing options."
    },
    {
        question: "Is breakbulk shipping expensive?",
        answer: "It is often more costly than container shipping due to special handling, equipment, and longer port stays---but it's the only option for certain oversized cargo."
    },
    {
        question: "Is breakbulk suitable for time-sensitive shipments?",
        answer: "While breakbulk is not as fast as air freight or containers, proper planning and vessel scheduling allow for efficient, timely delivery."
    },
    {
        question: "Is insurance required for breakbulk cargo?",
        answer: "Yes. We highly recommend full marine insurance to protect against transit risks. Our team can arrange it as part of the service."
    },
    {
        question: "Can breakbulk cargo be shipped by air?",
        answer: "Typically, no---due to size and weight. However, smaller breakbulk items may be air-shipped if urgently required."
    },
    {
        question: "Why should I choose Moon Navigation and Trading Co. for breakbulk cargo?",
        answer: "Expertise in handling oversized and non-containerized cargo, End-to-end logistics covering stowage, vessel selection, and delivery, Advanced equipment and lifting capabilities, Global network of carriers and ports, Regulatory compliance and dedicated support team"
    },

    // Less than Container Load (LCL)
    {
        question: "LCL vs. FCL: Which is Cheaper?",
        answer: "The cost of shipping via Less than Container Load (LCL) or Full Container Load (FCL) depends largely on the size and volume of your cargo. If you are shipping small boxes or palletized goods that occupy only a portion of a container, LCL is typically the more economical choice. Conversely, if your shipment fills most or all of a container, FCL becomes the more cost-effective option. Understanding your shipment requirements is crucial in making an informed decision that aligns with your budget and logistical needs."
    },
    {
        question: "Which is better: LCL or FCL shipping?",
        answer: "Both LCL and FCL are excellent shipping options, but the better choice depends on your specific cargo and requirements of your shipment. LCL is ideal for smaller shipments, efficiently cargo that doesn't fill an entire container, allowing you to share container space and reduce costs. However, as your shipment size increases, opting for FCL is worth considering, even if your cargo doesn't completely fill the container. While the upfront cost may be slightly higher, the benefits of FCL include faster expedited transit times and enhanced security for your goods, making it a worthwhile investment for larger shipments."
    },
    {
        question: "What is the maximum CBM allowed for LCL shipping?",
        answer: "Single Package: The maximum weight is 3,000 kg and the maximum volume is 29 CBM. Booking Limits: The maximum weight per booking is 20,000 kg and the maximum volume per booking is 60 CBM. Pallet Entry Specifications: The maximum weight is 3,000 kg. Dimensions: The maximum dimensions for a single package in LCL shipping are 249 cm (Width), 340 cm (Height), and 610 cm (Length). Additional Charges: Any cargo receipt exceeding the maximum dimension limits will incur a CFS handling fee of up to MYR 1,000 to be borne by the shipper per handling instance. Please ensure compliance with these guidelines to facilitate smooth shipping operations."
    },
    {
        question: "What should I do if my LCL cargo exceeds the maximum limits?",
        answer: "Please reach out to our LCL specialists for further assistance. In case your LCL cargo exceeds the limits of 3,000 kg and 29 CBM per package, or the total of 20,000 kg and 60 CBM. Our LCL specialists can help assess the best logistics solution---whether reconfiguration, split shipment, or switching to FCL."
    },
    {
        question: "Can I Include Customs Clearance Services with My LCL Shipment?",
        answer: "Yes. You can request customs clearance directly within the \"Value-Added Services\" section of our LCL quotation form. Our team will handle documentation, tax classification, and compliance on your behalf."
    },
    {
        question: "What does LCL stand for in shipping?",
        answer: "LCL stands for Less than Container Load, a shipping method where multiple shippers share space in one container."
    },
    {
        question: "Is LCL shipping safe?",
        answer: "Yes, LCL is safe when handled by professionals. However, since cargo is shared with others, there may be more handling, so proper packaging is crucial."
    },
    {
        question: "How long does LCL shipping take?",
        answer: "LCL may take slightly longer than FCL due to consolidation and deconsolidation at ports."
    },
    {
        question: "What are the disadvantages of LCL?",
        answer: "Potential disadvantages include: Longer transit time, Higher handling risks, Possible delays if other shipments in the container are held"
    },
    {
        question: "Can I track my LCL shipment?",
        answer: "Yes. We provide regular updates for all LCL shipments"
    },
    {
        question: "How Can I Get a Quote for LCL Shipping?",
        answer: "Getting a quote is easy: Simply fill out our Quotation by Request form with your shipment details. Our team will review your submission and reply with a customized LCL shipping quote via email."
    },

    // Full Container Load (FCL) Services
    {
        question: "What is FCL (Full Container Load) shipping?",
        answer: "FCL shipping means your cargo exclusively occupies an entire container. This method provides enhanced security, faster transit times, and reduced handling, making it ideal for large-volume or high-value shipments."
    },
    {
        question: "How is FCL different from LCL (Less than Container Load)?",
        answer: "FCL (Full Container Load): Higher (you pay for the full container), Suitable for large shipments, Faster (Direct shipping), Best when you can fill the container, Higher (Dedicated Container). LCL (Less than Container Load): Lower (pay for space used), Ideal for small to medium shipments, Slightly longer (Requires Consolidation), More flexible for frequent smaller loads, Shared space and increased handling"
    },
    {
        question: "When should I use FCL shipping?",
        answer: "Choose FCL if: You have enough cargo to fill a 20-ft or 40-ft container, Your shipment includes high-value or sensitive goods or urgent cargo, Your priority is speed and cargo integrity, You require temperature control or specialized handling."
    },
    {
        question: "What types of containers do you offer for FCL shipments?",
        answer: "We provide a range of container types to suit different cargo needs: Standard Containers: For general dry goods and machinery, Reefer Containers: For temperature-sensitive cargo, Dangerous Goods Containers: For hazardous materials, Open Top Containers: For oversized/tall cargo"
    },
    {
        question: "Can you handle dangerous or regulated cargo in FCL?",
        answer: "Yes. We specialize in transporting dangerous goods (DG) in compliance with IMO and ADR standards. Services include: Classification & labeling, Proper packaging and documentation, Use of DG-certified containers, Emergency response planning and risk management"
    },
    {
        question: "What are reefer containers and what can they carry?",
        answer: "Reefer (refrigerated) containers are used for transporting temperature-sensitive cargo, such as: Fresh or frozen food items, Pharmaceuticals and vaccines, Flowers, plants, and climate-sensitive goods. We monitor and update temperature data at key intervals throughout the journey to ensure cargo integrity and cold chain compliance."
    },
    {
        question: "How do you ensure the safety and security of my FCL shipment?",
        answer: "We use sealed containers, minimize cargo handling, and ensure proper loading and cargo securing procedures. Our end-to-end tracking and support team monitors your shipment to ensure safe, on-time delivery."
    },
    {
        question: "Do you provide documentation and customs support for FCL shipments?",
        answer: "Yes. Our team handles: Bill of Lading preparation (B/L), Commercial invoice and packing list, Import/export licenses and permits, Regulatory compliance for hazardous or perishable goods"
    },
    {
        question: "Can you provide international FCL shipping services?",
        answer: "Absolutely. We offer: Global routes across Europe, Asia, MENA, and the Americas, Priority space on top carrier lines, Flexible, cost-effective shipping schedules, Port-to-door solutions worldwide"
    },
    {
        question: "Is FCL cheaper than LCL for large shipments?",
        answer: "Yes, for large volumes, FCL often becomes more cost-effective due to flat container pricing."
    },
    {
        question: "How long does FCL shipping take?",
        answer: "Transit time depends on the route but is generally faster than LCL due to direct shipping and no consolidation."
    },
    {
        question: "Can I track my FCL shipment?",
        answer: "Yes, we offer regular shipment updates."
    },
    {
        question: "What size containers are available in FCL shipping?",
        answer: "Standard 20-ft and 40-ft containers, plus special types like High Cube, Open Top, and Reefers"
    },
    {
        question: "How can I get a quote for your services and FCL?",
        answer: "Simply fill out the \"Quotation by Request\" form on our website. Our team will promptly review your request and send you a tailored quotation via email."
    },
    {
        question: "What makes Moon Navigation and Trading Co. a trusted partner for FCL shipping?",
        answer: "Comprehensive Service: From booking to delivery, Industry Expertise: Specialized handling of reefer and DG cargo, Global Network: Strong partnerships with leading ocean carriers, 24/7 Support: Real-time updates and proactive issue resolution, Cost Efficiency: Competitive rates and optimized logistics"
    },

    // Reefer Container (Refrigerated) Shipping Services
    {
        question: "What is a reefer container?",
        answer: "A reefer container is a refrigerated shipping container designed to transport temperature-sensitive cargo. It maintains specific temperature and humidity conditions throughout the journey using built-in climate control systems."
    },
    {
        question: "What types of cargo require reefer containers?",
        answer: "We handle a wide range of temperature-sensitive goods, including: Perishable Foods -- Fruits, vegetables, seafood, meat, dairy, ice cream, Pharmaceuticals -- Vaccines, biologics, temperature-controlled drugs, Chemical Products -- Temperature-sensitive industrial materials, Floral Products -- Flowers, plants, and horticultural items, Beverages -- Wine, dairy drinks, and juices"
    },
    {
        question: "What temperature ranges do your reefer containers support?",
        answer: "Our units can maintain temperatures from -30°C to +30°C, with options for: Humidity control systems, Air ventilation for fresh produce, Multi-zone temperature settings for different cargo types"
    },
    {
        question: "How is temperature monitored during shipment?",
        answer: "We ensure cold chain integrity through: Continuous digital temperature tracking, 24/7 monitoring with alerts, Pre-Trip Inspections (PTIs) before loading, On-call technical support throughout transit"
    },
    {
        question: "What makes Moon Navigation and Trading Co. different for reefer shipping?",
        answer: "Modern reefer fleet with precision climate control, Cold chain compliance across all global standards, Full-service logistics: pickup, warehousing, shipping, delivery, Cold storage and consolidation hubs in key locations, 24/7 cargo supervision and proactive coordination"
    },
    {
        question: "Can you handle door-to-door reefer transport?",
        answer: "Yes. We offer fully managed door-to-door refrigerated logistics, minimizing handovers and maintaining an unbroken cold chain from your facility to the end customer."
    },
    {
        question: "Do you provide cold storage and refrigerated warehousing?",
        answer: "Absolutely. We offer: Short- and long-term temperature-controlled storage, Strategic cold storage locations near major ports, Consolidation and distribution services"
    },
    {
        question: "Can you handle multimodal reefer transport?",
        answer: "Absolutely. We coordinate sea, air, and inland transport with: Seamless temperature control across all modes, Efficient transitions without thermal disruptions, Custom options based on urgency, cost, and destination"
    },
    {
        question: "Is my temperature-sensitive cargo insured?",
        answer: "Yes, we provide specialized reefer cargo insurance that covers: Temperature deviation losses, Equipment malfunctions, Spoilage due to unforeseen delays, Claims assistance and loss prevention planning"
    },
    {
        question: "Can you ship hazardous or regulated goods in reefer containers?",
        answer: "Yes. We are certified to handle IMO/IMDG-class dangerous goods that require temperature control. Our services include: Proper documentation & labeling, Safety-compliant packaging, Full regulatory compliance throughout the cold chain"
    },
    {
        question: "Do I receive reefer shipment updates?",
        answer: "Yes. We provide: Regular shipment updates on cargo location and temperature status, Compliance-ready temperature and transit logs, Timely communication from our operations team at each critical stage of the journey."
    },
    {
        question: "Can reefer containers freeze cargo?",
        answer: "Yes, they can reach temperatures as low as -30°C, ideal for frozen goods."
    },
    {
        question: "How long can reefer containers keep cargo cold?",
        answer: "As long as needed---reefer units are powered during transit and at terminals to maintain set conditions."
    },
    {
        question: "Do reefer containers need special documentation?",
        answer: "Yes, especially for perishable goods or DG cargo---our team handles all necessary permits and customs compliance."
    },
    {
        question: "What are the sizes available for reefer containers?",
        answer: "Common sizes include 20ft and 40ft, with high-cube options for extra capacity."
    },
    {
        question: "How can I get a shipping quote?",
        answer: "To request a quote, simply fill out the Quotation Request Form on our website. Our team will review your request and respond promptly with a tailored solution and pricing via email."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for reefer container shipments?",
        answer: "We deliver more than just refrigerated shipping---we ensure the integrity of your cargo with: Modern reefer fleet featuring advanced temperature & humidity controls, Cold chain expertise from pickup to delivery, Customized routing to preserve shelf life and reduce transit time, Regulatory compliance for perishable, pharmaceutical, and DG goods, Reliable support & updates throughout every step of the shipment. Your sensitive cargo deserves specialized care---and that is our standard."
    },

    // Dangerous Goods (DG) Container Shipments
    {
        question: "What are Dangerous Goods (DG)?",
        answer: "Dangerous Goods are substances or items that pose a risk to health, safety, property, or the environment during transport. These include explosives, flammable substances, toxic chemicals, radioactive materials, and more, and are regulated under frameworks such as the IMDG Code, ADR, and IATA."
    },
    {
        question: "What are the classifications of dangerous goods?",
        answer: "Dangerous goods are categorized into 9 hazard classes: 1. Explosives, 2. Gases, 3. Flammable Liquids, 4. Flammable Solids and Reactive Substances, 5. Oxidizing Substances and Organic Peroxides, 6. Toxic and Infectious Substances, 7. Radioactive Materials, 8. Corrosive Substances, 9. Miscellaneous Dangerous Goods"
    },
    {
        question: "What documentation is required for transporting dangerous cargo?",
        answer: "Required documents include: Material Safety Data Sheet (MSDS), Dangerous Goods Declaration (DGD), UN identification numbers, Hazard class labels and placards, Certified packaging documentation. Moon Navigation and Trading Co. manages all paperwork to ensure full international compliance."
    },
    {
        question: "How is dangerous cargo packaged and labelled?",
        answer: "Cargo must be: Packaged in certified containers specific to the hazard class (e.g., explosion-proof drums, cryo tanks). Labels must clearly display: UN number, Hazard class label, Handling instructions. We strictly adhere to IMDG, IATA, and ADR packaging and labeling standards."
    },
    {
        question: "What safety measures do you take during transport?",
        answer: "We implement multiple layers of safety: Hazmat-trained personnel, Specialized vehicles and containers, Emergency kits and protocols, Safety route planning and risk assessments, Compliance audits and monitoring systems"
    },
    {
        question: "Can you transport radioactive or biohazard materials?",
        answer: "Yes. We are licensed to transport: Class 7 -- Radioactive materials, Class 6.2 -- Infectious substances. We use shielded containers and follow strict health, radiation, and biohazard safety regulations."
    },
    {
        question: "What happens in the event of an emergency or spill?",
        answer: "Our team is trained in full emergency response procedures, including: On-site containment with spill kits, Fire safety and medical readiness, Immediate notification to authorities, Coordinated environmental cleanup if required"
    },
    {
        question: "What international regulations do you follow?",
        answer: "We comply with: IMDG Code (International Maritime Dangerous Goods), IATA DGR (Dangerous Goods Regulations by Air), ADR (European Agreement concerning the International Carriage of Dangerous Goods by Road), Local and international port and customs requirements in each country of operation."
    },
    {
        question: "Can you provide end-to-end transport solutions for hazardous cargo?",
        answer: "Yes. We offer full project handling, including: Route surveys and risk assessment, Certified packaging and labeling, Customs clearance and documentation, Multimodal transport (sea, road, air), Delivery to destination."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for dangerous cargo transport?",
        answer: "Certified compliance with global safety standards, Expertise in all nine classes of dangerous goods, Tailored transport strategies for high-risk cargo, Dedicated support for customs and regulatory hurdles, Reliable global network of carriers and agents, Focus on safety, compliance, and risk mitigation"
    },
    {
        question: "How do I know if my cargo is classified as hazardous?",
        answer: "Check the product's MSDS or consult our team with product specifications. We'll verify its classification under relevant regulations (IMDG, IATA, ADR)."
    },
    {
        question: "Can you assist with Dangerous Goods training or certification?",
        answer: "Yes. We offer guidance and partner training programs for companies that frequently handle or ship DG cargo, including packaging teams and logistics staff."
    },
    {
        question: "What qualifies as dangerous goods in shipping?",
        answer: "Dangerous goods include items or substances that can pose a risk during transport, such as flammable liquids, gases, corrosives, explosives, toxic materials, and radioactive substances. They are classified and regulated under international frameworks like the IMDG Code, ADR, and IATA."
    },
    {
        question: "What is the IMDG Code and why is it important?",
        answer: "The IMDG (International Maritime Dangerous Goods) Code is a global standard developed by the IMO to ensure the safe transport of hazardous goods by sea. It outlines packaging, labeling, handling, and stowage requirements for DG cargo."
    },
    {
        question: "How are dangerous goods packed for container shipping?",
        answer: "DG cargo must be packed in certified, UN-approved packaging that prevents leaks, damage, or contamination. Each package must be labeled with the correct hazard class, UN number, and handling symbols, and secured inside the container according to stowage rules."
    },
    {
        question: "What documents are required to ship dangerous goods internationally?",
        answer: "Common documentation includes: Dangerous Goods Declaration (DGD), Material Safety Data Sheet (MSDS), Container Packing Certificate (CPC), CTU (Cargo Transport Units) Checklist, Permits from relevant port/customs authorities"
    },
    {
        question: "Can you ship dangerous goods by air or road?",
        answer: "Yes, dangerous goods can be transported by air (IATA DGR) or road (ADR) with proper documentation, compliant packaging, trained staff, and carrier authorization. Each mode has its own handling rules and safety regulations."
    },
    {
        question: "What happens if DG cargo is not properly declared?",
        answer: "Undeclared or improperly labeled dangerous goods can lead to: Shipment delays or rejections, Heavy fines and legal penalties, Safety hazards to crews and vessels, Port or customs authority blacklisting"
    },
    {
        question: "Who is responsible for ensuring DG compliance?",
        answer: "The shipper is primarily responsible for accurate classification, packaging, labeling, and documentation. However, freight forwarders, carriers, and customs agents also share responsibility for checking compliance throughout the logistics chain."
    },
    {
        question: "How can I request a Dangerous Goods (DG) container quote?",
        answer: "To request a DG container quote, fill in our quotation form, and our team will respond shortly with a tailored offer Via email."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for DG container shipments?",
        answer: "Full compliance with international safety regulations, Experienced team trained in hazardous cargo handling, Wide range of certified container and equipment options, Transparent documentation and routing support, Proven reliability in managing sensitive and complex DG cargo"
    },

    // Standard Dry Container (FCL) Shipments
    {
        question: "What is a standard dry container?",
        answer: "A standard dry container is a fully enclosed, weatherproof steel container used for transporting general, non-temperature-sensitive cargo. It is the most used container in global shipping due to its versatility, security, and cost-effectiveness."
    },
    {
        question: "What type of cargo is suitable for standard dry containers?",
        answer: "Standard dry containers are ideal for: Palletized goods, Consumer products, Furniture and home appliances, Textiles and garments, Electronics, Non-perishable food and beverages, Construction materials, Office supplies and industrial parts"
    },
    {
        question: "What container sizes are available?",
        answer: "We offer both: 20-foot (20ft) containers --- typically for smaller shipments or heavier cargo, 40-foot (40ft) containers --- ideal for bulkier or high-volume shipments"
    },
    {
        question: "What industries commonly use your dry container service?",
        answer: "We serve a wide range of sectors, including: Retail & Consumer Goods, Furniture & Homeware, Manufacturing & Industrial, Textiles & Apparel, Food & Beverage (non-perishable), Construction & Engineering"
    },
    {
        question: "Do you offer full logistics support from origin to destination?",
        answer: "Yes. We manage the entire logistics chain, including: Inland transportation (pickup and delivery), Port handling, Container stuffing and securing, Customs clearance, Final delivery to the consignee (door-to-door if needed)"
    },
    {
        question: "How is cargo secured inside the container?",
        answer: "We follow international best practices for cargo securing, including: Strategic cargo placement for weight distribution, Use of lashing, blocking, bracing, and dunnage, Application of tamper-proof container seals, Professional supervision during stuffing/loading"
    },
    {
        question: "Do you handle customs clearance and documentation?",
        answer: "Absolutely. We prepare and manage: Commercial invoices, Packing lists, Bills of lading, Certificates of origin, Cargo manifests, Customs declarations. We ensure full regulatory compliance to avoid clearance delays."
    },
    {
        question: "Can you help optimize container space to save costs?",
        answer: "Yes. We offer space optimization and stuffing guidance to: Maximize container usage, Prevent damage from shifting, Reduce freight costs through efficient packing"
    },
    {
        question: "What if I need assistance at the port or destination for loading/unloading?",
        answer: "We provide on-site support for both loading and unloading, including: Labor assistance, Forklift and crane coordination, Handling bulky, fragile, or irregular-shaped items"
    },
    {
        question: "Why should I choose Moon Navigation and Trading Co. for standard dry container shipping?",
        answer: "Decades of freight forwarding expertise, Global partner network for flexible booking and routing, End-to-end supply chain management, Competitive pricing and transparent service, Personalized customer support 24/7, Compliance with all international logistics standards"
    },

    // Oversized Container Shipping
    {
        question: "What is considered oversized cargo?",
        answer: "Oversized cargo refers to any shipment that exceeds the standard dimensions or weight limits of a conventional 20ft or 40ft shipping container. This includes cargo that is too wide, tall, long, or heavy to fit in an enclosed container."
    },
    {
        question: "What types of containers are used for oversized cargo?",
        answer: "We use flat racks, open-top containers, and platform containers, depending on the size and nature of your cargo. Each is designed to handle specific oversized dimensions or loading needs."
    },
    {
        question: "How do I know if my cargo qualifies as oversized?",
        answer: "You can contact us with your cargo's dimensions, weight, and specifications. Our logistics experts will assess the best transport method and whether it qualifies as oversized or requires breakbulk shipping."
    },
    {
        question: "What industries typically ship oversized cargo?",
        answer: "We commonly serve industries such as construction, oil and gas, power generation, mining, infrastructure, defense, and manufacturing---especially for transporting machinery, turbines, pipes, and prefabricated units."
    },
    {
        question: "Is special equipment needed to load or unload oversized containers?",
        answer: "Yes. Oversized cargo often requires cranes, gantry systems, forklifts, or modular trailers. We provide all necessary handling gear and trained professionals to ensure safe loading and unloading."
    },
    {
        question: "Can oversized containers be shipped internationally?",
        answer: "Absolutely. We offer global shipping solutions for oversized cargo, including compliance with international regulations (IMO, SOLAS), customs clearance, and route planning."
    },
    {
        question: "Do I need special permits for transporting oversized cargo?",
        answer: "Yes, in many cases. Our team handles all required permits, clearances, and road surveys for seamless inland or cross-border transport."
    },
    {
        question: "Will my cargo be protected from weather during shipping?",
        answer: "Yes. We secure open-top containers with tarpaulin covers and use reinforced lashing systems to shield cargo from environmental elements like rain, wind, and dust."
    },
    {
        question: "What is the difference between oversized container shipping and breakbulk?",
        answer: "Oversized container shipping is for cargo that slightly exceeds standard container limits but still fits on a container frame (e.g., flat rack). Breakbulk is for cargo too large for containerization and requires direct vessel loading."
    },
    {
        question: "How can I get a shipping quote for oversized cargo?",
        answer: "Just fill out our Quotation Request Form with cargo dimensions, weight, origin, and destination. Our team will promptly provide a customized quote with the best routing and pricing."
    },

    // Out-of-Gauge (OOG) Cargo Transportation
    {
        question: "What is Out-of-Gauge (OOG) cargo?",
        answer: "OOG cargo refers to shipments that exceed the standard dimensions of a shipping container in height, width, or length. These goods require special containers and transport methods, as they cannot fit inside standard enclosed containers."
    },
    {
        question: "What types of OOG cargo do you handle?",
        answer: "We transport a wide range of oversized cargo, including project cargo, industrial machinery, construction equipment, turbines, transformers, military equipment, and aerospace components."
    },
    {
        question: "What specialized equipment do you use for OOG cargo?",
        answer: "Our fleet includes flat rack and open-top containers, modular and hydraulic trailers, heavy-lift cranes, lifting gear, and RORO (Roll-On/Roll-Off) solutions for self-propelled machinery."
    },
    {
        question: "How do you ensure the cargo is safe during transport?",
        answer: "We use advanced cargo securing methods and lifting techniques, and our team conducts detailed route planning and feasibility studies. All handling is done using certified equipment operated by trained professionals."
    },
    {
        question: "Do you manage customs clearance and permits for oversized cargo?",
        answer: "Yes. We handle all required permits, customs paperwork, and regulatory compliance to ensure a smooth and delay-free shipping process---both domestically and internationally."
    },
    {
        question: "Can you provide port handling and inland delivery services?",
        answer: "Absolutely. We offer end-to-end logistics, including stevedoring at ports, customs clearance, and final delivery to project sites or industrial zones using appropriate inland transport."
    },
    {
        question: "What are flat rack and open-top containers used for?",
        answer: "Flat racks are ideal for cargo wider or longer than standard containers, offering open sides for easy loading. Open-top containers are used for cargo too tall to fit in standard containers, allowing for overhead crane loading."
    },
    {
        question: "Can I ship OOG cargo internationally with your company?",
        answer: "Yes. With our global logistics network and reliable partnerships, we offer international OOG transportation with expert route planning and compliance management."
    },
    {
        question: "How do I get a quote for OOG cargo transport?",
        answer: "Fill out our Quotation by Request form with details like cargo dimensions, weight, origin, and destination. Our logistics team will assess the information and send a tailored quote to your email."
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for OOG shipments?",
        answer: "We offer specialized handling, expert route planning, complete logistics support, and a global network to ensure your oversized cargo reaches its destination safely, efficiently, and on time."
    },

    // Inland Container Transportation
    {
        question: "What types of containers do you transport?",
        answer: "We handle all standard and specialized containers, including 20ft, 40ft, and 45ft containers, high-cube, reefer, flat rack, open-top, and dangerous goods (DG) containers."
    },
    {
        question: "Do you offer full container (FCL) and less-than-container (LCL) transport?",
        answer: "Yes. We offer both FCL and LCL options, with dedicated and consolidated trucking solutions designed to reduce costs and maintain cargo security."
    },
    {
        question: "Can you handle oversized or heavy cargo inland?",
        answer: "Absolutely. We use low-bed trailers, multi-axle trucks, and hydraulic modular trailers to safely transport heavy lift, out-of-gauge, and project cargo."
    },
    {
        question: "Do you transport reefer containers?",
        answer: "Yes. Our refrigerated trucks are equipped with temperature control and monitoring systems, ideal for perishable goods, pharmaceuticals, and other sensitive cargo."
    },
    {
        question: "Are you authorized to transport hazardous cargo?",
        answer: "Yes. We provide certified transport for hazardous goods in compliance with IMO, ADR, and national regulations, using strict safety procedures."
    },
    {
        question: "Do you provide cross-border inland transportation?",
        answer: "We offer intercity and international transport with complete customs clearance support, ensuring smooth cargo movement across borders."
    },
    {
        question: "What areas do you cover in Egypt?",
        answer: "We provide inland container transportation across all Egyptian ports and industrial zones, including Cairo, Alexandria, Port Said, Sokhna, Damietta, and Upper Egypt."
    },
    {
        question: "How do you ensure timely delivery?",
        answer: "Our logistics team uses route optimization, tracking and real-time coordination to ensure on-time delivery and minimize delays."
    },
    {
        question: "Can I track my shipment during inland transit?",
        answer: "Yes. We provide real-time shipment tracking and updates to keep you informed throughout the transportation process."
    },
    {
        question: "How can I request a quotation?",
        answer: "Simply fill out the short form through our Quotation by Request system. Once submitted, our team will evaluate your cargo details and send you a customized quotation directly by email."
    },

    // Container Handling, Stevedoring & Storage
    {
        question: "What is container handling?",
        answer: "Container handling involves the transfer of shipping containers between ships, trucks, trains, or port storage facilities using cranes, forklifts, and other specialized equipment to ensure efficient and safe movement."
    },
    {
        question: "What is stevedoring?",
        answer: "Stevedoring is the process of loading and unloading cargo from ships at ports. It requires trained crews and specialized equipment to handle various types of cargo, including containers, bulk goods, breakbulk, and project cargo."
    },
    {
        question: "What storage options do you offer for containers and cargo?",
        answer: "We provide both short-term and long-term storage solutions, including: Container yard storage for FCL, LCL, and reefer containers, Bonded warehousing for duty-free storage, Temperature-controlled and hazardous goods storage, Breakbulk and heavy lift cargo storage"
    },
    {
        question: "Do you handle specialized containers like refrigerated or hazardous cargo?",
        answer: "Yes. We handle reefer (refrigerated) containers with 24/7 temperature monitoring and also manage dangerous goods (IMO cargo) in compliance with safety regulations."
    },
    {
        question: "Can you manage oversized or project cargo?",
        answer: "Absolutely. We offer heavy lift and out-of-gauge cargo handling with high-capacity cranes and custom lifting solutions to accommodate machinery, industrial components, and other oversized shipments."
    },
    {
        question: "How do you ensure the safety and security of cargo during handling?",
        answer: "We apply proper lashing and securing techniques, conduct container inspections, perform damage assessments, and ensure compliance with safety standards. Our team is trained in risk assessment and emergency response."
    },
    {
        question: "What equipment do you use for container handling and stevedoring?",
        answer: "We utilize a full range of modern port equipment including: Gantry cranes and spreaders, Forklifts, reach stackers, and terminal tractors, Reefer plug-in points and monitoring systems"
    },
    {
        question: "Is your service available at all ports in Egypt?",
        answer: "Yes. We operate across all major Egyptian ports, providing seamless integration with port authorities and terminal operators for efficient cargo movement and storage."
    },
    {
        question: "Can you provide end-to-end logistics solutions?",
        answer: "Yes. We offer complete logistics services from ship-to-shore transfer, customs clearance, inland transport, warehousing, and final delivery to your desired destination."
    },
    {
        question: "How can I request a quote for container handling or storage services?",
        answer: "Simply fill out our Quotation by Request form on our website with your cargo details. Our team will promptly evaluate your requirements and send you a customized quote with optimized options for cost and transit time."
    },

    // Ship Agency Services
    {
        question: "What is a Proforma Disbursement Account (PDA)?",
        answer: "A PDA is a detailed estimate of all anticipated costs associated with a vessel's port call or transit. It includes charges such as port dues, pilotage, towage, stevedoring, customs, and agency fees, allowing shipowners and operators to budget and plan effectively."
    },
    {
        question: "Why is a PDA important?",
        answer: "A PDA helps you: Accurately forecast port-related expenses, Control costs and approve expenditures in advance, Avoid surprises with clear and transparent pricing, Make informed decisions for operational efficiency"
    },
    {
        question: "How accurate are your PDAs?",
        answer: "Our PDAs are based on official port tariffs and real-time market data. We work closely with port authorities, service providers, and customs officials to ensure the estimates reflect current conditions. Updates are made in real-time if circumstances change."
    },
    {
        question: "What's the difference between a PDA and a Final Disbursement Account (FDA)?",
        answer: "PDA: An estimated forecast of port costs provided before the vessel's arrival. FDA: A final, reconciled statement based on actual services used and invoices received, provided after the vessel departs."
    },
    {
        question: "What types of vessels do you serve?",
        answer: "We specialize in handling: Bulk carriers, Tankers, Container ships, RORO vessels, Project cargo vessels"
    },
    {
        question: "What services are included in your PDA?",
        answer: "Our PDA covers all essential port-related charges, including: Port & terminal fees, Pilotage and towage, Customs and immigration fees, Stevedoring and cargo handling, Bunkers, fresh water, provisions, Waste disposal and environmental charges, Security and emergency services, Agency and documentation fees"
    },
    {
        question: "Can I make changes to the PDA after it's issued?",
        answer: "Yes. If additional services are required or if circumstances change (e.g., cargo volume, delays, new port regulations), we update the PDA accordingly and inform you of the revised costs."
    },
    {
        question: "How quickly can I receive a PDA?",
        answer: "We offer fast turnaround, typically within 24 hours of your request, depending on port complexity and required services."
    },
    {
        question: "What is your process for preparing a PDA?",
        answer: "Our process includes: Pre-Arrival Cost Estimation, Real-Time Adjustments & Updates, Final Disbursement Account (FDA) Submission. We maintain active communication throughout the port call to ensure cost accuracy and transparency."
    },
    {
        question: "Do you offer 24/7 support?",
        answer: "Absolutely. Our dedicated operations team is available 24/7 to assist with inquiries, updates, and emergency coordination."
    },
    {
        question: "How do you support vessels transiting the Suez Canal?",
        answer: "We manage every aspect of your Suez Canal passage, including: Pre-transit coordination with the Suez Canal Authority (SCA), Documentation and fee payments, Compliance with regulations, Real-time support throughout the transit. We ensure safe, fast, and cost-effective navigation through this strategic route."
    },
    {
        question: "What ports and regions do you cover?",
        answer: "We operate across multiple international ports and strategic maritime corridors, including the Suez Canal. Contact us for a full list of covered ports and services."
    },
    {
        question: "How do I request a PDA?",
        answer: "You can request a PDA by contacting our operations team via: Email: [Insert your email address], Phone: [Insert contact number], Online: [Insert website/contact form link]. Provide details such as vessel name, ETA, cargo type, and port of call."
    },

    // Suez Canal Transit & Marine Agency Services
    {
        question: "What services do you provide for Suez Canal transits?",
        answer: "We offer end-to-end transit solutions, including: Pre-transit coordination with the Suez Canal Authority (SCA), Documentation and toll estimation, On-transit pilotage and real-time vessel monitoring, Emergency response support, Post-passage disbursement finalization and next-port coordination"
    },
    {
        question: "How do you coordinate with the Suez Canal Authority (SCA)?",
        answer: "We manage direct communication with the SCA to: Reserve transit slots, Ensure timely scheduling, Submit required documentation and payments. This helps avoid delays and ensures a smooth passage for your vessel."
    },
    {
        question: "What kind of documentation is required for Suez Canal transit?",
        answer: "We handle all necessary documents, including: Transit permits, Vessel particulars, Customs clearance, Crew documentation. We ensure full compliance with local and international maritime regulations."
    },
    {
        question: "How do you estimate and manage Suez Canal toll fees?",
        answer: "We provide a detailed toll fee estimation based on your vessel's specifications and cargo. We also assist in processing payments to avoid clearance delays."
    },
    {
        question: "What support do you offer during transit through the canal?",
        answer: "We provide: Certified pilot coordination, Continuous monitoring of your vessel, Emergency support in case of mechanical or navigation issues. Our team remains in contact with both your vessel and the SCA throughout the passage."
    },
    {
        question: "What happens after the vessel completes the canal transit?",
        answer: "We:\n• Finalize the disbursement account (FDA)\n• Clear any outstanding port charges\n• Coordinate your vessel's clearance and readiness for the next port call\nAll post-transit logistics are handled to ensure a seamless continuation of your voyage."
    },
    {
        question: "Do you offer additional agency services in Egypt?",
        answer: "Yes, our agency services include:\n• PDA (Port Documentation Approval)\n• Crew sign-on/sign-off coordination\n• Delivery of transit spare parts\n• Bunkering, fresh water, and ship chandlery supply\n• Case-by-case specialized support (e.g., urgent repairs, inspections)"
    },
    {
        question: "Can you assist with bunkering and supplies at Egyptian ports?",
        answer: "Absolutely. We offer:\n• Fuel and oil supply\n• Fresh water\n• Provisions and ship chandlery\nAll services are handled efficiently to minimize time spent in port."
    },
    {
        question: "Do you support emergency repairs or technical needs during transit?",
        answer: "Yes. We provide rapid-response emergency services, including:\n• Technical support\n• Urgent maintenance coordination\n• Spare parts delivery\nOur goal is to reduce downtime and ensure your vessel remains on schedule."
    },
    {
        question: "Is your team available 24/7?",
        answer: "Yes. Our operations team is available 24/7 to provide real-time updates, respond to emergencies, and assist with all transit-related services."
    },
    {
        question: "Why should I choose Moon Navigation and Trading Co. for Suez Canal transit?",
        answer: "• All-inclusive, end-to-end service\n• Local expertise and direct coordination with SCA\n• 24/7 operational and emergency support\n• Transparent pricing and toll estimation\n• Custom solutions for complex transit requirements\nWe simplify the complex Suez Canal process and deliver efficient, compliant, and cost-effective passage solutions."
    },
    {
        question: "What is crew management in the maritime industry?",
        answer: "Crew management involves the recruitment, deployment, administration, and support of seafarers. It includes crew sign-on/sign-off procedures, training, travel arrangements, immigration clearance, and compliance with international maritime regulations."
    },
    {
        question: "What crew management services do you offer?",
        answer: "We provide comprehensive services, including:\n• Crew sign-on (onboarding) and sign-off (disembarkation)\n• Visa and immigration assistance\n• Travel and accommodation coordination\n• Port clearance and access\n• Emergency crew change solutions\n• Medical assistance (if required)"
    },
    {
        question: "How do you ensure regulatory compliance during crew changes?",
        answer: "All our procedures align with:\n• IMO (International Maritime Organization) guidelines\n• MLC 2006 (Maritime Labour Convention) standards\n• Flag state and local port authority regulations\nWe verify documents, medical fitness, and contract compliance to ensure lawful and safe crew handling."
    },
    {
        question: "What documentation is required for crew sign-on?",
        answer: "Typical requirements include:\n• Valid seafarer passport\n• Seaman's book\n• Medical fitness certificate\n• Employment contract\n• Port entry visa (if applicable)\nWe handle submission and clearance with immigration and port authorities."
    },
    {
        question: "What happens during the crew sign-off process?",
        answer: "We manage all exit formalities, including:\n• Immigration and customs clearance\n• Final medical checks\n• Return travel arrangements\n• Repatriation documentation\nWe ensure that disembarkation is smooth, compliant, and stress-free."
    },
    {
        question: "Can you assist with medical emergencies or urgent crew changes?",
        answer: "Yes. We provide emergency response services such as:\n• Immediate crew evacuation\n• Medical coordination and hospital admission\n• Rapid crew replacements\n• Urgent visa and travel arrangements\nOur team is equipped to handle emergencies 24/7."
    },
    {
        question: "Do you coordinate international travel for crew members?",
        answer: "Absolutely. We arrange:\n• Flights (international and domestic)\n• Airport transfers\n• Hotel accommodations (if needed)\n• Visa assistance\nOur logistics team ensures that crew members reach or leave the vessel efficiently and on time."
    },
    {
        question: "What are the benefits of using your crew management services?",
        answer: "• Reduced downtime through efficient onboarding/offboarding\n• Compliance with global maritime standards\n• 24/7 operational support\n• Rapid response in emergencies\n• Transparent communication with shipowners and managers"
    },
    {
        question: "Can you handle large-scale or frequent crew rotations?",
        answer: "Yes. We are equipped to manage high-volume crew changes, whether for bulk carriers, tankers, container ships, or project cargo vessels. Our scalable operations ensure reliable service regardless of frequency or crew size."
    },
    {
        question: "What makes Moon Navigation and Trading Co. different?",
        answer: "• Full-service coverage: From documentation to repatriation\n• Strict compliance focus: IMO, MLC 2006, port state regulations\n• Emergency readiness: Fast response for unforeseen crew issues\n• Proven expertise: Years of experience across multiple vessel types\n• 24/7 support: Reliable, round-the-clock assistance"
    },
    {
        question: "What are transit spare parts?",
        answer: "Transit spare parts are critical replacement components transported to vessels or maintenance sites to ensure continued operations. They are essential for timely repairs, upgrades, or replacements while the vessel is docked or operating."
    },
    {
        question: "Do you handle spare parts arriving by air or sea?",
        answer: "Yes, we coordinate the reception of spare parts arriving by both air and sea. We work closely with airports, ports, courier services, freight forwarders, and shipping lines to ensure smooth handling and delivery."
    },
    {
        question: "Can you deliver spare parts offshore?",
        answer: "Absolutely. We provide both portside and offshore delivery, including ship-to-ship transfers if required, ensuring the spare parts reach your vessel wherever it is located."
    },
    {
        question: "Do you offer customs clearance services for imported spare parts?",
        answer: "Yes. We manage the entire customs clearance process, including document verification, duty exemption handling (if applicable), and coordination with port and airport authorities for a fast release."
    },
    {
        question: "How fast can spare parts be delivered to a vessel?",
        answer: "Delivery speed depends on the point of origin, customs procedures, and vessel location, but our process is built for urgency. We offer 24/7 operations, real-time tracking, and emergency delivery capabilities to minimize downtime."
    },
    {
        question: "How do I know when my spare parts will arrive?",
        answer: "We provide tracking updates and proactive communication throughout the process to keep you fully informed from reception to final delivery."
    },
    {
        question: "Do you offer inventory or warehousing services?",
        answer: "Yes, we can temporarily store spare parts in our designated warehouses if immediate delivery is not possible. This helps in coordinating delivery with the vessel's schedule."
    },
    {
        question: "What types of spare parts do you handle?",
        answer: "We handle all types of vessel and machinery spare parts, including engine components, navigation systems, electrical equipment, safety gear, and more. If it is critical to your vessel's operation, we can handle it."
    },
    {
        question: "How do I request a transit spare parts quotation?",
        answer: "You can request a quote through our Quotation by Request system. Simply fill out the form on our website, and our team will review and respond promptly with a customized offer tailored to your requirements."
    },
    {
        question: "Why should I choose Moon Navigation and Trading Co. for transit spare parts?",
        answer: "Because we offer:\n• Fast and reliable delivery\n• Full customs clearance handling\n• Offshore and port delivery capability\n• 24/7 operational support\n• Real-time tracking and transparent communication"
    },
    {
        question: "What ports do you provide bunkering and oil supply services at?",
        answer: "We offer bunkering and oil supply services at all Egyptian ports and offshore locations. Services at international ports can also be arranged upon request."
    },
    {
        question: "What types of marine fuel do you supply?",
        answer: "We supply a wide range of marine fuels including:\n• Very Low Sulfur Fuel Oil (VLSFO) - IMO 2020 compliant\n• Marine Gas Oil (MGO) and Marine Diesel Oil (MDO)\n• Heavy Fuel Oil (HFO)\n• Liquefied Natural Gas (LNG) and other alternative fuels"
    },
    {
        question: "What bunkering methods are available?",
        answer: "We offer several bunkering methods to suit your vessel's situation:\n• Ship-to-Ship (STS) Transfer\n• Truck-to-Ship (TTS) Delivery\n• Pipeline Bunkering at port terminals"
    },
    {
        question: "Are your fuel and oil supplies compliant with IMO and environmental regulations?",
        answer: "Yes. All fuels and lubricants we supply comply with the latest IMO and MARPOL standards, including sulfur content regulations and proper environmental handling procedures."
    },
    {
        question: "What types of lubricants do you provide for vessels?",
        answer: "We supply a comprehensive range of marine lubricants, including:\n• Main engine and auxiliary engine oils\n• Hydraulic and gear oils\n• Cylinder lubricants\n• Turbine and compressor lubricants\n• Specialty greases and fluids"
    },
    {
        question: "Do you offer delivery of oils and lubricants offshore or only at ports?",
        answer: "We deliver both at ports and offshore locations, ensuring timely delivery wherever your vessel is located."
    },
    {
        question: "What items are included in your ship chandlery services?",
        answer: "Our chandlery services include:\n• Deck & engine supplies (e.g. ropes, tools, safety gear)\n• Fresh provisions and catering supplies\n• Bonded stores and duty-free items\n• Medical, hygiene, and cleaning supplies"
    },
    {
        question: "Can I request specific brands or product types for oils, provisions, or equipment?",
        answer: "Yes. We work closely with you to source specific brands or items according to your preferences and vessel requirements."
    },
    {
        question: "How quickly can you deliver supplies to a vessel?",
        answer: "Delivery time depends on location and supply availability, but we offer fast, efficient service with 24/7 availability and priority delivery for urgent requests."
    },
    {
        question: "How do I request a quote for bunkering, oil supply, or chandlery services?",
        answer: "Simply fill out our Quotation by Request form online. Once submitted, our team reviews your request and sends a customized quote directly to your email with accurate pricing and delivery options."
    },
    {
        question: "What types of shipments qualify for Special Services?",
        answer: "Special Services are ideal for shipments requiring non-standard handling, including fragile cargo, oversized items, high-value goods, time-sensitive deliveries, temperature-controlled transport, and hazardous materials."
    },
    {
        question: "How do I request a quote for Special Services?",
        answer: "You can request a quote by filling out our simple Quotation by Request form. Our team will assess your specific needs and send you a customized quotation directly to your email."
    },
    {
        question: "Are your Special Services available internationally?",
        answer: "Yes. Moon Navigation and Trading Co. offers Special Services for both domestic and international shipments, ensuring compliance with global regulations."
    },
    {
        question: "Do you provide customized packaging options?",
        answer: "Absolutely. We offer tailored packaging solutions designed to ensure product safety and integrity throughout transit, including shock-resistant, temperature-controlled, and IMO-compliant packaging."
    },
    {
        question: "Can Special Services be used for urgent or expedited shipments?",
        answer: "Yes. We offer fast-track and priority handling options for urgent shipments, ensuring timely delivery without compromising safety or quality."
    },
    {
        question: "Is there a minimum shipment size for Special Services?",
        answer: "No. We accommodate shipments of all sizes—from small packages with specific handling requirements to large-scale cargo needing customized logistics solutions."
    },
    {
        question: "What makes Moon Navigation and Trading Co. different?",
        answer: "We combine industry expertise, regulatory compliance, 24/7 customer support, and fully tailored logistics solutions to ensure your cargo is handled with precision and care—wherever and whenever needed."
    },
    {
        question: "Are your Special Services compliant with maritime regulations?",
        answer: "Yes. We adhere to IMO, ISM, MARPOL, and all relevant port and international logistics regulations to ensure full compliance and safe operations."
    },
    {
        question: "Can I speak to someone before submitting a request?",
        answer: "Of course. Our team is available 24/7 to assist you. You can reach out through our contact form, email, or phone number to discuss your needs before requesting a quote."
    },
    {
        question: "How do you ensure the safety of high-value or sensitive cargo?",
        answer: "We use industry-leading handling techniques, trained personnel, secure packaging, and end-to-end monitoring to ensure the safety and integrity of high-value or sensitive shipments."
    }

];

export default function FAQSearch() {
    const [search, setSearch] = useState("");
    const faqs = defaultFAQs;

    const filteredFAQs = useMemo(() => {
        if (!search.trim()) return [];
        const lower = search.toLowerCase();
        const filtered = faqs.filter(
            (faq) =>
                faq.question.toLowerCase().includes(lower) ||
                faq.answer.toLowerCase().includes(lower)
        );
        console.log('Search term:', search);
        console.log('Filtered results:', filtered.length);
        return filtered;
    }, [search, faqs]);

    return (
        <div id="faq" className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                <Input
                    type="text"
                    placeholder="Search for answers..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="mb-6"
                />
            </div>

            {search.trim() ? (
                <div className="max-h-[300px] overflow-y-auto">
                    {filteredFAQs.length > 0 ? (
                        <Accordion type="single" collapsible className="w-full">
                            {filteredFAQs.map((faq, idx) => (
                                <AccordionItem value={`faq-${idx}`} key={idx}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    ) : (
                        <div className="text-muted-foreground py-8 text-center">
                            No answers found for "{search}"
                        </div>
                    )}
                </div>
            ) : (
                <div className="max-h-[300px] overflow-y-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs
                            .sort(() => Math.random() - 0.5)
                            .slice(0, 3)
                            .map((faq, idx) => (
                                <AccordionItem value={`faq-${idx}`} key={idx}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                    </Accordion>
                </div>
            )}
        </div>
    );
}
