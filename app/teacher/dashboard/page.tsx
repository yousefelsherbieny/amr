"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreVertical, Users, Calendar, FileCheck, Upload, Clock } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"

export default function TeacherDashboard() {
  const { user } = useAuth()

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user?.name?.split(" ")[1] || "Ms. Johnson"}! Here's your teaching overview.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StatsCard
            title="Assigned Students"
            value="87"
            description="Across 4 classes"
            icon={<Users className="h-5 w-5 text-green-600" />}
          />
          <StatsCard
            title="Upcoming Exams"
            value="3"
            description="Next: Math Final (May 25)"
            icon={<Calendar className="h-5 w-5 text-green-600" />}
          />
          <StatsCard
            title="Pending Leave Requests"
            value="1"
            description="Medical leave (June 2-3)"
            icon={<Clock className="h-5 w-5 text-green-600" />}
          />
        </div>

        {/* Submitted assignments */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Assignment Submissions</CardTitle>
              <CardDescription>Showing the 6 most recent submissions</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Assignment</TableHead>
                  <TableHead>Submission Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submittedAssignments.map((assignment) => (
                  <TableRow key={assignment.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={assignment.avatar || "/placeholder.svg"} alt={assignment.student} />
                          <AvatarFallback>{assignment.student.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{assignment.student}</span>
                      </div>
                    </TableCell>
                    <TableCell>{assignment.title}</TableCell>
                    <TableCell>{assignment.date}</TableCell>
                    <TableCell>
                      <Badge variant={assignment.status === "Graded" ? "success" : "outline"}>
                        {assignment.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Submission</DropdownMenuItem>
                          <DropdownMenuItem>Download</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Grade Assignment</DropdownMenuItem>
                          <DropdownMenuItem>Send Feedback</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <QuickActionCard
            title="Upload Notes"
            description="Share study materials with your students"
            icon={<Upload className="h-5 w-5" />}
            href="/teacher/upload-notes"
          />
          <QuickActionCard
            title="Record Attendance"
            description="Mark today's attendance for your classes"
            icon={<Clock className="h-5 w-5" />}
            href="/teacher/attendance"
          />
          <QuickActionCard
            title="Upload Results"
            description="Enter grades for recent assessments"
            icon={<FileCheck className="h-5 w-5" />}
            href="/teacher/upload-results"
          />
          <QuickActionCard
            title="Request Leave"
            description="Submit a new leave application"
            icon={<Calendar className="h-5 w-5" />}
            href="/teacher/leave-requests"
          />
        </div>
      </div>
    </div>
  )
}

function StatsCard({ title, value, description, icon }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function QuickActionCard({ title, description, icon, href }) {
  return (
    <Card className="overflow-hidden">
      <Link href={href} className="block h-full">
        <div className="p-6 flex flex-col items-center text-center gap-2 transition-colors hover:bg-muted/50">
          <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
            {icon}
          </div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </Link>
    </Card>
  )
}

const submittedAssignments = [
  {
    id: 1,
    student: "Alex Johnson",
    title: "Math1 Calculus: Derivatives",
    date: "May 18, 2025",
    status: "Pending",
    avatar: "/placeholder.svg?key=alex",
  },
  {
    id: 2,
    student: "Emma Williams",
    title: "Computer vision: Image Processing",
    date: "May 17, 2025",
    status: "Graded",
    avatar: "/placeholder.svg?key=emma",
  },
  {
    id: 3,
    student: "Noah Brown",
    title: "Human rights: Global Perspectives",
    date: "May 16, 2025",
    status: "Pending",
    avatar: "/placeholder.svg?key=noah",
  },
  {
    id: 4,
    student: "Sophia Davis",
    title: "English: Literary Analysis",
    date: "May 15, 2025",
    status: "Graded",
    avatar: "/placeholder.svg?key=sophia",
  },
  {
    id: 5,
    student: "Liam Wilson",
    title: "Math1: Probability",
    date: "May 14, 2025",
    status: "Graded",
    avatar: "/placeholder.svg?key=liam",
  },
  {
    id: 6,
    student: "Olivia Martinez",
    title: "Computer vision: Neural Networks",
    date: "May 13, 2025",
    status: "Pending",
    avatar: "/placeholder.svg?key=olivia",
  },
]
