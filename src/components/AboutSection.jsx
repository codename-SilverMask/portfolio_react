import { Code, Database, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          &lt;About <span className="text-primary"> Me/&gt;</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developer and Tech Enthusiast
            </h3>
            <p className="text-muted-foreground">
              Frontend developer specializing in React and Next.js, with
              experience building responsive web applications, dashboards, and
              interactive tools. Skilled in form handling, API integration, and
              deployment workflows, with growing expertise in backend
              development and full-stack solutions.
            </p>
            <p className="text-muted-foreground">
              Curious technologist who loves building things, from sleek web
              apps to custom keyboards that sound as good as they feel. I enjoy
              creating workflows and automating tasks using tools like n8n and
              AI to make processes smarter and more efficient. I prefer the
              speed of the terminal over the mouse, and I keep an eye on
              emerging tech that makes life smoother (or just more fun). When
              I’m not coding, you’ll find me playing Souls games, vibing to
              Sleep Token, or hanging out with my cat, my most reliable QA
              tester.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                target="_blank"
                href="/Amaney_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Front End</h4>
                  <p className="text-muted-foreground">
                    Proficient in JavaScript and TypeScript, building Next.js
                    and Vite apps with Tailwind CSS, Bootstrap, and React
                    (ShadCN, Framer Motion, React Bits, Lucide React)
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Back End</h4>
                  <p className="text-muted-foreground">
                    Proficient in Node.js and Next.js API routes, handling
                    emails with Nodemailer, integrating third-party services,
                    and building backend systems to support applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
