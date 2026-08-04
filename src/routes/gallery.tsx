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
  component: Gallery;
});

function Gallery() {
  return null;
}
