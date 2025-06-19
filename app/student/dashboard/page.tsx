"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Eye, Download } from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Ahmed Hassan! Here's your academic overview.</p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AttendanceCard />
          <ExamResultCard />
          <UpcomingClassesCard />
        </div>

        {/* Notices and Study Materials */}
        <Tabs defaultValue="notices" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-auto">
            <TabsTrigger value="notices">Notices & Announcements</TabsTrigger>
            <TabsTrigger value="materials">Study Materials</TabsTrigger>
          </TabsList>
          <TabsContent value="notices" className="mt-4">
            <NoticesTable />
          </TabsContent>
          <TabsContent value="materials" className="mt-4">
            <StudyMaterials />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function AttendanceCard() {
  const attendancePercentage = 92

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Attendance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">{attendancePercentage}%</span>
          <Badge variant={attendancePercentage >= 90 ? "success" : "outline"}>
            {attendancePercentage >= 90 ? "Excellent" : "Good"}
          </Badge>
        </div>
        <Progress value={attendancePercentage} className="h-2" />
        <p className="text-xs text-muted-foreground">Present: 92 days | Absent: 8 days | Total: 100 days</p>
      </CardContent>
    </Card>
  )
}

function ExamResultCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Latest Exam Result</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">92%</span>
          <Badge variant="success">A+</Badge>
        </div>
        <div className="space-y-1">
          <div className="text-sm">Math1 Mid-Term</div>
          <div className="text-xs text-muted-foreground">May 15, 2025</div>
        </div>
        <div className="flex justify-between text-xs">
          <span>Class Average: 78%</span>
          <span className="text-green-600 dark:text-green-400">+14% above average</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href="/student/results">View All Results</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function UpcomingClassesCard() {
  const upcomingClasses = [
    { time: "09:00 AM", subject: "Math1", teacher: "Ms. Johnson", room: "Room 101" },
    { time: "10:30 AM", subject: "Computer vision", teacher: "Mr. Davis", room: "Lab 3" },
    { time: "01:00 PM", subject: "Human rights", teacher: "Mrs. Wilson", room: "Room 205" },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Upcoming Classes Today</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {upcomingClasses.map((cls, index) => (
            <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
              <div className="rounded-md bg-muted p-2 w-16 text-center">
                <div className="text-xs font-medium">{cls.time}</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium">{cls.subject}</div>
                <div className="text-xs text-muted-foreground">{cls.teacher}</div>
                <div className="text-xs text-muted-foreground">{cls.room}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href="/student/timetable">View Full Schedule</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function NoticesTable() {
  const notices = [
    {
      id: 1,
      title: "Annual Sports Day Announcement",
      date: "May 20, 2025",
      category: "Event",
      important: true,
    },
    {
      id: 2,
      title: "Final Exam Schedule Released",
      date: "May 18, 2025",
      category: "Academic",
      important: true,
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      date: "May 15, 2025",
      category: "Meeting",
      important: false,
    },
    {
      id: 4,
      title: "University Closed for Public Holiday",
      date: "May 10, 2025",
      category: "Holiday",
      important: false,
    },
    {
      id: 5,
      title: "Computer Science Fair Registration Open",
      date: "May 5, 2025",
      category: "Event",
      important: false,
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Notices & Announcements</CardTitle>
          <CardDescription>Stay updated with the latest university announcements</CardDescription>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/student/notices">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notices.map((notice) => (
              <TableRow key={notice.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {notice.important && <Badge variant="success" className="h-1.5 w-1.5 rounded-full p-0" />}
                    {notice.title}
                  </div>
                </TableCell>
                <TableCell>{notice.date}</TableCell>
                <TableCell>
                  <Badge variant="outline">{notice.category}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function StudyMaterials() {
  const materials = [
    {
      id: 1,
      title: "Math1 Syllabus 2025",
      type: "PDF",
      subject: "Math1",
      uploadedBy: "Ms. Johnson",
      date: "April 10, 2025",
      size: "1.2 MB",
    },
    {
      id: 2,
      title: "Computer vision Lab Manual",
      type: "PDF",
      subject: "Computer vision",
      uploadedBy: "Mr. Davis",
      date: "April 12, 2025",
      size: "3.5 MB",
    },
    {
      id: 3,
      title: "Human rights Lecture Notes",
      type: "DOCX",
      subject: "Human rights",
      uploadedBy: "Mrs. Wilson",
      date: "April 15, 2025",
      size: "850 KB",
    },
    {
      id: 4,
      title: "English Literature Reading List",
      type: "PDF",
      subject: "English",
      uploadedBy: "Mr. Thompson",
      date: "April 18, 2025",
      size: "420 KB",
    },
    {
      id: 5,
      title: "Computer Science Programming Guide",
      type: "PDF",
      subject: "Computer Science",
      uploadedBy: "Ms. Roberts",
      date: "April 20, 2025",
      size: "2.1 MB",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Study Materials</CardTitle>
          <CardDescription>Access your syllabus, notes, and study guides</CardDescription>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/student/syllabus">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {materials.map((material) => (
            <div
              key={material.id}
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">{material.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {material.subject} • Uploaded by {material.uploadedBy}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {material.date} • {material.size}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href="/student/syllabus">View All Materials</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
