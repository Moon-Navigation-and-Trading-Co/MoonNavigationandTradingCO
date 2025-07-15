import React from "react";

export interface Reason {
  icon: React.ReactNode; // You can use an <img> tag here for an image icon
  title: string;
  description: string;
}

interface ReasonsGridProps {
  title: string;
  subheading: string;
  reasons: Reason[];
}

const ReasonsGrid: React.FC<ReasonsGridProps> = ({ title, subheading, reasons }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-8 pb-16">
      <h2 className="text-3xl md:text-4xl font-raleway font-regular text-center mx-auto mb-4 text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="mb-16 text-left text-base md:text-lg text-[#444] dark:text-gray-300 max-w-4xl font-raleway font-light">
        {subheading}
      </p>
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-12 justify-items-center">
        {reasons.map((reason, idx) => (
          <div key={idx} className="flex flex-col items-center text-center min-h-[180px]">
            {/* You can use an <img src="..." alt="..." className="mb-6 h-16 w-16 object-contain" /> here instead of an icon */}
            <div className="mb-6">{reason.icon}</div>
            <div className="font-raleway font-regular text-lg mb-2 text-gray-900 dark:text-white">{reason.title}</div>
            <div className="text-base text-[#444] dark:text-gray-300 font-raleway font-light text-center mx-auto">
              {reason.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsGrid; 