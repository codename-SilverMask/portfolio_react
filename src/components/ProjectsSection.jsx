import { ArrowRight, ExternalLink, Github } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "FlightFinder - Flight Search & Booking Web APP",
    description:
      "Travel booking application built with Next.js and TypeScript integrating Amadeus API for real-time flight and hotel search functionality.",
    image: "/Projects/FlightFinder.png",
    tags: ["NEXT.JS", "Amadeus-API", "TypeScript"],
    githubUrl: "https://github.com/codename-SilverMask/FlightFinder.git",
    demoUrl: "https://flight-finder-theta.vercel.app/",
  },
  {
    id: 2,
    title: "Kanban Board + Annotation Tool",
    description:
      "Task management application built with React and TypeScript featuring drag-and-drop functionality, task creation, editing, deletion, and annotation capabilities.",
    image: "/Projects/KanbanBoard.png",
    tags: ["React", "Vite", "TypeScript"],
    githubUrl: "https://github.com/codename-SilverMask/Kanban_Board_Deploy.git",
    demoUrl: "https://kanban-board-deploy.vercel.app/",
  },
  {
    id: 3,
    title: "Modern E-Commerce Storefront",
    description:
      "High-performance e-commerce application built with Next.js and TypeScript featuring dynamic product listings, responsive design, and optimized user experience.",
    image: "/Projects/E-Store.png",
    tags: ["NEXT.JS", "E-Commerce", "TypeScript"],
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
    title: "Mow&Shine Cleaning Services",
    description:
      "Modern cleaning services website built with Astro and OpenResty featuring responsive design, optimized performance, and professional service showcase.",
    image: "/Projects/Mow&Shine.png",
    tags: ["Javascript", "Astro", "OpenResty"],
    githubUrl: "#",
    demoUrl: "https://mownshine.com/",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React and Tailwind CSS showcasing skills, projects, and experience with clean, responsive, and optimized design.",
    image: "/Projects/PortfolioWebsite.png",
    tags: ["React", "Tailwind CSS", "Javascript"],
    githubUrl: "https://github.com/codename-SilverMask/portfolio_react.git",
    demoUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          &lt;Featured <span className="text-primary">Projects/&gt;</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that I have worked on. Each
          project was carefully crafted with attention to detail, performance
          and user experience in mind.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {" "}
                  {project.description}{" "}
                </p>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            target="_blank"
            href="https://github.com/codename-SilverMask"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            {" "}
            Check my GitHub <ArrowRight size={16} />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
