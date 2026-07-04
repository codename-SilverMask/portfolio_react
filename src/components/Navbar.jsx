import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "home", href: "#hero" },
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // While the mobile menu is open: lock body scroll, close on Escape, and
  // close if the viewport crosses the md breakpoint (where the overlay and
  // its toggle become hidden — without this the scroll lock would stick).
  useEffect(() => {
    if (!isMenuOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = (e) => {
      if (e.matches) setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/85 backdrop-blur-md border-b border-border"
          : "py-5 border-b border-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-sm sm:text-base font-semibold tracking-tight z-50"
        >
          <span className="text-muted-foreground">amaney</span>
          <span className="text-primary">@</span>
          <span className="text-muted-foreground">dev</span>
          <span className="text-primary">:~$</span>
          <span className="blink-cursor" aria-hidden="true"></span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-foreground/75 hover:text-primary transition-colors duration-300"
            >
              <span className="text-primary/60 mr-1">/</span>
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-3 -mr-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile overlay menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/97 backdrop-blur-lg z-40 flex flex-col items-center justify-center md:hidden",
            "transition-opacity duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-stretch gap-2 text-lg w-full max-w-xs">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3.5 px-6 text-center text-foreground/85 hover:text-primary transition-colors duration-300"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span className="text-primary/60 mr-2 text-sm">
                  0{index + 1}
                </span>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
