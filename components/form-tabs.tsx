"use client";

import { useState, ReactNode, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"


// Takes in U-id for tab management, title for the tab button,
// and a react component for the actual form stored in content. 

// Create a form component for desired service 
// => pass it as 'content' to the FormTabs component in the page file

interface TabData {

    id: string; //Unique

    title: string;

    content: ReactNode;

}

interface FormTabsProps {
    tabData: TabData[];
    activeTab?: string;
    setActiveTab?: (tabId: string) => void;
}

const FormTabs: React.FC<FormTabsProps> = ({ tabData, activeTab: controlledActiveTab, setActiveTab: controlledSetActiveTab }) => {
    const [internalActiveTab, internalSetActiveTab] = useState(tabData[0]?.id || "overview");
    const [show_scroll_indicator, set_show_scroll_indicator] = useState(false);
    const tabsContainerRef = useRef<HTMLDivElement>(null);
    const activeTab = controlledActiveTab ?? internalActiveTab;
    const setActiveTab = controlledSetActiveTab ?? internalSetActiveTab;

    // Check if tabs container is scrollable on mobile
    useEffect(() => {
        const checkScrollable = () => {
            if (tabsContainerRef.current) {
                const container = tabsContainerRef.current;
                const isScrollable = container.scrollWidth > container.clientWidth + 10; // Add small buffer
                set_show_scroll_indicator(isScrollable);
            }
        };

        // Check immediately and after a short delay to ensure DOM is ready
        checkScrollable();
        const timeoutId = setTimeout(checkScrollable, 100);
        
        window.addEventListener('resize', checkScrollable);
        return () => {
            window.removeEventListener('resize', checkScrollable);
            clearTimeout(timeoutId);
        };
    }, [tabData]);

    return (
        <div className="w-full mx-auto flex flex-col px-2 md:px-0 relative z-30">
            <div className="border-b border-gray-200 relative">
                <div className="flex justify-start overflow-x-auto scrollbar-hide" ref={tabsContainerRef} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {tabData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 md:px-8 py-3 md:py-2 text-sm md:text-base font-medium focus:outline-none transition-colors whitespace-nowrap min-w-fit
                                ${activeTab === tab.id ? "text-[#222] border-b-2 border-[#22313f]" : "text-gray-500 border-b-2 border-transparent"}
                            `}
                            style={{ background: 'none', borderRadius: 0 }}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                
                {/* Mobile Scroll Indicators */}
                {show_scroll_indicator && (
                    <>
                        {/* Left Scroll Indicator */}
                        <div className="absolute left-0 top-0 bottom-0 flex items-center md:hidden z-10">
                            <div className="bg-gradient-to-r from-white via-white to-transparent w-8 h-full flex items-center justify-center">
                                <button 
                                    onClick={() => {
                                        if (tabsContainerRef.current) {
                                            const container = tabsContainerRef.current;
                                            container.scrollBy({
                                                left: -container.clientWidth * 0.6,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                    className="bg-blue-500/20 backdrop-blur-sm rounded-full p-1.5 border border-blue-200/50 hover:bg-blue-500/30 hover:border-blue-300/50 transition-all duration-300 cursor-pointer group"
                                >
                                    <svg 
                                        className="w-4 h-4 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2.5} 
                                            d="M15 19l-7-7 7-7" 
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right Scroll Indicator */}
                        <div className="absolute right-0 top-0 bottom-0 flex items-center md:hidden z-10">
                            <div className="bg-gradient-to-l from-white via-white to-transparent w-8 h-full flex items-center justify-center">
                                <button 
                                    onClick={() => {
                                        if (tabsContainerRef.current) {
                                            const container = tabsContainerRef.current;
                                            container.scrollBy({
                                                left: container.clientWidth * 0.6,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                    className="bg-blue-500/20 backdrop-blur-sm rounded-full p-1.5 border border-blue-200/50 hover:bg-blue-500/30 hover:border-blue-300/50 transition-all duration-300 cursor-pointer group"
                                >
                                    <svg 
                                        className="w-4 h-4 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2.5} 
                                            d="M9 5l7 7-7 7" 
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            {tabData.find(tab => tab.id === activeTab)?.content}
                        </motion.div>
                    </AnimatePresence>
            </div>
        </div>
    );
}

export default FormTabs;
