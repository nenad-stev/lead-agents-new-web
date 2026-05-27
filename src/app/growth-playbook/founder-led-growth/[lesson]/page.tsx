import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ lesson: string }>;
};

export function generateStaticParams() {
  return [];
}

export async function generateMetadata(_: PageProps): Promise<Metadata> {
  return {
    title: "Founder Led Growth playbook uskoro live",
    description:
      "Lekcije su trenutno zaključane. Ostavite email na uvodnoj stranici i bićete obavešteni čim playbook bude objavljen.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function FounderLedGrowthLessonPage(_: PageProps) {
  notFound();
}
