import {
  PlusCircle,
  Filter,
  ChevronDown,
  FileText,
  Calendar,
  BookOpen,
  Pencil,
  CheckCircle,
  Users,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function AcademicPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Academic Management</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Academic Year
        </Button>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="academic-years">Academic Years</TabsTrigger>
          <TabsTrigger value="grading">Grading System</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Current Academic Year</CardTitle>
                  <Badge>Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2024-2025</div>
                <div className="mt-1 text-sm text-muted-foreground">Fall Semester in progress</div>

                <div className="mt-4 space-y-2">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>Academic Year Progress</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-4">
                    <div className="rounded-md border p-2 text-center text-sm">
                      <div className="font-medium">Fall Semester</div>
                      <div className="text-muted-foreground">Sep 5 - Dec 15</div>
                    </div>
                    <div className="rounded-md border p-2 text-center text-sm">
                      <div className="font-medium">Spring Semester</div>
                      <div className="text-muted-foreground">Jan 10 - May 20</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Academic Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-800">
                      <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-200" />
                    </div>
                    <div>
                      <div className="font-medium">Midterm Exams</div>
                      <div className="text-sm text-muted-foreground">Oct 15 - Oct 20, 2025</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 dark:bg-green-800">
                      <Calendar className="h-4 w-4 text-green-600 dark:text-green-200" />
                    </div>
                    <div>
                      <div className="font-medium">Fall Break</div>
                      <div className="text-sm text-muted-foreground">Nov 23 - Nov 26, 2025</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-orange-100 p-1 dark:bg-orange-800">
                      <Calendar className="h-4 w-4 text-orange-600 dark:text-orange-200" />
                    </div>
                    <div>
                      <div className="font-medium">Final Exams</div>
                      <div className="text-sm text-muted-foreground">Dec 10 - Dec 15, 2025</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-100 p-1 dark:bg-purple-800">
                      <Calendar className="h-4 w-4 text-purple-600 dark:text-purple-200" />
                    </div>
                    <div>
                      <div className="font-medium">Winter Break</div>
                      <div className="text-sm text-muted-foreground">Dec 16 - Jan 9, 2025</div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="mt-4 w-full">
                  View Full Calendar
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Academic Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-slate-100 p-1 dark:bg-slate-800">
                      <FileText className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                    </div>
                    <div>
                      <div className="font-medium">Attendance Policy</div>
                      <div className="text-sm text-muted-foreground">Last updated: Aug 15, 2025</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-slate-100 p-1 dark:bg-slate-800">
                      <FileText className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                    </div>
                    <div>
                      <div className="font-medium">Grading Guidelines</div>
                      <div className="text-sm text-muted-foreground">Last updated: Aug 20, 2025</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-slate-100 p-1 dark:bg-slate-800">
                      <FileText className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                    </div>
                    <div>
                      <div className="font-medium">Academic Integrity</div>
                      <div className="text-sm text-muted-foreground">Last updated: Jul 30, 2025</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-slate-100 p-1 dark:bg-slate-800">
                      <FileText className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                    </div>
                    <div>
                      <div className="font-medium">Course Registration</div>
                      <div className="text-sm text-muted-foreground">Last updated: Aug 1, 2025</div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="mt-4 w-full">
                  Manage Policies
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Academic Status Overview</CardTitle>
              <CardDescription>Key metrics and statistics for the current academic year.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border p-4">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Active Students</div>
                      <div className="text-2xl font-bold">1,248</div>
                    </div>
                    <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                      <Users className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border p-4">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Active Courses</div>
                      <div className="text-2xl font-bold">87</div>
                    </div>
                    <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                      <BookOpen className="h-5 w-5 text-green-600 dark:text-green-300" />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border p-4">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Average GPA</div>
                      <div className="text-2xl font-bold">3.42</div>
                    </div>
                    <div className="rounded-full bg-amber-100 p-2 dark:bg-amber-900">
                      <Pencil className="h-5 w-5 text-amber-600 dark:text-amber-300" />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border p-4">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Graduation Rate</div>
                      <div className="text-2xl font-bold">94.2%</div>
                    </div>
                    <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border p-6">
                <div className="text-lg font-medium">Academic Performance Metrics</div>
                <div className="h-[200px] w-full bg-muted mt-4 flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-medium">Performance visualization</div>
                    <div className="text-sm text-muted-foreground">Charts and graphs would appear here</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic-years" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Academic Years</CardTitle>
                  <CardDescription>Configure academic years, semesters, and important dates.</CardDescription>
                </div>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Year
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b transition-colors hover:bg-muted/50">
                      <th className="h-12 px-4 text-left align-middle font-medium">Academic Year</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Start Date</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">End Date</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Semesters</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                      <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle font-medium">2024-2025</td>
                      <td className="p-4 align-middle">Sep 5, 2024</td>
                      <td className="p-4 align-middle">May 20, 2025</td>
                      <td className="p-4 align-middle">Fall, Spring</td>
                      <td className="p-4 align-middle">
                        <Badge variant="default">Active</Badge>
                      </td>
                      <td className="p-4 align-middle text-right">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle font-medium">2023-2022</td>
                      <td className="p-4 align-middle">Sep 3, 2023</td>
                      <td className="p-4 align-middle">May 18, 2022</td>
                      <td className="p-4 align-middle">Fall, Spring</td>
                      <td className="p-4 align-middle">
                        <Badge variant="secondary">Upcoming</Badge>
                      </td>
                      <td className="p-4 align-middle text-right">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle font-medium">2022-2021</td>
                      <td className="p-4 align-middle">Sep 6, 2022</td>
                      <td className="p-4 align-middle">May 22, 2021</td>
                      <td className="p-4 align-middle">Fall, Spring</td>
                      <td className="p-4 align-middle">
                        <Badge variant="outline">Completed</Badge>
                      </td>
                      <td className="p-4 align-middle text-right">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grading" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Grading System</CardTitle>
              <CardDescription>Configure grading scales, policies, and grade calculation methods.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium">Grade Scale</h3>
                  <div className="mt-4 relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead>
                        <tr className="border-b transition-colors hover:bg-muted/50">
                          <th className="h-12 px-4 text-left align-middle font-medium">Letter Grade</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Percentage Range</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">GPA Value</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b transition-colors hover:bg-muted/50">
                          <td className="p-4 align-middle font-medium">A</td>
                          <td className="p-4 align-middle">90-100%</td>
                          <td className="p-4 align-middle">4.0</td>
                          <td className="p-4 align-middle">Excellent</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50">
                          <td className="p-4 align-middle font-medium">B</td>
                          <td className="p-4 align-middle">80-89%</td>
                          <td className="p-4 align-middle">3.0</td>
                          <td className="p-4 align-middle">Good</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50">
                          <td className="p-4 align-middle font-medium">C</td>
                          <td className="p-4 align-middle">70-79%</td>
                          <td className="p-4 align-middle">2.0</td>
                          <td className="p-4 align-middle">Satisfactory</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50">
                          <td className="p-4 align-middle font-medium">D</td>
                          <td className="p-4 align-middle">60-69%</td>
                          <td className="p-4 align-middle">1.0</td>
                          <td className="p-4 align-middle">Poor</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50">
                          <td className="p-4 align-middle font-medium">F</td>
                          <td className="p-4 align-middle">0-59%</td>
                          <td className="p-4 align-middle">0.0</td>
                          <td className="p-4 align-middle">Failing</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4">
                    Edit Grade Scale
                  </Button>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Grade Calculation</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Define how final grades are calculated for different types of courses.
                  </p>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <div className="font-medium">Standard Courses</div>
                      <div className="mt-2 space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Assignments</span>
                          <span>30%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Quizzes</span>
                          <span>15%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Midterm Exam</span>
                          <span>25%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Final Exam</span>
                          <span>30%</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        Edit
                      </Button>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="font-medium">Lab Courses</div>
                      <div className="mt-2 space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Lab Reports</span>
                          <span>40%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Practical Exams</span>
                          <span>30%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Attendance</span>
                          <span>10%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Final Project</span>
                          <span>20%</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="curriculum" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Curriculum Management</CardTitle>
                  <CardDescription>Manage curriculum, program requirements, and course sequences.</CardDescription>
                </div>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Program
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search programs..." className="w-[300px] pl-8" />
                  </div>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </div>

                <div className="rounded-lg border">
                  <div className="flex items-center justify-between border-b p-4">
                    <div>
                      <div className="text-lg font-medium">Computer Science</div>
                      <div className="text-sm text-muted-foreground">Bachelor of Science</div>
                    </div>
                    <Button variant="outline">Manage</Button>
                  </div>
                  <div className="p-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <div className="mb-2 font-medium">Program Overview</div>
                        <div className="text-sm text-muted-foreground">
                          A four-year program focusing on computer science principles, software development, algorithms,
                          and data structures.
                        </div>
                        <div className="mt-4 flex items-center gap-4">
                          <div className="text-sm">
                            <div className="font-medium">Total Credits</div>
                            <div>120</div>
                          </div>
                          <div className="text-sm">
                            <div className="font-medium">Duration</div>
                            <div>4 years</div>
                          </div>
                          <div className="text-sm">
                            <div className="font-medium">Courses</div>
                            <div>42</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 font-medium">Program Requirements</div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Core Courses</span>
                            <span>75 credits</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Electives</span>
                            <span>30 credits</span>
                          </div>
                          <div className="flex justify-between">
                            <span>General Education</span>
                            <span>15 credits</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border">
                  <div className="flex items-center justify-between border-b p-4">
                    <div>
                      <div className="text-lg font-medium">math1</div>
                      <div className="text-sm text-muted-foreground">Bachelor of Science</div>
                    </div>
                    <Button variant="outline">Manage</Button>
                  </div>
                  <div className="p-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <div className="mb-2 font-medium">Program Overview</div>
                        <div className="text-sm text-muted-foreground">
                          A comprehensive program covering various branches of mathematics, including analysis, algebra,
                          geometry, and statistics.
                        </div>
                        <div className="mt-4 flex items-center gap-4">
                          <div className="text-sm">
                            <div className="font-medium">Total Credits</div>
                            <div>120</div>
                          </div>
                          <div className="text-sm">
                            <div className="font-medium">Duration</div>
                            <div>4 years</div>
                          </div>
                          <div className="text-sm">
                            <div className="font-medium">Courses</div>
                            <div>40</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 font-medium">Program Requirements</div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Core Courses</span>
                            <span>80 credits</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Electives</span>
                            <span>25 credits</span>
                          </div>
                          <div className="flex justify-between">
                            <span>General Education</span>
                            <span>15 credits</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
