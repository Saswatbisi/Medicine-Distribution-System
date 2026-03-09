import { Link, useLocation } from "wouter";
import { Pill, Activity, User, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/donate", label: "Donate Medicines" },
    { href: "/dashboard", label: "NGO Dashboard" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer text-primary">
            <Activity className="h-6 w-6" />
            <span className="font-heading font-bold text-xl tracking-tight">Medic</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div 
                className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/signin">
            <Button variant="outline" className="hidden sm:flex" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/signin">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}