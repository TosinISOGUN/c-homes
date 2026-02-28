import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello C-homes! My name is ${name}. ${message}`;
    window.open(`https://wa.me/2348164376172?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center animate-fade-in">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground text-center mb-10 animate-fade-in-up">
            Have a question or need help finding an apartment? Reach out to us!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <a
              href="https://wa.me/2348164376172"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-lg p-5 shadow-card border flex items-center gap-4 hover-lift"
            >
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">WhatsApp</p>
                <p className="text-muted-foreground text-sm">+234 816 437 6172</p>
              </div>
            </a>
            <a
              href="mailto:isogun21@gmail.com"
              className="bg-card rounded-lg p-5 shadow-card border flex items-center gap-4 hover-lift"
            >
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Email</p>
                <p className="text-muted-foreground text-sm">isogun21@gmail.com</p>
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 shadow-card border space-y-4">
            <h3 className="font-display text-xl font-semibold text-foreground">Send a Message</h3>
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-background"
            />
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="bg-background"
            />
            <Button type="submit" className="gradient-primary border-0 text-primary-foreground w-full">
              <MessageCircle className="mr-2 h-4 w-4" />
              Send via WhatsApp
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
