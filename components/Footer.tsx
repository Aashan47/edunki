import Link from "next/link";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import Logo from "./Logo";
import { InstagramIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
              {site.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="edunki on Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-ink-500 transition-colors hover:border-ink hover:text-ink"
              >
                <InstagramIcon />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="edunki on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-ink-500 transition-colors hover:border-ink hover:text-ink"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-300">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-ink-500 transition-colors hover:text-ink"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-300">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-500 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-ink-500 transition-colors hover:text-ink"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.credit}</p>
        </div>
      </div>
    </footer>
  );
}
