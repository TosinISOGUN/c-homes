import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ApartmentCard from "@/components/ApartmentCard";
import { useApartments } from "@/hooks/useApartments";
import { Shield, CheckCircle, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import SEO from "@/components/SEO";

const features = [
  { icon: Shield, title: "Verified Listings", desc: "Every apartment is checked for quality and safety before listing." },
  { icon: CheckCircle, title: "Corper-Friendly Prices", desc: "Affordable housing tailored to NYSC allowance budgets." },
  { icon: Users, title: "Community Support", desc: "We connect you with other corps members in your area." },
];

const PREVIEW_COUNT = 3;

const Index = () => {
  const { data: apartments = [], isLoading } = useApartments();
  const preview = apartments.slice(0, PREVIEW_COUNT);

  return (
    <div className="min-h-screen bg-background font-body">
      <SEO title="Home | C-Homes" />
      <Navbar />
      <HeroSection />

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-heading mb-6">About C-Homes</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              C-Homes is your trusted housing companion during your NYSC service year in Ibadan, Oyo State. We specialise in connecting corps members with verified, affordable accommodation across all local government areas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With a focus on quality, affordability, and community, we ensure every listing meets our standards so you can focus on what matters — your service year.
            </p>
            <Button asChild variant="outline" className="uppercase tracking-widest text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-5">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80"
              alt="Apartment interior"
              className="w-full h-80 lg:h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <f.icon className="h-10 w-10 mx-auto mb-4 opacity-80" />
                <h3 className="font-display text-xl font-semibold mb-3 tracking-wide">{f.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="section-heading text-center mb-4">Featured Apartments</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          A preview of affordable homes available in Ibadan
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[224px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))
          ) : (
            preview.map((a) => (
              <ApartmentCard key={a.id} apartment={a} />
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="uppercase tracking-widest text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-5 gap-2">
            <Link to="/listings">
              View All Listings <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
