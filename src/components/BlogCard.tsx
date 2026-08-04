import { Link } from "@tanstack/react-router";
import { formatDate, type Post } from "@/lib/site";

export function BlogCard({ post, image }: { post: Post; image: string }) {
  return (
    <article className="group flex h-full flex-col bg-card shadow-soft transition-shadow hover:shadow-lift">
      <Link to="/news/$slug" params={{ slug: post.slug }} className="block overflow-hidden">
        <img
          src={image}
          alt={post.title}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-brass">{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h3 className="mt-4 font-display text-2xl leading-snug">
          <Link
            to="/news/$slug"
            params={{ slug: post.slug }}
            className="transition-colors hover:text-brass"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link
          to="/news/$slug"
          params={{ slug: post.slug }}
          className="mt-6 inline-block self-start text-[0.68rem] uppercase tracking-[0.2em] text-brass link-underline"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
