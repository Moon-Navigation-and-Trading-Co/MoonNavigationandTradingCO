import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ShippingMethodsInfo() {
  const t = useTranslations("learn-less");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8 px-4">
      {/* Banner Image */}
      <div className="w-full max-w-7xl rounded-[60px] overflow-hidden mb-12">
        <img
          src="/lcl-banner.jpg"
          alt="Less Than Container Load Banner"
          className="w-full h-[320px] object-cover"
          loading="lazy"
        />
      </div>
      {/* Content Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side: Title and Button */}
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-4xl font-medium mb-2 leading-tight text-foreground">
            Less Than Container Load
          </h1>
          <span className="text-lg text-primary mb-6">(LCL)</span>
          <Button asChild>
            <Link href="/container-services-forms">
              Request a Quote
            </Link>
          </Button>
        </div>
        {/* Right Side: Info Card */}
        <div>
          <h2 className="text-xl font-semibold text-primary mb-4">
            What is Less than container load?
          </h2>
          <p className="text-muted-foreground mb-4 text-sm md:text-base">
          Less than Container Load (LCL) is a shipping method specifically designed for businesses with shipments that
do not fill an entire shipping container. This service enables multiple shipments from different clients to be
consolidated within a single container, enabling businesses to share transportation costs effectively. Our LCL is
an ideal solution for smaller shipments, as it allows you to pay only for the space you use. As it provides a
cost-effective way to transport goods while maintaining efficient transit times and ensuring secure delivery
across global markets.


          </p>
          <p className="text-muted-foreground text-sm md:text-base">
          At Moon Navigation and Trading Co., we are committed to providing exceptional LCL shipping solutions that
cater to the unique needs of our clients. With years of industry experience, our team of professionals ensures
that your cargo is managed with the highest of care and efficiency. We understand the complexities of
international logistics and strive to simplify the shipping process for you. Trust us to deliver your safely and
efficiently, enhancing your business operations with our comprehensive and reliable services.</p>
        </div>
      </div>
      {/* When to use LCL Section */}
      <div className="w-full max-w-7xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-primary mb-3">
            When to use LCL?
          </h2>
          <p className="text-muted-foreground mb-3 text-sm md:text-base">
          This method is particularly effective for stackable cargo, ensuring efficient use of space. With Moon
Navigation and Trading Co., If you need to ship small boxes or pallets that can fit into 20-foot or 40-foot
containers but do not have enough cargo to fill an entire container, our LCL shipping is the ideal solution
Additionally, it can accommodate non-stackable items, providing flexibility to meet shipping requirements.
With our LCL, you can optimize your logistics while maintaining the security and timely delivery of your
goods. </p>
          <p className="text-muted-foreground text-sm md:text-base">
          LCL is especially beneficial for small and medium enterprises (SMEs) that do not have the volume to fill an
entire container. It also caters to large and medium enterprises (LMEs) with fluctuating demands or those
exploring new market opportunities. By leveraging LCL shipping, these businesses can enhance their supply
chain efficiency, reduce inventory costs, and maintain flexibility in adapting to market fluctuations, all while
ensuring the reliable and timely delivery of their products.</p>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center items-center">
          <img
            src="/lcl-when-to-use.jpg"
            alt="Workers loading Less Than Container Load"
            className="rounded-3xl shadow-lg w-full max-w-7xl md:max-w-7xl"
            loading="lazy"
          />
        </div>
      </div>
      <div className="w-full max-w-7xl mt-20">
        <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">
          What is the difference between LCL and FCL? (LCL Vs FCL)
        </h2>
        <div className="overflow-x-auto rounded-2xl shadow-md">
          <table className="min-w-full bg-background border border-border text-sm md:text-base">
            <thead>
              <tr className="bg-secondary text-primary">
                <th className="py-3 px-4 border-b border-border font-semibold text-left">Feature</th>
                <th className="py-3 px-4 border-b border-border font-semibold text-left">LCL (Less Than Container Load)</th>
                <th className="py-3 px-4 border-b border-border font-semibold text-left">FCL (Full Container Load)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b border-border text-foreground">Cost</td>
                <td className="py-3 px-4 border-b border-border text-muted-foreground">Lower (pay for used space)</td>
                <td className="py-3 px-4 border-b border-border text-muted-foreground">Higher (pay for full container)</td>
              </tr>
              <tr className="bg-secondary/50">
                <td className="py-3 px-4 border-b border-border text-foreground">Volume</td>
                <td className="py-3 px-4 border-b border-border text-muted-foreground">Small to medium shipments</td>
                <td className="py-3 px-4 border-b border-border text-muted-foreground">Larger shipments</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-border text-foreground">Transit Time</td>
                <td className="py-3 px-4 border-b border-border text-muted-foreground">Slightly longer (due to consolidation)</td>
                <td className="py-3 px-4 border-b border-border text-muted-foreground">Faster (direct shipping)</td>
              </tr>
              <tr className="bg-secondary/50">
                <td className="py-3 px-4 border-b border-border text-foreground">Flexibility</td>
                <td className="py-3 px-4 border-b border-border text-muted-foreground">More frequent shipments</td>
                <td className="py-3 px-4 border-b border-border text-muted-foreground">Requires full container allocation</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-foreground">Security</td>
                <td className="py-3 px-4 text-muted-foreground">Handled with care (but shared space)</td>
                <td className="py-3 px-4 text-muted-foreground">Higher security (dedicated container)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full max-w-7xl mt-20 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <img
            src="/lcl-experience.jpg"
            alt="Shipping professional with containers"
            className="rounded-2xl shadow-lg w-full max-w-7xl md:max-w-7xl"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-3/4">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">
            Elevate Your Shipping Experience with Our LCL Solutions
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-2">
            Tailored Freight Consolidation Services for Smooth, Efficient, and Cost-Effective Global Transport.
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
          At Moon Navigation and Trading Co., we pride ourselves on leveraging an extensive global
network and deep expertise in freight consolidation to provide superior Less than Container
Load (LCL) shipping solutions. We understand the complexities of international shipping and
strive to simplify the process by offering consolidated services that optimize costs without
sacrificing quality. As we are committed to ensuring that your goods are transported securely
and efficiently, tailored to your unique business needs. </p>
          <p className="text-sm md:text-base text-muted-foreground mt-2">
          Our comprehensive LCL services offer flexible scheduling, reliable transit times, and real-time
tracking, empowering you to optimize shipping costs while maintaining the highest standards of
speed and safety. With our focus on excellence and customer satisfaction, we strive to be your
trusted partner in navigating the complexities of international logistics. </p>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-primary mb-12">
          Reasons to Choose Moon Navigation and Trading Co. for Your LCL Shipment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Global Network */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="font-semibold text-base md:text-lg mb-2 text-primary">Global Network</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Our extensive network provides reliable consolidation services that ensure seamless connections for your cargo worldwide, ensuring timely delivery.
            </p>
          </div>
          {/* Cost-Optimized Transportation */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="font-semibold text-base md:text-lg mb-2 text-primary">Cost-Optimized Transportation</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              We focus on delivering efficient and budget-friendly transportation options for smaller shipments without compromising on quality.
            </p>
          </div>
          {/* Secure Handling */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="font-semibold text-base md:text-lg mb-2 text-primary">Secure Handling</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Our team employs meticulous packaging, precise labeling, and advanced tracking to ensure your shipment is always protected, even in shared shipping spaces, ensuring that it arrives in perfect condition.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* End-to-End Logistics */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="font-semibold text-base md:text-lg mb-2 text-primary">End-to-End Logistics</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              We provide comprehensive logistics solutions that guarantee timely and reliable delivery outcomes, from pickup to final destination, allowing you to focus on your business.
            </p>
          </div>
          {/* Expert Documentation Management */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="font-semibold text-base md:text-lg mb-2 text-primary">Expert Documentation Management</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              With our deep understanding of customs regulations and compliance requirements, we expertly manage all necessary documentation, minimizing delays and ensuring a hassle-free shipping experience.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/lcl-additional-services.jpg"
            alt="Workers discussing logistics at port"
            className="rounded-2xl w-full max-w-7xl md:max-w-7xl object-cover"
          />
        </div>
        {/* Text Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            Enhance Your LCL Shipment with Our Additional Services
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-3">
            At Moon Navigation and Trading Co., we understand the complexities of global logistics. When booking your Less than Container Load (LCL) shipment globally with us:
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-3">
            You can enhance it by adding specialized logistics services designed to streamline your supply chain. Our door-to-door delivery ensures that your cargo is expertly handled from pickup to delivery, while our dedicated customs clearance team facilitates smooth imports and exports worldwide.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            For even smoother shipments, we recommend our air freight services, allowing you to leverage well-informed route analysis and benefit from the skills of our team of professionals to keep your goods moving efficiently. <span className="italic text-muted-foreground/60">24/7</span>
          </p>
        </div>
      <div className="w-full mt-16 mb-4">
        <h2 className="text-2xl md:text-3xl font-normal mb-4 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          How does our LCL shipping Cost is calculated?
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-7xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          The cost of LCL shipping at Moon Navigation and Trading Co. is determined by several key factors, primarily the volume of space your cargo occupies within the container, its weight, and the chosen shipping route. Volume is measured in cubic meters (CBM), while weight is calculated in kilograms. For our services, the maximum weight for a single package is 3,000 kg, with a volume limit of 29 CBM. Additionally, the overall maximum limit per booking is 20,000 kg and 60 CBM. By accurately assessing these parameters, we ensure competitive pricing tailored to your specific shipping needs, providing transparency and value in the process.
        </p>
      </div>
      </div>
      <section className="w-full bg-secondary rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20 mb-2 relative">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-[260px]">
          <h2 className="text-2xl md:text-3xl font-normal mb-4 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get your Quote with Us
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our streamlined LCL freight quotation process is designed for speed and convenience. At
            Moon Navigation and Trading Co., obtaining a quote is quick and hassle-free with our
            Quotation by Request system. Simply fill out our short form to initiate your request. Once
            submitted, our team will assess your shipment's volume, weight, and consolidation options to
            find the most efficient and cost-effective transport solution. You will receive a customized
            quotation directly in your email, ensuring accurate pricing, reliable scheduling, and seamless
            cargo movement.
          </p>
          <Button asChild>
            <Link href="/container-services-forms">
              Request a Quote
            </Link>
          </Button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-end items-end mt-8 md:mt-0">
          <img
            src="/quote-illustration.png"
            alt="Quotation illustration"
            className="w-[320px] h-auto object-contain"
            style={{ maxWidth: 380 }}
          />
        </div>
      </section>
    </div>
  );
}
