import { MapPin, Home } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Apartment } from "@/data/apartments";

const ApartmentCard = ({ apartment }: { apartment: Apartment }) => (
  <div className="bg-card overflow-hidden shadow-card hover-lift border group">
    <div className="relative h-56 overflow-hidden">
      <img
        src={apartment.image}
        alt={apartment.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      <Badge className="absolute top-3 left-3 bg-primary border-0 text-primary-foreground text-xs uppercase tracking-wider">
        {apartment.type}
      </Badge>
    </div>
    <div className="p-5">
      <h3 className="font-display font-semibold text-foreground text-xl mb-2">{apartment.title}</h3>
      <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
        <MapPin className="h-3.5 w-3.5" />
        <span>{apartment.area}, {apartment.localGovernment}</span>
      </div>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">{apartment.description}</p>
      <div className="flex items-center justify-between border-t pt-4">
        <span className="font-display font-bold text-primary text-xl">{apartment.price}</span>
        <a
          href={`https://wa.me/2348164376172?text=Hi! I'm interested in: ${apartment.title} at ${apartment.area}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary hover:underline"
        >
          <Home className="h-4 w-4" /> Inquire
        </a>
      </div>
    </div>
  </div>
);

export default ApartmentCard;
