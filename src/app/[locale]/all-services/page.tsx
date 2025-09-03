import CarouselAnimation from "@/components/carousel-animation";
import OtherServices from "@/components/other-services-home";
import TransportationServices from "@/components/TransportationServices";
import { useTranslations } from "next-intl";

export default function AllServicesPage() {
    const t = useTranslations("Home");

            
    return (
        <div>
                           {/* Services Section */}
                           <section id="services">
                    <div className="flex flex-col gap-8 bg-[#E2F1E7] px-2 py-5 rounded-2xl">
                        {/* Transportation Services */}
                        <CarouselAnimation/>
                        <TransportationServices />

                        <OtherServices />
                    </div>
                </section>
        </div>
    );
}