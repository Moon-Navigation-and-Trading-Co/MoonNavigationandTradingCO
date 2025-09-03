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
    const [showScrollIndicator, setShowScrollIndicator] = useState(false);
    const tabsContainerRef = useRef<HTMLDivElement>(null);
    const activeTab = controlledActiveTab ?? internalActiveTab;
    const setActiveTab = controlledSetActiveTab ?? internalSetActiveTab;

    // Check if tabs container is scrollable on mobile
    useEffect(() => {
        const checkScrollable = () => {
            if (tabsContainerRef.current) {
                const container = tabsContainerRef.current;
                const isScrollable = container.scrollWidth > container.clientWidth;
                setShowScrollIndicator(isScrollable);
            }
        };

        checkScrollable();
        window.addEventListener('resize', checkScrollable);
        return () => window.removeEventListener('resize', checkScrollable);
    }, [tabData]);

    return (
        <div className="w-full mt-2 mx-auto flex flex-col">
            <div className="border-b border-gray-200 relative">
                <div className="flex justify-start ml-8 overflow-x-auto scrollbar-hide" ref={tabsContainerRef}>
                    {tabData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-2 text-base font-medium focus:outline-none transition-colors whitespace-nowrap
                                ${activeTab === tab.id ? "text-[#222] border-b-2 border-[#22313f]" : "text-gray-500 border-b-2 border-transparent"}
                            `}
                            style={{ background: 'none', borderRadius: 0 }}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                
                {/* Mobile Scroll Indicator */}
                {showScrollIndicator && (
                    <div className="absolute right-0 top-0 bottom-0 flex items-center md:hidden">
                        <div className="bg-gradient-to-l from-white via-white to-transparent w-12 h-full flex items-center justify-center">
                            <button 
                                onClick={() => {
                                    if (tabsContainerRef.current) {
                                        const container = tabsContainerRef.current;
                                        const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of container width
                                        container.scrollBy({
                                            left: scrollAmount,
                                            behavior: 'smooth'
                                        });
                                    }
                                }}
                                className="bg-blue-500/20 backdrop-blur-sm rounded-full p-2 border border-blue-200/50 hover:bg-blue-500/30 hover:border-blue-300/50 transition-all duration-300 cursor-pointer group"
                            >
                                <svg 
                                    className="w-5 h-5 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300" 
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
