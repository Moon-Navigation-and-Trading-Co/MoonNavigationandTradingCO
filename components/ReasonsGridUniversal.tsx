import React from "react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ReasonsGridUniversalProps {
  title: string;
  subheading?: string;
  reasons: Reason[];
}

const ReasonsGridUniversal: React.FC<ReasonsGridUniversalProps> = ({ title, subheading, reasons }) => (
  <section className="max-w-7xl mx-auto pt-8 pb-16">
    <h2 className="text-3xl font-normal text-center mb-4 font-sans text-gray-900 dark:text-white">
      {title}
    </h2>
    {subheading && (
      <p className="mb-12 text-center text-base text-[#444] dark:text-gray-300 max-w-3xl mx-auto font-sans">
        {subheading}
      </p>
    )}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 justify-items-center">
      {reasons.map((reason, idx) => (
        <div key={idx} className="flex flex-col items-center text-center min-h-[180px]">
          {reason.icon}
          <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{reason.title}</div>
          <div className="text-base text-[#444] dark:text-gray-300 max-w-xs">
            {reason.description}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ReasonsGridUniversal; 