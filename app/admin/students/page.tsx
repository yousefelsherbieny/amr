"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Plus, Search, Filter, Download, Mail, Phone, MapPin } from "lucide-react"

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")

  // Filter students based on search query and filters
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      searchQuery === "" ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesDepartment = selectedDepartment === "All" || student.department === selectedDepartment
    const matchesYear = selectedYear === "All" || student.year === selectedYear
    const matchesStatus = selectedStatus === "All" || student.status === selectedStatus

    return matchesSearch && matchesDepartment && matchesYear && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Students</h1>
        <p className="text-muted-foreground">Manage student records and information</p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name, ID, or email..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter Students</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="p-2">
                <p className="mb-2 text-xs font-medium">Department</p>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option value="All">All Departments</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Embedded Systems">Embedded Systems</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="AI">AI</option>
                </select>
              </div>
              <div className="p-2">
                <p className="mb-2 text-xs font-medium">Year</p>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="All">All Years</option>
                  <option value="Freshman">Freshman</option>
                  <option value="Sophomore">Sophomore</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                </select>
              </div>
              <div className="p-2">
                <p className="mb-2 text-xs font-medium">Status</p>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="All">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="On Leave">On Leave</option>
                  <option value="Probation">Probation</option>
                </select>
              </div>
              <DropdownMenuSeparator />
              <div className="p-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    setSelectedDepartment("All")
                    setSelectedYear("All")
                    setSelectedStatus("All")
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
        <Button className="shrink-0">
          <Plus className="mr-2 h-4 w-4" /> Add Student
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Students</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="new">New Enrollments</TabsTrigger>
          <TabsTrigger value="attention">Requires Attention</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
          {filteredStudents.length === 0 && (
            <div className="flex h-[200px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
              <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                <h3 className="mt-4 text-lg font-semibold">No students found</h3>
                <p className="mb-4 mt-2 text-sm text-muted-foreground">
                  No students match your search criteria. Try adjusting your filters.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedDepartment("All")
                    setSelectedYear("All")
                    setSelectedStatus("All")
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
        <TabsContent value="active" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {students
              .filter((student) => student.status === "Active")
              .map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="new" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {students
              .filter((student) => student.isNewEnrollment)
              .map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="attention" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {students
              .filter((student) => student.requiresAttention)
              .map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function StudentCard({ student }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="relative h-32 bg-gradient-to-r from-blue-600 to-blue-400">
            <div className="absolute -bottom-12 left-4">
              <Avatar className="h-24 w-24 border-4 border-white">
                <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                <AvatarFallback className="text-lg">{student.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute right-2 top-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Edit Details</DropdownMenuItem>
                  <DropdownMenuItem>Academic Records</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Reset Password</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Deactivate Account</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="mt-14 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold">{student.name}</h3>
              <Badge
                variant={
                  student.status === "Active" ? "success" : student.status === "On Leave" ? "outline" : "secondary"
                }
              >
                {student.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">ID: {student.id}</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{student.email}</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{student.phone}</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{student.department}</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground">Year</p>
                <p className="text-sm">{student.year}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">GPA</p>
                <p className="text-sm">{student.gpa}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">Credits</p>
                <p className="text-sm">{student.credits}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" size="sm">
                View
              </Button>
              <Button size="sm">Edit</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const students = [
  {
    id: "STU2023001",
    name: "Emma Thompson",
    email: "emma.t@university.edu",
    phone: "(555) 123-4567",
    department: "Computer Science",
    year: "Junior",
    status: "Active",
    gpa: "3.8",
    credits: "72",
    avatar: "/placeholder.svg?key=emma",
    isNewEnrollment: false,
    requiresAttention: false,
  },
  {
    id: "STU2023002",
    name: "James Wilson",
    email: "j.wilson@university.edu",
    phone: "(555) 234-5678",
    department: "Information Technology",
    year: "Sophomore",
    status: "Active",
    gpa: "3.5",
    credits: "45",
    avatar: "/placeholder.svg?key=james",
    isNewEnrollment: false,
    requiresAttention: false,
  },
  {
    id: "STU2023003",
    name: "Sophia Martinez",
    email: "s.martinez@university.edu",
    phone: "(555) 345-6789",
    department: "Embedded Systems",
    year: "Senior",
    status: "Active",
    gpa: "3.9",
    credits: "105",
    avatar: "/placeholder.svg?key=sophia",
    isNewEnrollment: false,
    requiresAttention: false,
  },
  {
    id: "STU2023004",
    name: "Liam Johnson",
    email: "l.johnson@university.edu",
    phone: "(555) 456-7890",
    department: "Cyber Security",
    year: "Freshman",
    status: "Probation",
    gpa: "2.1",
    credits: "15",
    avatar: "/placeholder.svg?key=liam",
    isNewEnrollment: false,
    requiresAttention: true,
  },
  {
    id: "STU2023005",
    name: "Olivia Davis",
    email: "o.davis@university.edu",
    phone: "(555) 567-8901",
    department: "AI",
    year: "Junior",
    status: "On Leave",
    gpa: "3.6",
    credits: "63",
    avatar: "/placeholder.svg?key=olivia",
    isNewEnrollment: false,
    requiresAttention: true,
  },
  {
    id: "STU2023006",
    name: "Noah Smith",
    email: "n.smith@university.edu",
    phone: "(555) 678-9012",
    department: "Computer Science",
    year: "Sophomore",
    status: "Active",
    gpa: "3.7",
    credits: "42",
    avatar: "/placeholder.svg?key=noah",
    isNewEnrollment: true,
    requiresAttention: false,
  },
  {
    id: "STU2023007",
    name: "Ava Brown",
    email: "a.brown@university.edu",
    phone: "(555) 789-0123",
    department: "Embedded Systems",
    year: "Freshman",
    status: "Active",
    gpa: "4.0",
    credits: "18",
    avatar: "/placeholder.svg?key=ava",
    isNewEnrollment: true,
    requiresAttention: false,
  },
  {
    id: "STU2023008",
    name: "Ethan Taylor",
    email: "e.taylor@university.edu",
    phone: "(555) 890-1234",
    department: "Information Technology",
    year: "Senior",
    status: "Active",
    gpa: "3.2",
    credits: "108",
    avatar: "/placeholder.svg?key=ethan",
    isNewEnrollment: false,
    requiresAttention: false,
  },
]
