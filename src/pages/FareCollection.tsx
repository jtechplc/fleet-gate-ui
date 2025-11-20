import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DollarSign, Users, Receipt } from "lucide-react";
import { toast } from "sonner";

export default function FareCollection() {
  const [passengerCount, setPassengerCount] = useState("1");
  const [farePerPassenger] = useState(450);
  const totalFare = parseInt(passengerCount || "0") * farePerPassenger;

  const handleCollectPayment = () => {
    toast.success("Payment collected successfully!", {
      description: `Total: ₱${totalFare.toLocaleString()}`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fare Collection</h1>
          <p className="text-muted-foreground">Collect payments from passengers</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>Enter trip and passenger information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="driver">Select Driver / Vehicle</Label>
                    <Select>
                      <SelectTrigger id="driver">
                        <SelectValue placeholder="Choose driver" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="driver1">Juan Dela Cruz - ABC-1234</SelectItem>
                        <SelectItem value="driver2">Maria Santos - DEF-5678</SelectItem>
                        <SelectItem value="driver3">Pedro Reyes - GHI-9012</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="route">Select Route</Label>
                    <Select>
                      <SelectTrigger id="route">
                        <SelectValue placeholder="Choose route" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="route1">Manila → Baguio (₱450)</SelectItem>
                        <SelectItem value="route2">Manila → Batangas (₱200)</SelectItem>
                        <SelectItem value="route3">Manila → Pampanga (₱150)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passengers">Number of Passengers</Label>
                  <Input
                    id="passengers"
                    type="number"
                    min="1"
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(e.target.value)}
                    className="text-lg font-semibold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">Comments (Optional)</Label>
                  <Textarea
                    id="comments"
                    placeholder="Add any notes about this trip..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5 text-primary" />
                  Payment Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Passengers</span>
                  </div>
                  <span className="font-semibold">{passengerCount}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-muted-foreground">Fare per passenger</span>
                  <span className="font-semibold">₱{farePerPassenger}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-t-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-success" />
                    <span className="text-lg font-bold">Total Fare</span>
                  </div>
                  <span className="text-2xl font-bold text-success">
                    ₱{totalFare.toLocaleString()}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full" size="lg" onClick={handleCollectPayment}>
              Collect Payment
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              Generate Trip Ticket
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
