import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApartmentCard from "@/components/ApartmentCard";
import LocationFilter from "@/components/LocationFilter";
import { useApartments } from "@/hooks/useApartments";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import SEO from "@/components/SEO";

const ITEMS_PER_PAGE = 6;

const Listings = () => {
  const { data: apartments = [], isLoading } = useApartments();
  const [selectedLG, setSelectedLG] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return apartments.filter((a) => {
      if (selectedLG && selectedLG !== "all" && a.localGovernment !== selectedLG) return false;
      if (selectedArea && selectedArea !== "all" && a.area !== selectedArea) return false;
      return true;
    });
  }, [selectedLG, selectedArea, apartments]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleLGChange = (lg: string) => { setSelectedLG(lg); setPage(1); };
  const handleAreaChange = (area: string) => { setSelectedArea(area); setPage(1); };

  return (
    <div className="min-h-screen bg-background font-body">
      <SEO
        title="Apartment Listings in Ibadan | C-Homes"
        description="Browse all available verified apartments in Ibadan for NYSC corps members. Filter by local government and area to find your perfect home."
        path="/listings"
      />
      <Navbar />

      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="section-heading text-primary-foreground mb-4 animate-fade-in">All Apartments</h1>
          <p className="text-primary-foreground/70 max-w-lg mx-auto animate-fade-in-up">
            Browse all available apartments in Ibadan. Use the filters to narrow down by location.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <LocationFilter
            selectedLG={selectedLG}
            selectedArea={selectedArea}
            onLGChange={handleLGChange}
            onAreaChange={handleAreaChange}
          />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[224px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : paginated.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {paginated.map((a) => (
                <ApartmentCard key={a.id} apartment={a} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="gap-1 uppercase tracking-wider text-xs"
                >
                  <ChevronLeft className="h-4 w-4" /> Previous
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Button
                    key={p}
                    variant={p === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPage(p)}
                    className={p === page ? "bg-primary border-0 text-primary-foreground" : ""}
                  >
                    {p}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="gap-1 uppercase tracking-wider text-xs"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No apartments found for this location. Try a different filter.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
