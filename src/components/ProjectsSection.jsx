import { ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "@/components/icons/BrandIcons";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    id: 1,
    title: "FlightFinder - Flight Search & Booking Web APP",
    description:
      "Travel booking application built with Next.js and TypeScript integrating Amadeus API for real-time flight and hotel search functionality.",
    image: "/Projects/FlightFinder.png",
    tags: ["Next.js", "Amadeus-API", "TypeScript"],
    githubUrl: "https://github.com/codename-SilverMask/FlightFinder.git",
    demoUrl: "https://flight-finder-theta.vercel.app/",
  },
  {
    id: 2,
    title: "Mow&Shine Cleaning Services",
    description:
      "Modern cleaning services website built with Javascript and Next.js featuring responsive design, optimized performance, and professional service showcase.",
    image: "/Projects/Mow&Shine.png",
    tags: ["Javascript", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/codename-SilverMask/mow-and-shine.git",
    demoUrl: "https://www.mownshine.com/",
  },
  {
    id: 3,
    title: "Modern E-Commerce Storefront",
    description:
      "High-performance e-commerce application built with Next.js and TypeScript featuring dynamic product listings, responsive design, and optimized user experience.",
    image: "/Projects/E-Store.png",
    tags: ["Next.js", "E-Commerce", "TypeScript"],
    githubUrl: "https://github.com/codename-SilverMask/E-Store-NextJS.git",
    demoUrl: "https://e-store-next-js-three.vercel.app/",
  },
  {
    id: 4,
    title: "SingleEvent Dynamic Website",
    description:
      "Dynamic event website built with Laravel featuring admin customization, CRUD operations, authentication, and database relationships for comprehensive event management.",
    image: "/Projects/SingleEvent.png",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/codename-SilverMask/EventWebsite.git",
    demoUrl: "#",
  },
  {
    id: 5,
    title: "Kanban Board + Annotation Tool",
    description:
      "Task management application built with React and TypeScript featuring drag-and-drop functionality, task creation, editing, deletion, and annotation capabilities.",
    image: "/Projects/KanbanBoard.png",
    tags: ["React", "Vite", "TypeScript"],
    githubUrl: "https://github.com/codename-SilverMask/Kanban_Board_Deploy.git",
    demoUrl: "https://kanban-board-deploy.vercel.app/",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React and Tailwind CSS showcasing skills, projects, and experience with clean, responsive, and optimized design.",
    image: "/Projects/PortfolioWebsite.png",
    tags: ["React", "Tailwind CSS", "Javascript"],
    githubUrl: "https://github.com/codename-SilverMask/portfolio_react.git",
    demoUrl: "https://www.amaneyhussain.me/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container max-w-5xl">
        <Reveal>
          <p className="terminal-label mb-3">projects</p>
          <h2 className="text-section mb-4">
            featured_work<span className="text-primary">/</span>
          </h2>
          <p className="text-body text-muted-foreground mb-12 max-w-2xl text-left">
            Here are some of my recent projects. Each one was carefully
            crafted with attention to detail, performance, and user
            experience.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 80}>
              <div className="group panel panel-interactive corner-brackets overflow-hidden h-full flex flex-col">
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover saturate-[0.85] transition-all duration-500 group-hover:scale-105 group-hover:saturate-100"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <span className="absolute top-3 left-3 text-xs text-primary/90 bg-background/70 backdrop-blur-sm px-2 py-0.5 rounded border border-primary/30">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1 text-left">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[0.7rem] border border-border rounded bg-surface/80 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold mb-1.5 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 -ml-2">
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Live demo of ${project.title}`}
                        className="p-2.5 text-foreground/70 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Source code of ${project.title} on GitHub`}
                      className="p-2.5 text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-14">
          <a
            href="https://github.com/codename-SilverMask"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            check_my_github <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
