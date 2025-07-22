"use client"

import { useState, ReactNode } from "react"
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

}


const FormTabs: React.FC<FormTabsProps> = ({ tabData }) => {
    const [activeTab, setActiveTab] = useState(tabData[0]?.id || "overview");

    return (
        <div className="w-full mt-2 mx-auto flex flex-col">
            <div className="border-b border-gray-200">
                <div className="flex justify-start ml-8">
                    {tabData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-2 text-base font-medium focus:outline-none transition-colors
                                ${activeTab === tab.id ? "text-[#222] border-b-2 border-[#22313f]" : "text-gray-500 border-b-2 border-transparent"}
                            `}
                            style={{ background: 'none', borderRadius: 0 }}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
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
