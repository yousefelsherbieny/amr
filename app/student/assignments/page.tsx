"use client"

import type React from "react"

import { useState, useRef } from "react"
import {
  FileText,
  Search,
  FileCheck,
  Upload,
  Paperclip,
  CheckCircle,
  AlertCircle,
  ClockIcon,
  Filter,
  SortAsc,
  SortDesc,
  Trash2,
  Eye,
  Download,
} from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Types for our assignments
interface Assignment {
  id: string
  title: string
  subject: string
  description: string
  dueDate: Date
  status: "pending" | "submitted" | "late" | "graded"
  submittedDate?: Date
  grade?: number
  feedback?: string
  attachments?: File[]
  submittedFiles?: {
    name: string
    size: string
    type: string
    uploadDate: Date
  }[]
}

// Initial assignments data
const initialAssignments: Assignment[] = [
  {
    id: "assign-1",
    title: "Math1 Problem Set 3",
    subject: "Math1",
    description: "Complete problems 1-20 from Chapter 5 on Trigonometric Functions.",
    dueDate: new Date(2025, 5, 15),
    status: "pending",
  },
  {
    id: "assign-2",
    title: "DataBase Lab Report",
    subject: "DataBase",
    description: "Write a lab report on the Sql Terminal.",
    dueDate: new Date(2025, 5, 10),
    status: "submitted",
    submittedDate: new Date(2025, 5, 9),
    submittedFiles: [
      {
        name: "DataBase_Lab_Report.pdf",
        size: "2.4 MB",
        type: "application/pdf",
        uploadDate: new Date(2025, 5, 9),
      },
    ],
  },
  {
    id: "assign-3",
    title: "English Essay",
    subject: "English",
    description: "Write a 1000-word essay on the theme of identity in the novel 'To Kill a Mockingbird'.",
    dueDate: new Date(2025, 5, 5),
    status: "graded",
    submittedDate: new Date(2025, 5, 4),
    grade: 92,
    feedback:
      "Excellent analysis of the theme. Your arguments are well-structured and supported by evidence from the text.",
    submittedFiles: [
      {
        name: "English_Essay_Identity.docx",
        size: "1.2 MB",
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        uploadDate: new Date(2025, 5, 4),
      },
    ],
  },
  {
    id: "assign-4",
    title: "Data Structure Worksheet",
    subject: "Data Structure",
    description: "Complete the worksheet on Linked List Type.",
    dueDate: new Date(2025, 4, 30),
    status: "late",
    submittedDate: new Date(2025, 5, 2),
    submittedFiles: [
      {
        name: "Data Structure_Worksheet.pdf",
        size: "1.8 MB",
        type: "application/pdf",
        uploadDate: new Date(2025, 5, 2),
      },
    ],
  },
  {
    id: "assign-5",
    title: "Human rights Research Paper",
    subject: "Human rights",
    description: "Research and write a 1500-word paper on the causes and effects of the Human rights .",
    dueDate: new Date(2025, 5, 20),
    status: "pending",
  },
]

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState<Assignment[]>(initialAssignments)
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null)
  const [filter, setFilter] = useState("all")
  const [sortBy, setSortBy] = useState("dueDate")
  const [sortOrder, setSortOrder] = useState("asc")
  const [searchQuery, setSearchQuery] = useState("")
  const [showSubmitDialog, setShowSubmitDialog] = useState(false)
  const [submissionFiles, setSubmissionFiles] = useState<File[]>([])
  const [submissionComment, setSubmissionComment] = useState("")
  const [submissionError, setSubmissionError] = useState("")
  const [submissionSuccess, setSubmissionSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Filter and sort assignments
  const filteredAssignments = assignments
    .filter((assignment) => {
      // Filter by status
      if (filter !== "all" && assignment.status !== filter) {
        return false
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          assignment.title.toLowerCase().includes(query) ||
          assignment.subject.toLowerCase().includes(query) ||
          assignment.description.toLowerCase().includes(query)
        )
      }

      return true
    })
    .sort((a, b) => {
      // Sort by selected field
      if (sortBy === "dueDate") {
        return sortOrder === "asc"
          ? a.dueDate.getTime() - b.dueDate.getTime()
          : b.dueDate.getTime() - a.dueDate.getTime()
      } else if (sortBy === "title") {
        return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      } else if (sortBy === "subject") {
        return sortOrder === "asc" ? a.subject.localeCompare(b.subject) : b.subject.localeCompare(a.subject)
      }
      return 0
    })

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setSubmissionFiles((prev) => [...prev, ...newFiles])
    }
  }

  // Remove a file from the submission
  const removeFile = (index: number) => {
    setSubmissionFiles((prev) => prev.filter((_, i) => i !== index))
  }

  // Handle assignment submission
  const handleSubmit = () => {
    // Validate submission
    if (submissionFiles.length === 0) {
      setSubmissionError("Please attach at least one file")
      return
    }

    // In a real app, you would upload the files to a server here
    // For now, we'll just update the assignment status
    if (selectedAssignment) {
      const updatedAssignments = assignments.map((assignment) => {
        if (assignment.id === selectedAssignment.id) {
          return {
            ...assignment,
            status: "submitted",
            submittedDate: new Date(),
            submittedFiles: submissionFiles.map((file) => ({
              name: file.name,
              size: formatFileSize(file.size),
              type: file.type,
              uploadDate: new Date(),
            })),
          }
        }
        return assignment
      })

      setAssignments(updatedAssignments)
      setSelectedAssignment(updatedAssignments.find((a) => a.id === selectedAssignment.id) || null)
      setSubmissionSuccess(true)

      // Reset form
      setTimeout(() => {
        setShowSubmitDialog(false)
        setSubmissionFiles([])
        setSubmissionComment("")
        setSubmissionError("")
        setSubmissionSuccess(false)
      }, 2000)
    }
  }

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
  }

  // Get status badge variant
  const getStatusBadge = (status: Assignment["status"]) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline">Pending</Badge>
      case "submitted":
        return <Badge className="bg-green-600">Submitted</Badge>
      case "late":
        return <Badge variant="destructive">Late</Badge>
      case "graded":
        return <Badge className="bg-blue-600">Graded</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  // Calculate days remaining or overdue
  const getDaysRemaining = (dueDate: Date) => {
    const today = new Date()
    const diffTime = dueDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays > 0) {
      return `${diffDays} day${diffDays !== 1 ? "s" : ""} remaining`
    } else if (diffDays < 0) {
      return `${Math.abs(diffDays)} day${Math.abs(diffDays) !== 1 ? "s" : ""} overdue`
    } else {
      return "Due today"
    }
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
        <p className="text-muted-foreground">Manage and submit your assignments</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search assignments..."
            className="w-full pl-8 bg-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Assignments</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="submitted">Submitted</SelectItem>
              <SelectItem value="late">Late</SelectItem>
              <SelectItem value="graded">Graded</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dueDate">Due Date</SelectItem>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="subject">Subject</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
              {sortOrder === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Assignments List */}
        <Card className="md:col-span-1 h-[calc(100vh-16rem)] flex flex-col">
          <CardHeader>
            <CardTitle>Assignment List</CardTitle>
            <CardDescription>
              {filteredAssignments.length} {filteredAssignments.length === 1 ? "assignment" : "assignments"} found
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <div className="space-y-2">
              {filteredAssignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className={cn(
                    "p-3 rounded-lg border cursor-pointer transition-colors",
                    selectedAssignment?.id === assignment.id ? "bg-primary/10 border-primary/20" : "hover:bg-muted/50",
                  )}
                  onClick={() => setSelectedAssignment(assignment)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-medium">{assignment.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {assignment.subject} • Due {format(assignment.dueDate, "MMM d, yyyy")}
                      </div>
                    </div>
                    <div>{getStatusBadge(assignment.status)}</div>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>
                        {assignment.status === "pending" && (
                          <span
                            className={cn(
                              "flex items-center",
                              assignment.dueDate < new Date() ? "text-red-500" : "text-muted-foreground",
                            )}
                          >
                            <ClockIcon className="h-3 w-3 mr-1" />
                            {getDaysRemaining(assignment.dueDate)}
                          </span>
                        )}
                        {assignment.status === "submitted" && (
                          <span className="flex items-center text-green-500">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Submitted on {format(assignment.submittedDate!, "MMM d, yyyy")}
                          </span>
                        )}
                        {assignment.status === "late" && (
                          <span className="flex items-center text-red-500">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Submitted {format(assignment.submittedDate!, "MMM d, yyyy")} (Late)
                          </span>
                        )}
                        {assignment.status === "graded" && (
                          <span className="flex items-center text-blue-500">
                            <FileCheck className="h-3 w-3 mr-1" />
                            Grade: {assignment.grade}%
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {filteredAssignments.length === 0 && (
                <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
                  <FileText className="h-8 w-8 mb-2" />
                  <p>No assignments found matching your criteria.</p>
                  <Button
                    variant="link"
                    onClick={() => {
                      setFilter("all")
                      setSearchQuery("")
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Assignment Detail */}
        <Card className="md:col-span-2 h-[calc(100vh-16rem)] flex flex-col">
          {selectedAssignment ? (
            <>
              <CardHeader className="border-b">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{selectedAssignment.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {selectedAssignment.subject} • Due {format(selectedAssignment.dueDate, "MMMM d, yyyy")}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {selectedAssignment.status === "pending" && (
                      <Dialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
                        <DialogTrigger asChild>
                          <Button className="bg-purple-600 hover:bg-purple-700">
                            <Upload className="h-4 w-4 mr-2" />
                            Submit Assignment
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Submit Assignment</DialogTitle>
                            <DialogDescription>
                              Upload your completed assignment files. Supported formats include PDF, DOCX, XLSX, and
                              images.
                            </DialogDescription>
                          </DialogHeader>

                          {submissionSuccess ? (
                            <div className="py-4">
                              <Alert className="bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                                <CheckCircle className="h-4 w-4" />
                                <AlertTitle>Success!</AlertTitle>
                                <AlertDescription>Your assignment has been submitted successfully.</AlertDescription>
                              </Alert>
                            </div>
                          ) : (
                            <>
                              <div className="space-y-4 py-4">
                                <div className="space-y-2">
                                  <Label htmlFor="files">Upload Files</Label>
                                  <div
                                    className="border-2 border-dashed rounded-md p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                                    onClick={() => fileInputRef.current?.click()}
                                  >
                                    <input
                                      ref={fileInputRef}
                                      type="file"
                                      id="files"
                                      className="hidden"
                                      multiple
                                      onChange={handleFileChange}
                                    />
                                    <Paperclip className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                                    <p className="text-sm font-medium">Click to upload or drag and drop</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                      PDF, DOCX, XLSX, JPG, PNG (Max 10MB)
                                    </p>
                                  </div>
                                </div>

                                {submissionFiles.length > 0 && (
                                  <div className="space-y-2">
                                    <Label>Selected Files</Label>
                                    <div className="space-y-2 max-h-40 overflow-auto">
                                      {submissionFiles.map((file, index) => (
                                        <div
                                          key={index}
                                          className="flex items-center justify-between p-2 rounded-md border"
                                        >
                                          <div className="flex items-center gap-2 overflow-hidden">
                                            <FileText className="h-4 w-4 shrink-0 text-primary" />
                                            <span className="text-sm truncate">{file.name}</span>
                                            <span className="text-xs text-muted-foreground">
                                              ({formatFileSize(file.size)})
                                            </span>
                                          </div>
                                          <Button variant="ghost" size="icon" onClick={() => removeFile(index)}>
                                            <Trash2 className="h-4 w-4 text-muted-foreground" />
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                <div className="space-y-2">
                                  <Label htmlFor="comment">Comment (Optional)</Label>
                                  <Textarea
                                    id="comment"
                                    placeholder="Add any comments about your submission..."
                                    value={submissionComment}
                                    onChange={(e) => setSubmissionComment(e.target.value)}
                                  />
                                </div>

                                {submissionError && (
                                  <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertTitle>Error</AlertTitle>
                                    <AlertDescription>{submissionError}</AlertDescription>
                                  </Alert>
                                )}
                              </div>

                              <DialogFooter>
                                <Button variant="outline" onClick={() => setShowSubmitDialog(false)}>
                                  Cancel
                                </Button>
                                <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700">
                                  Submit Assignment
                                </Button>
                              </DialogFooter>
                            </>
                          )}
                        </DialogContent>
                      </Dialog>
                    )}

                    {(selectedAssignment.status === "submitted" ||
                      selectedAssignment.status === "late" ||
                      selectedAssignment.status === "graded") && (
                      <Button variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        View Submission
                      </Button>
                    )}

                    {selectedAssignment.status === "graded" && (
                      <Button variant="outline">
                        <FileCheck className="h-4 w-4 mr-2" />
                        View Feedback
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto">
                <div className="space-y-6 py-2">
                  <div>
                    <h3 className="text-lg font-medium">Assignment Description</h3>
                    <p className="mt-2 text-muted-foreground">{selectedAssignment.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Status</h3>
                    <div className="mt-2 flex items-center gap-2">
                      {getStatusBadge(selectedAssignment.status)}
                      <span className="text-sm text-muted-foreground">
                        {selectedAssignment.status === "pending" && (
                          <span className={cn(selectedAssignment.dueDate < new Date() ? "text-red-500" : "")}>
                            {getDaysRemaining(selectedAssignment.dueDate)}
                          </span>
                        )}
                        {selectedAssignment.status === "submitted" && (
                          <span>Submitted on {format(selectedAssignment.submittedDate!, "MMMM d, yyyy")}</span>
                        )}
                        {selectedAssignment.status === "late" && (
                          <span>Submitted late on {format(selectedAssignment.submittedDate!, "MMMM d, yyyy")}</span>
                        )}
                        {selectedAssignment.status === "graded" && <span>Graded: {selectedAssignment.grade}%</span>}
                      </span>
                    </div>
                  </div>

                  {(selectedAssignment.status === "submitted" ||
                    selectedAssignment.status === "late" ||
                    selectedAssignment.status === "graded") &&
                    selectedAssignment.submittedFiles && (
                      <div>
                        <h3 className="text-lg font-medium">Submitted Files</h3>
                        <div className="mt-2 space-y-2">
                          {selectedAssignment.submittedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <div className="rounded-md bg-primary/10 p-2">
                                  <FileText className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                  <div className="font-medium">{file.name}</div>
                                  <div className="text-xs text-muted-foreground mt-1">
                                    {file.size} • Uploaded on {format(file.uploadDate, "MMMM d, yyyy")}
                                  </div>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {selectedAssignment.status === "graded" && selectedAssignment.feedback && (
                    <div>
                      <h3 className="text-lg font-medium">Feedback</h3>
                      <div className="mt-2 p-4 rounded-lg border bg-muted/50">
                        <p className="text-sm">{selectedAssignment.feedback}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <FileText className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No Assignment Selected</h3>
              <p className="text-muted-foreground mb-6">Select an assignment from the list to view its details here.</p>
              {filteredAssignments.length > 0 && (
                <Button onClick={() => setSelectedAssignment(filteredAssignments[0])} variant="outline">
                  View Latest Assignment
                </Button>
              )}
            </div>
          )}
        </Card>
      </div>

      {/* Assignment Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Assignment Statistics</CardTitle>
          <CardDescription>Your assignment completion and performance overview</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg border">
              <div className="text-sm font-medium text-muted-foreground">Total Assignments</div>
              <div className="text-3xl font-bold mt-2">{assignments.length}</div>
            </div>
            <div className="p-4 rounded-lg border">
              <div className="text-sm font-medium text-muted-foreground">Completed</div>
              <div className="text-3xl font-bold mt-2">
                {
                  assignments.filter((a) => a.status === "submitted" || a.status === "late" || a.status === "graded")
                    .length
                }
              </div>
            </div>
            <div className="p-4 rounded-lg border">
              <div className="text-sm font-medium text-muted-foreground">Pending</div>
              <div className="text-3xl font-bold mt-2 text-amber-500">
                {assignments.filter((a) => a.status === "pending").length}
              </div>
            </div>
            <div className="p-4 rounded-lg border">
              <div className="text-sm font-medium text-muted-foreground">Average Grade</div>
              <div className="text-3xl font-bold mt-2 text-green-600">
                {assignments.filter((a) => a.status === "graded").length > 0
                  ? (
                      assignments.filter((a) => a.status === "graded").reduce((sum, a) => sum + (a.grade || 0), 0) /
                      assignments.filter((a) => a.status === "graded").length
                    ).toFixed(1) + "%"
                  : "N/A"}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4">Upcoming Deadlines</h3>
            <div className="space-y-2">
              {assignments
                .filter((a) => a.status === "pending")
                .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime())
                .slice(0, 3)
                .map((assignment) => (
                  <div
                    key={assignment.id}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => setSelectedAssignment(assignment)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "rounded-full w-2 h-2",
                          assignment.dueDate < new Date()
                            ? "bg-red-500"
                            : (assignment.dueDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24) < 3
                              ? "bg-amber-500"
                              : "bg-green-500",
                        )}
                      />
                      <div>
                        <div className="font-medium">{assignment.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {assignment.subject} • Due {format(assignment.dueDate, "MMMM d, yyyy")}
                        </div>
                      </div>
                    </div>
                    <Badge variant={assignment.dueDate < new Date() ? "destructive" : "outline"}>
                      {getDaysRemaining(assignment.dueDate)}
                    </Badge>
                  </div>
                ))}

              {assignments.filter((a) => a.status === "pending").length === 0 && (
                <div className="text-center py-4 text-muted-foreground">
                  No upcoming deadlines. All assignments completed!
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
