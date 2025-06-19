import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, Calendar, BookOpen, Users, TrendingUp, Star } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TeachersPage() {
  // Sample teacher data
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

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Doctor Performance</h1>
          <p className="text-muted-foreground">Monitor and analyze Doctor performance metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search teachers..." className="w-full pl-8 bg-background" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            <SelectItem value="math1">Math1</SelectItem>
            <SelectItem value="DataBase">DataBase</SelectItem>
            <SelectItem value="Data Structure">Data Structure</SelectItem>
            <SelectItem value="Operating System">Operating System</SelectItem>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="cs">Computer Science</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reviews">Reviews & Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={teacher.avatar || "/placeholder.svg"} alt={teacher.name} />
                        <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{teacher.name}</CardTitle>
                        <CardDescription>{teacher.subject}</CardDescription>
                      </div>
                    </div>
                    <Badge
                      variant={
                        teacher.performance >= 90 ? "default" : teacher.performance >= 80 ? "secondary" : "outline"
                      }
                    >
                      {teacher.performance}% Performance
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Experience: {teacher.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>Students: {teacher.students}</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Performance Score</span>
                        <span>{teacher.performance}%</span>
                      </div>
                      <Progress value={teacher.performance} className="h-2" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Classes:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {teacher.classes.map((cls) => (
                          <Badge key={cls} variant="outline" className="text-xs">
                            {cls}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span className="font-medium">{teacher.rating}</span>
                      <span className="text-muted-foreground">Student Rating</span>
                    </div>
                  </div>
                </CardContent>
                <div className="flex border-t divide-x">
                  <Button variant="ghost" className="flex-1 rounded-none h-10">
                    View Profile
                  </Button>
                  <Button variant="ghost" className="flex-1 rounded-none h-10">
                    Performance Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">90.5%</div>
                <p className="text-xs text-muted-foreground">+2.5% from previous semester</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Student Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85.2%</div>
                <p className="text-xs text-muted-foreground">+1.8% from previous semester</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Student Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.6/5.0</div>
                <p className="text-xs text-muted-foreground">Based on 1,250 student reviews</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics by Subject</CardTitle>
              <CardDescription>Comparison of Doctor performance across different subjects</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <TrendingUp className="mx-auto h-12 w-12 mb-2" />
                <p>Performance Metrics Chart</p>
                <p className="text-sm">(Chart visualization would appear here)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Doctor Reviews & Feedback</CardTitle>
              <CardDescription>Student and parent feedback for Doctors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {teachers.map((teacher) => (
                  <div key={teacher.id} className="border-b pb-6 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={teacher.avatar || "/placeholder.svg"} alt={teacher.name} />
                        <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{teacher.name}</h3>
                        <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                      </div>
                      <div className="ml-auto flex items-center">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(teacher.rating) ? "text-amber-500" : "text-muted"}`}
                              fill={i < Math.floor(teacher.rating) ? "currentColor" : "none"}
                            />
                          ))}
                        <span className="ml-2 text-sm font-medium">{teacher.rating}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Teaching Quality</span>
                          <span>{Math.round(teacher.performance * 0.95)}%</span>
                        </div>
                        <Progress value={Math.round(teacher.performance * 0.95)} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Student Engagement</span>
                          <span>{Math.round(teacher.performance * 0.9)}%</span>
                        </div>
                        <Progress value={Math.round(teacher.performance * 0.9)} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Communication</span>
                          <span>{Math.round(teacher.performance * 0.93)}%</span>
                        </div>
                        <Progress value={Math.round(teacher.performance * 0.93)} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Subject Knowledge</span>
                          <span>{Math.round(teacher.performance * 0.98)}%</span>
                        </div>
                        <Progress value={Math.round(teacher.performance * 0.98)} className="h-2" />
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Recent Feedback:</h4>
                      <div className="bg-muted/50 p-3 rounded-md text-sm">
                        <p>
                          "{teacher.name} is an exceptional Doctor who makes {teacher.subject} engaging and easy to
                          understand. Students consistently perform well in assessments and enjoy the interactive
                          teaching methods."
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">- Academic Review Committee</p>
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
