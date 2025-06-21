"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar, Users, BookOpen, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

  const teachers = [
    {
      id: 1,
      name: "Sarah Johnson",
      subject: "Math1",
      avatar: "/thoughtful-doctor.png",
      performance: 92,
      experience: "8 years",
      students: 120,
      classes: ["10-A", "11-B", "12-A"],
      rating: 4.8,
    },
    {
      id: 2,
      name: "Michael Brown",
      subject: "DataBase",
      avatar: "/thoughtful-doctor.png",
      performance: 88,
      experience: "6 years",
      students: 95,
      classes: ["10-B", "11-A"],
      rating: 4.5,
    },
    {
      id: 3,
      name: "Jennifer Davis",
      subject: "English Literature",
      avatar: "/thoughtful-doctor.png",
      performance: 95,
      experience: "10 years",
      students: 150,
      classes: ["9-A", "10-A", "11-A", "12-B"],
      rating: 4.9,
    },
    {
      id: 4,
      name: "Robert Wilson",
      subject: "Data Structure",
      avatar: "/thoughtful-doctor.png",
      performance: 85,
      experience: "4 years",
      students: 80,
      classes: ["10-B", "11-B"],
      rating: 4.2,
    },
    {
      id: 5,
      name: "Emily Martinez",
      subject: "Operating System",
      avatar: "/thoughtful-doctor.png",
      performance: 90,
      experience: "7 years",
      students: 110,
      classes: ["9-B", "10-A", "11-A"],
      rating: 4.7,
    },
    {
      id: 6,
      name: "David Thompson",
      subject: "Computer Science",
      avatar: "/thoughtful-doctor.png",
      performance: 93,
      experience: "5 years",
      students: 85,
      classes: ["11-A", "12-A"],
      rating: 4.6,
    },
  ]

export default function PerformanceDetailsPage() {
  const params = useParams()
  const id = parseInt(params.id as string)
  const teacher = teachers.find((t) => t.id === id)

  if (!teacher) return <p className="p-4">Teacher not found.</p>

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={teacher.avatar} alt={teacher.name} />
            <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{teacher.name}</CardTitle>
            <p className="text-muted-foreground">{teacher.subject}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Experience: {teacher.experience}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Students: {teacher.students}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-500" />
              <span>Rating: {teacher.rating}</span>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <p className="font-medium">Overall Performance</p>
              <Progress value={teacher.performance} className="h-2" />
            </div>

            <div>
              <p className="text-sm font-medium">Teaching Quality</p>
              <Progress value={teacher.performance * 0.95} className="h-2" />
            </div>

            <div>
              <p className="text-sm font-medium">Student Engagement</p>
              <Progress value={teacher.performance * 0.9} className="h-2" />
            </div>

            <div>
              <p className="text-sm font-medium">Communication</p>
              <Progress value={teacher.performance * 0.93} className="h-2" />
            </div>

            <div>
              <p className="text-sm font-medium">Subject Knowledge</p>
              <Progress value={teacher.performance * 0.98} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
