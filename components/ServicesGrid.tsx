import Link from "next/link";
import { services } from "@/lib/services";
import { ArrowIcon } from "./Icons";

export default function ServicesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {services.map((service, i) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="group flex flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_18px_40px_-24px_rgba(22,22,63,0.45)]"
        >
          <span className="font-display text-sm font-semibold text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">
            {service.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
            {service.summary}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
            Learn more
            <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  );
}
