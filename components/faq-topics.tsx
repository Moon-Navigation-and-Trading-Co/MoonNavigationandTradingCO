"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Ship, 
  Truck, 
  Plane, 
  Container, 
  Globe, 
  Shield, 
  Anchor, 
  Package,
  Building,
  Users,
  FileText,
  Settings,
  Search,
  X
} from "lucide-react";
import { Input } from "./ui/input";

// Import complete FAQ data from the main FAQ component
const defaultFAQs = [
    // About Us section
    {
        question: "What services does Moon Navigation and Trading Co. Offer?",
        answer: "At Moon Navigation and Trading Co., we provide freight, maritime, and logistics solutions across all Egyptian ports and the Suez transit canal. We handle ocean, air, and inland freight, including FCL, LCL, breakbulk, RoRo, oversized, and dangerous goods. As a licensed ship agent, we offer port call management, customs clearance, crew change, bunkering, and ship chandlery. Our logistics services cover ship management, docking, stevedoring, and transit spare parts delivery. We also support international trade, customs compliance, and risk management, ensuring seamless operations and global market access.",
        category: "about-us"
    },
    {
        question: "Where are your headquarters located?",
        answer: "We are headquartered in Egypt and operate regionally and internationally through a wide logistics and port network.",
        category: "about-us"
    },
    {
        question: "Can you customize services to my business needs?",
        answer: "Yes, all our logistics and shipping solutions are fully tailored to meet your operational and commercial objectives.",
        category: "about-us"
    },
    {
        question: "How can I request a quotation?",
        answer: "You can request a quote by filling out the online form on our website, providing details about your required services. A tailored quotation will be sent to your email promptly.",
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
        answer: "While our base is in Egypt, we operate globally through strategic partnerships and a vast logistics network, enabling us to support imports, exports, and transit cargo worldwide.",
        category: "popular"
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
        answer: "Ship management is the end-to-end supervision of vessel operations including crewing, maintenance, safety, compliance, and finances. It ensures vessels operate efficiently, remain seaworthy, and adhere to international regulations such as ISM, MARPOL, SOLAS, and STCW.",
        category: "ship-management"
    },
    {
        question: "What types of ship management services do you provide?",
        answer: "We offer a full spectrum of services: Technical Management, Crew Management, Operational Management, Safety & Quality Management, Procurement & Supply Chain, Dry Docking & Project Management, Insurance & Claims Handling, Financial Management & Budget Control, Fuel & Provision Management, Regulatory Compliance & Certification, Customized Ship Management Solutions",
        category: "ship-management"
    },
    {
        question: "Do you offer full or partial ship management options?",
        answer: "Yes. We offer both full management packages and customized solutions. Owners can choose only the services they need, such as technical, crewing, or compliance support.",
        category: "ship-management"
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
        answer: "Yes. We handle: P&I Club coordination, Hull and machinery claims, Cargo damage claims, Third-party liability claims, Claims documentation and follow-up"
    },
    {
        question: "What happens during dry docking?",
        answer: "Dry docking involves: Vessel inspection and assessment, Hull cleaning and painting, Mechanical and electrical repairs, Regulatory inspections and certifications, Safety equipment testing and maintenance"
    },
    {
        question: "How do you manage costs and financial planning?",
        answer: "We provide: Budget planning and cost control, Financial reporting and analysis, Cost optimization strategies, Transparent billing and invoicing, Regular financial reviews with clients"
    },
    {
        question: "Why should I choose Moon Navigation and Trading Co.?",
        answer: "We offer: Comprehensive maritime expertise, Global network and partnerships, Competitive pricing and transparent costs, 24/7 support and emergency response, Proven track record and client satisfaction, Customized solutions for your specific needs"
    },

    // Docking & Maintenance
    {
        question: "What is docking in ship management?",
        answer: "Docking is the process of bringing a vessel into a dock or berth for inspection, repair, maintenance, or overhaul. It includes dry docking, where the vessel is lifted out of the water, and wet docking, where repairs are done afloat.",
        category: "docking-maintenance"
    },
    {
        question: "What is the difference between dry docking and wet docking?",
        answer: "Dry Docking: The vessel is taken out of the water for major repairs, hull cleaning, painting, structural maintenance, and regulatory inspections. Wet Docking: Repairs and servicing are performed while the vessel remains afloat, ideal for minor fixes and maintenance without interrupting operations.",
        category: "docking-maintenance"
    },
    {
        question: "What types of vessels do you serve?",
        answer: "We handle docking and maintenance for a wide range of vessels, including: Cargo Ships & Container Vessels, Bulk Carriers & Tankers, Offshore Support Vessels (OSVs), Fishing & Research Vessels, Passenger & Cruise Ships, Tugboats & Barges",
        category: "docking-maintenance"
    },
    {
        question: "What services are included in your dry docking solutions?",
        answer: "Our dry docking services include: Hull inspection and cleaning, Propeller and rudder maintenance, Ballast tank inspection and repair, Structural repairs and reinforcements, Safety equipment testing and certification"
    },
    {
        question: "What is involved in your port docking and berthing services?",
        answer: "We provide: Berth allocation and scheduling, Pilotage and towage coordination, Mooring and unmooring services, Port clearance and documentation, Real-time vessel monitoring and support"
    },
    {
        question: "What is included in your emergency docking services?",
        answer: "Emergency docking includes: 24/7 emergency response, Rapid berth allocation, Emergency repairs and temporary fixes, Coordination with port authorities and emergency services, Post-emergency assessment and documentation"
    },
    {
        question: "What does vessel maintenance include?",
        answer: "Our vessel maintenance services cover: Preventive Maintenance (routine checks and servicing), Corrective Maintenance (quick repair of issues), Condition-Based Monitoring (using sensors and diagnostics)"
    },
    {
        question: "What are your capabilities for engine and mechanical repair?",
        answer: "We provide: Engine overhaul and maintenance, Propulsion system repairs, Auxiliary machinery maintenance, Fuel system servicing, Cooling and lubrication system maintenance"
    },
    {
        question: "How do you ensure hull and structural integrity?",
        answer: "We conduct: Regular hull inspections and thickness measurements, Structural repairs and reinforcements, Corrosion protection and treatment, Welding and fabrication services, Non-destructive testing (NDT)"
    },
    {
        question: "Do you provide support for electrical and automation systems?",
        answer: "Yes. We handle: Electrical system maintenance and repair, Automation and control system upgrades, Navigation and communication equipment, Power generation and distribution, Safety and alarm systems"
    },
    {
        question: "How do you manage environmental compliance and waste?",
        answer: "We ensure: Compliance with MARPOL regulations, Proper waste disposal and treatment, Ballast water management, Air emission control, Environmental monitoring and reporting"
    },
    {
        question: "What fuel system services do you offer?",
        answer: "We provide: Fuel system maintenance and repair, Fuel quality testing and treatment, Fuel consumption optimization, Bunker planning and coordination, Fuel efficiency monitoring"
    },
    {
        question: "Do you service safety and life-saving equipment?",
        answer: "Yes. We maintain: Lifeboats and life rafts, Firefighting equipment, Emergency lighting and alarms, Personal protective equipment, Safety signage and instructions"
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for docking and maintenance?",
        answer: "We offer: Experienced technical team, Modern equipment and facilities, Competitive pricing, 24/7 emergency support, Quality assurance and certification, Comprehensive documentation and reporting"
    },

    // International Trading
    {
        question: "What is international trading?",
        answer: "International trading involves the exchange of goods and services across national borders, including import/export operations, customs clearance, documentation, and compliance with international trade regulations.",
        category: "international-trading"
    },
    {
        question: "What international trade services do you provide?",
        answer: "We offer: Import/export operations, Customs clearance and documentation, Trade compliance and regulatory support, International payment solutions, Supply chain management, Market entry and expansion support",
        category: "international-trading"
    },
    {
        question: "Can you help with customs clearance?",
        answer: "Yes. We provide: Customs documentation preparation, Duty calculation and payment, Import/export license applications, Compliance verification, Customs inspection coordination",
        category: "international-trading"
    },
    {
        question: "How do you manage international payment risks?",
        answer: "We offer: Letters of credit (LC) facilitation, Payment security solutions, Currency exchange services, Trade finance options, Risk assessment and mitigation strategies"
    },
    {
        question: "Do you offer both FCL and LCL freight services?",
        answer: "Yes. We provide both Full Container Load (FCL) and Less than Container Load (LCL) services to meet different cargo volume requirements and optimize costs for our clients."
    },
    {
        question: "What trade compliance support do you offer?",
        answer: "We provide: Regulatory compliance guidance, Documentation verification, Risk assessment, Training and education, Ongoing compliance monitoring"
    },
    {
        question: "Can you help my business expand into new international markets?",
        answer: "Yes. We offer: Market research and analysis, Entry strategy development, Regulatory compliance guidance, Local partnership facilitation, Ongoing market support"
    },
    {
        question: "What kind of cargo can you handle?",
        answer: "We handle: General cargo, Specialized equipment, Dangerous goods, Temperature-controlled cargo, Oversized and heavy lift cargo, Project cargo"
    },
    {
        question: "Do you offer warehousing and storage solutions?",
        answer: "Yes. We provide: Bonded and non-bonded warehousing, Temperature-controlled storage, Hazardous goods storage, Inventory management, Cross-docking services"
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for international trade?",
        answer: "We offer: Global network and partnerships, Experienced trade specialists, Competitive pricing, Comprehensive logistics solutions, 24/7 customer support, Proven track record in international trade"
    },

    // Inland Freight
    {
        question: "What is inland freight?",
        answer: "Inland freight refers to the transportation of goods within a country or region using road, rail, and inland waterway networks, connecting ports, airports, and distribution centers.",
        category: "inland-freight"
    },
    {
        question: "What types of inland freight transportation do you offer?",
        answer: "We provide: Road transport (FTL and LTL), Rail freight services, Inland waterway transport, Intermodal solutions, Last-mile delivery services",
        category: "inland-freight"
    },
    {
        question: "What cargo types can you handle?",
        answer: "We handle: General cargo, Heavy and oversized cargo, Dangerous goods, Temperature-controlled cargo, Bulk cargo, Project cargo"
    },
    {
        question: "What is the advantage of intermodal freight transport?",
        answer: "Intermodal transport offers: Cost efficiency through optimized routes, Reduced carbon footprint, Flexibility in transportation modes, Better reliability and scheduling, Reduced handling and damage risks"
    },
    {
        question: "What is the difference between FTL and LTL trucking services?",
        answer: "FTL (Full Truck Load): Dedicated truck for your cargo, faster delivery, higher cost. LTL (Less than Truck Load): Shared truck space, cost-effective for smaller shipments, longer transit times."
    },
    {
        question: "How do you transport oversized or heavy cargo?",
        answer: "We use: Specialized heavy-lift equipment, Route planning and permits, Escort vehicles when required, Real-time tracking and monitoring, Expert handling and securing"
    },
    {
        question: "Are you equipped to transport dangerous goods?",
        answer: "Yes. We have: Certified dangerous goods transport, Proper documentation and labeling, Trained personnel, Emergency response protocols, Compliance with safety regulations"
    },
    {
        question: "What are the benefits of rail freight over road transport?",
        answer: "Rail freight offers: Lower carbon emissions, Cost efficiency for long distances, High capacity for bulk cargo, Reduced road congestion, Reliable scheduling"
    },
    {
        question: "Why use inland waterway transport?",
        answer: "Inland waterway transport provides: Cost-effective bulk transport, Reduced environmental impact, High capacity for heavy cargo, Reliable scheduling, Access to inland ports"
    },
    {
        question: "Can you handle customs and documentation for inland freight?",
        answer: "Yes. We provide: Customs documentation preparation, Border crossing coordination, Regulatory compliance, Documentation verification, Real-time status updates"
    },
    {
        question: "How do you ensure the safety of cargo in transit?",
        answer: "We ensure: Proper cargo securing and lashing, Real-time tracking and monitoring, Insurance coverage, Regular driver training, Quality control procedures"
    },
    {
        question: "Do you support last-mile delivery for inland freight?",
        answer: "Yes. We provide: Final delivery to consignee, Installation and setup services, Reverse logistics, Customer service support, Delivery confirmation and documentation"
    },
    {
        question: "How do you calculate inland freight rates?",
        answer: "Our rates are based on: Distance and route, Cargo weight and volume, Special handling requirements, Fuel costs and market conditions, Service level requirements"
    },
    {
        question: "What documents are required for inland freight transport?",
        answer: "Required documents include: Commercial invoice, Packing list, Transport documents, Insurance certificates, Special permits (if applicable)"
    },
    {
        question: "Can I ship cargo to landlocked countries or remote areas?",
        answer: "Yes. We provide: Multi-modal transport solutions, Border crossing coordination, Local partner networks, Specialized equipment for remote areas, End-to-end logistics support"
    },
    {
        question: "How long does inland freight delivery take?",
        answer: "Delivery times vary by: Distance and route, Cargo type and handling requirements, Customs clearance (if applicable), Weather and road conditions, Service level selected"
    },
    {
        question: "Do you provide insurance for inland freight shipments?",
        answer: "Yes. We offer: Cargo insurance coverage, Liability protection, All-risk coverage options, Claims assistance, Insurance documentation"
    },
    {
        question: "Can I schedule regular or recurring inland shipments?",
        answer: "Yes. We provide: Regular route scheduling, Volume discounts, Dedicated equipment, Priority handling, Customized service agreements"
    },
    {
        question: "Why choose Moon Navigation and Trading Co. for inland freight?",
        answer: "We offer: Comprehensive inland network, Experienced logistics team, Competitive pricing, Real-time tracking, 24/7 customer support, Quality assurance"
    },

    // Air Freight
    {
        question: "What is air freight and why should I use it?",
        answer: "Air freight is the transportation of goods by aircraft, offering the fastest delivery times for urgent shipments, high-value cargo, and time-sensitive materials.",
        category: "air-freight"
    },
    {
        question: "What types of air freight services do you offer?",
        answer: "We provide: Express air freight, Standard air freight, Temperature-controlled air freight, Dangerous goods air freight, Charter services, Sea-air solutions",
        category: "air-freight"
    },
    {
        question: "What kind of cargo can you handle via air freight?",
        answer: "We handle: General cargo, High-value items, Temperature-sensitive goods, Dangerous goods, Oversized cargo, Urgent shipments"
    },
    {
        question: "How do you handle temperature-sensitive cargo?",
        answer: "We provide: Temperature-controlled containers, Real-time temperature monitoring, Cold chain management, Specialized handling procedures, Documentation and compliance"
    },
    {
        question: "Are you certified to ship dangerous goods?",
        answer: "Yes. We have: IATA dangerous goods certification, Proper packaging and labeling, Trained personnel, Compliance with international regulations, Emergency response protocols"
    },
    {
        question: "Can you handle oversized or heavy air cargo?",
        answer: "Yes. We provide: Specialized equipment and handling, Route planning and permits, Charter aircraft when needed, Expert loading and securing, Real-time tracking"
    },
    {
        question: "What are Sea-Air solutions and how can they benefit my business?",
        answer: "Sea-Air solutions combine ocean and air transport, offering: Cost optimization, Faster delivery than sea-only, Lower cost than air-only, Flexibility in routing, Reduced transit times"
    },
    {
        question: "Do you assist with customs clearance and documentation?",
        answer: "Yes. We provide: Customs documentation preparation, Duty calculation and payment, Import/export license applications, Compliance verification, Customs inspection coordination"
    },
    {
        question: "How do you ensure the security of shipments?",
        answer: "We ensure: Secure facilities and handling, Real-time tracking and monitoring, Insurance coverage, Quality control procedures, Compliance with security regulations"
    },
    {
        question: "What industries do you serve?",
        answer: "We serve: Automotive, Electronics, Pharmaceuticals, Fashion and retail, Aerospace, Manufacturing, E-commerce, Healthcare"
    },
    {
        question: "How much does air freight cost?",
        answer: "Air freight costs depend on: Cargo weight and volume, Distance and route, Service level required, Fuel costs and market conditions, Special handling requirements"
    },
    {
        question: "How long does air freight take?",
        answer: "Air freight delivery times: Express: 1-3 days, Standard: 3-7 days, Charter: As required, Sea-air: 7-14 days, depending on routing and service level"
    },
    {
        question: "Can individuals ship personal items via air freight?",
        answer: "Yes. We provide: Personal effects shipping, Household goods transport, Relocation services, Insurance coverage, Door-to-door delivery"
    },
    {
        question: "What makes Moon Navigation & Trading Co. different?",
        answer: "We offer: Global network and partnerships, Experienced air freight specialists, Competitive pricing, Comprehensive logistics solutions, 24/7 customer support, Proven track record in air freight"
    },

    // Investment Opportunities
    {
        question: "What types of investment opportunities do you offer?",
        answer: "We offer various maritime investment opportunities including vessel ownership, container leasing, port infrastructure projects, and logistics partnerships. Each investment is backed by real operations with growth potential and measurable KPIs.",
        category: "investment"
    },
    {
        question: "What is the minimum investment amount required?",
        answer: "Minimum investment amounts vary by opportunity, typically starting from $10,000 for smaller projects up to $1M+ for major infrastructure investments. We offer flexible investment structures to accommodate different investor profiles.",
        category: "investment"
    },
    {
        question: "Are these investments secure?",
        answer: "Yes. Most investment opportunities are asset-backed (e.g., vessels, containers, infrastructure), offering tangible security. We also provide structured agreements, clear ROI terms, and regular reporting for full transparency.",
        category: "investment"
    },
    {
        question: "Can I invest passively, without being involved in operations?",
        answer: "Yes. We offer passive investment options where we handle all operational aspects, including vessel management, maintenance, chartering, and financial reporting. Investors receive regular updates and returns without operational involvement."
    },
    {
        question: "What returns can I expect?",
        answer: "Returns vary by investment type: Vessel investments: 8-15% annually, Container leasing: 6-12% annually, Infrastructure projects: 10-20% over project term, Portfolio diversification options available."
    },
    {
        question: "How long is the investment term?",
        answer: "Investment terms range from: Short-term (6-12 months) for container leasing, Medium-term (2-5 years) for vessel investments, Long-term (5-10 years) for infrastructure projects, Flexible exit options available."
    },
    {
        question: "Can I exit or sell my investment later?",
        answer: "Yes. We provide: Secondary market options, Buy-back programs, Portfolio transfers, Structured exit strategies, Regular liquidity assessments"
    },
    {
        question: "Will I receive regular financial reports?",
        answer: "Yes. We provide: Monthly performance reports, Quarterly financial statements, Annual audits, Real-time portfolio tracking, Transparent reporting on all investments"
    },
    {
        question: "Who manages the operations related to my investment?",
        answer: "Our experienced team manages: Vessel operations and maintenance, Charter negotiations and management, Financial planning and reporting, Regulatory compliance, Risk management and insurance"
    },
    {
        question: "How do I get started with investing?",
        answer: "Getting started is easy: Contact our investment team, Review available opportunities, Complete due diligence, Sign investment agreement, Begin receiving returns and reports"
    },
    {
        question: "Is Moon Navigation & Trading Co. licensed and legally registered?",
        answer: "Yes. We are fully licensed and registered in Egypt, with all necessary permits and certifications for maritime operations, financial services, and international trade."
    },
    {
        question: "Can foreign or non-Egyptian investors participate?",
        answer: "Yes. We welcome international investors and provide: Multi-currency investment options, International banking relationships, Cross-border investment structures, Regulatory compliance support, Local market expertise"
    },
    {
        question: "What industries or sectors do your investment opportunities cover?",
        answer: "Our investments cover: Maritime & Shipping, Port Infrastructure & Development, Logistics & Warehousing, International Trading, Vessel Operations and Maintenance. Each project is backed by real operations with growth potential and measurable KPIs."
    },
    {
        question: "Are your investment opportunities Sharia-compliant?",
        answer: "Yes. We offer Sharia-compliant investment structures including: Asset-backed investments, Profit-sharing arrangements, No interest-based financing, Ethical investment screening, Islamic finance compliance"
    },

    // Container Services
    {
        question: "What types of containers do you offer?",
        answer: "We offer: Standard containers (20ft, 40ft, 40ft HC), Refrigerated containers (reefers), Open-top containers, Flat rack containers, Tank containers, Specialized containers for specific cargo types",
        category: "container-services"
    },
    {
        question: "Can I rent containers on a short-term basis?",
        answer: "Yes. We offer flexible rental options including: Daily, weekly, monthly rentals, Long-term lease agreements, Custom rental periods, Volume discounts for multiple containers"
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

    // Vessel Services
    {
        question: "What types of vessels do you offer?",
        answer: "We provide a wide range of vessels for sale and rent, including: Tankers, General Cargo Vessels, Bulk Carriers, Container Ships, Offshore Support Vessels (OSVs), Tugboats and Barges, Landing Craft & Ro-Ro Vessels, Crew Boats & Utility Boats",
        category: "ocean-freight"
    },
    {
        question: "Can I rent a vessel for a short period?",
        answer: "Yes, our rental options are highly flexible. We offer daily, monthly, and long-term charters, including: Time Charter, Voyage Charter, Bareboat Charter, Project Charter",
        category: "ocean-freight"
    },
    {
        question: "Is maintenance included with vessel rentals?",
        answer: "Yes, routine maintenance and repairs are included in most charter agreements to ensure smooth operations throughout the rental period.",
        category: "ocean-freight"
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

    // Ship Agency Services
    {
        question: "How do I request a PDA (Proforma Disbursement Account)?",
        answer: "To request a PDA, contact our ship agency team with your vessel details, ETA, and port requirements. We'll provide a detailed cost estimate including port dues, pilotage, towage, and other charges. The PDA helps you budget for port call expenses.",
        category: "ship-agency"
    },
    {
        question: "How do you support vessels transiting the Suez Canal?",
        answer: "Our Suez Canal transit services include pre-transit planning and documentation, on-transit pilotage and real-time vessel monitoring, emergency response support, and post-passage disbursement finalization. We ensure smooth passage through the canal with full regulatory compliance.",
        category: "ship-agency"
    },
    {
        question: "What types of vessels do you serve?",
        answer: "We specialize in handling: Bulk carriers, Tankers, Container ships, RORO vessels, Project cargo vessels",
        category: "ship-agency"
    },
    {
        question: "How do you support vessels transiting the Suez Canal?",
        answer: "We provide: Pre-transit planning and documentation, On-transit pilotage and real-time vessel monitoring, Emergency response support, Post-passage disbursement finalization and next-port coordination",
        category: "ship-agency"
    },
    {
        question: "What documents are required for Suez Canal transit?",
        answer: "We handle all necessary documents, including: Transit permits, Vessel particulars, Customs clearance, Crew documentation. We ensure full compliance with local and international maritime regulations.",
        category: "ship-agency"
    },
    {
        question: "How do you calculate Suez Canal toll fees?",
        answer: "We provide a detailed toll fee estimation based on your vessel's specifications and cargo. We also assist in processing payments to avoid clearance delays.",
        category: "ship-agency"
    },
    {
        question: "What emergency support do you provide during transit?",
        answer: "We provide: Certified pilot coordination, Continuous monitoring of your vessel, Emergency support in case of mechanical or navigation issues. Our team remains in contact with both your vessel and the SCA throughout the passage.",
        category: "ship-agency"
    },
    {
        question: "What happens after the vessel completes the canal transit?",
        answer: "We: Finalize the disbursement account (FDA), Clear any outstanding port charges, Coordinate your vessel's clearance and readiness for the next port call. All post-transit logistics are handled to ensure a seamless continuation of your voyage.",
        category: "ship-agency"
    },
    {
        question: "How do you handle crew changes and documentation?",
        answer: "We manage: Crew visa applications and travel arrangements, Immigration and customs clearance, Documentation and certification verification, Accommodation and transportation logistics. Our goal is to reduce downtime and ensure your vessel remains on schedule.",
        category: "ship-agency"
    },
    {
        question: "What special services do you offer by case?",
        answer: "We provide: Emergency repairs and technical support, Specialized cargo handling, Custom documentation and clearance, VIP or priority services, Specialized equipment and personnel. Each case is handled with personalized attention and expertise.",
        category: "ship-agency"
    }
];

interface TopicCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
  questions: number;
  sampleQuestions: string[];
  category: string;
  subTopics?: string[];
}

const topicCards: TopicCard[] = [
  {
    id: "ocean-freight",
    title: "Ocean Freight",
    description: "Comprehensive maritime transport including project cargo, RoRo, breakbulk, dangerous goods, heavy lift, livestock, and tankers.",
    icon: <Ship className="w-8 h-8" />,
    href: "/faq?topic=ocean-freight",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    questions: 120,
    category: "ocean-freight",
    subTopics: [
      "Project Cargo",
      "Roll On Roll Off (RORO)", 
      "Breakbulk Cargo",
      "Dangerous Cargo",
      "Heavy Lift Cargo",
      "Livestock Transportation",
      "Tankers"
    ],
    sampleQuestions: [
      "What types of vessels do you offer?",
      "What vessels do you use for transport?",
      "What safety measures do you implement for dangerous goods transport?"
    ]
  },
  {
    id: "air-freight",
    title: "Air Freight",
    description: "Express air cargo, temperature-controlled shipments, and urgent delivery services.",
    icon: <Plane className="w-8 h-8" />,
    href: "/faq?topic=air-freight",
    color: "bg-green-50 border-green-200 hover:bg-green-100",
    questions: 32,
    category: "air-freight",
    sampleQuestions: [
      "What air freight services do you provide?",
      "How do you handle temperature-sensitive cargo?",
      "Are you certified to ship dangerous goods?"
    ]
  },
  {
    id: "inland-freight",
    title: "Inland Freight",
    description: "Road, rail, and inland waterway transportation across Egypt and beyond.",
    icon: <Truck className="w-8 h-8" />,
    href: "/faq?topic=inland-freight",
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
    questions: 28,
    category: "inland-freight",
    sampleQuestions: [
      "What inland freight services do you offer?",
      "How do you transport oversized or heavy cargo?",
      "What are the benefits of rail freight over road transport?"
    ]
  },
  {
    id: "container-services",
    title: "Container Services",
    description: "FCL, LCL, oversized containers, out of gauge cargo, inland container, and HSS services.",
    icon: <Container className="w-8 h-8" />,
    href: "/faq?topic=container-services",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
    questions: 85,
    category: "container-services",
    subTopics: [
      "Less Than Container Load (LCL)",
      "Full Container Load (FCL)",
      "Oversized Containers",
      "Out of Gauge Cargo",
      "Inland Container",
      "Container HSS Services"
    ],
    sampleQuestions: [
      "What is the difference between FCL and LCL shipping?",
      "How do you handle oversized and out-of-gauge cargo?",
      "What inland container services do you provide?"
    ]
  },
  {
    id: "international-trading",
    title: "International Trading",
    description: "Import/export services, customs clearance, and trade compliance.",
    icon: <Globe className="w-8 h-8" />,
    href: "/faq?topic=international-trading",
    color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
    questions: 25,
    category: "international-trading",
    sampleQuestions: [
      "What international trading services do you provide?",
      "What customs clearance services do you offer?",
      "How do you manage international payment risks?"
    ]
  },
  {
    id: "ship-agency",
    title: "Ship Agency",
    description: "PDA requests, crew management, Suez Canal transit, spare parts, bunkering, and special services.",
    icon: <Anchor className="w-8 h-8" />,
    href: "/faq?topic=ship-agency",
    color: "bg-teal-50 border-teal-200 hover:bg-teal-100",
    questions: 65,
    category: "ship-agency",
    subTopics: [
      "Request for a PDA",
      "Sign On/Off Crew Members",
      "Suez Canal Transit Passage",
      "Transit Spare Parts",
      "Bunkering | Oil Supply | Ship Chandlery",
      "Special Services by Case"
    ],
    sampleQuestions: [
      "How do I request a PDA (Proforma Disbursement Account)?",
      "How do you support vessels transiting the Suez Canal?",
      "What bunkering and fuel supply services do you offer?"
    ]
  },
  {
    id: "customs-clearance",
    title: "Customs Clearance",
    description: "Documentation, compliance, and customs processing services.",
    icon: <FileText className="w-8 h-8" />,
    href: "/faq?topic=customs-clearance",
    color: "bg-pink-50 border-pink-200 hover:bg-pink-100",
    questions: 30,
    category: "customs-clearance",
    sampleQuestions: [
      "What customs clearance services do you offer?",
      "How long does the customs clearance process take?",
      "Do you handle customs clearance for hazardous cargo?"
    ]
  },
  {
    id: "ship-management",
    title: "Ship Management",
    description: "Technical management, crew services, and vessel operations.",
    icon: <Settings className="w-8 h-8" />,
    href: "/faq?topic=ship-management",
    color: "bg-gray-50 border-gray-200 hover:bg-gray-100",
    questions: 20,
    category: "ship-management",
    sampleQuestions: [
      "What types of ship management services do you provide?",
      "How does your crew management process work?",
      "What is included in your technical management service?"
    ]
  },
  {
    id: "docking-maintenance",
    title: "Docking & Maintenance",
    description: "Dry docking, vessel maintenance, and repair services.",
    icon: <Building className="w-8 h-8" />,
    href: "/faq?topic=docking-maintenance",
    color: "bg-cyan-50 border-cyan-200 hover:bg-cyan-100",
    questions: 16,
    category: "docking-maintenance",
    sampleQuestions: [
      "What is the difference between dry docking and wet docking?",
      "What types of vessels do you serve?",
      "What does vessel maintenance include?"
    ]
  },
  {
    id: "investment",
    title: "Investment Opportunities",
    description: "Maritime investment options and partnership opportunities.",
    icon: <Users className="w-8 h-8" />,
    href: "/faq?topic=investment",
    color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
    questions: 12,
    category: "investment-opportunities",
    sampleQuestions: [
      "What types of investment opportunities do you offer?",
      "What is the minimum investment amount required?",
      "Are these investments secure?"
    ]
  }
];

export default function FAQTopics() {
  const [search, setSearch] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Filter FAQs based on search
  const filteredFAQs = useMemo(() => {
    if (!search.trim()) return [];
    const lower = search.toLowerCase();
    return defaultFAQs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lower) ||
        faq.answer.toLowerCase().includes(lower)
    );
  }, [search]);

  // Helper function to generate FAQ link
  const getFAQLink = (question: string, category?: string): string => {
    const baseUrl = category ? `/faq?topic=${category}` : '/faq';
    const faqId = question.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    return `${baseUrl}&faq=${faqId}`;
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          How can we help you?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Find answers to common questions about our maritime and logistics services
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by keywords, topics or questions"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowSearchResults(e.target.value.trim().length > 0);
              }}
              className="pl-12 pr-4 py-4 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
            />
            {search && (
              <button
                onClick={() => {
                  setSearch("");
                  setShowSearchResults(false);
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search Results */}
      {showSearchResults && (
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Search Results ({filteredFAQs.length} found)
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Click on any question to view the answer
                </p>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {filteredFAQs.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {filteredFAQs.map((faq, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-4 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <Link
                          href={getFAQLink(faq.question, faq.category)}
                          className="block"
                        >
                          <h4 className="text-blue-600 hover:text-blue-700 font-medium mb-2">
                            {faq.question}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {faq.answer.substring(0, 150)}...
                          </p>
                          <div className="flex items-center mt-2">
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              {faq.category?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'General'}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-gray-500 text-lg">
                      No answers found for &quot;{search}&quot;
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Try different keywords or browse our topics below
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Topic Cards - Only show when not searching */}
      {!showSearchResults && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {topicCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={card.href}>
              <div className={`group relative h-full p-6 rounded-lg border-2 transition-all duration-200 cursor-pointer ${card.color}`}>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 text-gray-700 group-hover:text-gray-900 transition-colors">
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Sub-topics (if available) */}
                {card.subTopics && (
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-gray-700 mb-2">Includes:</h4>
                    <div className="flex flex-wrap gap-1">
                      {card.subTopics.slice(0, 3).map((subTopic, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {subTopic}
                        </span>
                      ))}
                      {card.subTopics.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{card.subTopics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Sample Questions */}
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Common Questions:</h4>
                  {card.sampleQuestions.map((question, qIndex) => {
                    const questionId = question.toLowerCase()
                      .replace(/[^a-z0-9\s]/g, '') // Remove special characters but keep spaces
                      .replace(/\s+/g, '-') // Replace spaces with hyphens
                      .replace(/-+/g, '-') // Replace multiple hyphens with single
                      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
                    const questionLink = `${card.href}&faq=${questionId}`;
                    
                    return (
                      <div key={qIndex} className="flex items-start space-x-2">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                        <Link 
                          href={questionLink}
                          className="text-xs text-gray-600 hover:text-blue-600 leading-relaxed transition-colors duration-200 block"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card click when clicking question
                          }}
                        >
                          {question}
                        </Link>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-xs text-gray-500">
                    {card.questions} questions available
                  </span>
                  <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      )}

      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm">
          Can&apos;t find what you&apos;re looking for? 
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
            Contact our support team
          </Link>
        </p>
      </div>
    </section>
  );
}

// Alternative compact version for smaller screens
export function FAQTopicsCompact() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          Main Topics
        </h2>
        <p className="text-gray-600">
          Browse our most common service categories
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topicCards.slice(0, 9).map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link href={card.href}>
              <div className={`group p-4 rounded-lg border transition-all duration-200 cursor-pointer ${card.color}`}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex-shrink-0 text-gray-700 group-hover:text-gray-900 transition-colors">
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 group-hover:text-gray-800 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {card.questions} questions
                    </p>
                  </div>
                </div>
                
                {/* Compact Sample Questions */}
                <div className="space-y-1">
                  {card.sampleQuestions.slice(0, 2).map((question, qIndex) => {
                    const questionId = question.toLowerCase()
                      .replace(/[^a-z0-9\s]/g, '') // Remove special characters but keep spaces
                      .replace(/\s+/g, '-') // Replace spaces with hyphens
                      .replace(/-+/g, '-') // Replace multiple hyphens with single
                      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
                    const questionLink = `${card.href}&faq=${questionId}`;
                    
                    return (
                      <div key={qIndex} className="flex items-start space-x-2">
                        <div className="flex-shrink-0 w-1 h-1 bg-gray-400 rounded-full mt-1.5"></div>
                        <Link 
                          href={questionLink}
                          className="text-xs text-gray-600 hover:text-blue-600 leading-tight transition-colors duration-200 block"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card click when clicking question
                          }}
                        >
                          {question}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 