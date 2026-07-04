import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

const skillGroups = [
  {
    id: "frontend",
    label: "frontend",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "BootStrap",
      "Tailwind CSS",
      "Next.js",
    ],
  },
  {
    id: "backend",
    label: "backend",
    skills: ["Node.js", "PHP/Laravel", "Python/FastAPI", "PostgreSQL", "MySQL"],
  },
  {
    id: "ai-ml",
    label: "ai_ml",
    skills: ["NumPy", "Pandas", "Scikit-learn", "PyTorch", "TensorFlow"],
  },
  {
    id: "tools",
    label: "tools",
    skills: [
      "Git/GitHub",
      "Docker",
      "NGiNX",
      "AWS",
      "Figma",
      "VS Code",
      "XAMPP",
      "Linux",
      "Cisco Packet Tracer",
      "Vercel",
    ],
  },
];

const categories = [
  { id: "all", label: "all" },
  ...skillGroups.map(({ id, label }) => ({ id, label })),
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleGroups = skillGroups.filter(
    (group) => activeCategory === "all" || group.id === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative bg-surface/40">
      <div className="container max-w-5xl">
        <Reveal>
          <p className="terminal-label mb-3">skills</p>
          <h2 className="text-section mb-10">
            tech_stack <span className="text-primary">--list</span>
          </h2>
        </Reveal>

        <Reveal>
          <div
            className="flex flex-wrap gap-2.5 mb-12"
            role="tablist"
            aria-label="Filter skills by category"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "min-h-11 px-4 py-2 rounded-md text-sm transition-all duration-300 border",
                  activeCategory === category.id
                    ? "border-primary/60 bg-primary/10 text-primary shadow-[0_0_16px_-6px_hsl(var(--primary)/0.5)]"
                    : "border-border bg-surface/60 text-muted-foreground hover:text-foreground hover:border-primary/30"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="space-y-10">
          {visibleGroups.map((group) => (
            <Reveal key={group.id}>
              <div className="text-left">
                <p className="terminal-label mb-4">{group.label}</p>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "chip",
                        group.id === "ai-ml" && "chip-violet"
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
