"use client"

import { useState } from "react"
import { PlusCircle, Search, Filter, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default function CoursesPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editIndex, setEditIndex] = useState(null)
  const [courses, setCourses] = useState([
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
  ])
  const [formCourse, setFormCourse] = useState({
    id: "",
    title: "",
    department: "",
    instructor: "",
    credits: "",
    semester: "",
    status: "Active",
  })

  const handleSave = () => {
    if (isEditMode && editIndex !== null) {
      const updated = [...courses]
      updated[editIndex] = formCourse
      setCourses(updated)
    } else {
      setCourses(prev => [...prev, formCourse])
    }
    setFormCourse({ id: "", title: "", department: "", instructor: "", credits: "", semester: "", status: "Active" })
    setIsDialogOpen(false)
    setIsEditMode(false)
    setEditIndex(null)
  }

  const handleDelete = (index) => {
    const updated = [...courses]
    updated.splice(index, 1)
    setCourses(updated)
  }

  const handleEdit = (index) => {
    setFormCourse(courses[index])
    setEditIndex(index)
    setIsEditMode(true)
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Course Management</h1>
        <Button onClick={() => {
          setFormCourse({ id: "", title: "", department: "", instructor: "", credits: "", semester: "", status: "Active" })
          setIsEditMode(false)
          setEditIndex(null)
          setIsDialogOpen(true)
        }} className="flex items-center gap-1">
          <PlusCircle className="h-4 w-4" />
          <span>Add Course</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Courses</CardTitle>
          <CardDescription>Manage courses being offered in the system.</CardDescription>
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
                {courses.map((course, index) => (
                  <TableRow key={index}>
                    <TableCell>{course.id}</TableCell>
                    <TableCell>{course.title}</TableCell>
                    <TableCell>{course.department}</TableCell>
                    <TableCell>{course.instructor}</TableCell>
                    <TableCell>{course.credits}</TableCell>
                    <TableCell>{course.semester}</TableCell>
                    <TableCell><Badge>{course.status}</Badge></TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="flex items-center" onClick={() => handleEdit(index)}>
                            <Pencil className="mr-2 h-4 w-4" />
                            <span>Edit</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center text-destructive" onClick={() => handleDelete(index)}>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditMode ? "Edit Course" : "Add Course"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Course ID</Label>
                <Input value={formCourse.id} onChange={(e) => setFormCourse({ ...formCourse, id: e.target.value })} />
              </div>
              <div>
                <Label>Title</Label>
                <Input value={formCourse.title} onChange={(e) => setFormCourse({ ...formCourse, title: e.target.value })} />
              </div>
              <div>
                <Label>Department</Label>
                <Input value={formCourse.department} onChange={(e) => setFormCourse({ ...formCourse, department: e.target.value })} />
              </div>
              <div>
                <Label>Instructor</Label>
                <Input value={formCourse.instructor} onChange={(e) => setFormCourse({ ...formCourse, instructor: e.target.value })} />
              </div>
              <div>
                <Label>Credits</Label>
                <Input type="number" value={formCourse.credits} onChange={(e) => setFormCourse({ ...formCourse, credits: e.target.value })} />
              </div>
              <div>
                <Label>Semester</Label>
                <Input value={formCourse.semester} onChange={(e) => setFormCourse({ ...formCourse, semester: e.target.value })} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSave}>{isEditMode ? "Update" : "Save"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
