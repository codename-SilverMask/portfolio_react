import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="panel corner-brackets p-8 sm:p-12 max-w-md w-full text-left">
        <p className="terminal-label mb-4">error</p>
        <h1 className="text-hero neon-text mb-4">404</h1>
        <p className="text-muted-foreground mb-2">
          <span className="text-secondary">&gt;</span> route not found
        </p>
        <p className="text-sm text-muted-foreground/70 mb-8">
          The page you're looking for was moved, deleted, or never compiled.
        </p>
        <Link to="/" className="btn-primary">
          cd ~/home
        </Link>
      </div>
    </div>
  );
};
