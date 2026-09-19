import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import { getResource, resources } from "@/lib/resources";
import { ArrowIcon } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};
  return { title: resource.title, description: resource.blurb };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const index = resources.findIndex((r) => r.slug === resource.slug);
  const previous = resources[index - 1];
  const next = resources[index + 1];

  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-ink"
        >
          <ArrowIcon className="h-4 w-4 rotate-180" />
          Back to resources
        </Link>

        <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {resource.title}
        </h1>
        <p className="mt-4 text-lg text-ink-500">{resource.blurb}</p>

        {resource.image ? (
          <Image
            src={resource.image}
            alt=""
            width={1200}
            height={700}
            sizes="(min-width: 768px) 720px, 100vw"
            className="mt-10 w-full rounded-2xl object-cover"
          />
        ) : null}

        <p className="mt-10 text-base leading-relaxed text-ink-500">
          {resource.body}
        </p>

        <nav className="mt-16 flex items-center justify-between gap-4 border-t border-line pt-8">
          {previous ? (
            <Link
              href={`/resources/${previous.slug}`}
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
            >
              <ArrowIcon className="h-4 w-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" />
              {previous.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/resources/${next.slug}`}
              className="group inline-flex items-center gap-2 text-right text-sm font-medium text-ink"
            >
              {next.title}
              <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>

      <CTA />
    </>
  );
}
