import { useState } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, UploadCloud, Info } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Donate() {
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
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="med-name">Medicine Name</Label>
              <Input id="med-name" placeholder="e.g. Paracetamol 500mg" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pain">Pain Relief</SelectItem>
                  <SelectItem value="antibiotics">Antibiotics</SelectItem>
                  <SelectItem value="vitamins">Vitamins & Supplements</SelectItem>
                  <SelectItem value="diabetes">Diabetes</SelectItem>
                  <SelectItem value="hypertension">Hypertension</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity (Tablets/Strips/Bottles)</Label>
              <Input id="quantity" type="number" placeholder="e.g. 2 strips" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <div className="relative">
                <Input id="expiry" type="month" className="pl-10" />
                <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Medicine Image</Label>
            <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer">
              <UploadCloud className="h-10 w-10 text-muted-foreground mb-4" />
              <p className="font-medium text-sm">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
              <p className="text-xs text-muted-foreground mt-2">Please ensure expiry date is visible in photo</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Pickup Location</Label>
            <Textarea id="location" placeholder="Enter your full address for pickup by NGO..." className="resize-none" />
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 p-4 rounded-lg flex gap-3 text-sm">
            <Info className="h-5 w-5 shrink-0" />
            <p>
              <strong>Important:</strong> We do not accept open bottles of liquid medication, 
              medicines requiring refrigeration (unless strictly maintained), or schedule H drugs without verified prescription history.
            </p>
          </div>

          <Button className="w-full" size="lg">Submit for Verification</Button>
        </CardContent>
      </Card>
    </div>
  );
}