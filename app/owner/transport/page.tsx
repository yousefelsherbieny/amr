"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Plus,
  MoreHorizontal,
  ChevronDown,
  Bus,
  MapPin,
  Clock,
  User,
  Calendar,
  AlertCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

const initialRoutes = [
  {
    id: "RT001",
    name: "Alex Campus Route",
    vehicle: "Bus 01",
    vehicleNumber: "SCH-BUS-001",
    driver: "John Smith",
    driverContact: "+1 234-567-8910",
    capacity: 40,
    occupancy: 35,
    startPoint: "Faculty Campus",
    endPoint: "Alex District Terminal",
    stops: 8,
    departureTime: "07:15 AM",
    returnTime: "04:30 PM",
    distance: "12.5 km",
    status: "active",
    lastMaintenance: "2025-08-15",
    nextMaintenance: "2025-11-15",
  },
];

export default function TransportPage() {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [routesData, setRoutesData] = useState(initialRoutes);
  const [newRoute, setNewRoute] = useState({
    name: "",
    vehicle: "",
    vehicleNumber: "",
    driver: "",
    driverContact: "",
    capacity: 0,
    occupancy: 0,
    startPoint: "",
    endPoint: "",
    stops: 0,
    departureTime: "",
    returnTime: "",
    distance: "",
    status: "active",
    lastMaintenance: "",
    nextMaintenance: "",
  });
  const [editingRoute, setEditingRoute] = useState<any | null>(null);

  const handleEdit = (id: string) => {
    const route = routesData.find((r) => r.id === id);
    if (route) {
      setEditingRoute({ ...route });
      setEditOpen(true);
    }
  };

  const handleActivate = (id: string) => {
    setRoutesData((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "active" } : r))
    );
  };

  const handleDeactivate = (id: string) => {
    setRoutesData((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "inactive" } : r))
    );
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this route?")) {
      setRoutesData((prev) => prev.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Events' Transport Management
          </h1>
          <p className="text-muted-foreground">
            Manage Faculity transportation routes, vehicles, and schedules
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Route
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Route</DialogTitle>
                <DialogDescription>
                  Fill in the details to create a new route
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-2">
                <Input placeholder="Route Name" value={newRoute.name} onChange={(e) => setNewRoute({ ...newRoute, name: e.target.value })} />
                <Input placeholder="Vehicle" value={newRoute.vehicle} onChange={(e) => setNewRoute({ ...newRoute, vehicle: e.target.value })} />
                <Input placeholder="Vehicle Number" value={newRoute.vehicleNumber} onChange={(e) => setNewRoute({ ...newRoute, vehicleNumber: e.target.value })} />
                <Input placeholder="Driver Name" value={newRoute.driver} onChange={(e) => setNewRoute({ ...newRoute, driver: e.target.value })} />
                <Input placeholder="Driver Contact" value={newRoute.driverContact} onChange={(e) => setNewRoute({ ...newRoute, driverContact: e.target.value })} />
                <Input placeholder="Start Point" value={newRoute.startPoint} onChange={(e) => setNewRoute({ ...newRoute, startPoint: e.target.value })} />
                <Input placeholder="End Point" value={newRoute.endPoint} onChange={(e) => setNewRoute({ ...newRoute, endPoint: e.target.value })} />
              </div>

              <DialogFooter>
                <Button
                  onClick={() => {
                    const id = `RT${Math.floor(100 + Math.random() * 900)}`;
                    setRoutesData([...routesData, { ...newRoute, id }]);
                    setOpen(false);
                    setNewRoute({
                      name: "",
                      vehicle: "",
                      vehicleNumber: "",
                      driver: "",
                      driverContact: "",
                      capacity: 0,
                      occupancy: 0,
                      startPoint: "",
                      endPoint: "",
                      stops: 0,
                      departureTime: "",
                      returnTime: "",
                      distance: "",
                      status: "active",
                      lastMaintenance: "",
                      nextMaintenance: "",
                    });
                  }}
                >
                  Save Route
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Route</DialogTitle>
            <DialogDescription>Update route details below.</DialogDescription>
          </DialogHeader>
          {editingRoute && (
            <div className="space-y-2">
              <Input placeholder="Route Name" value={editingRoute.name} onChange={(e) => setEditingRoute({ ...editingRoute, name: e.target.value })} />
              <Input placeholder="Vehicle" value={editingRoute.vehicle} onChange={(e) => setEditingRoute({ ...editingRoute, vehicle: e.target.value })} />
              <Input placeholder="Vehicle Number" value={editingRoute.vehicleNumber} onChange={(e) => setEditingRoute({ ...editingRoute, vehicleNumber: e.target.value })} />
              <Input placeholder="Driver Name" value={editingRoute.driver} onChange={(e) => setEditingRoute({ ...editingRoute, driver: e.target.value })} />
              <Input placeholder="Driver Contact" value={editingRoute.driverContact} onChange={(e) => setEditingRoute({ ...editingRoute, driverContact: e.target.value })} />
              <Input placeholder="Start Point" value={editingRoute.startPoint} onChange={(e) => setEditingRoute({ ...editingRoute, startPoint: e.target.value })} />
              <Input placeholder="End Point" value={editingRoute.endPoint} onChange={(e) => setEditingRoute({ ...editingRoute, endPoint: e.target.value })} />
            </div>
          )}
          <DialogFooter>
            <Button
              onClick={() => {
                if (editingRoute) {
                  setRoutesData((prev) =>
                    prev.map((r) =>
                      r.id === editingRoute.id ? editingRoute : r
                    )
                  );
                  setEditOpen(false);
                  setEditingRoute(null);
                }
              }}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Tabs defaultValue="routes" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="routes">Routes</TabsTrigger>
        </TabsList>

        <TabsContent value="routes" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {routesData.map((route) => (
              <Card key={route.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{route.name}</CardTitle>
                      <CardDescription>
                        ID: {route.id} | Vehicle: {route.vehicle}
                      </CardDescription>
                    </div>
                    <Badge
                      variant={
                        route.status === "active"
                          ? "default"
                          : route.status === "maintenance"
                          ? "outline"
                          : "secondary"
                      }
                    >
                      {route.status.charAt(0).toUpperCase() + route.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{route.startPoint} to {route.endPoint}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Bus className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{route.vehicleNumber} ({route.occupancy}/{route.capacity} students)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <User className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Driver: {route.driver}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Departure: {route.departureTime} | Return: {route.returnTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <div className="text-sm text-muted-foreground">
                    {route.stops} stops | {route.distance}
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEdit(route.id)}>Edit Route</DropdownMenuItem>
                      <DropdownMenuItem className="text-yellow-600" onClick={() => handleActivate(route.id)}>Activate Route</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600" onClick={() => handleDeactivate(route.id)}>Deactivate Route</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(route.id)}>Delete Route</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
