import { PlusCircle, Search, Filter, MoreHorizontal, Pencil, Trash2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample course data
const coursesData = [
  {
    id: "CS101",
    title: "Introduction to Computer Science",
    department: "Computer Science",
    instructor: "Dr. James Wilson",
    credits: 3,
    semester: "Fall 2025",
    status: "Active",
  },
  {
    id: "MATH201",
    title: "Calculus II",
    department: "AI",
    instructor: "Dr. Sarah Johnson",
    credits: 4,
    semester: "Fall 2025",
    status: "Active",
  },
  {
    id: "DB102",
    title: "DataBase for Engineers",
    department: "DataBase",
    instructor: "Prof. Emily Chen",
    credits: 4,
    semester: "Spring 2025",
    status: "Pending",
  },
  {
    id: "ENG220",
    title: "Creative Writing",
    department: "Embedded Systems",
    instructor: "Dr. Jessica Lee",
    credits: 3,
    semester: "Fall 2025",
    status: "Active",
  },
  {
    id: "DS110",
    title: "General Data Structure",
    department: "Data Structure",
    instructor: "Dr. Michael Rodriguez",
    credits: 4,
    semester: "Spring 2025",
    status: "Pending",
  },
]

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Course Management</h1>
        <Button className="flex items-center gap-1">
          <PlusCircle className="h-4 w-4" />
          <span>Add Course</span>
        </Button>
      </div>

      <Tabs defaultValue="current">
        <TabsList>
          <TabsTrigger value="current">Current Courses</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Courses</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        <TabsContent value="current" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Course Offerings</CardTitle>
              <CardDescription>Manage courses being offered in the current semester.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search courses..." className="w-full pl-8" />
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Code</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Semester</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {coursesData
                      .filter((course) => course.status === "Active")
                      .map((course) => (
                        <TableRow key={course.id}>
                          <TableCell className="font-medium">{course.id}</TableCell>
                          <TableCell>{course.title}</TableCell>
                          <TableCell>{course.department}</TableCell>
                          <TableCell>{course.instructor}</TableCell>
                          <TableCell>{course.credits}</TableCell>
                          <TableCell>{course.semester}</TableCell>
                          <TableCell>
                            <Badge variant="default">{course.status}</Badge>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem className="flex items-center">
                                  <Pencil className="mr-2 h-4 w-4" />
                                  <span>Edit</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center text-destructive">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  <span>Delete</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Course Offerings</CardTitle>
              <CardDescription>Manage courses scheduled for upcoming semesters.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search upcoming courses..." className="w-full pl-8" />
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Code</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Semester</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {coursesData
                      .filter((course) => course.status === "Pending")
                      .map((course) => (
                        <TableRow key={course.id}>
                          <TableCell className="font-medium">{course.id}</TableCell>
                          <TableCell>{course.title}</TableCell>
                          <TableCell>{course.department}</TableCell>
                          <TableCell>{course.instructor}</TableCell>
                          <TableCell>{course.credits}</TableCell>
                          <TableCell>{course.semester}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{course.status}</Badge>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem className="flex items-center">
                                  <Pencil className="mr-2 h-4 w-4" />
                                  <span>Edit</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center text-destructive">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  <span>Delete</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="archived" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Archived Courses</CardTitle>
              <CardDescription>View and manage courses from previous semesters.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-10 text-center">
              <BookOpen className="h-16 w-16 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium">No Archived Courses</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                There are no archived courses available at this time.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
