import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./Icons";

export default function Community() {
  return (
    <section id="community" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Community service
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Five fully funded places, every year
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              We offer 5 deserving students every year free end-to-end
              consultation and admission service &mdash; the same process, the
              same consultants, at no cost.
            </p>
            <Link
              href="/#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5"
            >
              Apply for a place
              <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
            <Image
              src="/media/site/community.jpeg"
              alt=""
              width={410}
              height={123}
              sizes="(min-width: 1024px) 420px, 80vw"
              className="mx-auto w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
