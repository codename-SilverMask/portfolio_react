import { useEffect, useRef } from "react";
import { cn, prefersReducedMotion } from "@/lib/utils";

// Wraps content in a scroll-triggered fade/slide reveal.
// Respects prefers-reduced-motion (content shows immediately).
// The revealed flag lives in a data attribute (not a class) so a re-render
// that rewrites React's className can never wipe it.
export const Reveal = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.dataset.revealed = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.revealed = "true";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};
