import { createFileRoute } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { MenuBoard } from "@/components/MenuBoard";
import { Reveal } from "@/components/Reveal";
import { ReservationCTA } from "@/components/ReservationCTA";
import { images } from "@/lib/images";
import { menu } from "@/lib/site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — The Forest Lounge, Dhanmondi" },
      {
        name: "description",
        content:
          "Starters, mains, charcoal grill, desserts and coffee roasted on site. The full Forest Lounge menu with prices in taka.",
      },
      { property: "og:title", content: "The Forest Lounge Menu" },
      {
        property: "og:description",
        content:
          "Starters, mains, grill, desserts and roastery coffee — served daily from 12 PM to 11 PM in Dhanmondi.",
      },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Food & Coffee"
        title="The menu"
        intro="A short list, cooked to order in the open kitchen. Prices in Bangladeshi taka, inclusive of VAT."
        image={images.grill}
        imageAlt="Charcoal-grilled lamb chops plated on a dark ceramic plate"
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <MenuBoard categories={menu} />

          <Reveal className="mt-14 flex flex-wrap items-center gap-4 border-t border-border pt-8">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 border border-border px-6 py-3 text-[0.68rem] uppercase tracking-[0.2em] transition-colors hover:border-brass hover:text-brass"
            >
              <Printer className="size-4" aria-hidden="true" />
              Print / save as PDF
            </button>
            <p className="text-xs text-muted-foreground">
              Dietary tags: Veg (vegetarian), Spicy. Please tell your server about allergies.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Photography grid */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <Reveal className="max-w-xl">
            <p className="eyebrow">On the Plate</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">A look at the food</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: images.grill, alt: "Grilled lamb chops with charred vegetables" },
              { src: images.pasta, alt: "Prawn aglio olio in an earthenware bowl" },
              { src: images.dessert, alt: "Dark chocolate cremeux with berries" },
              { src: images.coffee, alt: "Flat white with latte art beside a small dessert" },
            ].map((img, i) => (
              <Reveal key={img.alt} delay={i * 80}>
                <div className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.05]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
