import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ReservationCTA } from "@/components/ReservationCTA";
import { Testimonials } from "@/components/Testimonials";
import { images } from "@/lib/images";
import { site, formatPrice } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Forest Lounge — Rooftop Restaurant & Roastery in Dhanmondi" },
      {
        name: "description",
        content:
          "A rooftop escape in the heart of Dhanmondi: soft-industrial dining room, open kitchen and on-site coffee roastery. Open daily, 12–11 PM. Book a table.",
      },
      { property: "og:title", content: "The Forest Lounge — Rooftop Restaurant & Roastery in Dhanmondi" },
      {
        property: "og:description",
        content:
          "A rooftop escape in the heart of Dhanmondi: soft-industrial dining room, open kitchen and on-site coffee roastery. Open daily, 12–11 PM. Book a table.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const featured = [
  {
    name: "Lamb Chops",
    description: "Charcoal-grilled, herb oil, mint yoghurt.",
    price: 1450,
    image: images.grill,
  },
  {
    name: "Prawn Aglio Olio",
    description: "Tiger prawns, garlic confit, chilli, olive oil.",
    price: 890,
    image: images.pasta,
  },
  {
    name: "Forest Flat White",
    description: "House espresso, roasted downstairs this morning.",
    price: 290,
    image: images.coffee,
  },
  {
    name: "Dark Chocolate Cremeux",
    description: "70% chocolate, salted caramel, berries.",
    price: 480,
    image: images.dessert,
  },
];

function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-forest-deep">
        <img
          src={images.hero}
          alt="Candlelit rooftop tables at The Forest Lounge with hanging greenery and the Dhaka skyline at dusk"
          className="absolute inset-0 -z-10 size-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="hero-scrim absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-7xl px-5 py-32 sm:px-8">
          <Reveal>
            <p className="eyebrow text-brass">Dhanmondi · Dhaka</p>
            <h1 className="mt-6 max-w-3xl text-[2.6rem] leading-[1.02] text-forest-foreground sm:text-6xl lg:text-[5.2rem]">
              A Rooftop Escape in the Heart of Dhanmondi.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-forest-foreground/75">
              {site.subTagline} A soft-industrial dining room wrapped in greenery, an open
              kitchen at its centre, and coffee roasted in the same building we serve it.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/reservations"
                className="bg-brass px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-brass-foreground transition-colors hover:bg-brass/85"
              >
                Book a Table
              </Link>
              <Link
                to="/menu"
                className="border border-forest-foreground/35 px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-forest-foreground transition-colors hover:border-brass hover:text-brass"
              >
                View the Menu
              </Link>
            </div>
            <p className="mt-12 text-xs uppercase tracking-[0.22em] text-forest-foreground/55">
              {site.hours}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story teaser */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 rule-brass text-3xl leading-tight sm:text-4xl lg:text-5xl">
              The first of its kind in Dhanmondi
            </h2>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We built The Forest Lounge on a rooftop because Dhaka deserves somewhere to
              breathe. Exposed concrete, warm brass, hanging ferns and a long open kitchen —
              a dining room that feels like a garden and works like a professional pass.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Downstairs, our roastery turns green coffee into the espresso poured upstairs.
              Nothing travels far here, and nothing sits still for long.
            </p>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-brass link-underline"
            >
              Read our story <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={120} className="relative">
            <img
              src={images.interior}
              alt="Forest green dining room with exposed concrete ceiling, hanging plants and an open kitchen"
              loading="lazy"
              width={1600}
              height={1104}
              className="w-full object-cover shadow-lift"
            />
            <img
              src={images.roastery}
              alt="Drum coffee roaster and sacks of green beans in the on-site roastery"
              loading="lazy"
              width={1400}
              height={1000}
              className="absolute -bottom-10 -left-6 hidden w-48 object-cover shadow-lift lg:block"
            />
          </Reveal>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">From the Kitchen</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Plates we're known for</h2>
            </div>
            <Link
              to="/menu"
              className="text-[0.7rem] uppercase tracking-[0.22em] text-brass link-underline"
            >
              Full menu
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((dish, i) => (
              <Reveal key={dish.name} delay={i * 80}>
                <Link
                  to="/menu"
                  className="group block h-full bg-card shadow-soft transition-shadow hover:shadow-lift"
                >
                  <div className="overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl transition-colors group-hover:text-brass">
                        {dish.name}
                      </h3>
                      <span className="font-display text-lg text-brass">
                        {formatPrice(dish.price)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {dish.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ambience strip */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="max-w-xl">
            <p className="eyebrow">The Space</p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">
              Greenery, brass and a city view
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { src: images.hero, alt: "Rooftop tables at dusk beneath hanging plants" },
              { src: images.chef, alt: "Chef plating a dish in the open kitchen" },
              { src: images.roastery, alt: "Coffee roaster and green bean sacks in the roastery" },
            ].map((img, i) => (
              <Reveal key={img.alt} delay={i * 90}>
                <div className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-[1000ms] ease-out hover:scale-[1.05]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10" delay={80}>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-brass link-underline"
            >
              See the gallery <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <ReservationCTA />

      {/* Map + address */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:py-28">
          <Reveal>
            <p className="eyebrow">Find Us</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">On the rooftop, Satmasjid Road</h2>
            <p className="mt-6 flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
              {site.address}
            </p>
            <p className="mt-6 text-sm text-muted-foreground">{site.hours}</p>
            <Link
              to="/contact"
              className="mt-8 inline-block border border-border px-6 py-3 text-[0.68rem] uppercase tracking-[0.2em] transition-colors hover:border-brass hover:text-brass"
            >
              Contact & directions
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <iframe
              title="Map showing The Forest Lounge in Dhanmondi, Dhaka"
              src={site.mapEmbed}
              loading="lazy"
              className="h-80 w-full border border-border grayscale-[35%] lg:h-full"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
