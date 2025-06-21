"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Upload, File } from "lucide-react"

export default function UploadNotesPage() {
  const [notes, setNotes] = useState([
    {
      title: "Chapter 5: Calculus Fundamentals",
      course: "Math1",
      description: "Uploaded on May 15, 2023 • 3 files • Visible to All Students",
    },
    {
      title: "Lab Report Guidelines",
      course: "Data Structure",
      description: "Uploaded on June 2, 2025 • 1 file • Visible to Data Structure 101",
    },
    {
      title: "Final Exam Review Materials",
      course: "Computer Science",
      description: "Uploaded on June 10, 2025 • 5 files • Visible to CS 101",
    },
  ])

  const [tabValue, setTabValue] = useState("upload")
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const [formTitle, setFormTitle] = useState("")
  const [formCourse, setFormCourse] = useState("")
  const [formDescription, setFormDescription] = useState("")

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Upload Notes</h1>
          <p className="text-muted-foreground">Upload and manage course materials for your students</p>
        </div>
      </div>

      <Tabs value={tabValue} onValueChange={setTabValue} className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="upload">Upload New</TabsTrigger>
          <TabsTrigger value="manage">Manage Existing</TabsTrigger>
          <TabsTrigger value="shared">Shared With Me</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>{editingIndex !== null ? "Edit Note" : "Upload Course Materials"}</CardTitle>
              <CardDescription>Upload notes, presentations, or other materials for your students</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" value={formTitle} onChange={(e) => setFormTitle(e.target.value)} placeholder="Enter a title for your notes" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Select value={formCourse} onValueChange={setFormCourse}>
                    <SelectTrigger id="course">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Math1">Math1 101</SelectItem>
                      <SelectItem value="DataBase">DataBase 202</SelectItem>
                      <SelectItem value="Data Structure">Data Structure 101</SelectItem>
                      <SelectItem value="Operating System">Operating System 303</SelectItem>
                      <SelectItem value="Computer Science">Computer Science 101</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Add a brief description of the content"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Upload Files</Label>
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-4">
                  <div className="bg-muted/50 p-4 rounded-full">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">Drag and drop files here or click to browse</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Supports PDF, DOCX, PPTX, and other document formats (Max 50MB)
                    </p>
                  </div>
                  <Input type="file" className="hidden" id="file-upload" multiple />
                  <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                    Choose Files
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="visibility">Visibility</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="visibility">
                    <SelectValue placeholder="Select visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Students</SelectItem>
                    <SelectItem value="specific">Specific Classes</SelectItem>
                    <SelectItem value="individual">Individual Students</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button
                onClick={() => {
                  if (formTitle && formCourse && formDescription) {
                    const newNote = {
                      title: formTitle,
                      course: formCourse,
                      description: `Uploaded on ${new Date().toLocaleDateString()} • 1 file • Visible to ${formCourse}`,
                    }

                    if (editingIndex !== null) {
                      const updated = [...notes]
                      updated[editingIndex] = newNote
                      setNotes(updated)
                      setEditingIndex(null)
                    } else {
                      setNotes([newNote, ...notes])
                    }

                    setFormTitle("")
                    setFormCourse("")
                    setFormDescription("")
                    setTabValue("manage")
                  }
                }}
              >
                {editingIndex !== null ? "Update Note" : "Upload Notes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="manage" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Manage Uploaded Materials</CardTitle>
              <CardDescription>View, edit, or delete your previously uploaded materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notes.map((note, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="bg-muted p-2 rounded">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{note.title}</h4>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {note.course}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{note.description}</p>
                      <div className="flex gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setFormTitle(note.title)
                            setFormCourse(note.course)
                            setFormDescription(note.description.includes("•") ? "" : note.description)
                            setEditingIndex(idx)
                            setTabValue("upload")
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => alert(`Preview:\n\nTitle: ${note.title}\nCourse: ${note.course}\n${note.description}`)}
                        >
                          Preview
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-500 hover:text-red-700"
                          onClick={() => {
                            if (confirm("Are you sure you want to delete this note?")) {
                              setNotes(notes.filter((_, i) => i !== idx))
                            }
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shared" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Shared Materials</CardTitle>
              <CardDescription>Materials shared with you by other teachers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2].map((item) => (
                  <div key={item} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="bg-muted p-2 rounded">
                      <File className="h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">
                          {item === 1 ? "Department Curriculum Guidelines" : "Computer vision Fair Project Ideas"}
                        </h4>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {item === 1 ? "Administrative" : "Computer vision Department"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item === 1
                          ? "Shared by Principal Johnson on April 10, 2025 • 2 files"
                          : "Shared by Dr. Smith on May 22, 2025 • 1 file"}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="outline" size="sm">Download</Button>
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
