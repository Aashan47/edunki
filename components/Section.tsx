type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  tone?: "light" | "soft";
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  tone = "light",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${tone === "soft" ? "bg-paper-soft" : "bg-white"} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          {lead ? (
            <p className="mt-4 text-base leading-relaxed text-ink-500">{lead}</p>
          ) : null}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
