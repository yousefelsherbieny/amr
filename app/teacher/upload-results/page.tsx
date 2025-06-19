"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileSpreadsheet, Download, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function UploadResultsPage() {
  // Sample student data for the grade entry form
  const students = [
    { id: 1, name: "Alex Johnson", rollNo: "10A001", attendance: "95%" },
    { id: 2, name: "Samantha Lee", rollNo: "10A002", attendance: "92%" },
    { id: 3, name: "Michael Chen", rollNo: "10A003", attendance: "88%" },
    { id: 4, name: "Emily Rodriguez", rollNo: "10A004", attendance: "97%" },
    { id: 5, name: "David Kim", rollNo: "10A005", attendance: "85%" },
  ]

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Upload Results</h1>
          <p className="text-muted-foreground">Upload and manage student grades and assessment results</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download Template
          </Button>
        </div>
      </div>

      <Tabs defaultValue="manual" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="manual">Manual Entry</TabsTrigger>
          <TabsTrigger value="upload">Bulk Upload</TabsTrigger>
          <TabsTrigger value="history">Upload History</TabsTrigger>
        </TabsList>

        <TabsContent value="manual" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Grade Entry Form</CardTitle>
              <CardDescription>Enter grades for students in your class</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="class">Class</Label>
                  <Select>
                    <SelectTrigger id="class">
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
                  <Select>
                    <SelectTrigger id="subject">
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
                <div className="space-y-2">
                  <Label htmlFor="assessment">Assessment Type</Label>
                  <Select>
                    <SelectTrigger id="assessment">
                      <SelectValue placeholder="Select assessment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="midterm">Midterm Exam</SelectItem>
                      <SelectItem value="final">Final Exam</SelectItem>
                      <SelectItem value="quiz">Quiz</SelectItem>
                      <SelectItem value="assignment">Assignment</SelectItem>
                      <SelectItem value="project">Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Roll No.</TableHead>
                    <TableHead>Student Name</TableHead>
                    <TableHead className="w-[100px]">Attendance</TableHead>
                    <TableHead className="w-[120px]">Marks Obtained</TableHead>
                    <TableHead className="w-[120px]">Out of</TableHead>
                    <TableHead className="w-[100px]">Grade</TableHead>
                    <TableHead className="w-[150px]">Comments</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.rollNo}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.attendance}</TableCell>
                      <TableCell>
                        <Input type="number" min="0" max="100" className="h-8" />
                      </TableCell>
                      <TableCell>
                        <Input type="number" defaultValue="100" className="h-8" />
                      </TableCell>
                      <TableCell>
                        <Select>
                          <SelectTrigger className="h-8">
                            <SelectValue placeholder="Grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="a">A</SelectItem>
                            <SelectItem value="b">B</SelectItem>
                            <SelectItem value="c">C</SelectItem>
                            <SelectItem value="d">D</SelectItem>
                            <SelectItem value="f">F</SelectItem>
                          </SelectContent>
                        </Select>
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
              <Button>Submit Grades</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="upload" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Bulk Upload Results</CardTitle>
              <CardDescription>Upload a spreadsheet with student grades</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  Please use the template file for uploading results. Make sure all required fields are filled
                  correctly.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="upload-class">Class</Label>
                  <Select>
                    <SelectTrigger id="upload-class">
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
                  <Label htmlFor="upload-subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="upload-subject">
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
                <div className="space-y-2">
                  <Label htmlFor="upload-assessment">Assessment Type</Label>
                  <Select>
                    <SelectTrigger id="upload-assessment">
                      <SelectValue placeholder="Select assessment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="midterm">Midterm Exam</SelectItem>
                      <SelectItem value="final">Final Exam</SelectItem>
                      <SelectItem value="quiz">Quiz</SelectItem>
                      <SelectItem value="assignment">Assignment</SelectItem>
                      <SelectItem value="project">Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Upload File</Label>
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-4">
                  <div className="bg-muted/50 p-4 rounded-full">
                    <FileSpreadsheet className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">Drag and drop your spreadsheet here or click to browse</p>
                    <p className="text-xs text-muted-foreground mt-1">Supports Excel (.xlsx, .xls) and CSV formats</p>
                  </div>
                  <Input type="file" className="hidden" id="result-file-upload" accept=".xlsx,.xls,.csv" />
                  <Button variant="outline" onClick={() => document.getElementById("result-file-upload")?.click()}>
                    Choose File
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Upload Results</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload History</CardTitle>
              <CardDescription>View and manage your previously uploaded results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="bg-muted p-2 rounded">
                      <FileSpreadsheet className="h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">
                          {item === 1
                            ? "Class 10-A Math1 Midterm Results"
                            : item === 2
                              ? "Class 11-B DataBase Quiz Results"
                              : "Class 10-B Data Structure Assignment Results"}
                        </h4>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            item === 1
                              ? "bg-green-100 text-green-800"
                              : item === 2
                                ? "bg-amber-100 text-amber-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {item === 1 ? "Approved" : item === 2 ? "Pending Approval" : "Draft"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item === 1
                          ? "Uploaded on May 15, 2025 • 25 students"
                          : item === 2
                            ? "Uploaded on June 2, 2025 • 30 students"
                            : "Uploaded on June 10, 2025 • 28 students"}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                        {item !== 1 && (
                          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                            Delete
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
