import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";

import { ExitIntentPopup } from "@/components/marketing/ExitIntentPopup";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { organizationSchema, websiteSchema } from "@/lib/schema";

import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dictionary = getDictionary("sr");
const GTM_ID = "GTM-MWMCWR7";

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
  metadataBase: new URL(siteConfig.url),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") === "en" ? "en" : "sr";

  return (
    <html lang={locale} className={`${urbanist.variable} h-full`}>
      <head>
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="min-h-full font-sans antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  );
}
