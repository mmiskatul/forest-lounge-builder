import { createFileRoute } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { ReservationCTA } from "@/components/ReservationCTA";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Forest Lounge, Dhanmondi" },
      {
        name: "description",
        content:
          "Find The Forest Lounge at Imperial Amin Centre rooftop, Satmasjid Road, Dhanmondi, Dhaka. Phone, email, map and opening hours.",
      },
      { property: "og:title", content: "Contact The Forest Lounge" },
      {
        property: "og:description",
        content:
          "Address, map, phone numbers and opening hours for our rooftop restaurant in Dhanmondi, Dhaka.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come find us"
        intro="Top floor of Imperial Amin Centre, just off Satmasjid Road. Take the lift to the rooftop."
        image={images.coffee}
        imageAlt="Flat white and coffee beans on a dark counter at The Forest Lounge"
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:py-28">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Details</h2>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="eyebrow">Address</h3>
                <address className="mt-3 flex gap-3 text-sm not-italic leading-relaxed text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                  {site.address}
                </address>
              </div>
              <div>
                <h3 className="eyebrow">Phone</h3>
                <div className="mt-3 flex flex-col gap-2">
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
              </div>
              <div>
                <h3 className="eyebrow">Email</h3>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-brass"
                >
                  <Mail className="size-4 text-brass" aria-hidden="true" />
                  {site.email}
                </a>
              </div>
              <div>
                <h3 className="eyebrow">Opening hours</h3>
                <p className="mt-3 flex gap-3 text-sm text-muted-foreground">
                  <Clock className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                  <span>
                    {site.hours}
                    <br />
                    Seven days a week
                  </span>
                </p>
              </div>
              <div>
                <h3 className="eyebrow">Social</h3>
                <div className="mt-3 flex gap-3">
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="The Forest Lounge on Facebook"
                    className="grid size-10 place-items-center border border-border text-brass transition-colors hover:border-brass hover:bg-brass hover:text-brass-foreground"
                  >
                    <Facebook className="size-4" aria-hidden="true" />
                  </a>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="The Forest Lounge on Instagram"
                    className="grid size-10 place-items-center border border-border text-brass transition-colors hover:border-brass hover:bg-brass hover:text-brass-foreground"
                  >
                    <Instagram className="size-4" aria-hidden="true" />
                  </a>
                  <a
                    href={site.social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="The Forest Lounge on YouTube"
                    className="grid size-10 place-items-center border border-border text-brass transition-colors hover:border-brass hover:bg-brass hover:text-brass-foreground"
                  >
                    <Youtube className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <h2 className="text-3xl sm:text-4xl">Write to us</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Private events, feedback, press or partnerships — we read everything.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
          <Reveal>
            <iframe
              title="Map showing The Forest Lounge, Satmasjid Road, Dhanmondi"
              src={site.mapEmbed}
              loading="lazy"
              className="h-[22rem] w-full border border-border grayscale-[35%] lg:h-[26rem]"
            />
          </Reveal>
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
