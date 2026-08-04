import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";
import { images, postImages } from "@/lib/images";
import { posts } from "@/lib/site";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "News & Events — The Forest Lounge, Dhanmondi" },
      {
        name: "description",
        content:
          "New coffee lots, seasonal menus and rooftop events at The Forest Lounge in Dhanmondi, Dhaka.",
      },
      { property: "og:title", content: "News & Events — The Forest Lounge" },
      {
        property: "og:description",
        content: "What's new on the rooftop: coffee lots, seasonal menus and events.",
      },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: News,
});

function News() {
  return (
    <>
      <PageHero
        eyebrow="News & Events"
        title="What's happening upstairs"
        intro="New coffee lots, seasonal plates, and evenings worth planning around."
        image={images.roastery}
        imageAlt="The coffee roastery at The Forest Lounge"
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 2) * 90}>
                <BlogCard post={post} image={postImages[post.image]} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
