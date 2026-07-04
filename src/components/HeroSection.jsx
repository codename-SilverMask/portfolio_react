import { useEffect, useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { prefersReducedMotion } from "@/lib/utils";

const ROLES = [
  "Full-Stack Developer",
  "AI / ML Engineer",
  "Keyboard Builder",
];

// Types, holds, deletes, and cycles through ROLES.
// Reduced-motion users get a static combined label instead.
const useTypedRole = () => {
  const [reducedMotion] = useState(prefersReducedMotion);
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const role = ROLES[roleIndex];

    let timeout;
    if (!deleting && text === role) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, 350);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? role.slice(0, text.length - 1)
              : role.slice(0, text.length + 1)
          );
        },
        deleting ? 35 : 70
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, reducedMotion]);

  return reducedMotion ? "Full-Stack Developer · AI / ML Engineer" : text;
};

export const HeroSection = () => {
  const typedRole = useTypedRole();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center"
    >
      {/* faint blueprint grid for depth */}
      <div
        className="absolute inset-0 grid-backdrop pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative z-10 max-w-4xl">
        <div className="space-y-6 text-left">
          <p className="terminal-label opacity-0 animate-fade-in">
            hello_world
          </p>

          <h1 className="text-hero">
            <span className="block opacity-0 animate-fade-in-delay-1">
              Amaney
            </span>
            <span className="block neon-text opacity-0 animate-fade-in-delay-1">
              Hussain
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl font-medium min-h-7 opacity-0 animate-fade-in-delay-2"
            aria-label="Full-Stack Developer and AI/ML Engineer"
          >
            <span className="text-secondary mr-2" aria-hidden="true">
              &gt;
            </span>
            <span className="blink-cursor">{typedRole}</span>
          </p>

          <p className="text-body text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
            I build fast, clean web applications end to end, train machine
            learning models, and ship AI-driven products. Happiest at the
            intersection of code, hardware, and intelligent systems — usually
            without touching the mouse.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="btn-primary">
              view_projects
            </a>
            <a href="#contact" className="btn-ghost">
              get_in_touch
            </a>
          </div>

          {/* status / location widget */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-xs text-muted-foreground opacity-0 animate-fade-in-delay-4">
            <span className="inline-flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-success animate-pulse-dot"
                aria-hidden="true"
              />
              status: building
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary/70" />
              Dhaka, Bangladesh · UTC+6
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-muted-foreground mb-2">scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
