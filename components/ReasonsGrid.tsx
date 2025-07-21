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
    <section className="max-w-7xl mx-auto px-4 pt-8 pb-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-raleway font-normal text-center mx-auto mb-4 text-gray-900 dark:text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
        {title}
      </h2>
      <div className="w-full max-w-5xl mx-auto">
        <p className="mb-16 text-left text-base md:text-lg text-[#444] dark:text-gray-300 font-raleway font-light" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
          {subheading}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-24 justify-items-center">
          {reasons.slice(0, 4).map((reason, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-center text-center md:text-left min-h-[180px] w-full max-w-md mx-auto py-8">
              <div className="mb-6 flex justify-center w-full">{reason.icon}</div>
              <div className="w-full flex flex-col items-start">
                <div className="font-raleway font-normal text-lg mb-4 text-gray-900 dark:text-white text-left w-full" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>{reason.title}</div>
                <div className="text-base text-[#444] dark:text-gray-300 font-raleway font-light text-left w-full leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                  {reason.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsGrid; 