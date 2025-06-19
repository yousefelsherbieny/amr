import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Clock, Download, CheckCircle, X, AlertCircle, CalendarIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function AttendancePage() {
  // Sample student data for attendance
  const students = [
    { id: 1, name: "Alex Johnson", rollNo: "10A001", avatar: "/focused-student.png", attendance: 95 },
    { id: 2, name: "Samantha Lee", rollNo: "10A002", avatar: "/focused-student.png", attendance: 92 },
    { id: 3, name: "Michael Chen", rollNo: "10A003", avatar: "/focused-student.png", attendance: 88 },
    { id: 4, name: "Emily Rodriguez", rollNo: "10A004", avatar: "/focused-student.png", attendance: 97 },
    { id: 5, name: "David Kim", rollNo: "10A005", avatar: "/focused-student.png", attendance: 85 },
    { id: 6, name: "Sarah Wilson", rollNo: "10A006", avatar: "/focused-student.png", attendance: 90 },
    { id: 7, name: "James Brown", rollNo: "10A007", avatar: "/focused-student.png", attendance: 93 },
    { id: 8, name: "Olivia Martinez", rollNo: "10A008", avatar: "/focused-student.png", attendance: 89 },
  ]

  // Sample attendance data for the current month
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString("default", { month: "long" })
  const currentYear = currentDate.getFullYear()

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Attendance Management</h1>
          <p className="text-muted-foreground">Track and manage student attendance records</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="mark" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="mark">Mark Attendance</TabsTrigger>
          <TabsTrigger value="records">Attendance Records</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="mark" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <CardTitle>Mark Today's Attendance</CardTitle>
                  <CardDescription>
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="space-y-2">
                    <Label htmlFor="class">Class</Label>
                    <Select defaultValue="10a">
                      <SelectTrigger id="class" className="w-[180px]">
                        <SelectValue placeholder="Select a class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10a">Class 10-A</SelectItem>
                        <SelectItem value="10b">Class 10-B</SelectItem>
                        <SelectItem value="11a">Class 11-A</SelectItem>
                        <SelectItem value="11b">Class 11-B</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select defaultValue="math">
                      <SelectTrigger id="subject" className="w-[180px]">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="math1">Math1</SelectItem>
                        <SelectItem value="DataBase">DataBase</SelectItem>
                        <SelectItem value="Data Structure">Data Structure</SelectItem>
                        <SelectItem value="Operating System">Operating System</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">Roll No.</TableHead>
                    <TableHead>Student Name</TableHead>
                    <TableHead className="w-[150px]">Overall Attendance</TableHead>
                    <TableHead className="text-center w-[120px]">Present</TableHead>
                    <TableHead className="text-center w-[120px]">Absent</TableHead>
                    <TableHead className="text-center w-[120px]">Late</TableHead>
                    <TableHead className="w-[150px]">Remarks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.rollNo}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{student.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={student.attendance} className="h-2" />
                          <span className="text-sm">{student.attendance}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 rounded-full bg-green-50 hover:bg-green-100 text-green-600"
                        >
                          <CheckCircle className="h-5 w-5" />
                          <span className="sr-only">Mark Present</span>
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 rounded-full bg-red-50 hover:bg-red-100 text-red-600"
                        >
                          <X className="h-5 w-5" />
                          <span className="sr-only">Mark Absent</span>
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-600"
                        >
                          <Clock className="h-5 w-5" />
                          <span className="sr-only">Mark Late</span>
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Input className="h-8" placeholder="Optional" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button>Submit Attendance</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="records" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <CardTitle>Attendance Records</CardTitle>
                  <CardDescription>
                    View and manage attendance records for {currentMonth} {currentYear}
                  </CardDescription>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="space-y-2">
                    <Label htmlFor="record-class">Class</Label>
                    <Select defaultValue="10a">
                      <SelectTrigger id="record-class" className="w-[180px]">
                        <SelectValue placeholder="Select a class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10a">Class 10-A</SelectItem>
                        <SelectItem value="10b">Class 10-B</SelectItem>
                        <SelectItem value="11a">Class 11-A</SelectItem>
                        <SelectItem value="11b">Class 11-B</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="record-month">Month</Label>
                    <Select defaultValue="current">
                      <SelectTrigger id="record-month" className="w-[180px]">
                        <SelectValue placeholder="Select month" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current">
                          {currentMonth} {currentYear}
                        </SelectItem>
                        <SelectItem value="prev">Previous Month</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8">
                <CalendarIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Calendar View Coming Soon</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  We're working on a calendar view for attendance records. In the meantime, you can use the reports tab
                  to view attendance statistics.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <CardTitle>Attendance Reports</CardTitle>
                  <CardDescription>View attendance statistics and reports</CardDescription>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="space-y-2">
                    <Label htmlFor="report-class">Class</Label>
                    <Select defaultValue="10a">
                      <SelectTrigger id="report-class" className="w-[180px]">
                        <SelectValue placeholder="Select a class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10a">Class 10-A</SelectItem>
                        <SelectItem value="10b">Class 10-B</SelectItem>
                        <SelectItem value="11a">Class 11-A</SelectItem>
                        <SelectItem value="11b">Class 11-B</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="report-period">Period</Label>
                    <Select defaultValue="month">
                      <SelectTrigger id="report-period" className="w-[180px]">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="month">This Month</SelectItem>
                        <SelectItem value="quarter">This Quarter</SelectItem>
                        <SelectItem value="semester">This Semester</SelectItem>
                        <SelectItem value="year">This Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">92%</div>
                      <p className="text-sm text-muted-foreground">Average Attendance</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-sm text-muted-foreground">Students Below 85%</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">98%</div>
                      <p className="text-sm text-muted-foreground">Highest Attendance</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead className="text-right">Attendance %</TableHead>
                    <TableHead className="text-right">Present Days</TableHead>
                    <TableHead className="text-right">Absent Days</TableHead>
                    <TableHead className="text-right">Late Days</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{student.name}</div>
                            <div className="text-xs text-muted-foreground">{student.rollNo}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-medium">{student.attendance}%</TableCell>
                      <TableCell className="text-right">{Math.round(student.attendance * 0.3)}</TableCell>
                      <TableCell className="text-right">{Math.round((100 - student.attendance) * 0.3)}</TableCell>
                      <TableCell className="text-right">{Math.round(student.attendance * 0.05)}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            student.attendance >= 90
                              ? "default"
                              : student.attendance >= 85
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {student.attendance >= 90
                            ? "Excellent"
                            : student.attendance >= 85
                              ? "Good"
                              : "Needs Improvement"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" className="mr-2">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button>
                <AlertCircle className="h-4 w-4 mr-2" />
                Flag Low Attendance
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
