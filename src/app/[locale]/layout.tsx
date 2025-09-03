import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { createClient } from "@/utils/supabase/server";
import { Toaster } from "@/components/ui/toaster";
import FAQSearch from "@/components/faq";
import AnalyticsTracker from "@/components/analytics/visitor-tracker";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
      default: "Moon Navigation and Trading Co.",
  template: "%s | Moon Navigation and Trading Co.",
  },
  openGraph: {
    description: "International Freight Solutions at Competitve Prices!",
    image: "/airCargo.jpg",
  },
  keywords: [
    "Moon Navigation and Trading Co",
    "Freight",
    "Shipping",
    "Logistics",
    "Cargo",
    "Transportation",
    "International Freight",
    "Ocean Freight",
    "Air Freight",
    "Inland Freight",
    "Container Services",
    "Project Cargo Services",
    "Roll On/Off (RoRo)",
    "Heavy Lift",
    "Dangerous Cargo",
    "Express Air Freight",
    "Standard Air Freight",
    "Charter Services",
    "Perishable Goods",
    "International Inland",
    "Local Inland",
    "Inland Container",
    "Less than Container Load",
    "Standard Container",
    "Oversized Container",
    "Inland Transportation",
    "Stevedoring and Storage",
  ],
  description: "International Freight Solutions at Competitve Prices!",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isUserLoggedIn = !!user;

  // Determine text direction based on locale
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <div lang={locale} dir={dir}>
      <main className="min-h-screen-mobile md:min-h-screen-desktop flex flex-col items-center">
        <NextIntlClientProvider messages={messages}>
          <div className="relative flex-1 w-full flex flex-col items-center">
            {/* navbar */}
            <Navbar user={isUserLoggedIn} />
            <div className="mb-10"/>
            {/* content */}
            <div className="flex flex-col pt-16 w-full px-4 md:px-6 lg:px-8 container-responsive">
              {children}
            </div>
            

            {/* faq */}
            <div className="w-full max-w-[1600px] px-4 md:px-6 lg:px-8 mt-8 mb-8">
            </div>

            {/*  footer */}
            <footer className="w-full flex items-center justify-center text-center text-xs safe-area-bottom">
              <Footer />
            </footer>
          </div>
        </NextIntlClientProvider>
      </main>
    </div>
  );
}
