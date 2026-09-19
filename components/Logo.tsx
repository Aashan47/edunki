export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`font-display text-[1.75rem] leading-none font-semibold tracking-tight ${
        light ? "text-white" : "text-ink"
      }`}
    >
      edunki
      <span className="text-accent">.</span>
    </span>
  );
}
