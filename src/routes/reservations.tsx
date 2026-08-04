import { createFileRoute } from "@tanstack/react-router";
import { Clock, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ReservationForm } from "@/components/ReservationForm";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — The Forest Lounge, Dhanmondi" },
      {
        name: "description",
        content:
          "Book a rooftop table at The Forest Lounge in Dhanmondi, Dhaka. Open daily 12 PM – 11 PM, or call +8801322853811 to reserve.",
      },
      { property: "og:title", content: "Book a Table — The Forest Lounge" },
      {
        property: "og:description",
        content: "Reserve a rooftop table in Dhanmondi. Open daily, 12:00 PM – 11:00 PM.",
      },
      { property: "og:url", content: "/reservations" },
    ],
    links: [{ rel: "canonical", href: "/reservations" }],
  }),
  component: Reservations,
});

function Reservations() {
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Book a table"
        intro="Tell us when you'd like to come and we'll confirm by phone. Sunset and pergola tables go early."
        image={images.interior}
        imageAlt="Set tables in the dining room of The Forest Lounge"
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:py-28">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Reservation request</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              All fields are required except special requests.
            </p>
            <div className="mt-10">
              <ReservationForm />
            </div>
          </Reveal>

          <Reveal delay={110}>
            <aside className="space-y-8 border-t border-brass/50 bg-card p-8 shadow-soft">
              <div>
                <h2 className="eyebrow">Opening hours</h2>
                <p className="mt-4 flex gap-3 text-sm text-muted-foreground">
                  <Clock className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                  <span>
                    {site.hours}
                    <br />
                    Seven days a week, including holidays
                  </span>
                </p>
              </div>
              <div>
                <h2 className="eyebrow">Prefer to call?</h2>
                <div className="mt-4 flex flex-col gap-2">
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
                <p className="mt-3 text-xs text-muted-foreground">
                  Same-day bookings and groups of nine or more are best handled by phone.
                </p>
              </div>
              <div>
                <h2 className="eyebrow">Where to find us</h2>
                <p className="mt-4 flex gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                  {site.address}
                </p>
              </div>
              <div>
                <h2 className="eyebrow">Good to know</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Tables are held for 15 minutes past the booking time.</li>
                  <li>Rooftop seating is covered — rain is fine.</li>
                  <li>Birthday cakes and private setups welcome, just ask.</li>
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
