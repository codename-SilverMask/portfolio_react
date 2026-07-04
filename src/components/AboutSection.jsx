import {
  BrainCircuit,
  Code,
  Database,
  Gamepad2,
  Keyboard,
  User,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const capabilities = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Creating responsive websites and web applications with modern frameworks.",
  },
  {
    icon: User,
    title: "Front End",
    description:
      "Proficient in JavaScript and TypeScript, building Next.js and Vite apps with Tailwind CSS, Bootstrap, and React (ShadCN, Framer Motion, React Bits, Lucide React).",
  },
  {
    icon: Database,
    title: "Back End",
    description:
      "Proficient in Node.js and Next.js API routes, handling emails with Nodemailer, integrating third-party services, and building backend systems to support applications.",
  },
  {
    icon: BrainCircuit,
    title: "AI / ML",
    description:
      "Training machine learning models and building AI-driven products with PyTorch, TensorFlow, and scikit-learn — from data wrangling to deployment.",
  },
];

const offDuty = [
  {
    icon: Gamepad2,
    title: "gaming",
    description:
      "Souls games veteran. If it's punishing and beautifully designed, I'm playing it.",
  },
  {
    icon: Keyboard,
    title: "mechanical keyboards",
    description:
      "Building custom boards that sound as good as they feel. Lubed, filmed, and tuned.",
  },
  {
    icon: BrainCircuit,
    title: "ai products",
    description:
      "Training models and automating workflows with n8n and AI — making processes smarter.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container max-w-5xl">
        <Reveal>
          <p className="terminal-label mb-3">about</p>
          <h2 className="text-section mb-12">
            whoami<span className="text-primary">_</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          <Reveal>
            <div className="space-y-6 text-left">
              <h3 className="text-xl font-semibold">
                Full-Stack Developer <span className="text-primary">&amp;</span>{" "}
                AI/ML Engineer
              </h3>
              <p className="text-body text-muted-foreground">
                I specialize in React and Next.js, with experience building
                responsive web applications, dashboards, and interactive
                tools — and I train machine learning models and build
                AI-driven products on top of that stack. Skilled in form
                handling, API integration, and deployment workflows, with
                growing depth across the backend.
              </p>
              <p className="text-body text-muted-foreground">
                Curious technologist who loves building things, from sleek web
                apps to custom keyboards that sound as good as they feel. I
                prefer the speed of the terminal over the mouse, and I keep an
                eye on emerging tech that makes life smoother (or just more
                fun). When I'm not coding, you'll find me playing Souls games,
                vibing to Sleep Token, or hanging out with my cat — my most
                reliable QA tester.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#contact" className="btn-primary">
                  get_in_touch
                </a>
                <a
                  href="/Amaney_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  download_cv
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4">
            {capabilities.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="panel panel-interactive corner-brackets p-5">
                  <div className="flex items-start gap-4 text-left">
                    <div className="icon-tile">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* beyond the code — compact off-duty strip */}
        <Reveal className="mt-20">
          <p className="terminal-label mb-3">off_duty</p>
          <h3 className="text-xl font-semibold mb-8 text-left">
            Beyond the code
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {offDuty.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="panel panel-interactive p-5 h-full text-left">
                <item.icon className="h-6 w-6 text-secondary mb-3" />
                <h4 className="font-semibold text-sm mb-1.5">
                  <span className="text-primary/60 mr-1">&gt;</span>
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
