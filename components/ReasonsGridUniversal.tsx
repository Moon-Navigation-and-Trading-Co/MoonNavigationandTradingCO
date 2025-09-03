import React from "react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ReasonsGridUniversalProps {
  title: string | React.ReactNode;
  subheading?: string;
  reasons: Reason[];
  fiveSplitLayout?: boolean; // If true, use 3-on-top, 2-on-bottom layout
  layout?: "default" | "3-2" | "3-3" | "custom";
  alignLeftHeading?: boolean; // If true, left-align the heading and move it upwards
  className?: string; // Optional extra className for the section
  titleFontWeight?: number; // Custom font weight for the title
}

const ReasonsGridUniversal: React.FC<ReasonsGridUniversalProps> = ({ 
  title, 
  subheading, 
  reasons, 
  layout = "default",
  alignLeftHeading = false,
  className = "",
  titleFontWeight = 600
}) => {
  const renderGrid = () => {
    if (layout === "3-2") {
      // Custom layout: 3 items in first row, 2 items in second row with last item centered
      const firstRow = reasons.slice(0, 3);
      const secondRow = reasons.slice(3, 5);
      
      return (
        <div className="space-y-16">
          {/* First row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firstRow.map((reason, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
                <div className="mb-6 flex justify-center items-center w-full">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 flex items-center justify-center">
                      {reason.icon}
                    </div>
                  </div>
                </div>
                <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>{reason.title}</div>
                <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                  {reason.description}
                </div>
              </div>
            ))}
          </div>
          {/* Second row: 2 items centered */}
          {secondRow.length > 0 && (
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl">
                {secondRow.map((reason, idx) => (
                  <div key={idx + 3} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
                    <div className="mb-6 flex justify-center items-center w-full">
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <div className="w-12 h-12 flex items-center justify-center">
                          {reason.icon}
                        </div>
                      </div>
                    </div>
                    <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>{reason.title}</div>
                    <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firstRow.map((reason, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
                <div className="mb-6 flex justify-center items-center w-full">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 flex items-center justify-center">
                      {reason.icon}
                    </div>
                  </div>
                </div>
                <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>{reason.title}</div>
                <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                  {reason.description}
                </div>
              </div>
            ))}
          </div>
          {/* Second row: 3 items */}
          {secondRow.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {secondRow.map((reason, idx) => (
                <div key={idx + 3} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
                  <div className="mb-6 flex justify-center items-center w-full">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 flex items-center justify-center">
                        {reason.icon}
                      </div>
                    </div>
                  </div>
                  <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>{reason.title}</div>
                  <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, idx) => (
          <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
            <div className="mb-6 flex justify-center items-center w-full">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 flex items-center justify-center">
                  {reason.icon}
                </div>
              </div>
            </div>
            <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>{reason.title}</div>
            <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
              {reason.description}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className={`max-w-7xl mx-auto px-4 pt-16 pb-20 ${className}`}>
      {alignLeftHeading ? (
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-left text-gray-900 dark:text-white leading-tight" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: titleFontWeight }}>{title}</h2>
        </div>
      ) : (
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 dark:text-white leading-tight mb-6" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: titleFontWeight }}>{title}</h2>
          {subheading && (
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
              {subheading}
            </p>
          )}
        </div>
      )}
      {renderGrid()}
    </section>
  );
};

export default ReasonsGridUniversal; 