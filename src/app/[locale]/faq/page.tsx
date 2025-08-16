import FAQSearch from "@/components/faq";
import FAQTopics from "@/components/faq-topics";

export default function FAQPage(){
    return (
        <div className="w-full max-w-7xl mt-32 mx-auto py-12 px-4" style={{ fontFamily: "Raleway, sans-serif" }}>
            {/* Main Topics Section */}
            <FAQTopics />
            
            {/* FAQ Search Section */}
            <div className="mt-16">
                <FAQSearch/>
            </div>
        </div>
    )
}