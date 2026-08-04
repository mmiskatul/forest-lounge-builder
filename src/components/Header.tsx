import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const transparentEligible = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !transparentEligible;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-forest-deep/95 py-3 backdrop-blur-md shadow-soft"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-xl tracking-wide text-forest-foreground sm:text-2xl">
            The Forest Lounge
          </span>
          <span className="mt-1 text-[0.5rem] uppercase tracking-[0.34em] text-brass sm:text-[0.55rem]">
            Rooftop · Kitchen · Roastery
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks
            .filter((l) => l.to !== "/reservations")
            .map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="link-underline text-[0.7rem] uppercase tracking-[0.2em] text-forest-foreground/80 transition-colors hover:text-brass data-[status=active]:text-brass"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phones[0]}`}
            className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-forest-foreground/70 transition-colors hover:text-brass"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {site.phones[0]}
          </a>
          <Link
            to="/reservations"
            className="border border-brass bg-brass px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-brass-foreground transition-colors hover:bg-transparent hover:text-brass"
          >
            Reservation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="text-forest-foreground lg:hidden"
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-charcoal/70 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-forest-deep px-7 py-7 transition-transform duration-400 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xl text-forest-foreground">Menu</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="size-6 text-forest-foreground" aria-hidden="true" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-5" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="font-display text-2xl text-forest-foreground/90 transition-colors hover:text-brass data-[status=active]:text-brass"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-3 border-t border-brass/25 pt-6">
            {site.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="block text-sm text-forest-foreground/75 hover:text-brass"
              >
                {phone}
              </a>
            ))}
            <p className="text-xs text-forest-foreground/55">{site.hours}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
