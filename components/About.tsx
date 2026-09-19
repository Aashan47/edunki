import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-3xl border border-line sm:block" />
            <Image
              src="/media/site/founder.jpg"
              alt="Shandana Waheed, founder of edunki"
              width={1600}
              height={1066}
              sizes="(min-width: 1024px) 480px, 100vw"
              className="relative w-full rounded-3xl object-cover"
              priority={false}
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              About us
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Guidance from people who have made the journey themselves
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              edunki was founded by{" "}
              <strong className="font-semibold text-ink">
                Shandana Waheed
              </strong>
              , an anthropologist-cum-archaeologist currently enrolled in a PhD
              program at Stanford University. She has taught and mentored at
              Stanford, New York University, Beaconhouse National University,
              Punjab University and UMT Lahore, and has helped many students
              secure admissions and scholarships in Master&rsquo;s and PhD
              programs, including R1 and Ivy League institutions in the USA.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              Around her sits a team of civil servants, academics and admissions
              specialists &mdash; each one an expert in the route they advise on,
              and each one someone who has walked it.
            </p>
            <Link
              href="/team/shandana-waheed"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink"
            >
              Read Shandana&rsquo;s full profile
              <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
