import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Shield, Heart } from "lucide-react";
import SEO from "@/components/SEO";

const values = [
  { icon: Target, title: "Our Mission", desc: "To provide every NYSC corps member serving in Oyo State with access to affordable, safe, and verified housing in Ibadan." },
  { icon: Shield, title: "Trust & Safety", desc: "We personally verify each listing to ensure it meets basic standards of safety, cleanliness, and fair pricing." },
  { icon: Heart, title: "Community First", desc: "C-homes is built by people who understand the NYSC experience. We're here to make your service year smoother." },
  { icon: Users, title: "Corper-to-Corper", desc: "We connect corps members so they can share apartments, split costs, and build community during service year." },
];

const About = () => (
  <div className="min-h-screen bg-background font-body">
    <SEO
      title="About Us | C-Homes - Affordable NYSC Housing in Ibadan"
      description="Learn about C-Homes and our mission to provide affordable, verified housing for NYSC corps members serving in Ibadan, Oyo State."
      path="/about"
    />
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center animate-fade-in">
          About <span className="text-primary">C-homes</span>
        </h1>
        <p className="text-muted-foreground text-lg text-center mb-12 animate-fade-in-up leading-relaxed">
          Every year, thousands of NYSC corps members are posted to Oyo State and face the daunting challenge of finding affordable accommodation in Ibadan. High rents, unreliable agents, and unfamiliar neighborhoods make the search overwhelming. <strong className="text-foreground">C-homes was created to change that.</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {values.map((v, i) => (
            <div key={i} className="bg-card rounded-lg p-6 shadow-card border animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-3">
                <v.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary rounded-lg p-8 text-center border">
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Ready to find your home?</h3>
          <p className="text-muted-foreground mb-4">Browse verified apartments across all 11 local governments in Ibadan.</p>
          <a
            href="/"
            className="inline-block gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Listings
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
