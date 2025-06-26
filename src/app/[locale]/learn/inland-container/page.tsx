"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function InlandContainerPage() {
  const t = useTranslations("learn-inland-container");

  useEffect(() => {
    document.title = "Inland Container Transport | Moon Navigation and Trading Co.";
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-medium mb-4">
        Inland Container Transport
      </h1>
      <p className="text-gray-700 text-base md:text-lg max-w-2xl text-center">
        {/* You can add your inland container transport content here. */}
        {t("description") || "Efficient and reliable inland container transport solutions for your business needs."}
      </p>
    </div>
  );
}
