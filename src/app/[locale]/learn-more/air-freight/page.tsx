"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AirFreightRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/en/learn/air-freight");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Redirecting...</h1>
        <p className="text-gray-600">You are being redirected to the Air Freight page.</p>
      </div>
    </div>
  );
}
