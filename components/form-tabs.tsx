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
        <div className="w-full mt-16 mx-auto flex flex-col my-10 ">
            <div className="relative bg-secondary rounded-t-3xl overflow-hidden">
                <div className="flex relative z-10 ">
                    {tabData.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 px-1 py-3 text-xs sm:text-sm rounded-t-xl font-medium transition-colors focus:outline-none ${activeTab === tab.id
                                ? "text-primary"
                                : "text-foreground bg-secondary hover:bg-green-50 dark:hover:bg-[#171b21]"
                                } ${index === 0 ? "rounded-tl-2xl" : ""} ${index === tabData.length - 1 ? "rounded-tr-2xl" : ""
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <motion.div
                    className="absolute top-0 h-full bg-green-100 dark:bg-accent rounded-t-2xl"
                    initial={false}
                    animate={{
                        left: `${(tabData.findIndex(tab => tab.id === activeTab) / tabData.length) * 100}%`,
                        width: `${100 / tabData.length}%`
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            </div>
            <div className="p-1 rounded-3xl rounded-t-sm bg-green-100 dark:bg-accent">
                <div className="bg-background dark:bg-secondary rounded-3xl py-6 px-4 sm:px-6 shadow-sm">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3 className="text-3xl font-semibold mb-10 ">Form details</h3>
                            {tabData.find(tab => tab.id === activeTab)?.content}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </div>
    )
}

export default FormTabs;
