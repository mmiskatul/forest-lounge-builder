import { useState } from "react";
import { Check } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(160),
  subject: z.string().trim().min(3, "Add a short subject").max(120),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more")
    .max(1000, "Please keep it under 1000 characters"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brass";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-brass/40 bg-card p-10 shadow-soft">
        <div className="grid size-12 place-items-center rounded-full bg-brass text-brass-foreground">
          <Check className="size-6" aria-hidden="true" />
        </div>
        <h2 className="mt-6 font-display text-3xl">Message sent</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thanks for writing to us. We reply within one working day — for anything urgent,
          please call the restaurant directly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 border border-border px-6 py-3 text-[0.68rem] uppercase tracking-[0.2em] transition-colors hover:border-brass hover:text-brass"
        >
          Send another message
        </button>
      </div>
    );
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = schema.safeParse({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      subject: String(form.get("subject") ?? ""),
      message: String(form.get("message") ?? ""),
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
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="eyebrow">
            Name
          </label>
          <input id="c-name" name="name" className={`mt-3 ${fieldClass}`} placeholder="Your name" />
          {errors.name ? <p className="mt-2 text-xs text-destructive">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="c-email" className="eyebrow">
            Email
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            className={`mt-3 ${fieldClass}`}
            placeholder="you@email.com"
          />
          {errors.email ? <p className="mt-2 text-xs text-destructive">{errors.email}</p> : null}
        </div>
      </div>
      <div>
        <label htmlFor="c-subject" className="eyebrow">
          Subject
        </label>
        <input
          id="c-subject"
          name="subject"
          className={`mt-3 ${fieldClass}`}
          placeholder="Private event, feedback, press…"
        />
        {errors.subject ? <p className="mt-2 text-xs text-destructive">{errors.subject}</p> : null}
      </div>
      <div>
        <label htmlFor="c-message" className="eyebrow">
          Message
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          className={`mt-3 ${fieldClass}`}
          placeholder="How can we help?"
        />
        {errors.message ? <p className="mt-2 text-xs text-destructive">{errors.message}</p> : null}
      </div>
      <button
        type="submit"
        className="w-full bg-primary px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-forest-deep sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
