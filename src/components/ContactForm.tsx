"use client";

import { useState, type FormEvent } from "react";
import { BIZ } from "@/data/site";
import { METHODS } from "@/data/methods";
import { ArrowIcon } from "./Icons";

const TEXTURES = ["Fine", "Thick", "Straight", "Wavy", "Curly", "Coarse", "Brittle"];

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const useFormspree = !BIZ.formEndpoint.includes("YOUR_FORM_ID");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = useFormspree
        ? // Formspree (or any JSON-accepting endpoint)
          await fetch(BIZ.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
        : // Netlify Forms: post url-encoded to the static form definition in public/__forms.html
          await fetch("/__forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
          });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-cream-2 border-l-2 border-terracotta p-6" role="status" tabIndex={-1}>
        <strong className="display block text-2xl mb-1.5">Thanks for submitting!</strong>
        Ms Manae will be in touch shortly. In a hurry? Call or text{" "}
        <a href={`tel:${BIZ.cellTel}`} className="text-terracotta">
          {BIZ.cell}
        </a>
        .
      </div>
    );
  }

  return (
    <form className="grid gap-6" method="POST" name="contact" onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="_subject" value="New consultation request from loveyourloxx.com" />
      <p className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="field grid gap-2">
          <label htmlFor="f-name">First name *</label>
          <input id="f-name" name="name" type="text" required autoComplete="given-name" />
        </div>
        <div className="field grid gap-2">
          <label htmlFor="f-phone">Phone *</label>
          <input id="f-phone" name="phone" type="tel" required autoComplete="tel" placeholder="480-555-0100" />
        </div>
      </div>

      <div className="field grid gap-2">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="email" type="email" autoComplete="email" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="field grid gap-2">
          <label htmlFor="f-service">What are you interested in? *</label>
          <select id="f-service" name="service" required defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            <option>Hair extension consultation</option>
            <option>Hair extension installation</option>
            <option>Hair extension maintenance or removal</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field grid gap-2">
          <label htmlFor="f-method">Preferred method</label>
          <select id="f-method" name="method" defaultValue="">
            <option value="">Not sure yet, help me choose</option>
            {METHODS.map((m) => (
              <option key={m.id}>{m.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field grid gap-2">
        <label htmlFor="f-goal">What do you want from extensions?</label>
        <textarea id="f-goal" name="goals" placeholder="Length, volume, color, a special event…" />
      </div>

      <div className="field grid gap-2">
        <label htmlFor="f-hair">How long and what color is your natural hair?</label>
        <input id="f-hair" name="natural_hair" type="text" placeholder="Shoulder length, dark brown with some highlights" />
      </div>

      <div className="field grid gap-2">
        <span className="lbl" id="texture-label">
          Your natural hair texture (pick any)
        </span>
        <div className="flex flex-wrap gap-2" role="group" aria-labelledby="texture-label">
          {TEXTURES.map((t) => (
            <label key={t} className="chip relative">
              <input type="checkbox" name="texture[]" value={t} />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="field grid gap-2">
          <label htmlFor="f-when">How soon would you like them installed?</label>
          <select id="f-when" name="timeline" defaultValue="No preference">
            <option>No preference</option>
            <option>Within 1 week</option>
            <option>2 – 3 weeks</option>
            <option>3 – 4 weeks</option>
          </select>
        </div>
        <div className="field grid gap-2">
          <label htmlFor="f-contact">Best way to reach you</label>
          <select id="f-contact" name="contact_pref" defaultValue="Text">
            <option>Text</option>
            <option>Call</option>
            <option>Email</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <button type="submit" className="btn disabled:opacity-60" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send to Ms Manae"} <ArrowIcon />
        </button>
        <small className="text-stone text-[0.82rem] max-w-[42ch]">Your details are only used to reply to you. Never shared, never sold.</small>
      </div>

      {status === "error" && (
        <p role="alert" className="callout !my-0">
          Sorry, something went wrong sending your message. Please call or text Ms Manae at{" "}
          <a href={`tel:${BIZ.cellTel}`} className="text-terracotta">
            {BIZ.cell}
          </a>
          .
        </p>
      )}
    </form>
  );
}
