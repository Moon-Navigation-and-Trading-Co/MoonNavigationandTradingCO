import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar";
import { createClient } from "@/utils/supabase/server";



const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "FormBase",
  description: "Internationalized Forms",
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale }
}: Props) {
  const messages = await getMessages();
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isUserLoggedIn = !!user;

  return (
    <html lang={locale} className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <NextIntlClientProvider messages={messages}>

              <div className="flex-1 w-full flex flex-col items-center">

                {/* navbar */}
                <Navbar user={isUserLoggedIn} />

                {/* content */}
                <div className="flex flex-col pt-16 w-full max-w-[1300px] px-3 sm:px-5">
                  {children}
                </div>

                {/*  footer */}
                <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                  {/* <p>
                  Powered by{" "}
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Supabase
                  </a>
                </p>
                <ThemeSwitcher /> */}
                </footer>
              </div>
            </NextIntlClientProvider>

          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
