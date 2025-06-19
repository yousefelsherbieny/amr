"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Book,
  Calendar,
  ChevronDown,
  Clock,
  Download,
  FileText,
  Filter,
  GraduationCap,
  Search,
  SortAsc,
  Star,
  User,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Mock data for courses
const courses = [
  {
    id: "cs101",
    code: "CS101",
    name: "Introduction to Computer Science",
    instructor: "Dr. Alan Turing",
    department: "Computer Science",
    credits: 4,
    semester: "Fall 2025",
    schedule: "Mon, Wed, Fri 10:00 AM - 11:30 AM",
    location: "Tech Building, Room 305",
    progress: 68,
    status: "active",
    grade: "B+",
    materials: 12,
    assignments: 8,
    completedAssignments: 5,
    description: "An introductory course covering the basic principles of computer science and programming concepts.",
    image: "/abstract-computer-network.png",
    tags: ["Core", "Programming", "Theory"],
    nextDeadline: "2025-11-15",
    nextDeadlineTitle: "Assignment 6: Algorithms",
  },
  {
    id: "calculus201",
    code: "Calculus201",
    name: "Calculus II",
    instructor: "Prof. Katherine Johnson",
    department: "AI",
    credits: 3,
    semester: "Fall 2025",
    schedule: "Tue, Thu 9:00 AM - 10:30 AM",
    location: "Science Hall, Room 210",
    progress: 75,
    status: "active",
    grade: "A-",
    materials: 8,
    assignments: 10,
    completedAssignments: 7,
    description: "A continuation of Calculus I, covering integration techniques, applications, and infinite series.",
    image: "/calculus-concepts.png",
    tags: ["Core", "Math1", "Required"],
    nextDeadline: "2025-11-10",
    nextDeadlineTitle: "Problem Set 8: Infinite Series",
  },
  {
    id: "eng102",
    code: "ENG102",
    name: "Academic Writing and Research",
    instructor: "Dr. Maya Angelou",
    department: "Embedded Systems",
    credits: 3,
    semester: "Fall 2025",
    schedule: "Mon, Wed 1:00 PM - 2:30 PM",
    location: "Humanities Building, Room 115",
    progress: 82,
    status: "active",
    grade: "A",
    materials: 15,
    assignments: 6,
    completedAssignments: 5,
    description: "Focuses on developing critical thinking and research skills through academic writing assignments.",
    image: "/academic-papers-stack.png",
    tags: ["Core", "Writing", "Research"],
    nextDeadline: "2025-11-18",
    nextDeadlineTitle: "Research Paper Draft",
  },
  {
    id: "db101",
    code: "DB101",
    name: "Introduction to DataBase",
    instructor: "Dr. Richard Feynman",
    department: "IS",
    credits: 4,
    semester: "Fall 2025",
    schedule: "Tue, Thu 11:00 AM - 12:30 PM, Fri 2:00 PM - 4:00 PM (Lab)",
    location: "Science Hall, Room 305, Lab: Science Hall, Room 310",
    progress: 60,
    status: "active",
    grade: "B",
    materials: 10,
    assignments: 9,
    completedAssignments: 5,
    description:
      "An introduction to DataBase, Sql, and Orcale.",
    image: "/physics-concepts.png",
    tags: ["Core", "DataBase", "Lab"],
    nextDeadline: "2025-11-12",
    nextDeadlineTitle: "Lab Report: Sql Commands",
  },
  {
    id: "hum101",
    code: "HUM101",
    name: "Human rights",
    instructor: "Prof. Howard Zinn",
    department: "Cyber Security",
    credits: 3,
    semester: "Fall 2025",
    schedule: "Mon, Wed, Fri 9:00 AM - 10:00 AM",
    location: "Humanities Building, Room 220",
    progress: 90,
    status: "active",
    grade: "A-",
    materials: 20,
    assignments: 7,
    completedAssignments: 6,
    description:
      "Survey of Human rights from ancient civilizations through the medieval period, examining cultural, political, and social developments.",
    image: "/tapestry-of-time.png",
    tags: ["rights", "Human", "Humanities"],
    nextDeadline: "2025-11-20",
    nextDeadlineTitle: "Essay: Egyptians Human rights",
  },
  {
    id: "ds101",
    code: "DS101",
    name: "Data Structure",
    instructor: "Dr. Marie Curie",
    department: "IT",
    credits: 4,
    semester: "Fall 2025",
    schedule: "Mon, Wed 10:00 AM - 11:30 AM, Thu 1:00 PM - 4:00 PM (Lab)",
    location: "Science Hall, Room 105, Lab: Science Hall, Room 110",
    progress: 72,
    status: "active",
    grade: "B+",
    materials: 14,
    assignments: 11,
    completedAssignments: 8,
    description:
      "Introduction to the fundamental principles of Data Structure, set, linkedlist, and Queue Theory.",
    image: "/colorful-chemistry-lab.png",
    tags: ["Core", "Data Structure", "Lab"],
    nextDeadline: "2025-11-14",
    nextDeadlineTitle: "Lab Report: Queue Theory",
  },
]

// Previous semester courses
const previousCourses = [
  {
    id: "cs100",
    code: "CS100",
    name: "Computer Literacy",
    instructor: "Prof. Ada Lovelace",
    department: "Computer Science",
    credits: 2,
    semester: "Spring 2024",
    finalGrade: "A",
    status: "completed",
  },
  {
    id: "math101",
    code: "MATH101",
    name: "Calculus I",
    instructor: "Dr. Isaac Newton",
    department: "AI",
    credits: 3,
    semester: "Spring 2024",
    finalGrade: "A-",
    status: "completed",
  },
  {
    id: "eng101",
    code: "ENG101",
    name: "Composition and Rhetoric",
    instructor: "Prof. William Shakespeare",
    department: "Embedded Systems",
    credits: 3,
    semester: "Spring 2024",
    finalGrade: "B+",
    status: "completed",
  },
  {
    id: "op101",
    code: "OP101",
    name: "Introduction to Operating System",
    instructor: "Dr. Charles Darwin",
    department: "Operating System",
    credits: 4,
    semester: "Spring 2024",
    finalGrade: "B",
    status: "completed",
  },
]

// Upcoming courses
const upcomingCourses = [
  {
    id: "cs201",
    code: "CS201",
    name: "Computer Theory and Algorithms",
    instructor: "Dr. Donald Knuth",
    department: "Computer Science",
    credits: 4,
    semester: "Spring 2026",
    status: "upcoming",
    prerequisites: ["CS101"],
  },
  {
    id: "math301",
    code: "MATH301",
    name: "Linear Algebra",
    instructor: "Prof. Emmy Noether",
    department: "AI",
    credits: 3,
    semester: "Spring 2026",
    status: "upcoming",
    prerequisites: ["Calculus201"],
  },
]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<string>("name")

  // Filter and sort current courses
  const filteredCourses = courses
    .filter((course) => {
      const matchesSearch =
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesDepartment = !selectedDepartment || course.department === selectedDepartment

      return matchesSearch && matchesDepartment
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "code") return a.code.localeCompare(b.code)
      if (sortBy === "progress") return b.progress - a.progress
      return 0
    })

  // Get unique departments for filter
  const departments = Array.from(new Set(courses.map((course) => course.department)))

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
        <p className="text-muted-foreground">Manage and track your academic courses</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search courses..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                {selectedDepartment || "All Departments"}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSelectedDepartment(null)}>All Departments</DropdownMenuItem>
              {departments.map((dept) => (
                <DropdownMenuItem key={dept} onClick={() => setSelectedDepartment(dept)}>
                  {dept}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                <SortAsc className="mr-2 h-4 w-4" />
                Sort by
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSortBy("name")}>Course Name</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("code")}>Course Code</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("progress")}>Progress</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="current">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="current">Current Courses</TabsTrigger>
          <TabsTrigger value="previous">Previous Courses</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden flex flex-col">
                <div className="h-32 overflow-hidden">
                  <img
                    src={
                      course.image || `/placeholder.svg?height=100&width=200&query=${encodeURIComponent(course.name)}`
                    }
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <CardDescription>
                        {course.code} • {course.credits} Credits
                      </CardDescription>
                    </div>
                    <Badge className={course.progress >= 75 ? "bg-green-600" : ""}>{course.grade}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <div className="space-y-4">
                    <div className="flex items-center text-sm">
                      <User className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.schedule.split(",")[0]}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {course.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2 border-t flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>Next: {new Date(course.nextDeadline).toLocaleDateString()}</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/student/courses/${course.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">No courses found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="previous">
          <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium">Code</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Course Name</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Instructor</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Semester</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Credits</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Final Grade</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {previousCourses.map((course) => (
                    <tr
                      key={course.id}
                      className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    >
                      <td className="p-4 align-middle font-medium">{course.code}</td>
                      <td className="p-4 align-middle">{course.name}</td>
                      <td className="p-4 align-middle">{course.instructor}</td>
                      <td className="p-4 align-middle">{course.semester}</td>
                      <td className="p-4 align-middle">{course.credits}</td>
                      <td className="p-4 align-middle">
                        <Badge variant="outline" className="font-semibold">
                          {course.finalGrade}
                        </Badge>
                      </td>
                      <td className="p-4 align-middle">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Download Certificate</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle>{course.name}</CardTitle>
                  <CardDescription>
                    {course.code} • {course.credits} Credits
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm">
                      <User className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Book className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.department}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.semester}</span>
                    </div>
                    {course.prerequisites && course.prerequisites.length > 0 && (
                      <div>
                        <p className="text-sm font-medium mb-2">Prerequisites:</p>
                        <div className="flex flex-wrap gap-2">
                          {course.prerequisites.map((prereq) => (
                            <Badge key={prereq} variant="secondary">
                              {prereq}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button size="sm">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="mr-2 h-5 w-5 text-yellow-500" />
            Course Statistics
          </CardTitle>
          <CardDescription>Overview of your academic progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-sm font-medium">Current GPA</p>
              <div className="text-3xl font-bold">3.7</div>
              <p className="text-xs text-muted-foreground">Out of 4.0</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Credits Completed</p>
              <div className="text-3xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">Out of 120 required</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Courses Completed</p>
              <div className="text-3xl font-bold">14</div>
              <p className="text-xs text-muted-foreground">Out of 40 required</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
