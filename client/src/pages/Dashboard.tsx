import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, CheckCircle2, Clock, XCircle, TrendingUp, Users } from "lucide-react";

// Mock Data
const PENDING_DONATIONS = [
  { id: "DON-1023", donor: "Alex Johnson", item: "Amoxicillin 500mg", qty: "10 strips", date: "Today", status: "pending" },
  { id: "DON-1024", donor: "Sarah Smith", item: "Metformin 500mg", qty: "5 bottles", date: "Yesterday", status: "pending" },
  { id: "DON-1025", donor: "Clinic Plus", item: "Various Assorted", qty: "Large Box", date: "Oct 24", status: "pending" },
];

const INVENTORY = [
  { id: "INV-001", item: "Paracetamol 500mg", category: "Pain Relief", stock: 450, status: "healthy" },
  { id: "INV-002", item: "Cetirizine 10mg", category: "Allergy", stock: 120, status: "healthy" },
  { id: "INV-003", item: "Azithromycin 250mg", category: "Antibiotics", stock: 15, status: "low" },
  { id: "INV-004", item: "Amlodipine 5mg", category: "Hypertension", stock: 200, status: "healthy" },
];

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">NGO Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage donations, inventory, and distributions.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Generate Report</Button>
          <Button>Add Manual Entry</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Inventory</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,450</div>
            <p className="text-xs text-muted-foreground mt-1">+2.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Pending Verifications</CardTitle>
            <Clock className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground mt-1">Requires immediate attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Distributed</CardTitle>
            <TrendingUp className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,200</div>
            <p className="text-xs text-muted-foreground mt-1">Units distributed this year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Beneficiaries</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,432</div>
            <p className="text-xs text-muted-foreground mt-1">Individuals helped</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="donations" className="space-y-4">
        <TabsList>
          <TabsTrigger value="donations">Pending Donations</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="distributions">Distributions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="donations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Needs Verification</CardTitle>
              <CardDescription>Review and approve incoming medicine donations.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 bg-muted/50 p-4 text-sm font-medium text-muted-foreground">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-1">Donor</div>
                  <div className="col-span-1">Item</div>
                  <div className="col-span-1">Quantity</div>
                  <div className="col-span-1 text-right">Actions</div>
                </div>
                <div className="divide-y">
                  {PENDING_DONATIONS.map((doc) => (
                    <div key={doc.id} className="grid grid-cols-5 p-4 items-center text-sm">
                      <div className="font-medium">{doc.id}</div>
                      <div>{doc.donor}</div>
                      <div>{doc.item}</div>
                      <div>{doc.qty}</div>
                      <div className="flex justify-end gap-2">
                        <Button size="icon" variant="ghost" className="text-secondary hover:text-secondary hover:bg-secondary/10">
                          <CheckCircle2 className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Inventory</CardTitle>
              <CardDescription>Manage your stock levels and monitor expiries.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 bg-muted/50 p-4 text-sm font-medium text-muted-foreground">
                  <div>Item</div>
                  <div>Category</div>
                  <div>Stock Level</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {INVENTORY.map((inv) => (
                    <div key={inv.id} className="grid grid-cols-4 p-4 items-center text-sm">
                      <div className="font-medium">{inv.item}</div>
                      <div>{inv.category}</div>
                      <div>{inv.stock} units</div>
                      <div>
                        {inv.status === 'low' ? (
                          <Badge variant="destructive">Low Stock</Badge>
                        ) : (
                          <Badge variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/30">Healthy</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}