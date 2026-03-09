import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, UploadCloud, Info, CheckCircle2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Donate() {
  const { toast } = useToast();
  const fileRef = useRef<HTMLInputElement>(null);

  const [medName, setMedName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiry, setExpiry] = useState("");
  const [location, setLocation] = useState("");
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFileName(e.target.files?.[0]?.name ?? "");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!medName || !category || !quantity || !expiry || !location) {
      toast({
        title: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Validate expiry is in the future
    const now = new Date();
    const exp = new Date(expiry + "-01");
    if (exp <= now) {
      toast({
        title: "Expiry date must be in the future.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);

    toast({
      title: "Donation submitted! 🎉",
      description: "Our NGO team will contact you shortly for pickup.",
    });

    // Reset form
    setMedName("");
    setCategory("");
    setQuantity("");
    setExpiry("");
    setLocation("");
    setFileName("");
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Donate Medicines</h1>
        <p className="text-muted-foreground">
          Fill out the details below to list your unused medicines for donation. All items will be verified by our NGO partners.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Medicine Information</CardTitle>
          <CardDescription>Please ensure medicines are sealed and not expired.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="med-name">Medicine Name *</Label>
                <Input
                  id="med-name"
                  placeholder="e.g. Paracetamol 500mg"
                  value={medName}
                  onChange={(e) => setMedName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pain">Pain Relief</SelectItem>
                    <SelectItem value="antibiotics">Antibiotics</SelectItem>
                    <SelectItem value="vitamins">Vitamins &amp; Supplements</SelectItem>
                    <SelectItem value="diabetes">Diabetes</SelectItem>
                    <SelectItem value="hypertension">Hypertension</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity (Tablets/Strips/Bottles) *</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  placeholder="e.g. 2"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date *</Label>
                <div className="relative">
                  <Input
                    id="expiry"
                    type="month"
                    className="pl-10"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                  />
                  <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <Label>Medicine Image</Label>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <div
                className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => fileRef.current?.click()}
              >
                <UploadCloud className="h-10 w-10 text-muted-foreground mb-4" />
                {fileName ? (
                  <p className="font-medium text-sm text-primary">{fileName}</p>
                ) : (
                  <>
                    <p className="font-medium text-sm">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
                    <p className="text-xs text-muted-foreground mt-2">Please ensure expiry date is visible in photo</p>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Pickup Location *</Label>
              <Textarea
                id="location"
                placeholder="Enter your full address for pickup by NGO..."
                className="resize-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 p-4 rounded-lg flex gap-3 text-sm">
              <Info className="h-5 w-5 shrink-0" />
              <p>
                <strong>Important:</strong> We do not accept open bottles of liquid medication,
                medicines requiring refrigeration (unless strictly maintained), or schedule H drugs without verified prescription history.
              </p>
            </div>

            <Button className="w-full gap-2" size="lg" type="submit" disabled={loading || submitted}>
              {submitted ? (
                <><CheckCircle2 className="h-4 w-4" /> Submitted!</>
              ) : loading ? (
                "Submitting…"
              ) : (
                "Submit for Verification"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}