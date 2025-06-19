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
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Mock data for transport routes
const routes = [
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
  {
    id: "RT002",
    name: "Cairo Residential Route",
    vehicle: "Bus 02",
    vehicleNumber: "SCH-BUS-002",
    driver: "Michael Johnson",
    driverContact: "+1 234-567-8911",
    capacity: 40,
    occupancy: 32,
    startPoint: "Faculty Campus",
    endPoint: "Cairo Residential Area",
    stops: 6,
    departureTime: "07:30 AM",
    returnTime: "04:45 PM",
    distance: "8.2 km",
    status: "active",
    lastMaintenance: "2025-09-05",
    nextMaintenance: "2025-12-05",
  },
  {
    id: "RT003",
    name: "Giza Hills Route",
    vehicle: "Bus 03",
    vehicleNumber: "SCH-BUS-003",
    driver: "Robert Davis",
    driverContact: "+1 234-567-8912",
    capacity: 35,
    occupancy: 30,
    startPoint: "Faculty Campus",
    endPoint: "Giza Hills Community",
    stops: 7,
    departureTime: "07:20 AM",
    returnTime: "04:40 PM",
    distance: "10.8 km",
    status: "active",
    lastMaintenance: "2025-07-20",
    nextMaintenance: "2025-10-20",
  },
  {
    id: "RT004",
    name: "Aswan Market Route",
    vehicle: "Van 01",
    vehicleNumber: "SCH-VAN-001",
    driver: "Sarah Wilson",
    driverContact: "+1 234-567-8913",
    capacity: 20,
    occupancy: 18,
    startPoint: "Faculty Campus",
    endPoint: "Aswan Market Area",
    stops: 5,
    departureTime: "07:45 AM",
    returnTime: "05:00 PM",
    distance: "6.5 km",
    status: "maintenance",
    lastMaintenance: "2025-10-01",
    nextMaintenance: "2025-10-15",
  },
  {
    id: "RT005",
    name: "Tanta Downtown Route",
    vehicle: "Bus 04",
    vehicleNumber: "SCH-BUS-004",
    driver: "David Thompson",
    driverContact: "+1 234-567-8914",
    capacity: 40,
    occupancy: 38,
    startPoint: "Faculty Campus",
    endPoint: "Tanta Downtown",
    stops: 9,
    departureTime: "07:10 AM",
    returnTime: "04:20 PM",
    distance: "14.2 km",
    status: "inactive",
    lastMaintenance: "2025-06-10",
    nextMaintenance: "2025-09-10",
  },
]

// Mock data for vehicles
const vehicles = [
  {
    id: "VEH001",
    name: "Bus 01",
    type: "Faculity Bus",
    number: "SCH-BUS-001",
    capacity: 40,
    model: "Blue Bird Vision",
    year: 2019,
    fuelType: "Diesel",
    status: "active",
    assignedRoute: "Alex Campus Route",
    assignedDriver: "John Smith",
    lastService: "2025-08-15",
    nextService: "2025-11-15",
    mileage: "45,230 km",
    fuelEfficiency: "6.2 km/l",
  },
  {
    id: "VEH002",
    name: "Bus 02",
    type: "Faculity Bus",
    number: "SCH-BUS-002",
    capacity: 40,
    model: "Blue Bird Vision",
    year: 2019,
    fuelType: "Diesel",
    status: "active",
    assignedRoute: "Cairo Residential Route",
    assignedDriver: "Michael Johnson",
    lastService: "2025-09-05",
    nextService: "2025-12-05",
    mileage: "38,450 km",
    fuelEfficiency: "6.5 km/l",
  },
  {
    id: "VEH003",
    name: "Bus 03",
    type: "Faculity Bus",
    number: "SCH-BUS-003",
    capacity: 35,
    model: "Thomas Built Saf-T-Liner",
    year: 2020,
    fuelType: "Diesel",
    status: "active",
    assignedRoute: "Giza Hills Route",
    assignedDriver: "Robert Davis",
    lastService: "2025-07-20",
    nextService: "2025-10-20",
    mileage: "32,780 km",
    fuelEfficiency: "6.8 km/l",
  },
  {
    id: "VEH004",
    name: "Van 01",
    type: "Faculity Van",
    number: "SCH-VAN-001",
    capacity: 20,
    model: "Ford Transit",
    year: 2021,
    fuelType: "Gasoline",
    status: "maintenance",
    assignedRoute: "Aswan Market Route",
    assignedDriver: "Sarah Wilson",
    lastService: "2025-10-01",
    nextService: "2025-10-15",
    mileage: "25,640 km",
    fuelEfficiency: "8.2 km/l",
  },
  {
    id: "VEH005",
    name: "Bus 04",
    type: "Faculity Bus",
    number: "SCH-BUS-004",
    capacity: 40,
    model: "IC Bus CE Series",
    year: 2018,
    fuelType: "Diesel",
    status: "inactive",
    assignedRoute: "Tanta Downtown Route",
    assignedDriver: "David Thompson",
    lastService: "2025-06-10",
    nextService: "2025-09-10",
    mileage: "52,120 km",
    fuelEfficiency: "6.0 km/l",
  },
]

export default function TransportPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events' Transport Management</h1>
          <p className="text-muted-foreground">Manage Faculity transportation routes, vehicles, and schedules</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Route
          </Button>
        </div>
      </div>

      {/* Maintenance Alert */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Scheduled Maintenance</AlertTitle>
        <AlertDescription>
          Vehicle SCH-VAN-001 is scheduled for maintenance on October 15, 2025. Please plan alternative arrangements for
          the South Market Route.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="routes" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="routes">Routes</TabsTrigger>
          <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
          <TabsTrigger value="drivers">Drivers</TabsTrigger>
          <TabsTrigger value="students">Student Assignments</TabsTrigger>
        </TabsList>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search routes, vehicles, or drivers..."
              className="w-full sm:w-[350px] pl-8"
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="maintenance">In Maintenance</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Vehicle Type</DropdownMenuItem>
                <DropdownMenuItem>Route Distance</DropdownMenuItem>
                <DropdownMenuItem>Capacity</DropdownMenuItem>
                <DropdownMenuItem>Maintenance Schedule</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Clear Filters</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <TabsContent value="routes" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {routes.map((route) => (
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
                        route.status === "active" ? "default" : route.status === "maintenance" ? "outline" : "secondary"
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
                      <span>
                        {route.startPoint} to {route.endPoint}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Bus className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>
                        {route.vehicleNumber} ({route.occupancy}/{route.capacity} students)
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <User className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Driver: {route.driver}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>
                        Departure: {route.departureTime} | Return: {route.returnTime}
                      </span>
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
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Route</DropdownMenuItem>
                      <DropdownMenuItem>View Students</DropdownMenuItem>
                      <DropdownMenuItem>View Schedule</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Deactivate Route</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="vehicles" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{vehicle.name}</CardTitle>
                      <CardDescription>
                        {vehicle.type} | {vehicle.number}
                      </CardDescription>
                    </div>
                    <Badge
                      variant={
                        vehicle.status === "active"
                          ? "default"
                          : vehicle.status === "maintenance"
                            ? "outline"
                            : "secondary"
                      }
                    >
                      {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Bus className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>
                        {vehicle.model} ({vehicle.year})
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <User className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Driver: {vehicle.assignedDriver}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Route: {vehicle.assignedRoute}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Next Service: {vehicle.nextService}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <div className="text-sm text-muted-foreground">Mileage: {vehicle.mileage}</div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Vehicle</DropdownMenuItem>
                      <DropdownMenuItem>Maintenance History</DropdownMenuItem>
                      <DropdownMenuItem>Fuel Logs</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Mark as Inactive</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="drivers">
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium">Driver Management</h3>
            <p className="text-muted-foreground">View and manage driver information, licenses, and schedules.</p>
          </div>
        </TabsContent>

        <TabsContent value="students">
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium">Student Transport Assignments</h3>
            <p className="text-muted-foreground">
              Manage student assignments to transport routes and pickup/drop-off points.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Transport Analytics</CardTitle>
          <CardDescription>Overview of transport efficiency, costs, and utilization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <h3 className="font-medium mb-2">Route Utilization</h3>
              <div className="h-40 flex items-center justify-center text-muted-foreground">Chart placeholder</div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h3 className="font-medium mb-2">Fuel Consumption</h3>
              <div className="h-40 flex items-center justify-center text-muted-foreground">Chart placeholder</div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h3 className="font-medium mb-2">Maintenance Schedule</h3>
              <div className="h-40 flex items-center justify-center text-muted-foreground">Chart placeholder</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
