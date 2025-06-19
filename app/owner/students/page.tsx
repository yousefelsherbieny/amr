import {
  Search,
  Filter,
  Download,
  Plus,
  MoreHorizontal,
  ChevronDown,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
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
import { Badge } from "@/components/ui/badge"

// Mock data for students
const students = [
  {
    id: "STU001",
    name: "Alex Johnson",
    grade: "10th Grade",
    section: "it",
    rollNo: "1001",
    gender: "Male",
    attendance: "92%",
    performance: "Excellent",
    contact: "alex.j@example.com",
    phone: "+1 234-567-8901",
    address: "123 School Lane, Cityville",
    status: "active",
    joinDate: "2022-08-15",
    parentName: "Robert Johnson",
    fees: {
      status: "paid",
      lastPayment: "2024-09-05",
    },
  },
  {
    id: "STU002",
    name: "Sophia Williams",
    grade: "11th Grade",
    section: "cs",
    rollNo: "1102",
    gender: "Female",
    attendance: "88%",
    performance: "Good",
    contact: "sophia.w@example.com",
    phone: "+1 234-567-8902",
    address: "456 Education Ave, Townsville",
    status: "active",
    joinDate: "2021-08-10",
    parentName: "Emma Williams",
    fees: {
      status: "pending",
      lastPayment: "2024-08-05",
    },
  },
  {
    id: "STU003",
    name: "Michael Brown",
    grade: "9th Grade",
    section: "is",
    rollNo: "903",
    gender: "Male",
    attendance: "95%",
    performance: "Outstanding",
    contact: "michael.b@example.com",
    phone: "+1 234-567-8903",
    address: "789 Learning Blvd, Schooltown",
    status: "active",
    joinDate: "2022-08-12",
    parentName: "James Brown",
    fees: {
      status: "paid",
      lastPayment: "2024-09-10",
    },
  },
  {
    id: "STU004",
    name: "Emily Davis",
    grade: "12th Grade",
    section: "it",
    rollNo: "1204",
    gender: "Female",
    attendance: "90%",
    performance: "Very Good",
    contact: "emily.d@example.com",
    phone: "+1 234-567-8904",
    address: "101 Knowledge St, Eduville",
    status: "active",
    joinDate: "2020-08-05",
    parentName: "Sarah Davis",
    fees: {
      status: "overdue",
      lastPayment: "2025-07-05",
    },
  },
  {
    id: "STU005",
    name: "Daniel Wilson",
    grade: "10th Grade",
    section: "cs",
    rollNo: "1005",
    gender: "Male",
    attendance: "85%",
    performance: "Good",
    contact: "daniel.w@example.com",
    phone: "+1 234-567-8905",
    address: "202 Academy Road, Learnington",
    status: "inactive",
    joinDate: "2022-08-15",
    parentName: "Thomas Wilson",
    fees: {
      status: "paid",
      lastPayment: "2024-09-01",
    },
  },
]

export default function StudentsPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Management</h1>
          <p className="text-muted-foreground">View and manage all student information and records</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
          <TabsList className="mb-2 md:mb-0">
            <TabsTrigger value="all">All Students</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
            <TabsTrigger value="new">New Admissions</TabsTrigger>
          </TabsList>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search students..." className="w-full sm:w-[250px] pl-8" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Grade</DropdownMenuItem>
                <DropdownMenuItem>Section</DropdownMenuItem>
                <DropdownMenuItem>Performance</DropdownMenuItem>
                <DropdownMenuItem>Fee Status</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Clear Filters</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {students.map((student) => (
              <Card key={student.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{student.name}</CardTitle>
                      <CardDescription>
                        ID: {student.id} | {student.grade}, Section {student.section}
                      </CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                        <DropdownMenuItem>Academic Records</DropdownMenuItem>
                        <DropdownMenuItem>Attendance History</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <GraduationCap className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Performance: {student.performance}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{student.contact}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{student.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="truncate">{student.address}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <div>
                    <Badge variant={student.status === "active" ? "default" : "secondary"}>
                      {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                    </Badge>
                  </div>
                  <div>
                    <Badge
                      variant={
                        student.fees.status === "paid"
                          ? "default"
                          : student.fees.status === "pending"
                            ? "outline"
                            : "destructive"
                      }
                    >
                      Fees: {student.fees.status.charAt(0).toUpperCase() + student.fees.status.slice(1)}
                    </Badge>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing <strong>5</strong> of <strong>100</strong> students
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="active">
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium">Active Students</h3>
            <p className="text-muted-foreground">Showing only currently active students.</p>
          </div>
        </TabsContent>

        <TabsContent value="inactive">
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium">Inactive Students</h3>
            <p className="text-muted-foreground">Showing only inactive or alumni students.</p>
          </div>
        </TabsContent>

        <TabsContent value="new">
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium">New Admissions</h3>
            <p className="text-muted-foreground">Showing only recently admitted students.</p>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Student Analytics</CardTitle>
          <CardDescription>Overview of student performance and demographics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <h3 className="font-medium mb-2">Grade Distribution</h3>
              <div className="h-40 flex items-center justify-center text-muted-foreground">Chart placeholder</div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h3 className="font-medium mb-2">Performance Metrics</h3>
              <div className="h-40 flex items-center justify-center text-muted-foreground">Chart placeholder</div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h3 className="font-medium mb-2">Attendance Overview</h3>
              <div className="h-40 flex items-center justify-center text-muted-foreground">Chart placeholder</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
