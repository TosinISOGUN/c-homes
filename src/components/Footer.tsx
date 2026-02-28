import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="text-brand text-2xl mb-4 block">C-Homes</span>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Your trusted housing companion during NYSC service year in Ibadan, Oyo State.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 tracking-wide uppercase">Quick Links</h4>
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</Link>
            <Link to="/listings" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Listings</Link>
            <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">About Us</Link>
            <Link to="/faq" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">FAQ</Link>
            <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 tracking-wide uppercase">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="https://wa.me/2348164376172" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2">
              <Phone className="h-4 w-4" /> +234 816 437 6172
            </a>
            <a href="mailto:isogun21@gmail.com" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2">
              <Mail className="h-4 w-4" /> isogun21@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} C-Homes. Built for NYSC Corps Members.
      </div>
    </div>
  </footer>
);

export default Footer;
