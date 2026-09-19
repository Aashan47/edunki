/**
 * Shared submit path for every form on the site.
 *
 * Posts to Web3Forms, which emails the submission straight to
 * site.email — no backend of our own, so the site stays static.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export const FORM_NOT_CONFIGURED =
  "The form is not connected yet. Add NEXT_PUBLIC_WEB3FORMS_KEY to .env.local — or email us directly at";

export type SubmitResult =
  | { ok: true }
  | { ok: false; message: string; showEmail: boolean };

export async function submitForm(
  form: HTMLFormElement,
  subject: string,
): Promise<SubmitResult> {
  if (!ACCESS_KEY) {
    return { ok: false, message: FORM_NOT_CONFIGURED, showEmail: true };
  }

  const data = new FormData(form);
  data.append("access_key", ACCESS_KEY);
  data.append("subject", subject);
  data.append("from_name", "edunki website");

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });
    const json = await res.json();

    if (json.success) return { ok: true };

    return {
      ok: false,
      message: json.message || "Something went wrong. Please try again, or email us at",
      showEmail: true,
    };
  } catch {
    return {
      ok: false,
      message: "Could not reach the server. Please try again, or email us at",
      showEmail: true,
    };
  }
}

export const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-300 transition-colors focus:border-ink focus:outline-none";

export const labelClass = "mb-1.5 block text-xs font-medium text-ink-500";
