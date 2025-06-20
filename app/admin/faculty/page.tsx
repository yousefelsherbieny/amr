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

export default function FacultyPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [facultyList, setFacultyList] = useState([
    {
      id: "F001",
      name: "Dr. Sarah Johnson",
      department: "AI",
      position: "Professor",
      email: "sarah.johnson@example.edu",
      phone: "(555) 123-4567",
      status: "Active",
    },
    {
      id: "F002",
      name: "Dr. James Wilson",
      department: "Computer Science",
      position: "Associate Professor",
      email: "james.wilson@example.edu",
      phone: "(555) 234-5678",
      status: "Active",
    },
    {
      id: "F003",
      name: "Prof. Emily Chen",
      department: "DataBase",
      position: "Assistant Professor",
      email: "emily.chen@example.edu",
      phone: "(555) 345-6789",
      status: "On Leave",
    },
    {
      id: "F004",
      name: "Dr. Michael Rodriguez",
      department: "Data Structure",
      position: "Professor",
      email: "michael.rodriguez@example.edu",
      phone: "(555) 456-7890",
      status: "Active",
    },
    {
      id: "F005",
      name: "Dr. Jessica Lee",
      department: "Embedded Systems",
      position: "Associate Professor",
      email: "jessica.lee@example.edu",
      phone: "(555) 567-8901",
      status: "Active",
    },
  ])

  const [newFaculty, setNewFaculty] = useState({
    id: "",
    name: "",
    department: "",
    position: "",
    email: "",
    phone: "",
    status: "Active",
  })

  const [editIndex, setEditIndex] = useState<number | null>(null)

  const handleAddFaculty = () => {
    if (editIndex !== null) {
      const updated = [...facultyList]
      updated[editIndex] = newFaculty
      setFacultyList(updated)
    } else {
      setFacultyList((prev) => [...prev, newFaculty])
    }
    setNewFaculty({ id: "", name: "", department: "", position: "", email: "", phone: "", status: "Active" })
    setIsDialogOpen(false)
    setEditIndex(null)
  }

  const handleEdit = (index: number) => {
    setNewFaculty(facultyList[index])
    setEditIndex(index)
    setIsDialogOpen(true)
  }

  const handleDelete = (index: number) => {
    const updated = [...facultyList]
    updated.splice(index, 1)
    setFacultyList(updated)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Faculty Management</h1>
        <Button onClick={() => { setNewFaculty({ id: "", name: "", department: "", position: "", email: "", phone: "", status: "Active" }); setEditIndex(null); setIsDialogOpen(true) }} className="flex items-center gap-1">
          <PlusCircle className="h-4 w-4" />
          <span>Add Faculty</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Faculty Members</CardTitle>
          <CardDescription>Manage and view all faculty members in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search faculty members..." className="w-full pl-8" />
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
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {facultyList.map((faculty, index) => (
                  <TableRow key={faculty.id}>
                    <TableCell className="font-medium">{faculty.id}</TableCell>
                    <TableCell>{faculty.name}</TableCell>
                    <TableCell>{faculty.department}</TableCell>
                    <TableCell>{faculty.position}</TableCell>
                    <TableCell>{faculty.email}</TableCell>
                    <TableCell>
                      <Badge variant={faculty.status === "Active" ? "default" : "secondary"}>{faculty.status}</Badge>
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
            <DialogTitle>{editIndex !== null ? "Edit Faculty" : "Add Faculty"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>ID</Label>
                <Input value={newFaculty.id} onChange={(e) => setNewFaculty({ ...newFaculty, id: e.target.value })} />
              </div>
              <div>
                <Label>Name</Label>
                <Input value={newFaculty.name} onChange={(e) => setNewFaculty({ ...newFaculty, name: e.target.value })} />
              </div>
              <div>
                <Label>Department</Label>
                <Input value={newFaculty.department} onChange={(e) => setNewFaculty({ ...newFaculty, department: e.target.value })} />
              </div>
              <div>
                <Label>Position</Label>
                <Input value={newFaculty.position} onChange={(e) => setNewFaculty({ ...newFaculty, position: e.target.value })} />
              </div>
              <div>
                <Label>Email</Label>
                <Input value={newFaculty.email} onChange={(e) => setNewFaculty({ ...newFaculty, email: e.target.value })} />
              </div>
              <div>
                <Label>Phone</Label>
                <Input value={newFaculty.phone} onChange={(e) => setNewFaculty({ ...newFaculty, phone: e.target.value })} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddFaculty}>{editIndex !== null ? "Update" : "Save"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
