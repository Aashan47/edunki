import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { getService, services } from "@/lib/services";
import { ArrowIcon } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader
        eyebrow="Service"
        title={service.heroTitle}
        lead={service.intro}
        crumbs={[{ label: "Services", href: "/#services" }]}
      />

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <ol className="space-y-14">
          {service.steps.map((step, i) => (
            <li
              key={step.title}
              className="grid gap-5 border-t border-line pt-10 lg:grid-cols-[auto_1fr] lg:gap-12"
            >
              <div className="lg:w-40">
                <span className="font-display text-5xl font-semibold tracking-tight text-line">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="max-w-3xl">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {step.title}
                </h2>

                {step.body.map((para) => (
                  <p
                    key={para.slice(0, 40)}
                    className="mt-4 text-base leading-relaxed text-ink-500"
                  >
                    {para}
                  </p>
                ))}

                {step.list ? (
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {step.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-ink-500"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {step.link ? (
                  <a
                    href={step.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent"
                  >
                    {step.link.label}
                    <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 border-t border-line pt-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">
            Other services
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line p-5 transition-colors hover:border-ink/25"
                >
                  <span className="font-display text-base font-semibold text-ink">
                    {other.navTitle}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm text-ink-500">
                    Learn more
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
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
