import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt: string;
};

export function PageHero({ eyebrow, title, intro, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[58vh] items-end overflow-hidden bg-forest-deep pt-32 pb-14 sm:min-h-[62vh] sm:pb-20">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-10 size-full object-cover"
        width={1600}
        height={1104}
      />
      <div className="hero-scrim absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-brass">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] text-forest-foreground sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-forest-foreground/75">
              {intro}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
