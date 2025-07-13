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
  fiveSplitLayout?: boolean; // If true, use 3-on-top, 2-on-bottom layout
}

const ReasonsGridUniversal: React.FC<ReasonsGridUniversalProps> = ({ title, subheading, reasons, fiveSplitLayout }) => {
  // If fiveSplitLayout and 5 reasons, use custom grid
  if (fiveSplitLayout && reasons.length === 5) {
    return (
      <section className="max-w-6xl mx-auto pt-20 pb-28 md:px-8">
        <h2 className="text-3xl font-normal text-center mb-12 font-sans text-gray-900 dark:text-white">
          {title}
        </h2>
        {subheading && (
          <p className="mb-20 text-center text-base text-[#444] dark:text-gray-300 max-w-3xl mx-auto font-sans">
            {subheading}
          </p>
        )}
        {/* Desktop: 3 on top (cols 1,3,5), 2 perfectly centered below (cols 2,4) */}
        <div className="hidden md:grid grid-cols-5 gap-x-8 gap-y-44 justify-items-center">
          {/* Top row: 3 items in cols 1, 3, 5 */}
          <div className="flex flex-col items-center text-center min-h-[180px] col-start-1 col-end-2">
            <div className="mb-8">{reasons[0].icon}</div>
            <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{reasons[0].title}</div>
            <div className="text-base text-[#444] dark:text-gray-300 max-w-md leading-loose mb-2 mx-auto">
              {reasons[0].description}
            </div>
          </div>
          <div></div>
          <div className="flex flex-col items-center text-center min-h-[180px] col-start-3 col-end-4">
            <div className="mb-8">{reasons[1].icon}</div>
            <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{reasons[1].title}</div>
            <div className="text-base text-[#444] dark:text-gray-300 max-w-md leading-loose mb-2 mx-auto">
              {reasons[1].description}
            </div>
          </div>
          <div></div>
          <div className="flex flex-col items-center text-center min-h-[180px] col-start-5 col-end-6">
            <div className="mb-8">{reasons[2].icon}</div>
            <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{reasons[2].title}</div>
            <div className="text-base text-[#444] dark:text-gray-300 max-w-md leading-loose mb-2 mx-auto">
              {reasons[2].description}
            </div>
          </div>
          {/* Bottom row: 2 items in cols 2 and 4 */}
          <div></div>
          <div className="flex flex-col items-center text-center min-h-[180px] col-start-2 col-end-3">
            <div className="mb-8">{reasons[3].icon}</div>
            <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{reasons[3].title}</div>
            <div className="text-base text-[#444] dark:text-gray-300 max-w-md leading-loose mb-2 mx-auto">
              {reasons[3].description}
            </div>
          </div>
          <div></div>
          <div className="flex flex-col items-center text-center min-h-[180px] col-start-4 col-end-5">
            <div className="mb-8">{reasons[4].icon}</div>
            <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{reasons[4].title}</div>
            <div className="text-base text-[#444] dark:text-gray-300 max-w-md leading-loose mb-2 mx-auto">
              {reasons[4].description}
            </div>
          </div>
          <div></div>
        </div>
        {/* Mobile: single column */}
        <div className="md:hidden grid grid-cols-1 gap-y-16 justify-items-center">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex flex-col items-center text-center min-h-[180px]">
              <div className="mb-8">{reason.icon}</div>
              <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{reason.title}</div>
              <div className="text-base text-[#444] dark:text-gray-300 max-w-md leading-loose mb-2 mx-auto">
                {reason.description}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  // Default: 2-column grid
  return (
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
};

export default ReasonsGridUniversal; 