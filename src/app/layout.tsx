import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
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
    description: "International Freight Solutions at Competitive Prices!",
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
  description: "International Freight Solutions at Competitive Prices!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="theme-color" content="#232B50" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-background text-foreground no-horizontal-scroll font-raleway" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Toaster />
          <AnalyticsTracker />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 