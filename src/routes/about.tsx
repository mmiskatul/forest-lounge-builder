import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Flame, Coffee, Sun } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { GalleryGrid } from "@/components/GalleryGrid";
import { ReservationCTA } from "@/components/ReservationCTA";
import { images } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Forest Lounge, Dhanmondi" },
      {
        name: "description",
        content:
          "The story of The Forest Lounge: Dhanmondi's first soft-industrial rooftop dining room, with an open kitchen and an on-site coffee roastery.",
      },
      { property: "og:title", content: "About The Forest Lounge" },
      {
        property: "og:description",
        content:
          "A soft-industrial rooftop dining room, an open kitchen and a coffee roastery in Dhanmondi, Dhaka.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    icon: Leaf,
    title: "Produce first",
    copy: "Vegetables, fish and meat arrive daily. There is no storeroom big enough to hide a compromise.",
  },
  {
    icon: Flame,
    title: "Open kitchen",
    copy: "The pass sits in the middle of the room. Every plate leaves in full view of the people eating it.",
  },
  {
    icon: Coffee,
    title: "Roasted on site",
    copy: "Green coffee comes in, espresso goes up. Our roastery runs six days a week beneath the dining room.",
  },
  {
    icon: Sun,
    title: "Rooftop hours",
    copy: "Afternoon light, sunset service, late-night coffee — the same room reads differently every hour.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Built on a rooftop, grown in the open"
        intro="The Forest Lounge is a restaurant, a coffee bar and a roastery stacked into one address above Satmasjid Road."
        image={images.interior}
        imageAlt="The Forest Lounge dining room with green walls, hanging plants and warm brass lighting"
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:py-28">
          <Reveal>
            <p className="eyebrow">The Beginning</p>
            <h2 className="mt-4 rule-brass text-3xl leading-tight sm:text-4xl">
              The first of its kind in Dhanmondi
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                When we opened, Dhanmondi had cafés and it had restaurants, but it did not
                have a rooftop room that took both seriously. We wanted somewhere you could
                arrive at noon for a filter coffee and still be at the same table at eleven,
                three courses later.
              </p>
              <p>
                The design is deliberately soft-industrial: raw concrete and steel softened
                by timber, brass and a great deal of green. Ferns hang from the pergola,
                planters divide the tables, and the city hums somewhere below the railing.
              </p>
              <p>
                At the centre sits the open kitchen. There is no service door to hide behind
                — the grill, the pass and the pastry bench are all part of the room. It keeps
                our team honest and gives guests something to watch between courses.
              </p>
              <p>
                One floor down, the roastery does the quieter work. Small lots, short
                profiles, and beans that reach the espresso machine days after roasting
                rather than months.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={images.roastery}
              alt="Drum roaster and burlap sacks of green coffee beans in the roastery"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full object-cover shadow-lift"
            />
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center">
              <div>
                <p className="font-display text-3xl text-brass">7</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Days a week
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-brass">11</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Hours daily
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-brass">1</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                  On-site roastery
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Chef / team */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <Reveal>
            <img
              src={images.chef}
              alt="Head chef finishing a plate in the open kitchen"
              loading="lazy"
              width={1200}
              height={1500}
              className="w-full object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow text-brass">The Team</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              A kitchen that cooks in public
            </h2>
            <p className="mt-8 text-sm leading-relaxed text-forest-foreground/75 sm:text-base">
              Our head chef runs the line the way a small kitchen should be run — short
              menu, tight prep, everything finished to order. The grill station works over
              charcoal; the pastry bench starts before service and bakes for the day only.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-forest-foreground/75 sm:text-base">
              The floor team knows the coffee as well as the food, because most of them
              trained on both sides of the building. Ask what changed on the menu this week
              — someone will have an answer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Philosophy</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">What we hold to</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="h-full border-t border-brass/50 bg-card p-7 shadow-soft">
                  <value.icon className="size-6 text-brass" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Space gallery */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="max-w-xl">
            <p className="eyebrow">The Space</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Inside the rooftop</h2>
          </Reveal>
          <div className="mt-12">
            <GalleryGrid
              images={[
                { src: images.hero, alt: "Rooftop dining tables at dusk with the Dhaka skyline" },
                { src: images.interior, alt: "Green dining room with hanging ferns and brass shelving" },
                { src: images.roastery, alt: "The on-site coffee roastery" },
              ]}
            />
          </div>
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
