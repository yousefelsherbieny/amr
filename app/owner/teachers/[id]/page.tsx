import { notFound } from "next/navigation"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Calendar, Users, BookOpen } from "lucide-react"
import { Progress } from "@/components/ui/progress"

// Simulated teacher data (يمكنك استبداله ب API أو قاعدة بيانات)

  const teacherData = [
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
export default function TeacherProfilePage({ params }: { params: { id: string } }) {
  const teacher = teacherData.find((t) => t.id === parseInt(params.id))

  if (!teacher) return notFound()

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader className="flex flex-col items-center text-center space-y-2">
          <Avatar className="h-20 w-20">
            <AvatarImage src={teacher.avatar} alt={teacher.name} />
            <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">{teacher.name}</CardTitle>
          <p className="text-muted-foreground text-sm">{teacher.subject}</p>
          <Badge variant="default">{teacher.performance}% Performance</Badge>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>Experience: {teacher.experience}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>Students: {teacher.students}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1">Performance Score</h4>
            <Progress value={teacher.performance} className="h-2" />
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1">Classes</h4>
            <div className="flex gap-2 flex-wrap">
              {teacher.classes.map((cls) => (
                <Badge key={cls} variant="outline">{cls}</Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Star className="h-4 w-4 text-amber-500" />
            <span className="font-medium">{teacher.rating}</span>
            <span className="text-muted-foreground">Student Rating</span>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              {teacher.name} is a highly dedicated Doctor known for their effective teaching in {teacher.subject}. Their
              students show consistent improvement and engagement.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
