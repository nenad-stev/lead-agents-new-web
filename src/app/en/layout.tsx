import type { Metadata } from "next";

import { getDictionary } from "@/lib/i18n";

const dictionary = getDictionary("en");

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
