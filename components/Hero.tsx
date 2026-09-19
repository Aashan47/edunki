import Link from "next/link";
import { site, stats } from "@/lib/site";
import { ArrowIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden text-white">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
          Education consultancy
        </p>

        <h1 className="mt-5 max-w-3xl font-display text-[2.75rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Welcome to Edunki
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          At edunki, we&rsquo;re committed to empowering students to achieve
          their academic and career goals through personalized guidance and
          support. Our team of experienced consultants is here to help you
          navigate the complexities of the education landscape and unlock your
          full potential. Explore our range of services and discover how Edunki
          can make a difference in your educational journey. Get started today!
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="/#services"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5"
          >
            Explore our services
            <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <a
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5"
          >
            Book a free call
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-10 sm:mt-20 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm text-white/60">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
