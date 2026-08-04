import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ReservationCTA } from "@/components/ReservationCTA";
import { postImages } from "@/lib/images";
import { formatDate, posts, type Post } from "@/lib/site";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }): { post: Post } => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article unavailable — The Forest Lounge" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — The Forest Lounge` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/news/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/news/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            datePublished: post.date,
            articleSection: post.category,
            publisher: { "@type": "Organization", name: "The Forest Lounge" },
          }),
        },
      ],
    };
  },
  component: NewsPost,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-40 text-center sm:px-8">
      <p className="eyebrow">News</p>
      <h1 className="mt-4 font-display text-4xl">We couldn't find that article</h1>
      <Link
        to="/news"
        className="mt-8 inline-block border border-border px-6 py-3 text-[0.68rem] uppercase tracking-[0.2em] transition-colors hover:border-brass hover:text-brass"
      >
        All news
      </Link>
    </div>
  );
}

function NewsPost() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-forest-deep pt-32 pb-14 sm:pb-20">
          <img
            src={postImages[post.image]}
            alt={post.title}
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div className="hero-scrim absolute inset-0 -z-10" />
          <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
            <Reveal>
              <div className="flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.2em] text-forest-foreground/70">
                <span className="text-brass">{post.category}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <h1 className="mt-5 text-3xl leading-[1.08] text-forest-foreground sm:text-5xl">
                {post.title}
              </h1>
            </Reveal>
          </div>
        </header>

        <div className="bg-background">
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
            <Reveal>
              <p className="font-display text-xl leading-relaxed sm:text-2xl">{post.excerpt}</p>
              <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {post.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
              <Link
                to="/news"
                className="mt-12 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-brass link-underline"
              >
                <ArrowLeft className="size-4" aria-hidden="true" /> All news
              </Link>
            </Reveal>
          </div>
        </div>
      </article>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Keep reading</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 90}>
                <Link
                  to="/news/$slug"
                  params={{ slug: other.slug }}
                  className="group block bg-card p-7 shadow-soft transition-shadow hover:shadow-lift"
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.2em] text-brass">
                    {other.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl transition-colors group-hover:text-brass">
                    {other.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {other.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
