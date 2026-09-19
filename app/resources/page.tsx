import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { resources } from "@/lib/resources";
import { ArrowIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Samples, deadlines and recommended reading, collected by the edunki consultants.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Resources"
        lead="Samples, deadlines and recommended reading, collected by our consultants."
      />

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <li key={resource.slug}>
              <Link
                href={`/resources/${resource.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_18px_40px_-24px_rgba(22,22,63,0.45)]"
              >
                <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {resource.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                  {resource.blurb}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                  Open
                  <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <CTA />
    </>
  );
}
