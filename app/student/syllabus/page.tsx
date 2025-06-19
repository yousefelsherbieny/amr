"use client"

import { useState } from "react"
import { Book, CheckCircle, Download, Filter, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

export default function StudentSyllabus() {
  const [selectedSubject, setSelectedSubject] = useState("mathematics")
  const [selectedTerm, setSelectedTerm] = useState("all")

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Course Syllabus</h1>
          <p className="text-muted-foreground">View your academic curriculum and course materials</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Card className="flex-1">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="w-full sm:w-auto flex-1">
                  <Label>Subject</Label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Math1">Math1</SelectItem>
                      <SelectItem value="Computer-vision">Computer vision</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="Human-rights">Human rights</SelectItem>
                      <SelectItem value="computer-science">Computer Science</SelectItem>
                      <SelectItem value="Logic-Design">Logic Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full sm:w-auto flex-1">
                  <Label>Term</Label>
                  <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select term" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Terms</SelectItem>
                      <SelectItem value="term1">Term 1</SelectItem>
                      <SelectItem value="term2">Term 2</SelectItem>
                      <SelectItem value="term3">Summer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full sm:w-auto mt-4 sm:mt-6">
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Subjects List */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Subjects</CardTitle>
              <CardDescription>Your enrolled subjects for this academic year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {subjects.map((subject) => (
                  <div
                    key={subject.id}
                    className={cn(
                      "p-3 rounded-lg border cursor-pointer transition-colors",
                      selectedSubject === subject.id ? "bg-primary/10 border-primary/20" : "hover:bg-muted/50",
                    )}
                    onClick={() => setSelectedSubject(subject.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "rounded-md p-2",
                          subject.id === "Math1"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : subject.id === "Computer-vision"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : subject.id === "english"
                                ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                                : subject.id === "Human-rights"
                                  ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                                  : subject.id === "computer-science"
                                    ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400"
                                    : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                        )}
                      >
                        <subject.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{subject.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {subject.teacher} • {subject.code}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Completion</span>
                        <span>{subject.completion}%</span>
                      </div>
                      <Progress value={subject.completion} className="h-1.5" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Syllabus Content */}
          <Card className="md:col-span-2">
            <CardHeader className="border-b">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>
                    {subjects.find((s) => s.id === selectedSubject)?.name || "Math1"} Syllabus
                  </CardTitle>
                  <CardDescription className="mt-1">Course curriculum for academic year 2024-2025</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="overview" className="w-full">
                <div className="border-b">
                  <div className="px-4">
                    <TabsList className="mt-4 mb-4 w-full justify-start rounded-none border-b bg-transparent p-0">
                      <TabsTrigger
                        value="overview"
                        className="rounded-none border-b-2 border-b-transparent px-4 pb-3 pt-2 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                      >
                        Overview
                      </TabsTrigger>
                      <TabsTrigger
                        value="units"
                        className="rounded-none border-b-2 border-b-transparent px-4 pb-3 pt-2 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                      >
                        Units
                      </TabsTrigger>
                      <TabsTrigger
                        value="resources"
                        className="rounded-none border-b-2 border-b-transparent px-4 pb-3 pt-2 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                      >
                        Resources
                      </TabsTrigger>
                      <TabsTrigger
                        value="assessment"
                        className="rounded-none border-b-2 border-b-transparent px-4 pb-3 pt-2 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                      >
                        Assessment
                      </TabsTrigger>
                    </TabsList>
                  </div>
                </div>
                <TabsContent value="overview" className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Course Description</h3>
                      <p className="mt-2 text-muted-foreground">
                        This course covers the fundamental principles of mathematics required for Class 10 students. It
                        includes algebra, geometry, trigonometry, and statistics. The course is designed to develop
                        analytical thinking and problem-solving skills.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Learning Objectives</h3>
                      <ul className="mt-2 space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                          <span>Understand and apply algebraic concepts to solve real-world problems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                          <span>Develop geometric reasoning and understand properties of shapes and figures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                          <span>Apply trigonometric concepts to solve problems involving triangles and angles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                          <span>Collect, analyze, and interpret data using statistical methods and tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                          <span>
                            Develop problem-solving skills and logical reasoning through mathematical challenges
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                {/* Other tab contents would go here */}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

const subjects = [
  {
    id: "Math1",
    name: "math1",
    teacher: "Ms. Sarah Johnson",
    code: "MATH101",
    completion: 75,
    icon: Book,
  },
  {
    id: "Computer-vision",
    name: "computer vision",
    teacher: "Mr. Robert Williams",
    code: "SCI101",
    completion: 60,
    icon: Book,
  },
  {
    id: "english",
    name: "English",
    teacher: "Mrs. Emily Davis",
    code: "ENG101",
    completion: 80,
    icon: Book,
  },
  {
    id: "Human-rights",
    name: "Human rights",
    teacher: "Mr. Michael Brown",
    code: "HUM101",
    completion: 90,
    icon: Book,
  },
  {
    id: "computer-science",
    name: "Computer Science",
    teacher: "Mr. David Lee",
    code: "CS101",
    completion: 40,
    icon: Book,
  },
  {
    id: "logic-Design",
    name: "Logic Design",
    teacher: "Ms. Linda Green",
    code: "LO101",
    completion: 50,
    icon: Book,
  },
]

const units = [
  {
    title: "Algebraic Expressions",
    description: "Learn about algebraic expressions, including variables, constants, and operations.",
    duration: "2 weeks",
    lessons: 6,
    status: "completed",
    topics: [
      { name: "Introduction to Variables", completed: true },
      { name: "Simplifying Expressions", completed: true },
      { name: "Evaluating Expressions", completed: true },
    ],
  },
  {
    title: "Geometry Fundamentals",
    description: "Explore the basic concepts of geometry, including points, lines, angles, and shapes.",
    duration: "3 weeks",
    lessons: 8,
    status: "in-progress",
    topics: [
      { name: "Points, Lines, and Planes", completed: true },
      { name: "Angles and Their Measures", completed: true },
      { name: "Triangles and Quadrilaterals", completed: false },
    ],
  },
]
