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
  layout?: "default" | "3-2" | "3-3" | "custom";
}

const ReasonsGridUniversal: React.FC<ReasonsGridUniversalProps> = ({ 
  title, 
  subheading, 
  reasons, 
  layout = "default" 
}) => {
  const renderGrid = () => {
    if (layout === "3-2") {
      // Custom layout: 3 items in first row, 2 items in second row with last item centered
      const firstRow = reasons.slice(0, 3);
      const secondRow = reasons.slice(3, 5);
      
      return (
        <div className="space-y-16">
          {/* First row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {firstRow.map((reason, idx) => (
              <div key={idx} className="flex flex-col items-center text-center min-h-[180px]">
                {reason.icon}
                <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{reason.title}</div>
                <div className="text-base text-[#444] dark:text-gray-300 max-w-xs">
                  {reason.description}
                </div>
              </div>
            ))}
          </div>
          {/* Second row: 2 items centered */}
          {secondRow.length > 0 && (
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {secondRow.map((reason, idx) => (
                  <div key={idx + 3} className="flex flex-col items-center text-center min-h-[180px]">
                    {reason.icon}
                    <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{reason.title}</div>
                    <div className="text-base text-[#444] dark:text-gray-300 max-w-xs">
                      {reason.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    if (layout === "3-3") {
      // Custom layout: 3 items in first row, 3 items in second row
      const firstRow = reasons.slice(0, 3);
      const secondRow = reasons.slice(3, 6);
      
      return (
        <div className="space-y-16">
          {/* First row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {firstRow.map((reason, idx) => (
              <div key={idx} className="flex flex-col items-center text-center min-h-[180px]">
                {reason.icon}
                <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{reason.title}</div>
                <div className="text-base text-[#444] dark:text-gray-300 max-w-xs">
                  {reason.description}
                </div>
              </div>
            ))}
          </div>
          {/* Second row: 3 items */}
          {secondRow.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {secondRow.map((reason, idx) => (
                <div key={idx + 3} className="flex flex-col items-center text-center min-h-[180px]">
                  {reason.icon}
                  <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{reason.title}</div>
                  <div className="text-base text-[#444] dark:text-gray-300 max-w-xs">
                    {reason.description}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    // Default layout: 2-column grid
    return (
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
    );
  };

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
      {renderGrid()}
    </section>
  );
};

export default ReasonsGridUniversal; 