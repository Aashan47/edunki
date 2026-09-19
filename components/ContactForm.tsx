"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { site } from "@/lib/site";
import { fieldClass, labelClass, submitForm } from "@/lib/forms";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const wrapper = useRef<HTMLDivElement>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("sending");
    setError("");

    const result = await submitForm(form, "New enquiry from the edunki website");

    if (result.ok) {
      setStatus("sent");
      form.reset();
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
        className="rounded-2xl border border-line bg-white p-8 text-center"
      >
        <p className="font-display text-xl font-semibold text-ink">
          Thanks for contacting us!
        </p>
        <p className="mt-2 text-sm text-ink-500">
          We&rsquo;ve received your message and will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      ref={wrapper as unknown as React.RefObject<HTMLFormElement>}
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-white p-6 sm:p-8"
    >
      {/* Honeypot — bots fill this, humans never see it. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className={labelClass}>
            First name
          </label>
          <input
            id="first-name"
            name="first_name"
            type="text"
            required
            autoComplete="given-name"
            className={fieldClass}
            placeholder="Ayesha"
          />
        </div>
        <div>
          <label htmlFor="last-name" className={labelClass}>
            Last name
          </label>
          <input
            id="last-name"
            name="last_name"
            type="text"
            required
            autoComplete="family-name"
            className={fieldClass}
            placeholder="Khan"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
          placeholder="you@example.com"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="Leave us a message..."
        />
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 text-sm text-red-600">
          {error}{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline underline-offset-4"
          >
            {site.email}
          </a>
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Submit"}
        </button>
        <p className="text-xs text-ink-300">
          Need a full consultation?{" "}
          <Link
            href={site.consultationPath}
            className="font-medium text-ink-500 underline underline-offset-4 hover:text-ink"
          >
            Use the detailed form
          </Link>
        </p>
      </div>
    </form>
  );
}
