"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function QuotationPage() {
  const params = useParams();
  const router = useRouter();
  const service = params.service as string;

  // Map service values to their corresponding form routes
  const serviceFormRoutes: { [key: string]: string } = {
    "ocean-freight": "/ocean-freight-forms",
    "container-services": "/container-services-forms",
    "inland-freight": "/inland-services-forms",
    "air-freight": "/air-freight-forms",
    "pda-request": "/ship-agency-forms",
    "suez-canal": "/suez-canal-form",
    "crew-management": "/ship-agency-forms",
    "spare-parts": "/ship-agency-forms",
    "bunkering": "/ship-agency-forms",
    "special-services": "/special-services-forms",
    "international-trading": "/international-trading-forms",
    "ship-management": "/ship-management-forms",
    "docking-maintenance": "/ship-maintenance-forms",
    "handling-stevedoring": "/ship-agency-forms",
    "customs-clearance": "/ship-agency-forms",
    "vessel-rentals": "/buy-rent-vessels-forms",
    "container-rentals": "/buy-rent-container-forms",
  };

  useEffect(() => {
    const targetRoute = serviceFormRoutes[service];
    
    if (targetRoute) {
      // Redirect to the appropriate form page
      router.replace(targetRoute);
    } else {
      // If service not found, redirect to contact page
      router.replace("/contact");
    }
  }, [service, router, serviceFormRoutes]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to quotation form...</p>
      </div>
    </div>
  );
} 