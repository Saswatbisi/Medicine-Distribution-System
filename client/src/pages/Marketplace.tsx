import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ShoppingCart, ShieldCheck, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock Data
const ALL_MEDICINES = [
  { id: 1, name: "Amoxicillin 500mg", category: "Antibiotics", price: 17.50, quantity: "15 strips", expiry: "Dec 2026", ngo: "HealthFirst NGO", image: "medicine_1.jpg" },
  { id: 2, name: "Ibuprofen 400mg", category: "Pain Relief", price: 12.00, quantity: "50 strips", expiry: "Jan 2027", ngo: "Care Net", image: "medicine_2.jpg" },
  { id: 3, name: "Metformin 500mg", category: "Diabetes", price: 18.00, quantity: "10 bottles", expiry: "Aug 2025", ngo: "HealthFirst NGO", image: "medicine_3.jpg" },
  { id: 4, name: "Vitamin C Complex", category: "Vitamins", price: 19.50, quantity: "5 bottles", expiry: "Mar 2026", ngo: "Community Meds", image: "medicine_1.jpg" },
  { id: 5, name: "Amlodipine 5mg", category: "Hypertension", price: 15.00, quantity: "20 strips", expiry: "Nov 2026", ngo: "Care Net", image: "medicine_2.jpg" },
  { id: 6, name: "Cetirizine 10mg", category: "Allergy", price: 14.50, quantity: "30 strips", expiry: "Feb 2027", ngo: "Community Meds", image: "medicine_3.jpg" },
];

const CATEGORIES = ["All", "Pain Relief", "Antibiotics", "Vitamins", "Diabetes", "Hypertension", "Allergy"];

export default function Marketplace() {
  const { toast } = useToast();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<number[]>([]);
  const [justAdded, setJustAdded] = useState<number | null>(null);

  const filtered = ALL_MEDICINES.filter((med) => {
    const matchesSearch = med.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || med.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  function handleAddToCart(med: typeof ALL_MEDICINES[0]) {
    setCart((prev) => [...prev, med.id]);
    setJustAdded(med.id);
    setTimeout(() => setJustAdded(null), 1500);
    toast({
      title: `Added to cart 🛒`,
      description: `${med.name} has been added to your cart.`,
    });
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Medicine Marketplace</h1>
          <p className="text-muted-foreground mt-1">Affordable, verified medicines for those in need.</p>
        </div>

        <div className="flex w-full md:w-auto gap-2 items-center">
          {cart.length > 0 && (
            <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
              <ShoppingCart className="h-4 w-4" />
              {cart.length} item{cart.length > 1 ? "s" : ""}
            </div>
          )}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search medicines..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Category filters */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <Badge
            key={cat}
            variant={activeCategory === cat ? "default" : "secondary"}
            className="px-4 py-1 text-sm whitespace-nowrap cursor-pointer"
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Badge>
        ))}
      </div>

      {/* Medicine Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-30" />
          <p className="text-lg font-medium">No medicines found</p>
          <p className="text-sm">Try a different search or category.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((med) => (
            <Card key={med.id} className="overflow-hidden flex flex-col group">
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <img
                  src={`/src/assets/${med.image}`}
                  alt={med.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <Badge className="absolute top-2 right-2 bg-white/90 text-foreground hover:bg-white backdrop-blur-sm">
                  {med.category}
                </Badge>
              </div>
              <CardHeader className="p-4 pb-0">
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-lg line-clamp-1">{med.name}</CardTitle>
                  <div className="font-bold text-primary whitespace-nowrap">Rs.{med.price.toFixed(2)}</div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-2 flex-grow space-y-2">
                <div className="text-sm text-muted-foreground flex justify-between">
                  <span>Stock: {med.quantity}</span>
                  <span className="text-amber-600 dark:text-amber-400">Exp: {med.expiry}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 p-2 rounded-md">
                  <ShieldCheck className="h-4 w-4 text-secondary" />
                  Verified by {med.ngo}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  className="w-full gap-2"
                  onClick={() => handleAddToCart(med)}
                  variant={justAdded === med.id ? "secondary" : "default"}
                >
                  {justAdded === med.id ? (
                    <><Check className="h-4 w-4" /> Added!</>
                  ) : (
                    <><ShoppingCart className="h-4 w-4" /> Add to Cart</>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}