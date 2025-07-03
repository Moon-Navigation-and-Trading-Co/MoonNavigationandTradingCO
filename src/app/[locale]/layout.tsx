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

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Moon Navigation",
    template: "%s | Moon Navigation",
  },
  openGraph: {
    description: "International Freight Solutions at Competitve Prices!",
    image: "/airCargo.jpg",
  },
  keywords: [
    "Moon Navigation",
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
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isUserLoggedIn = !!user;

  return (
    <html
      lang={locale}
      className={GeistSans.className}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light">
          <main className="min-h-screen flex flex-col items-center">
            <NextIntlClientProvider messages={messages}>
              <Toaster />
              <div className="relative flex-1 w-full flex flex-col items-center">
                {/* navbar */}
                <Navbar user={isUserLoggedIn} />
                {/* content */}
                <div className="flex flex-col pt-16 w-full px-0 md:px-5">
                  {children}
                </div>
                <div className="absolute inset-0 z-[-1] h-full w-full bg-white dark:bg-gray-800 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_30%,#000_40%,transparent_100%)] md:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_35%,#000_40%,transparent_100%)]"></div>

                {/* faq */}
                <div className="w-full max-w-[1300px] px-0 md:px-5 mt-8 mb-8">
                </div>

                {/*  footer */}
                <footer className="w-full flex items-center justify-center text-center text-xs">
                  <Footer />
                </footer>
              </div>
            </NextIntlClientProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
