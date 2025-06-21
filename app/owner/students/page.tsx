"use client";

import { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

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
];


export default function StudentsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: "",
    grade: "",
    section: "",
    rollNo: "",
    performance: "",
    contact: "",
    phone: "",
    address: "",
  });
  const [studentList, setStudentList] = useState(students);

  const openEditModal = (student) => {
    setNewStudent({
      name: student.name,
      grade: student.grade,
      section: student.section,
      rollNo: student.rollNo,
      performance: student.performance,
      contact: student.contact,
      phone: student.phone,
      address: student.address,
    });
    setSelectedStudentId(student.id);
    setIsEditing(true);
    setIsOpen(true);
  };

  const saveStudent = () => {
    const newEntry = {
      id: `STU${Math.floor(Math.random() * 10000)}`,
      ...newStudent,
      gender: "Not set",
      attendance: "0%",
      status: "active",
      joinDate: new Date().toISOString().split("T")[0],
      parentName: "Not set",
      fees: { status: "pending", lastPayment: "-" },
    };
    setStudentList([...studentList, newEntry]);
    setIsOpen(false);
    resetForm();
  };

  const updateStudent = () => {
    const updatedList = studentList.map((s) =>
      s.id === selectedStudentId ? { ...s, ...newStudent } : s
    );
    setStudentList(updatedList);
    setIsOpen(false);
    setIsEditing(false);
    resetForm();
  };

  const resetForm = () => {
    setNewStudent({
      name: "",
      grade: "",
      section: "",
      rollNo: "",
      performance: "",
      contact: "",
      phone: "",
      address: "",
    });
    setSelectedStudentId(null);
  };

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
          <Button onClick={() => { setIsEditing(false); setIsOpen(true); }}>
            <Plus className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studentList.map((student) => (
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
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => openEditModal(student)}>Edit Details</DropdownMenuItem>

                        <DropdownMenuItem onClick={() => {
                          const updated = studentList.map((s) =>
                            s.id === student.id ? { ...s, status: "inactive" } : s
                          );
                          setStudentList(updated);
                        }}>Deactivate</DropdownMenuItem>

                        <DropdownMenuItem onClick={() => {
                          const updated = studentList.map((s) =>
                            s.id === student.id
                              ? { ...s, status: s.status === "active" ? "inactive" : "active" }
                              : s
                          );
                          setStudentList(updated);
                        }}>{student.status === "active" ? "Mark Inactive" : "Mark Active"}</DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem className="text-red-600" onClick={() => {
                          if (confirm(`Are you sure you want to delete ${student.name}?`)) {
                            const updated = studentList.filter((s) => s.id !== student.id);
                            setStudentList(updated);
                          }
                        }}>Delete</DropdownMenuItem>
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
                  <Badge variant={student.status === "active" ? "default" : "secondary"}>
                    {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                  </Badge>
                  <Badge variant={
                    student.fees?.status === "paid" ? "default" :
                    student.fees?.status === "pending" ? "outline" : "destructive"
                  }>
                    Fees: {student.fees?.status?.charAt(0).toUpperCase() + student.fees?.status?.slice(1)}
                  </Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Modal for Add/Edit */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Student" : "Add New Student"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            {["name", "grade", "section", "rollNo", "performance", "contact", "phone", "address"].map((field) => (
              <div key={field}>
                <Label className="capitalize">{field}</Label>
                <Input
                  value={newStudent[field]}
                  onChange={(e) => setNewStudent({ ...newStudent, [field]: e.target.value })}
                />
              </div>
            ))}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button onClick={isEditing ? updateStudent : saveStudent}>
              {isEditing ? "Update" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}