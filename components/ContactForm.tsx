"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-300 transition-colors focus:border-ink focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!ACCESS_KEY) {
      setStatus("error");
      setError(
        "The form is not connected yet. Add NEXT_PUBLIC_WEB3FORMS_KEY to .env.local — or email us directly.",
      );
      return;
    }

    setStatus("sending");
    setError("");

    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "New enquiry from the edunki website");
    data.append("from_name", "edunki website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Could not reach the server. Please try again, or email us.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center">
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
          <label
            htmlFor="first-name"
            className="mb-1.5 block text-xs font-medium text-ink-500"
          >
            First name
          </label>
          <input
            id="first-name"
            name="first_name"
            type="text"
            required
            autoComplete="given-name"
            className={field}
            placeholder="Ayesha"
          />
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="mb-1.5 block text-xs font-medium text-ink-500"
          >
            Last name
          </label>
          <input
            id="last-name"
            name="last_name"
            type="text"
            required
            autoComplete="family-name"
            className={field}
            placeholder="Khan"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="email"
          className="mb-1.5 block text-xs font-medium text-ink-500"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
          placeholder="you@example.com"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-medium text-ink-500"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${field} resize-y`}
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

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
