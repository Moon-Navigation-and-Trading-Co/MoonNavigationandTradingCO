"use client";

import { CountrySelect } from "@/components/country-select";

export default function CountryOriginExample() {
  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 font-raleway">Country of Origin</h2>
      <div className="space-y-2">
        <label className="font-raleway font-medium text-sm text-gray-700">
          Select your country of origin
        </label>
        <CountrySelect
          placeholder="Choose your country"
          className="w-full border border-gray-300 rounded-lg h-12 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
} 