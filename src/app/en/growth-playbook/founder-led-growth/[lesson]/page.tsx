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
    title: "Founder Led Growth playbook is going live soon",
    description:
      "Lessons are currently locked. Leave your email on the main page and we will notify you once the playbook is published.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function FounderLedGrowthLessonEnPage(_: PageProps) {
  notFound();
}
