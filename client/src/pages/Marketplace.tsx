import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ShoppingCart, ShieldCheck } from "lucide-react";

// Mock Data
const MOCK_MEDICINES = [
  { id: 1, name: "Amoxicillin 500mg", category: "Antibiotics", price: 2.50, quantity: "15 strips", expiry: "Dec 2026", ngo: "HealthFirst NGO", image: "medicine_1.jpg" },
  { id: 2, name: "Ibuprofen 400mg", category: "Pain Relief", price: 1.00, quantity: "50 strips", expiry: "Jan 2027", ngo: "Care Net", image: "medicine_2.jpg" },
  { id: 3, name: "Metformin 500mg", category: "Diabetes", price: 3.00, quantity: "10 bottles", expiry: "Aug 2025", ngo: "HealthFirst NGO", image: "medicine_3.jpg" },
  { id: 4, name: "Vitamin C Complex", category: "Vitamins", price: 4.50, quantity: "5 bottles", expiry: "Mar 2026", ngo: "Community Meds", image: "medicine_1.jpg" },
  { id: 5, name: "Amlodipine 5mg", category: "Hypertension", price: 2.00, quantity: "20 strips", expiry: "Nov 2026", ngo: "Care Net", image: "medicine_2.jpg" },
  { id: 6, name: "Cetirizine 10mg", category: "Allergy", price: 1.50, quantity: "30 strips", expiry: "Feb 2027", ngo: "Community Meds", image: "medicine_3.jpg" },
];

export default function Marketplace() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Medicine Marketplace</h1>
          <p className="text-muted-foreground mt-1">Affordable, verified medicines for those in need.</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search medicines..." className="pl-9" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <Badge variant="default" className="px-4 py-1 text-sm whitespace-nowrap cursor-pointer">All</Badge>
        <Badge variant="secondary" className="px-4 py-1 text-sm whitespace-nowrap cursor-pointer">Pain Relief</Badge>
        <Badge variant="secondary" className="px-4 py-1 text-sm whitespace-nowrap cursor-pointer">Antibiotics</Badge>
        <Badge variant="secondary" className="px-4 py-1 text-sm whitespace-nowrap cursor-pointer">Vitamins</Badge>
        <Badge variant="secondary" className="px-4 py-1 text-sm whitespace-nowrap cursor-pointer">Diabetes</Badge>
        <Badge variant="secondary" className="px-4 py-1 text-sm whitespace-nowrap cursor-pointer">Hypertension</Badge>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MOCK_MEDICINES.map((med) => (
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
                <div className="font-bold text-primary">${med.price.toFixed(2)}</div>
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
              <Button className="w-full gap-2">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}