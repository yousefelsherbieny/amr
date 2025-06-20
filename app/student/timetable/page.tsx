"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  User,
  FileText,
  Bell,
  Calendar,
  BookOpen,
  Clock,
  Menu,
  X,
  ChevronDown,
  Search,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Printer,
  FileCheck,
} from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"
import { Logo } from "@/components/logo"

export default function StudentTimetable() {
  const [currentWeek, setCurrentWeek] = useState("current")
  const [viewMode, setViewMode] = useState("week")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <StudentTimetableContent />
        </main>
  )
}

function StudentTimetableContent() {
  const [currentWeek, setCurrentWeek] = useState("current")
  const [viewMode, setViewMode] = useState("week")

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Class Timetable</h1>
          <p className="text-muted-foreground">View your weekly class schedule</p>
        </div>

        {/* Timetable Controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Card className="flex-1">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="w-full sm:w-auto flex-1">
                  <Label>View Mode</Label>
                  <Select value={viewMode} onValueChange={setViewMode}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select view mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Week View</SelectItem>
                      <SelectItem value="day">Day View</SelectItem>
                      <SelectItem value="list">List View</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full sm:w-auto flex-1">
                  <Label>Week</Label>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="shrink-0">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Select value={currentWeek} onValueChange={setCurrentWeek}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select week" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="previous">May 15 - May 19</SelectItem>
                        <SelectItem value="current">May 22 - May 26</SelectItem>
                        <SelectItem value="next">May 29 - June 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon" className="shrink-0">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button className="w-full sm:w-auto">
                  <Printer className="h-4 w-4 mr-2" />
                  Print Timetable
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timetable */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Class 10-A Timetable</CardTitle>
                <CardDescription>Week of May 22 - May 26, 2025</CardDescription>
              </div>
              <Badge variant="outline">Current Week</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="week" value={viewMode} onValueChange={setViewMode} className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:w-auto">
                <TabsTrigger value="week">Week View</TabsTrigger>
                <TabsTrigger value="day">Day View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
              <TabsContent value="week" className="mt-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border p-2 bg-muted/50 w-20">Time</th>
                        {weekdays.map((day) => (
                          <th key={day} className="border p-2 bg-muted/50">
                            {day}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {timeSlots.map((slot, index) => (
                        <tr key={index}>
                          <td className="border p-2 text-center text-sm font-medium">{slot}</td>
                          {weekdays.map((day) => {
                            const classInfo = timetableData.find((item) => item.day === day && item.time === slot)
                            return (
                              <td key={`${day}-${slot}`} className="border p-2">
                                {classInfo ? (
                                  <div className="p-2 rounded-md bg-primary/5 border border-primary/10">
                                    <div className="font-medium text-sm">{classInfo.subject}</div>
                                    <div className="text-xs text-muted-foreground mt-1">
                                      {classInfo.teacher} • {classInfo.room}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="h-full w-full flex items-center justify-center text-xs text-muted-foreground">
                                    No Class
                                  </div>
                                )}
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="day" className="mt-4">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm">
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Previous Day
                    </Button>
                    <Select defaultValue="monday">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select day" />
                      </SelectTrigger>
                      <SelectContent>
                        {weekdays.map((day) => (
                          <SelectItem key={day} value={day.toLowerCase()}>
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      Next Day
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {timeSlots.map((slot, index) => {
                      const classInfo = timetableData.find((item) => item.day === "Monday" && item.time === slot)
                      return (
                        <Card key={index}>
                          <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-20 text-center">
                              <div className="text-sm font-medium">{slot}</div>
                            </div>
                            {classInfo ? (
                              <div className="flex-1 p-3 rounded-md bg-primary/5 border border-primary/10">
                                <div className="font-medium">{classInfo.subject}</div>
                                <div className="text-sm text-muted-foreground mt-1">
                                  {classInfo.teacher} • {classInfo.room}
                                </div>
                              </div>
                            ) : (
                              <div className="flex-1 p-3 rounded-md border border-dashed flex items-center justify-center">
                                <span className="text-sm text-muted-foreground">No Class</span>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="list" className="mt-4">
                <div className="space-y-4">
                  {weekdays.map((day) => (
                    <Card key={day}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{day}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {timetableData
                            .filter((item) => item.day === day)
                            .sort((a, b) => {
                              const timeA = a.time.split(" - ")[0]
                              const timeB = b.time.split(" - ")[0]
                              return timeA.localeCompare(timeB)
                            })
                            .map((classInfo, index) => (
                              <div key={index} className="flex items-center gap-4 p-2 rounded-md hover:bg-muted/50">
                                <div className="w-24 text-sm">{classInfo.time}</div>
                                <div className="flex-1">
                                  <div className="font-medium">{classInfo.subject}</div>
                                  <div className="text-xs text-muted-foreground">
                                    {classInfo.teacher} • {classInfo.room}
                                  </div>
                                </div>
                              </div>
                            ))}
                          {timetableData.filter((item) => item.day === day).length === 0 && (
                            <div className="text-center py-4 text-muted-foreground">
                              No classes scheduled for this day
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="border-t">
            <div className="w-full flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="text-sm text-muted-foreground">
                <p>Class Teacher: Ms. Sarah Johnson</p>
                <p>Room: 101</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/5">
                  <div className="w-2 h-2 rounded-full bg-primary mr-1"></div> Regular Class
                </Badge>
                <Badge variant="outline" className="bg-green-500/5">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div> Lab Session
                </Badge>
                <Badge variant="outline" className="bg-amber-500/5">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-1"></div> Activity Period
                </Badge>
              </div>
            </div>
          </CardFooter>
        </Card>

        {/* Today's Classes */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Classes</CardTitle>
            <CardDescription>Your schedule for today, Monday, May 22, 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {timetableData
                .filter((item) => item.day === "Monday")
                .sort((a, b) => {
                  const timeA = a.time.split(" - ")[0]
                  const timeB = b.time.split(" - ")[0]
                  return timeA.localeCompare(timeB)
                })
                .map((classInfo, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-20 text-center">
                      <div className="text-sm font-medium">{classInfo.time.split(" - ")[0]}</div>
                      <div className="text-xs text-muted-foreground">to</div>
                      <div className="text-sm font-medium">{classInfo.time.split(" - ")[1]}</div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{classInfo.subject}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {classInfo.teacher} • {classInfo.room}
                      </div>
                      {classInfo.notes && <div className="mt-2 text-xs bg-muted p-2 rounded-md">{classInfo.notes}</div>}
                    </div>
                    <Badge
                      variant="outline"
                      className={cn(
                        "shrink-0",
                        classInfo.type === "lab"
                          ? "bg-green-500/5 text-green-700 dark:text-green-400"
                          : classInfo.type === "activity"
                            ? "bg-amber-500/5 text-amber-700 dark:text-amber-400"
                            : "bg-primary/5",
                      )}
                    >
                      {classInfo.type === "lab" ? "Lab" : classInfo.type === "activity" ? "Activity" : "Class"}
                    </Badge>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function SidebarNav() {
  const navItems = [
    { href: "/student/dashboard", label: "Dashboard", icon: FileText },
    { href: "/student/profile", label: "My Profile", icon: User },
    { href: "/student/results", label: "My Results", icon: FileCheck },
    { href: "/student/notices", label: "Notices", icon: Bell },
    { href: "/student/timetable", label: "Time Table", icon: Calendar },
    { href: "/student/syllabus", label: "Syllabus", icon: BookOpen },
    { href: "/student/leave", label: "Leave Application", icon: Clock },
  ]

  return (
    <nav className="space-y-1 px-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            item.href === "/student/timetable"
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-medium mb-1.5">{children}</div>
}

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
const timeSlots = [
  "08:00 - 08:45",
  "08:50 - 09:35",
  "09:40 - 10:25",
  "10:30 - 11:15",
  "11:20 - 12:05",
  "12:10 - 12:55",
  "13:00 - 13:45",
  "13:50 - 14:35",
]

interface TimetableEntry {
  day: string
  time: string
  subject: string
  teacher: string
  room: string
  type?: "regular" | "lab" | "activity"
  notes?: string
}

const timetableData: TimetableEntry[] = [
  {
    day: "Monday",
    time: "08:00 - 08:45",
    subject: "Math1",
    teacher: "Ms. Johnson",
    room: "Room 101",
    type: "regular",
  },
  {
    day: "Monday",
    time: "08:50 - 09:35",
    subject: "Math1",
    teacher: "Ms. Johnson",
    room: "Room 101",
    type: "regular",
  },
  {
    day: "Monday",
    time: "09:40 - 10:25",
    subject: "Computer vision",
    teacher: "Mr. Davis",
    room: "Lab 3",
    type: "lab",
    notes: "Bring your lab and project materials",
  },
  {
    day: "Monday",
    time: "10:30 - 11:15",
    subject: "Computer vision",
    teacher: "Mr. Davis",
    room: "Lab 3",
    type: "lab",
  },
  {
    day: "Monday",
    time: "11:20 - 12:05",
    subject: "Lunch Break",
    teacher: "",
    room: "Cafeteria",
    type: "activity",
  },
  {
    day: "Monday",
    time: "12:10 - 12:55",
    subject: "English",
    teacher: "Mrs. Wilson",
    room: "Room 105",
    type: "regular",
  },
  {
    day: "Monday",
    time: "13:00 - 13:45",
    subject: "Human rights",
    teacher: "Mr. Thompson",
    room: "Room 205",
    type: "regular",
  },
  {
    day: "Monday",
    time: "13:50 - 14:35",
    subject: "Logic Design",
    teacher: "Mr. Brown",
    room: "Lab 3",
    type: "activity",
  },
  {
    day: "Tuesday",
    time: "08:00 - 08:45",
    subject: "English",
    teacher: "Mrs. Wilson",
    room: "Room 105",
    type: "regular",
  },
  {
    day: "Tuesday",
    time: "08:50 - 09:35",
    subject: "English",
    teacher: "Mrs. Wilson",
    room: "Room 105",
    type: "regular",
  },
  {
    day: "Tuesday",
    time: "09:40 - 10:25",
    subject: "Computer Science",
    teacher: "Ms. Roberts",
    room: "Computer Lab",
    type: "lab",
  },
  {
    day: "Tuesday",
    time: "10:30 - 11:15",
    subject: "Computer Science",
    teacher: "Ms. Roberts",
    room: "Computer Lab",
    type: "lab",
  },
  {
    day: "Tuesday",
    time: "11:20 - 12:05",
    subject: "Lunch Break",
    teacher: "",
    room: "Cafeteria",
    type: "activity",
  },
  {
    day: "Tuesday",
    time: "12:10 - 12:55",
    subject: "Math1",
    teacher: "Ms. Johnson",
    room: "Room 101",
    type: "regular",
  },
  {
    day: "Tuesday",
    time: "13:00 - 13:45",
    subject: "Human rights",
    teacher: "Mr. Thompson",
    room: "Room 205",
    type: "regular",
  },
  {
    day: "Tuesday",
    time: "13:50 - 14:35",
    subject: "Probability And Statastics 1",
    teacher: "Ms. Garcia",
    room: "Room 101",
    type: "lab",
  },
  {
    day: "Wednesday",
    time: "08:00 - 08:45",
    subject: "Computer vision",
    teacher: "Mr. Davis",
    room: "Room 103",
    type: "regular",
  },
  {
    day: "Wednesday",
    time: "08:50 - 09:35",
    subject: "Computer vision",
    teacher: "Mr. Davis",
    room: "Room 103",
    type: "regular",
  },
  {
    day: "Wednesday",
    time: "09:40 - 10:25",
    subject: "Math1",
    teacher: "Ms. Johnson",
    room: "Room 101",
    type: "regular",
  },
  {
    day: "Wednesday",
    time: "10:30 - 11:15",
    subject: "Math1",
    teacher: "Ms. Johnson",
    room: "Room 101",
    type: "regular",
  },
  {
    day: "Wednesday",
    time: "11:20 - 12:05",
    subject: "Lunch Break",
    teacher: "",
    room: "Cafeteria",
    type: "activity",
  },
  {
    day: "Wednesday",
    time: "12:10 - 12:55",
    subject: "English",
    teacher: "Mrs. Wilson",
    room: "Room 105",
    type: "regular",
  },
  {
    day: "Wednesday",
    time: "13:00 - 13:45",
    subject: "Electronic",
    teacher: "Mr. Lee",
    room: "Electronic Room",
    type: "activity",
  },
  {
    day: "Wednesday",
    time: "13:50 - 14:35",
    subject: "Software Security Engineer",
    teacher: "Ms. Clark",
    room: "Room 102",
    type: "regular",
  },
  {
    day: "Thursday",
    time: "08:00 - 08:45",
    subject: "Human rights",
    teacher: "Mr. Thompson",
    room: "Room 205",
    type: "regular",
  },
  {
    day: "Thursday",
    time: "08:50 - 09:35",
    subject: "Human rights",
    teacher: "Mr. Thompson",
    room: "Room 205",
    type: "regular",
  },
  {
    day: "Thursday",
    time: "09:40 - 10:25",
    subject: "English",
    teacher: "Mrs. Wilson",
    room: "Room 105",
    type: "regular",
  },
  {
    day: "Thursday",
    time: "10:30 - 11:15",
    subject: "English",
    teacher: "Mrs. Wilson",
    room: "Room 105",
    type: "regular",
  },
  {
    day: "Thursday",
    time: "11:20 - 12:05",
    subject: "Lunch Break",
    teacher: "",
    room: "Cafeteria",
    type: "activity",
  },
  {
    day: "Thursday",
    time: "12:10 - 12:55",
    subject: "Computer vision",
    teacher: "Mr. Davis",
    room: "Lab 3",
    type: "lab",
  },
  {
    day: "Thursday",
    time: "13:00 - 13:45",
    subject: "Computer vision",
    teacher: "Mr. Davis",
    room: "Lab 3",
    type: "lab",
  },
  {
    day: "Thursday",
    time: "13:50 - 14:35",
    subject: "Logic Design",
    teacher: "Mr. Brown",
    room: "lab 3",
    type: "lab",
  },
  {
    day: "Friday",
    time: "08:00 - 08:45",
    subject: "Math1",
    teacher: "Ms. Johnson",
    room: "Room 101",
    type: "regular",
  },
  {
    day: "Friday",
    time: "08:50 - 09:35",
    subject: "Computer Science",
    teacher: "Ms. Roberts",
    room: "Computer Lab",
    type: "lab",
  },
  {
    day: "Friday",
    time: "09:40 - 10:25",
    subject: "Computer Science",
    teacher: "Ms. Roberts",
    room: "Computer Lab",
    type: "lab",
  },
  {
    day: "Friday",
    time: "10:30 - 11:15",
    subject: "Computer vision",
    teacher: "Mr. Davis",
    room: "Room 103",
    type: "regular",
  },
  {
    day: "Friday",
    time: "11:20 - 12:05",
    subject: "Lunch Break",
    teacher: "",
    room: "Cafeteria",
    type: "activity",
  },
  {
    day: "Friday",
    time: "12:10 - 12:55",
    subject: "Human rights",
    teacher: "Mr. Thompson",
    room: "Room 205",
    type: "regular",
  },
  {
    day: "Friday",
    time: "13:00 - 13:45",
    subject: "English",
    teacher: "Mrs. Wilson",
    room: "Room 105",
    type: "regular",
  },
  {
    day: "Friday",
    time: "13:50 - 14:35",
    subject: "Class Meeting",
    teacher: "Ms. Johnson",
    room: "Room 101",
    type: "activity",
  },
]
