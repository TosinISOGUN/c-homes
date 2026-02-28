import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Listings" },
  { to: "/about", label: "About Us" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground text-xs py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-6">
          <a href="https://wa.me/2348164376172" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone className="h-3 w-3" /> +234 816 437 6172
          </a>
          <span className="opacity-50">|</span>
          <a href="mailto:isogun21@gmail.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Mail className="h-3 w-3" /> isogun21@gmail.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <Link to="/" className="flex items-center">
            <span className="text-brand text-2xl text-primary">C-Homes</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`font-body text-sm tracking-wide uppercase transition-colors hover:text-primary ${
                  location.pathname === l.to ? "text-primary border-b-2 border-primary pb-0.5" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-background border-b animate-fade-in">
            <div className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`font-body text-sm tracking-wide uppercase py-2 transition-colors hover:text-primary ${
                    location.pathname === l.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
