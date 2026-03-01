import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from "@/components/SEO";

const faqs = [
  {
    q: "How are apartments verified?",
    a: "Our team physically inspects each listing to verify its condition, safety, and pricing before it goes live on C-homes. We also collect landlord information for accountability.",
  },
  {
    q: "What price range should I expect?",
    a: "Prices range from ₦60,000/year for a single room to around ₦300,000/year for a flat. We focus specifically on options affordable for NYSC corps members.",
  },
  {
    q: "Which areas in Ibadan do you cover?",
    a: "We cover all 11 local governments in Ibadan including Egbeda, Ibadan North, Ibadan South-West, Akinyele, Ido, Lagelu, Oluyole, Ona Ara, and more.",
  },
  {
    q: "How do I make an inquiry about an apartment?",
    a: "Click the 'Inquire' button on any listing or use our Contact page. You'll be connected directly via WhatsApp for quick communication.",
  },
  {
    q: "Can I share an apartment with other corps members?",
    a: "Absolutely! Many of our listings, especially flats, are ideal for sharing. We can also help connect you with other corps members looking to share.",
  },
  {
    q: "Is there a fee for using C-homes?",
    a: "Browsing and inquiring is completely free. We may charge a small service fee only when you successfully secure an apartment through us.",
  },
  {
    q: "What if I have issues with my apartment after moving in?",
    a: "Contact us via WhatsApp or email. We maintain relationships with landlords and will help mediate any issues that arise.",
  },
];

const FAQ = () => (
  <div className="min-h-screen bg-background font-body">
    <SEO
      title="Frequently Asked Questions | C-Homes"
      description="Got questions about NYSC housing in Ibadan? Find answers about apartment verification, pricing, locations, and how C-Homes works."
      path="/faq"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      }}
    />
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center animate-fade-in">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="text-muted-foreground text-center mb-10 animate-fade-in-up">
          Everything you need to know about finding housing through C-homes.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border rounded-lg px-5">
              <AccordionTrigger className="font-display font-semibold text-foreground text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
    <Footer />
  </div>
);

export default FAQ;
