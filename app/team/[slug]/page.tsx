import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import { getMember, team } from "@/lib/team";
import { ArrowIcon } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) return {};
  return {
    title: member.name,
    description: `${member.name} — ${member.role} at edunki.`,
  };
}

export default async function MemberPage({ params }: Props) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();

  const others = team.filter((m) => m.slug !== member.slug);

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <Link
          href="/#team"
          className="inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-ink"
        >
          <ArrowIcon className="h-4 w-4 rotate-180" />
          Back to the team
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div>
            <div className="relative aspect-[7/8] overflow-hidden rounded-3xl bg-paper-soft">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {member.role}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {member.name}
            </h1>
            <div className="mt-7 space-y-4">
              {member.bio.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-base leading-relaxed text-ink-500"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-line pt-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">
            More of the team
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {others.map((other) => (
              <li key={other.slug}>
                <Link href={`/team/${other.slug}`} className="group block">
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-paper-soft">
                    <Image
                      src={other.photo}
                      alt={other.name}
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="mt-3 block text-sm font-medium text-ink">
                    {other.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CTA />
    </>
  );
}
