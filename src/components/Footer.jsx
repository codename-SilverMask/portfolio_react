import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/60 backdrop-blur-sm">
      <div className="container py-10 flex flex-wrap justify-between items-center gap-4">
        <div className="text-left">
          <p className="prompt-label text-sm text-muted-foreground">
            &copy;{new Date().getFullYear()} Amaney Hussain. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1.5">
            <span className="text-success">&gt;</span> process exited with code
            0 — designed &amp; built by amaney
          </p>
        </div>
        <a href="#hero" aria-label="Back to top" className="icon-btn text-primary">
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
