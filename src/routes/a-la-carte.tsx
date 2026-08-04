import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { MenuBoard } from "@/components/MenuBoard";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";
import { aLaCarte, site } from "@/lib/site";

export const Route = createFileRoute("/a-la-carte")({
  head: () => ({
    meta: [
      { title: "A La Carte — The Forest Lounge, Dhanmondi" },
      {
        name: "description",
        content:
          "The Forest Lounge à la carte selection: raw bar, signature plates, sides and pairings, served evenings on the rooftop in Dhanmondi.",
      },
      { property: "og:title", content: "A La Carte at The Forest Lounge" },
      {
        property: "og:description",
        content:
          "Raw bar, signature plates and pairings — our premium à la carte offering above Satmasjid Road.",
      },
      { property: "og:url", content: "/a-la-carte" },
    ],
    links: [{ rel: "canonical", href: "/a-la-carte" }],
  }),
  component: ALaCarte,
});

function ALaCarte() {
  return (
    <>
      <PageHero
        eyebrow="Evening Service"
        title="À la carte"
        intro="A smaller, more precise list served from 6 PM. Cut, grilled and finished plate by plate at the marble pass."
        image={images.dessert}
        imageAlt="Chocolate dessert with berries under a single warm light"
      />

      <section className="bg-forest-deep text-forest-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow text-brass">How it works</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              One list, no set courses
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-forest-foreground/70">
              Order as much or as little as you like. Our team will pace the kitchen around
              you — most guests take two plates and a side each, plus something from the
              pairings.
            </p>
          </Reveal>

          <MenuBoard categories={aLaCarte} dark />

          <Reveal className="mt-16 border-t border-forest-foreground/15 pt-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <p className="max-w-md text-sm text-forest-foreground/65">
                À la carte seating is limited each evening. Reserve ahead, or call us on{" "}
                <a href={`tel:${site.phones[0]}`} className="text-brass link-underline">
                  {site.phones[0]}
                </a>
                .
              </p>
              <Link
                to="/reservations"
                className="bg-brass px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-brass-foreground transition-colors hover:bg-brass/85"
              >
                Reserve an evening table
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
