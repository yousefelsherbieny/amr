"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MoreHorizontal,
  Plus,
  Search,
  Filter,
  Download,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Mock data for students
const initialStudents = [
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
  // Add other students...
];

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [students, setStudents] = useState(initialStudents);

  // For the Add Student modal
  const [showModal, setShowModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    phone: "",
    department: "Computer Science",
    year: "Freshman",
    status: "Active",
    gpa: "",
    credits: "",
  });

  // Filter students based on search query and filters
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      searchQuery === "" ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "All" || student.department === selectedDepartment;
    const matchesYear = selectedYear === "All" || student.year === selectedYear;
    const matchesStatus =
      selectedStatus === "All" || student.status === selectedStatus;

    return matchesSearch && matchesDepartment && matchesYear && matchesStatus;
  });

  // Add a new student
  const addStudent = () => {
    const newStudentData = {
      id: `STU${Math.random().toString(36).substring(2, 9)}`,
      name: newStudent.name,
      email: newStudent.email,
      phone: newStudent.phone,
      department: newStudent.department,
      year: newStudent.year,
      status: newStudent.status,
      gpa: newStudent.gpa,
      credits: newStudent.credits,
      avatar: "/placeholder.svg",
      isNewEnrollment: true,
      requiresAttention: false,
    };

    setStudents([...students, newStudentData]);
    setShowModal(false); // Close the modal after adding the student
    setNewStudent({
      name: "",
      email: "",
      phone: "",
      department: "Computer Science",
      year: "Freshman",
      status: "Active",
      gpa: "",
      credits: "",
    }); // Reset the form
  };

  // Handle delete student
  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Handle edit student
  const handleEdit = (student) => {
    setNewStudent({
      id: student.id,
      name: student.name,
      email: student.email,
      phone: student.phone,
      department: student.department,
      year: student.year,
      status: student.status,
      gpa: student.gpa,
      credits: student.credits,
    });
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Students</h1>
        <p className="text-muted-foreground">
          Manage student records and information
        </p>
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
                  <option value="Information Technology">
                    Information Technology
                  </option>
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
                    setSelectedDepartment("All");
                    setSelectedYear("All");
                    setSelectedStatus("All");
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
        <Button className="shrink-0" onClick={() => setShowModal(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Student
        </Button>
      </div>

      {/* Modal for Adding Student */}
      {showModal && (
        <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-center">
              Add New Student
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="id"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ID
                  </label>
                  <Input
                    id="id"
                    value={newStudent.id}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, id: e.target.value })
                    }
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={newStudent.name}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, name: e.target.value })
                    }
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={newStudent.email}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, email: e.target.value })
                    }
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    value={newStudent.phone}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, phone: e.target.value })
                    }
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Department
                  </label>
                  <select
                    id="department"
                    value={newStudent.department}
                    onChange={(e) =>
                      setNewStudent({
                        ...newStudent,
                        department: e.target.value,
                      })
                    }
                    className="w-full rounded-md border border-gray-300 bg-background px-3 py-1 text-sm"
                  >
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">
                      Information Technology
                    </option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="AI">AI</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Year
                  </label>
                  <select
                    id="year"
                    value={newStudent.year}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, year: e.target.value })
                    }
                    className="w-full rounded-md border border-gray-300 bg-background px-3 py-1 text-sm"
                  >
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="gpa"
                    className="block text-sm font-medium text-gray-700"
                  >
                    GPA
                  </label>
                  <Input
                    id="gpa"
                    type="number"
                    value={newStudent.gpa}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, gpa: e.target.value })
                    }
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="credits"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Credits
                  </label>
                  <Input
                    id="credits"
                    type="number"
                    value={newStudent.credits}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, credits: e.target.value })
                    }
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    value={newStudent.status}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, status: e.target.value })
                    }
                    className="w-full rounded-md border border-gray-300 bg-background px-3 py-1 text-sm"
                  >
                    <option value="Active">Active</option>
                    <option value="On Leave">On Leave</option>
                    <option value="Probation">Probation</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Button
                variant="outline"
                onClick={() => setShowModal(false)}
                className="mr-2"
              >
                Cancel
              </Button>
              <Button onClick={addStudent}>Save</Button>
            </div>
          </div>
        </div>
      )}

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
              <StudentCard
                key={student.id}
                student={student}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))}
          </div>
          {filteredStudents.length === 0 && (
            <div className="flex h-[200px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
              <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                <h3 className="mt-4 text-lg font-semibold">
                  No students found
                </h3>
                <p className="mb-4 mt-2 text-sm text-muted-foreground">
                  No students match your search criteria. Try adjusting your
                  filters.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDepartment("All");
                    setSelectedYear("All");
                    setSelectedStatus("All");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function StudentCard({ student, handleDelete, handleEdit }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="relative h-32 bg-gradient-to-r from-blue-600 to-blue-400">
            <div className="absolute -bottom-12 left-4">
              <Avatar className="h-24 w-24 border-4 border-white">
                <AvatarImage
                  src={student.avatar || "/placeholder.svg"}
                  alt={student.name}
                />
                <AvatarFallback className="text-lg">
                  {student.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute right-2 top-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleEdit(student)}>
                    Edit Details
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-600"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="mt-14 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold">{student.name}</h3>
              <Badge
                variant={
                  student.status === "Active"
                    ? "success"
                    : student.status === "On Leave"
                    ? "outline"
                    : "secondary"
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
                <span className="text-muted-foreground">
                  {student.department}
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Year
                </p>
                <p className="text-sm">{student.year}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">GPA</p>
                <p className="text-sm">{student.gpa}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Credits
                </p>
                <p className="text-sm">{student.credits}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleEdit(student)}
              >
                Edit
              </Button>
              <Button
                size="sm"
                className="bg-red-600 text-white"
                onClick={() => handleDelete(student.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
