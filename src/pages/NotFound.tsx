import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted font-body">
      <SEO
        title="Page Not Found | C-Homes"
        description="The page you're looking for doesn't exist. Return to C-Homes to find affordable apartments in Ibadan."
        path={location.pathname}
      />
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl font-display font-bold text-primary animate-fade-in">404</h1>
        <p className="mb-6 text-xl text-muted-foreground animate-fade-in-up">Oops! This page doesn't exist.</p>
        <Link
          to="/"
          className="inline-block gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity uppercase tracking-wider text-sm animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
