import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function PDABreakdownPage() {
  return (
    <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: "Raleway, sans-serif" }}>
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>PDA Breakdown</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Breakdown of our PDA – What It Includes
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Proforma Disbursement Account covers all critical cost components related to port operations, ensuring clarity in financial planning. Below is a detailed breakdown of what is included.
            </p>
          </div>
        </div>
      </section>
      {/* Port & Terminal Charges Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Port Operations</span>
              </div>
              
              <h2 id="port-terminal-charges" className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                1. Port & Terminal Charges
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We provide comprehensive insight into the various associated with port operations, ensuring your costs remain as streamlined and accurate as possible.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Port Funds & Berthing Fees</h3>
                      <p className="text-gray-600">Charges for utilizing port infrastructure and anchorage, inclusive of quay & berthage costs. Fees associated with vessels keeping at designated port zones.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Harbor & Customs Duties</h3>
                      <p className="text-gray-600">Costs for compliance with local customs regulations and official port dues.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Mooring & Unmooring Fees</h3>
                      <p className="text-gray-600">Charges for securing and releasing the vessel at/from the port.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  With our commitment to transparency and accuracy, we guide business owners through the complexities of port fees, empowering them to make informed disbursement choices while managing their shipping efficiently.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/b-pda-1.jpg" alt="Port terminal with ship and worker" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pilotage and Towage Fees Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/b-pda-2.jpg" alt="Harbor pilot observing ship arrival" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Navigation Services</span>
              </div>
              
              <h2 id="pilotage-towage-fees" className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                2. Pilotage and Towage Fees
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We recognize the importance of pilotage and towage services in ensuring safe and efficient maritime operations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Pilotage Charges</h3>
                      <p className="text-gray-600">Paid to highly trained local pilots who navigate vessels safely into the port.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Towage Services</h3>
                      <p className="text-gray-600">Cover assistance from tugboats that assist in berthing, maneuvering, and unberthing vessels.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  These services are crucial, as they guarantee that vessels can safely and efficiently enter and exit the port under expert supervision. Our commitment to managing these essential services enhances the overall cost-effectiveness of maritime activities for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Customs and Immigration Clearance Fees Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Customs & Immigration</span>
              </div>
              
              <h2 id="customs-immigration-fees" className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                3. Customs and Immigration Clearance Fees
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We understand the critical role that customs processing and related fees play in facilitating smooth maritime operations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Customs Processing Fees</h3>
                      <p className="text-gray-600">Charges for cargo and vessel clearance through all customs authorities and for routine formal inspections.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Crew Immigration Fees</h3>
                      <p className="text-gray-600">Costs associated with processing crew members' entry and exit at the port, ensuring compliance with immigration regulations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Health and Sanitary Inspection Charges</h3>
                      <p className="text-gray-600">Fees required for compliance with port health regulations, safety, and public health and safety.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  By addressing these fees and requirements, we help prevent delays, penalties, and regulatory issues, ensuring that all customs and crew obligations are met efficiently.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/b-pda-3.jpg" alt="Customs officer inspecting shipping documents at port" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cargo Handling and Stevedoring Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/b-pda-4.jpg" alt="Container being loaded and unloaded at port" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Cargo Operations</span>
              </div>
              
              <h2 id="cargo-handling-stevedoring" className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                4. Cargo Handling and Stevedoring
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We are dedicated to facilitating efficient cargo handling at port through our management of essential services.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Loading and Unloading Fees</h3>
                      <p className="text-gray-600">Cover labor and the necessary equipment to load and unload, ensuring smooth transition during the ship's presence.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Stevedore Services</h3>
                      <p className="text-gray-600">Which incorporates labor charges for skilled cargo handling, guaranteeing that your goods are managed with care and expertise.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Equipment Rental Fees</h3>
                      <p className="text-gray-600">For essential cranes, forklifts, and other necessary port equipment to support cargo operations.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  By efficiently managing these expenses, we ensure all cargo is handled and unloaded efficiently and safely, minimizing delays and supporting your supply chain's reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bunker, Fresh Water and Provisions Supply Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Vessel Supplies</span>
              </div>
              
              <h2 id="bunker-fresh-water" className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                5. Bunker, Fresh Water and Provisions Supply
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We recognize the importance of essential services that keep vessels operational and compliant with safety regulations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Bunkering Fees</h3>
                      <p className="text-gray-600">Costs associated with refueling the vessel, ensuring it has energy for its next journey.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Fresh Water Supply Charges</h3>
                      <p className="text-gray-600">For delivering potable water to the vessel, essential for crew health and safety.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Provisions and Stores Delivery</h3>
                      <p className="text-gray-600">Costs for food, beverages, and other essentials for the crew, maintaining comfort and efficiency onboard.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  By efficiently coordinating these services, we ensure that vessels are fully operational and meet all necessary compliance standards, allowing for seamless and safe operations.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/b-pda-5.jpg" alt="Truck delivering fresh water and crane loading provisions onto ship" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Disposal and Environmental Fees Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/b-pda-6.jpg" alt="Port worker managing waste disposal on ship" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Environmental Compliance</span>
              </div>
              
              <h2 id="waste-disposal-environmental" className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                6. Waste Disposal and Environmental Fees
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We prioritize environmental responsibility in maritime operations by managing essential waste disposal and compliance costs.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Garbage Collection and Disposal Fees</h3>
                      <p className="text-gray-600">Charges for removing waste from the vessel, ensuring compliance with environmental standards.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Sludge and Bilge Water Disposal</h3>
                      <p className="text-gray-600">Costs associated with handling oil-contaminated waste in accordance with local waste management.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Ballast Water Treatment Fees</h3>
                      <p className="text-gray-600">Fees for ensuring compliance with global environmental regulations on ballast water management.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  By effectively managing these services, we help our clients meet both environmental and sustainability standards set by international organizations (IMO) and authorities, promoting responsible shipping worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security and Emergency Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Safety & Security</span>
              </div>
              
              <h2 id="security-emergency" className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                7. Security and Emergency Services
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We prioritize the safety and security of maritime operations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Port Security Charges</h3>
                      <p className="text-gray-600">Cost associated with compliance with the International Ship and Port Facility Security (ISPS) Code, including necessary security patrols and surveillance at the port.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Firefighting and Emergency Response Fees</h3>
                      <p className="text-gray-600">Charges for emergency support at the port, ensuring vessels' safety in critical situations.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  By effectively coordinating these services, we ensure that our clients' vessels comply with maritime security and emergency protocols. Trusting us reduces overall risk to all maritime activities.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/b-pda-7.jpg" alt="Port security officers monitoring ship arrivals" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Fees and Documentation Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/b-pda-8.jpg" alt="Ship agent at desk with port in background" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Professional Services</span>
              </div>
              
              <h2 id="agency-fees" className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                8. Agency Fees and Documentation
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We offer comprehensive financial and administrative support to ensure smooth operations during a vessel's port stay.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Our Ship Agency Fees</h3>
                      <p className="text-gray-600">Cover the charges for our professionals' ship agency services, providing expert guidance and management throughout the process.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Administrative Costs</h3>
                      <p className="text-gray-600">Which include fees for managing paperwork, permits, and legal formalities, ensuring compliance with regulatory requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-1">Final Disbursement Account (FDA)</h3>
                      <p className="text-gray-600">Ensuring that actual expenses match initial estimates, providing clarity and transparency in financial management.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  By effectively coordinating these services, we provide our clients with the peace of mind that comes from knowing their financial and administrative needs are expertly managed during their time in port.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetQuoteComponent topic="PDA" link="/ship-agency-forms" />
      <FAQSearch category="ship-agency-services" />
    </main>
  );
}
