"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Book,
  BookOpen,
  Calendar,
  Clock,
  Download,
  FileText,
  GraduationCap,
  Info,
  MapPin,
  MessageSquare,
  User,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Mock data for a single course
const courseData = {
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
  description:
    "An introductory course covering the basic principles of computer science and programming concepts. Topics include algorithm design, problem-solving techniques, data structures, and an introduction to programming languages. Students will learn fundamental programming concepts through hands-on exercises and projects.",
  image: "/abstract-computer-science.png",
  tags: ["Core", "Programming", "Theory"],
  nextDeadline: "2025-11-15",
  nextDeadlineTitle: "Assignment 6: Algorithms",
  syllabus: "https://example.com/syllabus.pdf",
  announcements: [
    {
      id: 1,
      date: "2025-10-25",
      title: "Midterm Exam Details",
      content:
        "The midterm exam will be held on November 5th. It will cover all material from weeks 1-6. Review sessions will be held on November 2nd and 3rd.",
    },
    {
      id: 2,
      date: "2025-10-18",
      title: "Assignment 5 Extended",
      content:
        "Due to the technical difficulties with the submission system, the deadline for Assignment 5 has been extended to October 22nd.",
    },
  ],
  modules: [
    {
      id: 1,
      title: "Introduction to Computing",
      status: "completed",
      materials: [
        { id: 101, title: "Course Overview", type: "pdf", size: "1.2 MB" },
        { id: 102, title: "History of Computing", type: "pdf", size: "2.5 MB" },
        { id: 103, title: "Introduction to Algorithms", type: "video", size: "45 min" },
      ],
    },
    {
      id: 2,
      title: "Programming Fundamentals",
      status: "completed",
      materials: [
        { id: 201, title: "Variables and Data Types", type: "pdf", size: "1.8 MB" },
        { id: 202, title: "Control Structures", type: "pdf", size: "2.1 MB" },
        { id: 203, title: "Functions and Procedures", type: "video", size: "50 min" },
        { id: 204, title: "Programming Lab 1", type: "code", size: "15 KB" },
      ],
    },
    {
      id: 3,
      title: "Data Structures",
      status: "in-progress",
      materials: [
        { id: 301, title: "Arrays and Lists", type: "pdf", size: "2.3 MB" },
        { id: 302, title: "Stacks and Queues", type: "pdf", size: "1.9 MB" },
        { id: 303, title: "Trees and Graphs", type: "video", size: "55 min" },
        { id: 304, title: "Programming Lab 2", type: "code", size: "20 KB" },
      ],
    },
    {
      id: 4,
      title: "Algorithm Analysis",
      status: "upcoming",
      materials: [
        { id: 401, title: "Time Complexity", type: "pdf", size: "1.7 MB" },
        { id: 402, title: "Space Complexity", type: "pdf", size: "1.5 MB" },
        { id: 403, title: "Big O Notation", type: "video", size: "40 min" },
      ],
    },
    {
      id: 5,
      title: "Advanced Topics",
      status: "upcoming",
      materials: [
        { id: 501, title: "Recursion", type: "pdf", size: "2.0 MB" },
        { id: 502, title: "Sorting Algorithms", type: "pdf", size: "2.2 MB" },
        { id: 503, title: "Final Project Guidelines", type: "pdf", size: "1.1 MB" },
      ],
    },
  ],
  assignments: [
    {
      id: 1,
      title: "Assignment 1: Computing Basics",
      dueDate: "2025-09-10",
      status: "completed",
      grade: "A",
      feedback: "Excellent work! Your explanations were clear and concise.",
    },
    {
      id: 2,
      title: "Assignment 2: Programming Exercises",
      dueDate: "2025-09-24",
      status: "completed",
      grade: "B+",
      feedback: "Good work, but there were some inefficiencies in your code.",
    },
    {
      id: 3,
      title: "Assignment 3: Data Structure Implementation",
      dueDate: "2025-10-08",
      status: "completed",
      grade: "A-",
      feedback: "Very good implementation. Minor issues with error handling.",
    },
    {
      id: 4,
      title: "Assignment 4: Algorithm Design",
      dueDate: "2025-10-22",
      status: "completed",
      grade: "B",
      feedback: "Your algorithm works but could be optimized further.",
    },
    {
      id: 5,
      title: "Assignment 5: Complexity Analysis",
      dueDate: "2025-11-05",
      status: "completed",
      grade: "B+",
      feedback: "Good analysis, but some edge cases were missed.",
    },
    {
      id: 6,
      title: "Assignment 6: Algorithms",
      dueDate: "2025-11-15",
      status: "in-progress",
      grade: null,
      feedback: null,
    },
    {
      id: 7,
      title: "Assignment 7: Final Project",
      dueDate: "2025-12-05",
      status: "upcoming",
      grade: null,
      feedback: null,
    },
  ],
  exams: [
    {
      id: 1,
      title: "Quiz 1",
      date: "2025-09-15",
      status: "completed",
      grade: "85%",
      topics: ["Computing History", "Algorithm Basics"],
    },
    {
      id: 2,
      title: "Midterm Exam",
      date: "2025-11-05",
      status: "upcoming",
      grade: null,
      topics: ["Programming Fundamentals", "Data Structures", "Algorithm Design"],
    },
    {
      id: 3,
      title: "Final Exam",
      date: "2025-12-15",
      status: "upcoming",
      grade: null,
      topics: ["All Course Material"],
    },
  ],
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const [activeModule, setActiveModule] = useState<number | null>(null)

  // Toggle module expansion
  const toggleModule = (moduleId: number) => {
    if (activeModule === moduleId) {
      setActiveModule(null)
    } else {
      setActiveModule(moduleId)
    }
  }

  // Get material icon based on type
  const getMaterialIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-4 w-4" />
      case "video":
        return <BookOpen className="h-4 w-4" />
      case "code":
        return <Book className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/student/courses">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">
          {courseData.code}: {courseData.name}
        </h1>
      </div>

      <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
        <img
          src={courseData.image || "/placeholder.svg"}
          alt={courseData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 md:p-6">
          <Badge className="mb-2">{courseData.department}</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-white">{courseData.name}</h2>
          <p className="text-white/90">
            {courseData.code} • {courseData.semester}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
              <TabsTrigger value="exams">Exams</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{courseData.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Download Syllabus
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Announcements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courseData.announcements.map((announcement) => (
                    <div key={announcement.id} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{announcement.title}</h3>
                        <Badge variant="outline">{new Date(announcement.date).toLocaleDateString()}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{announcement.content}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="materials" className="space-y-4">
              {courseData.modules.map((module) => (
                <Card key={module.id} className={activeModule === module.id ? "border-primary" : ""}>
                  <CardHeader className="cursor-pointer" onClick={() => toggleModule(module.id)}>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg flex items-center">
                        {module.status === "completed" && <Badge className="bg-green-600 mr-2">Completed</Badge>}
                        {module.status === "in-progress" && <Badge className="mr-2">In Progress</Badge>}
                        {module.status === "upcoming" && (
                          <Badge variant="outline" className="mr-2">
                            Upcoming
                          </Badge>
                        )}
                        {module.title}
                      </CardTitle>
                      <Button variant="ghost" size="sm">
                        {activeModule === module.id ? "Hide" : "Show"}
                      </Button>
                    </div>
                  </CardHeader>
                  {activeModule === module.id && (
                    <CardContent>
                      <div className="space-y-2">
                        {module.materials.map((material) => (
                          <div
                            key={material.id}
                            className="flex items-center justify-between p-2 rounded-md hover:bg-muted"
                          >
                            <div className="flex items-center">
                              {getMaterialIcon(material.type)}
                              <span className="ml-2">{material.title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {material.size}
                              </Badge>
                              <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="assignments" className="space-y-4">
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium">Assignment</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Due Date</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Grade</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {courseData.assignments.map((assignment) => (
                        <tr
                          key={assignment.id}
                          className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                        >
                          <td className="p-4 align-middle font-medium">{assignment.title}</td>
                          <td className="p-4 align-middle">{new Date(assignment.dueDate).toLocaleDateString()}</td>
                          <td className="p-4 align-middle">
                            <Badge
                              className={
                                assignment.status === "completed"
                                  ? "bg-green-600"
                                  : assignment.status === "in-progress"
                                    ? ""
                                    : ""
                              }
                              variant={assignment.status === "upcoming" ? "outline" : "default"}
                            >
                              {assignment.status === "completed"
                                ? "Completed"
                                : assignment.status === "in-progress"
                                  ? "In Progress"
                                  : "Upcoming"}
                            </Badge>
                          </td>
                          <td className="p-4 align-middle">
                            {assignment.grade ? (
                              <span className="font-medium">{assignment.grade}</span>
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </td>
                          <td className="p-4 align-middle">
                            <div className="flex gap-2">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <Download className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Download Assignment</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>

                              {assignment.feedback && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button variant="ghost" size="icon">
                                        <MessageSquare className="h-4 w-4" />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>{assignment.feedback}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="exams" className="space-y-4">
              {courseData.exams.map((exam) => (
                <Card key={exam.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{exam.title}</CardTitle>
                      <Badge
                        className={exam.status === "completed" ? "bg-green-600" : ""}
                        variant={exam.status === "completed" ? "default" : "outline"}
                      >
                        {exam.status === "completed" ? "Completed" : "Upcoming"}
                      </Badge>
                    </div>
                    <CardDescription>Date: {new Date(exam.date).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Topics:</p>
                      <div className="flex flex-wrap gap-2">
                        {exam.topics.map((topic, index) => (
                          <Badge key={index} variant="outline">
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      {exam.grade && (
                        <div className="mt-4 pt-4 border-t">
                          <p className="text-sm font-medium">
                            Grade: <span className="font-bold">{exam.grade}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    {exam.status === "upcoming" ? (
                      <Button variant="outline">
                        <Calendar className="mr-2 h-4 w-4" />
                        Add to Calendar
                      </Button>
                    ) : (
                      <Button variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        View Results
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>{courseData.progress}%</span>
                </div>
                <Progress value={courseData.progress} className="h-2" />
              </div>

              <div className="pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Book className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Materials</span>
                  </div>
                  <span className="text-sm font-medium">8/{courseData.materials}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Assignments</span>
                  </div>
                  <span className="text-sm font-medium">
                    {courseData.completedAssignments}/{courseData.assignments.length}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Current Grade</span>
                  </div>
                  <Badge>{courseData.grade}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Instructor: {courseData.instructor}</span>
              </div>

              <div className="flex items-center">
                <Book className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Department: {courseData.department}</span>
              </div>

              <div className="flex items-center">
                <Info className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Credits: {courseData.credits}</span>
              </div>

              <div className="flex items-start">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-sm">Schedule: {courseData.schedule}</span>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-sm">Location: {courseData.location}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Instructor
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-muted-foreground" />
                Upcoming Deadline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium">{courseData.nextDeadlineTitle}</p>
                <p className="text-sm text-muted-foreground">
                  Due: {new Date(courseData.nextDeadline).toLocaleDateString()}
                </p>
                <div className="mt-2">
                  <Link href="/student/assignments">
                    <Button size="sm">View Assignments</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
