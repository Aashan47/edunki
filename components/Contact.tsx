import { site } from "@/lib/site";
import ContactForm from "./ContactForm";
import { InstagramIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="bg-paper-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Contact us
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              We&rsquo;d love to hear from you! Contact us to learn more about
              our services, schedule a consultation, or ask any questions you
              may have.
            </p>

            <div className="mt-9">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-ink/25"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <MailIcon />
                </span>
                <span>
                  <span className="block text-sm font-medium text-ink">
                    Email us
                  </span>
                  <span className="block text-sm text-ink-500">
                    {site.email}
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="edunki on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink-500 transition-colors hover:border-ink hover:text-ink"
              >
                <InstagramIcon className="h-[1.1rem] w-[1.1rem]" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="edunki on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink-500 transition-colors hover:border-ink hover:text-ink"
              >
                <LinkedInIcon className="h-[1.1rem] w-[1.1rem]" />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
