import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-5 py-32 text-center sm:px-8">
      <p className="font-display text-6xl font-semibold tracking-tight text-line">
        404
      </p>
      <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink">
        We couldn&rsquo;t find that page
      </h1>
      <p className="mt-4 text-base text-ink-500">
        The page may have moved, or the link may be out of date.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-700"
      >
        Back to home
      </Link>
    </div>
  );
}
