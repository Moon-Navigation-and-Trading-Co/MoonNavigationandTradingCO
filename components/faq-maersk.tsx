"use client";

import React, { useState, useMemo } from "react";
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

const defaultFAQs: FAQItem[] = [
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
    // Add more FAQ items here - this is just a sample, the full list would be much longer
];

export default function FAQMaersk({ category }: { category?: string }) {
    const [search, setSearch] = useState("");
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());
    const faqs = defaultFAQs;

    const filteredFAQs = useMemo(() => {
        if (!search.trim()) return [];
        const lower = search.toLowerCase();
        return faqs.filter(
            (faq) =>
                faq.question.toLowerCase().includes(lower) ||
                faq.answer.toLowerCase().includes(lower)
        );
    }, [search, faqs]);

    // Filter by category for default display
    const categoryFAQs = useMemo(() => {
        const targetCategory = category || "popular";
        return faqs.filter(faq => faq.category === targetCategory).slice(0, 6);
    }, [faqs, category]);

    const toggleItem = (itemId: string) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(itemId)) {
            newOpenItems.delete(itemId);
        } else {
            newOpenItems.add(itemId);
        }
        setOpenItems(newOpenItems);
    };

    const displayFAQs = search.trim() ? filteredFAQs : categoryFAQs;

    return (
        <div id="faq" className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
                <Link href="/faq">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                </Link>
                
                <Input
                    type="text"
                    placeholder="Search for answers..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="max-w-md mx-auto mb-6"
                />
                
                {category ? (
                    <p className="text-gray-600 text-sm mb-4">
                        Related Questions:
                    </p>
                ) : (
                    <p className="text-gray-600 text-sm mb-4">
                        Popular Questions: 
                    </p>
                )}
            </div>

            <div className="space-y-4">
                <AnimatePresence mode="wait">
                    {displayFAQs.map((faq, idx) => (
                        <motion.div
                            key={`faq-${idx}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            <button
                                onClick={() => toggleItem(`faq-${idx}`)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                                aria-expanded={openItems.has(`faq-${idx}`)}
                                aria-controls={`faq-answer-${idx}`}
                            >
                                <h3 className="text-lg font-medium text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0 ml-4">
                                    <AnimatePresence mode="wait">
                                        {openItems.has(`faq-${idx}`) ? (
                                            <motion.div
                                                initial={{ rotate: 0 }}
                                                animate={{ rotate: 180 }}
                                                exit={{ rotate: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronUp className="w-5 h-5 text-gray-500" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                initial={{ rotate: 180 }}
                                                animate={{ rotate: 0 }}
                                                exit={{ rotate: 180 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDown className="w-5 h-5 text-gray-500" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </button>

                            <AnimatePresence>
                                {openItems.has(`faq-${idx}`) && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            id={`faq-answer-${idx}`}
                                            className="px-6 pb-5"
                                        >
                                            <div className="pt-2 border-t border-gray-100">
                                                <p className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {search.trim() && filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                        No answers found for &quot;{search}&quot;
                    </p>
                </div>
            )}

            {!search.trim() && categoryFAQs.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                        No questions found for this category.
                    </p>
                </div>
            )}
        </div>
    );
} 