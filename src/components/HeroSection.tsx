import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Apartments in Ibadan"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 hero-overlay" />
    <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight tracking-wide uppercase mb-6 animate-fade-in-up">
        C-Homes Prestige <br />
        Living
      </h1>
      <p className="text-primary-foreground/80 text-lg md:text-xl font-body font-light mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        Stress-free apartment hunting during your service year. Verified, affordable housing across Ibadan.
      </p>
      <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <Button asChild size="lg" className="bg-primary text-primary-foreground border-0 font-body text-sm uppercase tracking-widest px-10 py-6 hover:bg-primary/90 transition-colors">
          <Link to="/contact">Request a Consultation</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
