import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ConsultationForm from "@/components/ConsultationForm";
import { site } from "@/lib/site";
import { MailIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Request a consultation",
  description:
    "Tell us where you are in your application and what you need help with. One of our consultants will get back to you.",
};

const STEPS = [
  {
    title: "You send us your details",
    body: "The more you tell us about your background and deadlines, the more useful our first reply will be.",
  },
  {
    title: "We match you to a consultant",
    body: "Your query goes to whoever on the team actually covers that route — CSS, European admissions, US PhDs, funding.",
  },
  {
    title: "We get back to you",
    body: "By email, usually within two working days, with an honest read on your next step and what we can do.",
  },
];

export default function ConsultationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Consultation"
        title="Request a consultation"
        lead="Tell us where you are in the process and what you need help with. One of our consultants will review your details and get back to you."
      />

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              What happens next
            </h2>

            <ol className="mt-8 space-y-8">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block text-base font-medium text-ink">
                      {step.title}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-ink-500">
                      {step.body}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-line bg-paper-soft p-6">
              <p className="text-sm leading-relaxed text-ink-500">
                Prefer to just email us? That works too.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-flex items-center gap-2.5 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                <MailIcon className="h-4 w-4" />
                {site.email}
              </a>
            </div>
          </div>

          <ConsultationForm />
        </div>
      </div>
    </>
  );
}
