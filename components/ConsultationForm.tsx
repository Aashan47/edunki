"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { fieldClass, labelClass, submitForm } from "@/lib/forms";

type Status = "idle" | "sending" | "sent" | "error";

const STAGES = [
  "Just exploring my options",
  "Shortlisting programs",
  "Preparing my application",
  "Application submitted, awaiting decisions",
  "Admitted — need visa or funding help",
];

export default function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const wrapper = useRef<HTMLDivElement>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("sending");
    setError("");

    const result = await submitForm(form, "New consultation request — edunki");

    if (result.ok) {
      setStatus("sent");
      form.reset();
      // The confirmation replaces the form in place, which can sit above the
      // current scroll position — bring it into view so it is actually seen.
      wrapper.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      setStatus("error");
      setError(result.message);
    }
  }

  if (status === "sent") {
    return (
      <div
        ref={wrapper}
        className="rounded-2xl border border-line bg-white p-10 text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft">
          <svg
            className="h-7 w-7 text-accent"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-6 font-display text-2xl font-semibold text-ink">
          Request received
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-500">
          Thank you for reaching out. One of our consultants will review your
          details and <strong className="font-semibold text-ink">get back
          to you</strong> by email, usually within two working days.
        </p>
        <p className="mt-4 text-sm text-ink-500">
          Something urgent in the meantime?{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-accent underline underline-offset-4"
          >
            {site.email}
          </a>
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-medium text-ink-500 underline underline-offset-4 hover:text-ink"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      ref={wrapper as unknown as React.RefObject<HTMLFormElement>}
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-white p-6 sm:p-9"
    >
      {/* Honeypot — bots fill this, humans never see it. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <fieldset className="border-0 p-0">
        <legend className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">
          Your details
        </legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="c-first" className={labelClass}>
              First name
            </label>
            <input
              id="c-first"
              name="first_name"
              type="text"
              required
              autoComplete="given-name"
              className={fieldClass}
              placeholder="Ayesha"
            />
          </div>
          <div>
            <label htmlFor="c-last" className={labelClass}>
              Last name
            </label>
            <input
              id="c-last"
              name="last_name"
              type="text"
              required
              autoComplete="family-name"
              className={fieldClass}
              placeholder="Khan"
            />
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="c-email" className={labelClass}>
              Email
            </label>
            <input
              id="c-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="c-phone" className={labelClass}>
              Phone / WhatsApp{" "}
              <span className="text-ink-300">(optional)</span>
            </label>
            <input
              id="c-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={fieldClass}
              placeholder="+92 300 0000000"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-9 border-0 p-0">
        <legend className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">
          What you need help with
        </legend>

        <div>
          <label htmlFor="c-interest" className={labelClass}>
            Service you&rsquo;re interested in
          </label>
          <select
            id="c-interest"
            name="interest"
            required
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Community Service (free place)">
              Community Service (free place)
            </option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="c-stage" className={labelClass}>
              Where you are right now
            </label>
            <select
              id="c-stage"
              name="stage"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Select a stage…
              </option>
              {STAGES.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="c-destination" className={labelClass}>
              Target country or university{" "}
              <span className="text-ink-300">(optional)</span>
            </label>
            <input
              id="c-destination"
              name="destination"
              type="text"
              className={fieldClass}
              placeholder="Germany, UK, USA…"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="c-message" className={labelClass}>
            Tell us about your query
          </label>
          <textarea
            id="c-message"
            name="message"
            required
            rows={5}
            className={`${fieldClass} resize-y`}
            placeholder="Your background, the programs you have in mind, deadlines you are working towards, and anything you would like us to look at."
          />
        </div>
      </fieldset>

      {status === "error" ? (
        <p role="alert" className="mt-5 text-sm text-red-600">
          {error}{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline underline-offset-4"
          >
            {site.email}
          </a>
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-ink px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Request a consultation"}
        </button>
        <p className="text-xs leading-relaxed text-ink-300">
          We&rsquo;ll get back to you by email, usually within two working days.
        </p>
      </div>
    </form>
  );
}
