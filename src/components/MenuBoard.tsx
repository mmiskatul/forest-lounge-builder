import { useState } from "react";
import { Leaf, Flame } from "lucide-react";
import { formatPrice, type MenuCategory, type MenuItem } from "@/lib/site";
import { Reveal } from "./Reveal";

function Tag({ label }: { label: string }) {
  const Icon = label === "Veg" ? Leaf : label === "Spicy" ? Flame : null;
  return (
    <span className="inline-flex items-center gap-1 border border-current/25 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.16em] text-brass">
      {Icon ? <Icon className="size-3" aria-hidden="true" /> : null}
      {label}
    </span>
  );
}

export function MenuCard({ item, dark = false }: { item: MenuItem; dark?: boolean }) {
  return (
    <article
      className={`group flex items-start justify-between gap-6 border-b py-6 transition-colors ${
        dark
          ? "border-forest-foreground/12 hover:border-brass/60"
          : "border-border hover:border-brass/60"
      }`}
    >
      <div>
        <h3
          className={`font-display text-xl transition-colors group-hover:text-brass sm:text-2xl ${
            dark ? "text-forest-foreground" : ""
          }`}
        >
          {item.name}
        </h3>
        <p
          className={`mt-2 max-w-md text-sm leading-relaxed ${
            dark ? "text-forest-foreground/65" : "text-muted-foreground"
          }`}
        >
          {item.description}
        </p>
        {item.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        ) : null}
      </div>
      <p className={`shrink-0 font-display text-lg sm:text-xl ${dark ? "text-brass" : ""}`}>
        {formatPrice(item.price)}
      </p>
    </article>
  );
}

export function MenuBoard({
  categories,
  dark = false,
}: {
  categories: MenuCategory[];
  dark?: boolean;
}) {
  const [active, setActive] = useState(categories[0].id);
  const category = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <div>
      <Reveal className="flex flex-wrap gap-3" as="div">
        {categories.map((c) => {
          const isActive = c.id === active;
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(c.id)}
              className={`border px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.2em] transition-colors ${
                isActive
                  ? "border-brass bg-brass text-brass-foreground"
                  : dark
                    ? "border-forest-foreground/25 text-forest-foreground/75 hover:border-brass hover:text-brass"
                    : "border-border text-muted-foreground hover:border-brass hover:text-brass"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </Reveal>

      <Reveal className="mt-10" delay={60}>
        <h2
          className={`font-display text-3xl sm:text-4xl ${dark ? "text-forest-foreground" : ""}`}
        >
          {category.label}
        </h2>
        <p
          className={`mt-3 text-sm ${dark ? "text-forest-foreground/60" : "text-muted-foreground"}`}
        >
          {category.note}
        </p>
        <div className="mt-8 grid gap-x-14 md:grid-cols-2">
          {category.items.map((item) => (
            <MenuCard key={item.name} item={item} dark={dark} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
