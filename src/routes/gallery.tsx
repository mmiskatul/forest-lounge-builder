import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Forest Lounge, Dhanmondi" },
      {
        name: "description",
        content:
          "Photographs of The Forest Lounge: the rooftop at dusk, the soft-industrial dining room, the open kitchen, our food and the coffee roastery.",
      },
      { property: "og:title", content: "Gallery — The Forest Lounge" },
      {
        property: "og:description",
        content:
          "Rooftop views, greenery, plates and the roastery — inside The Forest Lounge, Dhanmondi.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const gallery = [
  {
    src: images.hero,
    alt: "Rooftop tables at dusk with hanging greenery and the Dhaka skyline",
    span: true,
  },
  { src: images.interior, alt: "Forest green dining room with brass shelving and ferns" },
  { src: images.roastery, alt: "Drum roaster and sacks of green coffee beans" },
  { src: images.chef, alt: "Chef plating a dish in the open kitchen" },
  { src: images.grill, alt: "Charcoal-grilled lamb chops with herb oil" },
  { src: images.pasta, alt: "Prawn aglio olio served in an earthenware bowl" },
  { src: images.coffee, alt: "Flat white with latte art on a dark stone counter", span: true },
  { src: images.dessert, alt: "Dark chocolate cremeux with berries and mint" },
];

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The rooftop, in pictures"
        intro="Interiors, the rooftop view, the open kitchen and the roastery. Tap any photograph to enlarge it."
        image={images.hero}
        imageAlt="Candlelit rooftop dining at The Forest Lounge"
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="mb-12 max-w-xl">
            <p className="eyebrow">Dhanmondi · Dhaka</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Somewhere to sit and stay a while</h2>
          </Reveal>
          <GalleryGrid images={gallery} />
        </div>
      </section>
    </>
  );
}
