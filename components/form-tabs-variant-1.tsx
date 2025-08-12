"use client"

import { useState, ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TabData {
    id: string
    title: string
    description: string
    content: ReactNode
}

interface FormTabsProps {
    tabData: TabData[]
    formTitle?: string
}

export default function FormTabs({ tabData, formTitle }: FormTabsProps) {
    const [activeTab, setActiveTab] = useState(tabData[0].id)

    const activeTabData = tabData.find((tab) => tab.id === activeTab) || tabData[0]

    return (
        <div className="w-full mt-16 mx-auto flex flex-col my-10">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab + "-header"}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="pb-10 px-4"
                >
                    <h1 className="text-3xl font-semibold mb-8 text-center">{activeTabData.title}</h1>
                    <h1 className="text-center">{activeTabData.description}</h1>
                </motion.div>
            </AnimatePresence>

            <div className="relative bg-secondary rounded-t-3xl overflow-hidden">
                <div className="flex relative z-10">
                    {tabData.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 px-1 py-3 text-xs sm:text-sm rounded-t-xl font-medium transition-colors focus:outline-none ${activeTab === tab.id
                                ? "text-primary"
                                : "text-foreground bg-secondary hover:bg-blue-50 dark:hover:bg-[#171b21]"
                                } ${index === 0 ? "rounded-tl-2xl" : ""} ${index === tabData.length - 1 ? "rounded-tr-2xl" : ""
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <motion.div
                    className="absolute top-0 h-full bg-blue-100 dark:bg-accent rounded-t-2xl"
                    initial={false}
                    animate={{
                        left: `${(tabData.findIndex((tab) => tab.id === activeTab) / tabData.length) * 100}%`,
                        width: `${100 / tabData.length}%`,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            </div>
            <div className="p-1 rounded-3xl rounded-t-sm bg-blue-100 dark:bg-accent">
                <div className="bg-background dark:bg-secondary rounded-3xl py-6 px-4 sm:px-6 shadow-sm">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab + "-content"}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3 className="text-3xl font-semibold mb-10 text-center">
                                {activeTabData.id === 'investor' 
                                    ? `${activeTabData.title} Form` 
                                    : `${activeTabData.title} Quotation Form`}
                            </h3>
                            {activeTabData.content}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}