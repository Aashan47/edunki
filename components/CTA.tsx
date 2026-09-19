import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowIcon } from "./Icons";

export default function CTA() {
  return (
    <section className="bg-paper-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-3xl border border-line bg-white px-7 py-12 text-center sm:px-12">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Get in touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-500">
            Tell us where you are in the process and we&rsquo;ll tell you
            honestly what the next step looks like.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Contact us
              <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={site.consultationPath}
              className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Request a consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
