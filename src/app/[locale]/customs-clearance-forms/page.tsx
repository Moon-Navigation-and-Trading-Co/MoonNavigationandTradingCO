"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/spinner';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new Other Logistics Services page
    router.replace('/other-logistics-services-forms');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Other Logistics Services...</p>
      </div>
    </div>
  );
} 