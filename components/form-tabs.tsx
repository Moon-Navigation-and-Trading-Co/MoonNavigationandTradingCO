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
    const [activeTab, setActiveTab] = useState("international")

    return (
        <div className="w-full mx-auto px-0 sm:px-6 py-6 bg-green-50 rounded-3xl ">
            <div className="relative bg-green-50 rounded-t-2xl overflow-hidden">
                <div className="flex relative z-10">
                    {tabData.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors focus:outline-none ${activeTab === tab.id
                                ? "text-green-700"
                                : "text-green-600 hover:bg-green-50"
                                } ${index === 0 ? "rounded-tl-2xl" : ""} ${index === tabData.length - 1 ? "rounded-tr-2xl" : ""
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <motion.div
                    className="absolute top-0 h-full bg-white rounded-t-2xl"
                    initial={false}
                    animate={{
                        left: `${(tabData.findIndex(tab => tab.id === activeTab) / tabData.length) * 100}%`,
                        width: `${100 / tabData.length}%`
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            </div>
            <div className="bg-white rounded-b-2xl py-6 sm:px-6 shadow-sm">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <h3 className="text-3xl font-semibold mb-10">Form details</h3>
                        {tabData.find(tab => tab.id === activeTab)?.content}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default FormTabs;
