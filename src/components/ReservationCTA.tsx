import { Link } from "@tanstack/react-router";
import { Clock, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function ReservationCTA() {
  return (
    <section className="bg-forest text-forest-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <Reveal className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow text-brass">Reserve</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Hold a table above Satmasjid Road
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-forest-foreground/75">
              Sunset seats and the pergola tables go first. Reserve online, or call us and
              we will find you a corner.
            </p>
          </div>
          <div className="space-y-5">
            <p className="flex items-center gap-3 text-sm text-forest-foreground/80">
              <Clock className="size-4 text-brass" aria-hidden="true" />
              {site.hours}
            </p>
            <div className="flex flex-col gap-1">
              {site.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 font-display text-2xl transition-colors hover:text-brass"
                >
                  <Phone className="size-4 text-brass" aria-hidden="true" />
                  {phone}
                </a>
              ))}
            </div>
            <Link
              to="/reservations"
              className="inline-block bg-brass px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.22em] text-brass-foreground transition-colors hover:bg-brass/85"
            >
              Book a Table
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
