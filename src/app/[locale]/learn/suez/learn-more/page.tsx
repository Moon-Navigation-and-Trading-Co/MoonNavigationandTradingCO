
import FAQSearch from "@/components/faq";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function SuezLearnMore() {
    return (
        <div>
            <h1>Suez Learn More</h1>
            <GetQuoteComponent topic="Suez Canal Transit" link="/suez-canal-form" />
            <FAQSearch category="suez-canal" />
        </div>
    )
}