"use client";

import { useState, type FormEvent } from "react";
import { CONTACT, SITE } from "@/lib/content";

/**
 * Briefing request form. Static-host friendly by design: on submit it
 * composes a structured brief and opens the visitor's mail client
 * addressed to the founder. No data leaves the page otherwise.
 */
export function BriefingForm() {
  const [audience, setAudience] = useState<string>(CONTACT.audiences[0]);
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `[BRIEFING REQUEST] ${audience} — ${name || "New contact"}`;
    const body = [
      "BRIEFING REQUEST — ATULYA AEROSPACE",
      "------------------------------------",
      `CHANNEL   : ${audience}`,
      `NAME      : ${name}`,
      `ORG       : ${org || "—"}`,
      `REPLY-TO  : ${email}`,
      "",
      "MESSAGE:",
      message,
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full border-b border-line bg-transparent pb-3 pt-2 text-[0.95rem] text-ink placeholder:text-faint focus:border-saffron focus:outline-none transition-colors duration-300";

  return (
    <form onSubmit={onSubmit} aria-label="Request a briefing">
      <fieldset>
        <legend className="label-sm text-faint">01 — Channel</legend>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {CONTACT.audiences.map((a) => {
            const selected = a === audience;
            return (
              <button
                key={a}
                type="button"
                onClick={() => setAudience(a)}
                aria-pressed={selected}
                className={`label-sm border px-4 py-2.5 transition-colors duration-300 ${
                  selected
                    ? "border-saffron bg-saffron/10 text-saffron"
                    : "border-line text-dim hover:border-line-strong hover:text-ink"
                }`}
              >
                {a}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-10">
        <p className="label-sm text-faint">02 — Identity</p>
        <div className="mt-4 grid gap-7 sm:grid-cols-2">
          <label className="block">
            <span className="sr-only">Full name</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name *"
              autoComplete="name"
              className={field}
            />
          </label>
          <label className="block">
            <span className="sr-only">Organisation</span>
            <input
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              placeholder="Organisation / Agency"
              autoComplete="organization"
              className={field}
            />
          </label>
        </div>
        <label className="mt-7 block">
          <span className="sr-only">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Official email *"
            autoComplete="email"
            className={field}
          />
        </label>
      </div>

      <div className="mt-10">
        <p className="label-sm text-faint">03 — Mission</p>
        <label className="mt-4 block">
          <span className="sr-only">Message</span>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What do you need to evaluate? *"
            rows={4}
            className={`${field} resize-none`}
          />
        </label>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-5">
        <button
          type="submit"
          className="label btn-sheen group inline-flex items-center gap-3 bg-saffron px-8 py-4 text-void transition-colors duration-300 hover:bg-saffron-bright"
        >
          Transmit
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
        <p className="max-w-[260px] text-[0.78rem] leading-relaxed text-faint">
          {sent
            ? "Your mail client should now be open with the brief prepared."
            : `Opens your mail client, addressed to ${SITE.email}.`}
        </p>
      </div>
    </form>
  );
}
