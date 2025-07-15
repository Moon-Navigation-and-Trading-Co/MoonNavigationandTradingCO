"use client"
import React, { useState } from "react";

interface OverviewServicesTabsProps {
  renderOverview: () => React.ReactNode;
  renderServices: () => React.ReactNode;
}

const tabClasses =
  "px-6 py-2 text-base font-medium focus:outline-none transition-colors border-b-2";

export default function OverviewServicesTabs({
  renderOverview,
  renderServices,
}: OverviewServicesTabsProps) {
  const [selected, setSelected] = useState<"overview" | "services">("overview");

  return (
    <div className="w-full max-w-7xl mx-auto mt-[50px]">
      <div className="flex border-b border-border mb-8">
        <button
          className={
            `${tabClasses} ${
              selected === "overview"
                ? "border-primary text-primary"
                : "border-transparent text-foreground/70 hover:text-primary"
            }`
          }
          onClick={() => setSelected("overview")}
          type="button"
        >
          Overview
        </button>
        <button
          className={
            `${tabClasses} ${
              selected === "services"
                ? "border-primary text-primary"
                : "border-transparent text-foreground/70 hover:text-primary"
            }`
          }
          onClick={() => setSelected("services")}
          type="button"
        >
          Services
        </button>
      </div>
      <div className="w-full">
        {selected === "overview" ? renderOverview() : renderServices()}
      </div>
    </div>
  );
}
