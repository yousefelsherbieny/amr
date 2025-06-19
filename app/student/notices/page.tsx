"use client"

import type React from "react"

import { useState } from "react"
import { AlertCircle, Download, Eye, Filter, Info, MessageSquare, Pin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export default function StudentNotices() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null)

  // Filter notices based on category and search query
  const filteredNotices = notices.filter((notice) => {
    const matchesCategory = selectedCategory === "all" || notice.category === selectedCategory
    const matchesSearch =
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.content.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Notices & Announcements</h1>
          <p className="text-muted-foreground">Stay updated with the latest school announcements</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Card className="flex-1">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="w-full sm:w-auto flex-1">
                  <Label>Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Academic">Academic</SelectItem>
                      <SelectItem value="Event">Event</SelectItem>
                      <SelectItem value="Holiday">Holiday</SelectItem>
                      <SelectItem value="Meeting">Meeting</SelectItem>
                      <SelectItem value="Exam">Exam</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full sm:w-auto flex-1 md:hidden">
                  <Label>Search</Label>
                  <Input
                    type="search"
                    placeholder="Search notices..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
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
          {/* Notices List */}
          <Card className="md:col-span-1 h-[calc(100vh-16rem)] flex flex-col">
            <CardHeader>
              <CardTitle>All Notices</CardTitle>
              <CardDescription>
                {filteredNotices.length} {filteredNotices.length === 1 ? "notice" : "notices"} found
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto">
              <div className="space-y-2">
                {filteredNotices.map((notice) => (
                  <div
                    key={notice.id}
                    className={cn(
                      "p-3 rounded-lg border cursor-pointer transition-colors",
                      selectedNotice?.id === notice.id ? "bg-primary/10 border-primary/20" : "hover:bg-muted/50",
                    )}
                    onClick={() => setSelectedNotice(notice)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-2">
                        {notice.important && <Pin className="h-4 w-4 text-red-500 shrink-0 mt-1" />}
                        <div>
                          <div className="font-medium">{notice.title}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {notice.date} • {notice.category}
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant={
                          notice.status === "New" ? "success" : notice.status === "Updated" ? "outline" : "secondary"
                        }
                        className="ml-2 shrink-0"
                      >
                        {notice.status}
                      </Badge>
                    </div>
                  </div>
                ))}
                {filteredNotices.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
                    <AlertCircle className="h-8 w-8 mb-2" />
                    <p>No notices found matching your criteria.</p>
                    <Button
                      variant="link"
                      onClick={() => {
                        setSelectedCategory("all")
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

          {/* Notice Detail */}
          <Card className="md:col-span-2 h-[calc(100vh-16rem)] flex flex-col">
            {selectedNotice ? (
              <>
                <CardHeader className="border-b">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{selectedNotice.title}</CardTitle>
                      <CardDescription className="mt-1">
                        Published on {selectedNotice.date} • {selectedNotice.category}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Star className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-auto">
                  <div className="space-y-4 py-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/administrator-at-work.png" alt="Admin" />
                        <AvatarFallback>AD</AvatarFallback>
                      </Avatar>
                      <span>Posted by Admin User</span>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>{selectedNotice.content}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-sm text-muted-foreground">
                      {selectedNotice.important && (
                        <div className="flex items-center gap-1 text-red-500">
                          <AlertCircle className="h-4 w-4" />
                          <span>Important Notice</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Mark as Read
                      </Button>
                      <Button size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Acknowledge
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-6">
                <Info className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No Notice Selected</h3>
                <p className="text-muted-foreground mb-6">Select a notice from the list to view its details here.</p>
                {filteredNotices.length > 0 && (
                  <Button onClick={() => setSelectedNotice(filteredNotices[0])} variant="outline">
                    View Latest Notice
                  </Button>
                )}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-medium mb-1.5">{children}</div>
}

interface Attachment {
  name: string
  size: string
}

interface Notice {
  id: number
  title: string
  content: string
  date: string
  category: string
  status: "New" | "Updated" | "Read"
  important: boolean
  attachments?: Attachment[]
}

const notices: Notice[] = [
  {
    id: 1,
    title: "Annual Sports Day Announcement",
    content:
      "We are pleased to announce that the Annual Sports Day will be held on June 15, 2025, at the school grounds. All students are required to participate in at least one event. The registration for various sports events will begin next week. Parents are cordially invited to attend and encourage their children. More details about the schedule and events will be shared soon.",
    date: "May 20, 2025",
    category: "Event",
    status: "New",
    important: true,
    attachments: [
      { name: "Sports Day Schedule.pdf", size: "1.2 MB" },
      { name: "Registration Form.docx", size: "450 KB" },
    ],
  },
  {
    id: 2,
    title: "Final Exam Schedule Released",
    content:
      "The schedule for the final examinations for the academic year 2024-2025 has been released. The exams will commence on June 5, 2025, and conclude on June 20, 2025. Students are advised to prepare accordingly and ensure they have completed all their coursework. The detailed schedule is attached to this notice. For any queries regarding the exam schedule, please contact your class teacher.",
    date: "May 18, 2025",
    category: "Exam",
    status: "New",
    important: true,
    attachments: [
      { name: "Final Exam Schedule.pdf", size: "850 KB" },
      { name: "Exam Guidelines.pdf", size: "620 KB" },
    ],
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting",
    content:
      "A Parent-Teacher Meeting is scheduled for May 25, 2025, from 9:00 AM to 1:00 PM. Parents are requested to attend the meeting to discuss their child's academic progress and any concerns they may have. The meeting will be held in the respective classrooms. Please be punctual.",
    date: "May 15, 2025",
    category: "Meeting",
    status: "Read",
    important: false,
  },
]
