import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, MapPin, Clock, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <p className="font-display text-2xl">The Forest Lounge</p>
          <p className="mt-1 text-[0.55rem] uppercase tracking-[0.32em] text-brass">
            Rooftop · Kitchen · Roastery
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-forest-foreground/70">
            A soft-industrial rooftop dining room, an open kitchen and an on-site coffee
            roastery above Satmasjid Road, Dhanmondi.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="The Forest Lounge on Facebook"
              className="grid size-9 place-items-center border border-brass/40 text-brass transition-colors hover:bg-brass hover:text-brass-foreground"
            >
              <Facebook className="size-4" aria-hidden="true" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="The Forest Lounge on Instagram"
              className="grid size-9 place-items-center border border-brass/40 text-brass transition-colors hover:bg-brass hover:text-brass-foreground"
            >
              <Instagram className="size-4" aria-hidden="true" />
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="The Forest Lounge on YouTube"
              className="grid size-9 place-items-center border border-brass/40 text-brass transition-colors hover:bg-brass hover:text-brass-foreground"
            >
              <Youtube className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-forest-foreground/75 transition-colors hover:text-brass"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Find Us</h2>
          <address className="mt-5 space-y-4 text-sm not-italic text-forest-foreground/75">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
              <span>{site.address}</span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
              <span className="flex flex-col">
                {site.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone}`} className="hover:text-brass">
                    {phone}
                  </a>
                ))}
              </span>
            </p>
          </address>
        </div>

        <div>
          <h2 className="eyebrow">Opening Hours</h2>
          <p className="mt-5 flex gap-3 text-sm text-forest-foreground/75">
            <Clock className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
            <span>
              {site.hours}
              <br />
              Seven days a week
            </span>
          </p>
          <Link
            to="/reservations"
            className="mt-6 inline-block border border-brass px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-brass transition-colors hover:bg-brass hover:text-brass-foreground"
          >
            Book a Table
          </Link>
        </div>
      </div>

      <div className="border-t border-forest-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-forest-foreground/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} The Forest Lounge. All rights reserved.</p>
          <p>Dhanmondi, Dhaka · Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
