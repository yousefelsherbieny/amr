"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Upload, File } from "lucide-react"

export default function UploadNotesPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Upload Notes</h1>
          <p className="text-muted-foreground">Upload and manage course materials for your students</p>
        </div>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="upload">Upload New</TabsTrigger>
          <TabsTrigger value="manage">Manage Existing</TabsTrigger>
          <TabsTrigger value="shared">Shared With Me</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Course Materials</CardTitle>
              <CardDescription>Upload notes, presentations, or other materials for your students</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter a title for your notes" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Select>
                    <SelectTrigger id="course">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="math101">Math1 101</SelectItem>
                      <SelectItem value="db202">DataBase 202</SelectItem>
                      <SelectItem value="ds101">Data Structure 101</SelectItem>
                      <SelectItem value="os303">Operating System 303</SelectItem>
                      <SelectItem value="cs101">Computer Science 101</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
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
              <Button>Upload Notes</Button>
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
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="bg-muted p-2 rounded">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">
                          {item === 1
                            ? "Chapter 5: Calculus Fundamentals"
                            : item === 2
                              ? "Lab Report Guidelines"
                              : "Final Exam Review Materials"}
                        </h4>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {item === 1 ? "Math1" : item === 2 ? "Data Structure" : "Computer Science"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item === 1
                          ? "Uploaded on May 15, 2023 • 3 files • Visible to All Students"
                          : item === 2
                            ? "Uploaded on June 2, 2025 • 1 file • Visible to Data Structure 101"
                            : "Uploaded on June 10, 2025 • 5 files • Visible to CS 101"}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Preview
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
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
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
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
