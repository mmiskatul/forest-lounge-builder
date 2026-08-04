import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";

export type GalleryImage = { src: string; alt: string; span?: boolean };

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => ((i ?? 0) + 1) % images.length);
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => ((i ?? 0) - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, images.length]);

  const activeImage = openIndex === null ? null : images[openIndex];

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, i) => (
          <Reveal
            key={image.src + i}
            delay={(i % 3) * 70}
            className={image.span ? "sm:col-span-2" : ""}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group block w-full overflow-hidden bg-secondary"
              aria-label={`Open image: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] ${
                  image.span ? "aspect-[16/9]" : "aspect-[4/5]"
                }`}
              />
            </button>
          </Reveal>
        ))}
      </div>

      {activeImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/92 p-4 animate-fade-in"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Close image viewer"
            onClick={() => setOpenIndex(null)}
            className="absolute right-5 top-5 text-cream transition-colors hover:text-brass"
          >
            <X className="size-7" aria-hidden="true" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="mx-auto max-h-[78vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-cream/70">
              {activeImage.alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
