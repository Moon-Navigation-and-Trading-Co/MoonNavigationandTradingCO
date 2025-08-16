"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Input } from "./ui/input";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
    category?: string;
}

// Move FAQ data to a separate file or lazy load it
const getFAQData = (): FAQItem[] => {
    return [
    // About Us section
    {
        question: "What services does Moon Navigation and Trading Co. Offer?",
        answer: "At Moon Navigation and Trading Co., we provide freight, maritime, and logistics solutions across all Egyptian ports and the Suez transit canal. We handle ocean, air, and inland freight, including FCL, LCL, breakbulk, RoRo, oversized, and dangerous goods. As a licensed ship agent, we offer port call management, customs clearance, crew change, bunkering, and ship chandlery. Our logistics services cover ship management, docking, stevedoring, and transit spare parts delivery. We also support international trade, customs compliance, and risk management, ensuring seamless operations and global market access.",
        category: "about-us"
    },
    {
        question: "Where are your headquarters located?",
        answer: "We are headquartered in Egypt and operate regionally and internationally through a wide logistics and port network.",
        category: "about-us"
    },
    {
        question: "Can you customize services to my business needs?",
        answer: "Yes, all our logistics and shipping solutions are fully tailored to meet your operational and commercial objectives.",
        category: "about-us"
    },
    {
        question: "How can I request a quotation?",
        answer: "You can request a quote by filling out the online form on our website, providing details about your required services. A tailored quotation will be sent to your email promptly.",
    },
    {
        question: "How long does it take to receive a quotation?",
        answer: "You will typically receive a personalized quotation shortly after submitting your request. Our system ensures a fast and accurate response."
    },
    {
        question: "Is there any cost associated with requesting a quote?",
        answer: "No. Requesting a quotation from Moon Navigation and Trading Co. is completely free."
    },
    {
        question: "What should I do if I have questions about my quotation or need further assistance?",
        answer: "You can contact our support team using the communication channels provided on our website. We are always available to answer your questions or clarify your quotation."
    },
    {
        question: "How does your company ensure quality management and customer satisfaction?",
        answer: "Our commitment to quality management revolves around efficient processes and ensuring compliance with international standards while prioritizing environmental responsibility to meet customer expectations. We position ourselves as a trusted partner, the \"unconventional partner\" and the \"genius partner\" working closely with clients to provide innovative solutions that drive long-term success and satisfaction. Our approach ensures that we exceed expectations and maintain the highest standards of service."
    },
    {
        question: "Do you operate internationally or only within Egypt?",
        answer: "While our base is in Egypt, we operate globally through strategic partnerships and a vast logistics network, enabling us to support imports, exports, and transit cargo worldwide.",
        category: "popular"
    },
    {
        question: "What types of cargo can you handle?",
        answer: "We handle a wide range of cargo, including containerized freight (FCL/LCL), breakbulk, RoRo (vehicles and machinery), project and oversized cargo, temperature-sensitive goods, and dangerous goods (DG), in full compliance with international regulations."
    },
    {
        question: "Do you offer end-to-end logistics solutions?",
        answer: "Yes. From pickup to delivery, we provide full-service logistics solutions including customs clearance, documentation, warehousing, freight booking, and last-mile delivery."
    },
    {
        question: "Is my cargo insured during transit?",
        answer: "We offer optional cargo insurance to protect your goods during transit. Our team can advise you on the best insurance options based on your cargo type and route."
    },
        // Add more FAQ items as needed...
    ];
};

interface FAQSearchProps {
    category?: string;
}

const FAQSearch: React.FC<FAQSearchProps> = ({ category }) => {
    const t = useTranslations('faq');
    const [searchTerm, setSearchTerm] = useState("");
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Lazy load FAQ data
    useEffect(() => {
        const loadFAQs = () => {
            const data = getFAQData();
            setFaqs(data);
            setIsLoading(false);
        };

        // Simulate lazy loading with a small delay
        const timer = setTimeout(loadFAQs, 100);
        return () => clearTimeout(timer);
    }, []);

    // Memoize filtered FAQs for better performance
    const filteredFAQs = useMemo(() => {
        if (!faqs.length) return [];
        
        return faqs.filter((faq) => {
            const matchesSearch = searchTerm === "" || 
                faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesCategory = !category || faq.category === category;
            
            return matchesSearch && matchesCategory;
        });
    }, [faqs, searchTerm, category]);

    // Memoize category titles
    const categoryTitles = useMemo(() => {
        const titles: { [key: string]: string } = {
            "about-us": "About Us",
            "ship-management": "Ship Management",
            "ocean-freight": "Ocean Freight",
            "air-freight": "Air Freight",
            "inland-freight": "Inland Freight",
            "container": "Container Services",
            "breakbulk": "Breakbulk",
            "dangerous-goods": "Dangerous Goods",
            "project-cargo": "Project Cargo",
            "customs": "Customs Clearance",
            "logistics": "Logistics",
            "popular": "Popular Questions"
        };
        return titles;
    }, []);

    const toggleItem = useCallback((index: number) => {
        setExpandedItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    }, []);

    if (isLoading) {
        return (
            <div className="w-full max-w-4xl mx-auto px-4 py-8">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    {category ? `${categoryTitles[category] || category} FAQ` : 'Frequently Asked Questions'}
                    </h2>
                <p className="text-muted-foreground mb-6">
                    Find answers to common questions about our services
                </p>
                <div className="relative max-w-md mx-auto">
                <Input
                    type="text"
                        placeholder="Search FAQs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>

                <AnimatePresence mode="wait">
                {filteredFAQs.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        className="text-center py-8"
                    >
                        <p className="text-muted-foreground">
                            {searchTerm ? `No FAQs found for "${searchTerm}"` : "No FAQs available for this category"}
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4"
                    >
                        {filteredFAQs.map((faq, index) => (
                                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-medium text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        {faq.question}
                                    </span>
                                    {expandedItems.has(index) ? (
                                                <ChevronUp className="w-5 h-5 text-gray-500" />
                                    ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-500" />
                                        )}
                                </button>
                            <AnimatePresence>
                                    {expandedItems.has(index) && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                            <div className="px-6 pb-4 text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                                    {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                    </motion.div>
                )}
                </AnimatePresence>

            <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                    Still have questions? We&apos;re here to help!
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                    Contact Us
                </Link>
                </div>
        </div>
    );
};

export default FAQSearch;