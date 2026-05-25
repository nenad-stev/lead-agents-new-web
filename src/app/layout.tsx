import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import { ExitIntentPopup } from "@/components/marketing/ExitIntentPopup";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/lib/i18n";

import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dictionary = getDictionary("sr");

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${urbanist.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  );
}
