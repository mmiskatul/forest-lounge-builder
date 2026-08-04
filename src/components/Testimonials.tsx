import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import { Reveal } from "./Reveal";

export function TestimonialCard({
  quote,
  name,
  detail,
}: {
  quote: string;
  name: string;
  detail: string;
}) {
  return (
    <figure className="flex h-full flex-col justify-between bg-card p-8 shadow-soft sm:p-10">
      <Quote className="size-7 text-brass" aria-hidden="true" />
      <blockquote className="mt-6 font-display text-xl leading-snug sm:text-2xl">
        “{quote}”
      </blockquote>
      <figcaption className="mt-8 text-sm">
        <span className="block font-medium">{name}</span>
        <span className="block text-muted-foreground">{detail}</span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Guests</p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Words from the rooftop</h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => setIndex((i) => (i - 1 + total) % total)}
              className="grid size-11 place-items-center border border-border text-foreground transition-colors hover:border-brass hover:text-brass"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => setIndex((i) => (i + 1) % total)}
              className="grid size-11 place-items-center border border-border text-foreground transition-colors hover:border-brass hover:text-brass"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </Reveal>

        <Reveal className="mt-10" delay={80}>
          <div aria-live="polite" className="grid gap-6 lg:grid-cols-2">
            <TestimonialCard {...current} />
            <TestimonialCard {...testimonials[(index + 1) % total]} />
          </div>
          <div className="mt-8 flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show review ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-0.5 w-10 transition-colors ${
                  i === index ? "bg-brass" : "bg-border"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
