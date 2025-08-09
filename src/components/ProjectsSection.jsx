import { ArrowRight, ExternalLink, Github } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "SingleEvent Dynamic Website",
    description:
      "A dynamic event website built with Laravel, showcasing a single event. Fully customizable website from the admin panel, featuring MultiCRUD systems, many-to-many relationships and fully authenticated login system for Attendees, Admins and Regular Users. ",
    image: "/Projects/SingleEvent.png",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/codename-SilverMask/EventWebsite.git",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Mow&Shine Cleaning Services",
    description:
      "A static website built using Astro and OpenResty frameworks. The website is designed to showcase the services offered by Mow&Shine Cleaning Services. The website has a morder design, is fully responsive and optimized for speed and performance. ",
    image: "/Projects/Mow&Shine.png",
    tags: ["Javascript", "Astro", "OpenResty"],
    githubUrl: "#",
    demoUrl: "https://mownshine.com/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio website built using React and Tailwind CSS. The website showcases my skills, projects, and experience. It features a clean and modern design, with sections for projects, skills, and contact information. The website is fully responsive and optimized for performance.",
    image: "/Projects/PortfolioWebsite.png",
    tags: ["React", "Tailwind CSS", "Javascript"],
    githubUrl: "https://github.com/codename-SilverMask/portfolio_react.git",
    demoUrl: "#",
  },
  {
    id: 4,
    title: "Kanban Board + Annotation Tool",
    description:
      "A Kanban board application built with React and Vite, featuring TypeScript for type safety. The app allows users to create, edit, and delete tasks, as well as annotate them with comments. It includes a drag-and-drop interface for easy task management.",
    image: "/Projects/KanbanBoard.png",
    tags: ["React", "Vite", "TypeScript"],
    githubUrl: "https://github.com/codename-SilverMask/Kanban_Board_Deploy.git",
    demoUrl: "https://kanban-board-deploy.vercel.app/",
  },
  {
    id: 5,
    title: "Modern E-Commerce Storefront",
    description:
      "A clean, mobile-responsive and high-performance e-commerce web app built using Next.js 15 (App Router), TypeScript, and Tailwind CSS. Features dynamic product listings, responsive design, modular UI components with ShadCN, and SEO-optimized pages for fast, scalable storefront deployment.",
    image: "/Projects/E-Store.png",
    tags: ["NEXT.JS", "E-Commerce", "TypeScript"],
    githubUrl: "https://github.com/codename-SilverMask/E-Store-NextJS.git",
    demoUrl: "https://e-store-next-js-three.vercel.app/",
  },
  {
    id: 6,
    title: "FlightFinder - Flight Search & Booking Web APP",
    description:
      "FlightFinder A modern travel booking app built with Next.js, TypeScript, and Tailwind CSS, integrating the Amadeus API to provide real-time flight and hotel search in a fast, responsive interface.",
    image: "/Projects/FlightFinder.png",
    tags: ["NEXT.JS", "Amadeus-API", "TypeScript"],
    githubUrl: "https://github.com/codename-SilverMask/FlightFinder.git",
    demoUrl: "https://flight-finder-theta.vercel.app/",
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
