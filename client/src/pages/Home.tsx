import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeartHandshake, ShoppingBag, ShieldCheck, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
              Bridging the Healthcare Gap
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Share health, <br />
              <span className="text-primary">save lives.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[600px] leading-relaxed">
              Medic connects unused medicines from generous donors to those who need them most. 
              Donate your surplus medications or buy affordable essentials through verified NGOs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  <HeartHandshake className="h-4 w-4" />
                  Donate Medicines
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Browse Marketplace
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/src/assets/hero.jpg" 
              alt="Medical Professionals" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How Medic Works</h2>
            <p className="text-muted-foreground">
              A transparent, secure, and efficient way to redistribute essential medications to the community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <HeartHandshake className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">1. Donate</h3>
                <p className="text-muted-foreground">
                  List your unexpired, sealed medicines. We check validity and arrange for NGO pickup or drop-off.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">2. Verify</h3>
                <p className="text-muted-foreground">
                  Registered NGOs and Pharmacists inspect the medicines for quality, authenticity, and expiry dates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center mb-6">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">3. Distribute</h3>
                <p className="text-muted-foreground">
                  Medicines are listed on our low-cost marketplace or distributed directly to communities in need.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to make a difference?</h2>
          <p className="text-primary-foreground/80 text-lg">
            Join thousands of donors and NGOs working together to ensure no usable medicine goes to waste while people are in need.
          </p>
          <Link href="/signin">
            <Button size="lg" variant="secondary" className="gap-2 text-primary font-bold">
              Create an Account <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}