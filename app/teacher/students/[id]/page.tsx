"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, Clock, Calendar, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const mockStudents = [
 {
      id: 1,
      name: "Alex Johnson",
      grade: "10th Grade",
      avatar: "/focused-student.png",
      attendance: "95%",
      performance: "Excellent",
      lastActive: "Today",
      email: "alex.j@example.com",
      phone: "+1 (555) 123-4567",
      subjects: ["Math1", "DataBase", "English"],
    },
    {
      id: 2,
      name: "Samantha Lee",
      grade: "10th Grade",
      avatar: "/focused-student.png",
      attendance: "92%",
      performance: "Good",
      lastActive: "Yesterday",
      email: "samantha.l@example.com",
      phone: "+1 (555) 987-6543",
      subjects: ["Data Structure", "Operating System", "Human rights"],
    },
    {
      id: 3,
      name: "Michael Chen",
      grade: "10th Grade",
      avatar: "/focused-student.png",
      attendance: "88%",
      performance: "Average",
      lastActive: "2 days ago",
      email: "michael.c@example.com",
      phone: "+1 (555) 456-7890",
      subjects: ["Computer Science", "Math1", "DataBase"],
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      grade: "10th Grade",
      avatar: "/focused-student.png",
      attendance: "97%",
      performance: "Excellent",
      lastActive: "Today",
      email: "emily.r@example.com",
      phone: "+1 (555) 789-0123",
      subjects: ["English", "Human rights", "Electronic"],
    },
    {
      id: 5,
      name: "David Kim",
      grade: "10th Grade",
      avatar: "/focused-student.png",
      attendance: "85%",
      performance: "Needs Improvement",
      lastActive: "3 days ago",
      email: "david.k@example.com",
      phone: "+1 (555) 234-5678",
      subjects: ["Operating System", " Data Structure", "Logic Design"],
    },
]
export default function StudentProfile() {
  const params = useParams()
  const id = params.id?.toString()
  const [student, setStudent] = useState<any>(null)

  useEffect(() => {
    if (id) {
      const found = mockStudents.find((s) => s.id === parseInt(id))
      setStudent(found)
    }
  }, [id])

  if (!student) return <p className="p-4">Loading student info...</p>

  return (
    <div className="container mx-auto py-10 px-4">
        <CardHeader className="items-center text-center space-y-4">
          <Avatar className="h-20 w-20 mx-auto">
            <AvatarImage src={student.avatar} />
            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{student.name}</CardTitle>
            <CardDescription className="text-base text-muted-foreground">{student.grade}</CardDescription>
          </div>
          <Badge
            variant={
              student.performance === "Excellent"
                ? "default"
                : student.performance === "Good"
                ? "secondary"
                : student.performance === "Average"
                ? "outline"
                : "destructive"
            }
          >
            {student.performance}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-5 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>Attendance: {student.attendance}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Active: {student.lastActive}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{student.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{student.phone}</span>
          </div>
          <div className="flex items-start gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground mt-1" />
            <div>
              <p className="font-medium">Subjects:</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {student.subjects.map((sub: string) => (
                  <Badge key={sub} variant="outline" className="text-xs">
                    {sub}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
    </div>
  )
}
