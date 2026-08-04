import { useState } from "react";
import { Check } from "lucide-react";
import { z } from "zod";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a reachable phone number")
    .max(24, "Phone number is too long"),
  email: z.string().trim().email("Enter a valid email address").max(160),
  date: z.string().min(1, "Choose a date"),
  time: z.string().min(1, "Choose a time"),
  guests: z.string().min(1, "Select party size"),
  notes: z.string().trim().max(500, "Please keep requests under 500 characters"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brass";

export function ReservationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  if (done) {
    return (
      <div className="border border-brass/40 bg-card p-10 text-center shadow-soft">
        <div className="mx-auto grid size-12 place-items-center rounded-full bg-brass text-brass-foreground">
          <Check className="size-6" aria-hidden="true" />
        </div>
        <h2 className="mt-6 font-display text-3xl">Request received</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thank you — we will confirm your table by phone shortly. For same-day bookings,
          call us on{" "}
          <a href={`tel:${site.phones[0]}`} className="text-brass link-underline">
            {site.phones[0]}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-8 border border-border px-6 py-3 text-[0.68rem] uppercase tracking-[0.2em] transition-colors hover:border-brass hover:text-brass"
        >
          Book another table
        </button>
      </div>
    );
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = schema.safeParse({
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      date: String(form.get("date") ?? ""),
      time: String(form.get("time") ?? ""),
      guests: String(form.get("guests") ?? ""),
      notes: String(form.get("notes") ?? ""),
    });

    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setDone(true);
    }, 700);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow">
            Full name
          </label>
          <input id="name" name="name" className={`mt-3 ${fieldClass}`} placeholder="Your name" />
          {errors.name ? <p className="mt-2 text-xs text-destructive">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className="eyebrow">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            inputMode="tel"
            className={`mt-3 ${fieldClass}`}
            placeholder="+8801XXXXXXXXX"
          />
          {errors.phone ? <p className="mt-2 text-xs text-destructive">{errors.phone}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="eyebrow">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`mt-3 ${fieldClass}`}
          placeholder="you@email.com"
        />
        {errors.email ? <p className="mt-2 text-xs text-destructive">{errors.email}</p> : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="date" className="eyebrow">
            Date
          </label>
          <input id="date" name="date" type="date" className={`mt-3 ${fieldClass}`} />
          {errors.date ? <p className="mt-2 text-xs text-destructive">{errors.date}</p> : null}
        </div>
        <div>
          <label htmlFor="time" className="eyebrow">
            Time
          </label>
          <select id="time" name="time" defaultValue="" className={`mt-3 ${fieldClass}`}>
            <option value="">Select</option>
            {[
              "12:00 PM",
              "1:00 PM",
              "2:00 PM",
              "4:00 PM",
              "6:00 PM",
              "7:00 PM",
              "8:00 PM",
              "9:00 PM",
              "10:00 PM",
            ].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.time ? <p className="mt-2 text-xs text-destructive">{errors.time}</p> : null}
        </div>
        <div>
          <label htmlFor="guests" className="eyebrow">
            Guests
          </label>
          <select id="guests" name="guests" defaultValue="" className={`mt-3 ${fieldClass}`}>
            <option value="">Select</option>
            {["1", "2", "3", "4", "5", "6", "7", "8", "9+"].map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          {errors.guests ? <p className="mt-2 text-xs text-destructive">{errors.guests}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="eyebrow">
          Special requests
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className={`mt-3 ${fieldClass}`}
          placeholder="Window table, birthday cake, dietary needs…"
        />
        {errors.notes ? <p className="mt-2 text-xs text-destructive">{errors.notes}</p> : null}
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-primary px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-forest-deep disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Sending…" : "Request Reservation"}
      </button>
    </form>
  );
}
