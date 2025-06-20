"use client";
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  Download,
  Mail,
  Phone,
  Calendar,
  Clock,
  BookOpen,
} from "lucide-react";

export default function StudentsPage() {
  const router = useRouter();

  const students = [
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
  ];

const handleViewProfile = (id: number) => {
  console.log("Navigating to:", `/teacher/students/${id}`)
  router.push(`/teacher/students/${id}`)
}




  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Students</h1>
          <p className="text-muted-foreground">
            View and manage your students' information and performance
          </p>
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
          <Input
            type="search"
            placeholder="Search students..."
            className="w-full pl-8 bg-background"
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3">
          <TabsTrigger value="all">All Students</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {students.map((student) => (
              <Card key={student.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={student.avatar || "/placeholder.svg"}
                          alt={student.name}
                        />
                        <AvatarFallback>
                          {student.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">
                          {student.name}
                        </CardTitle>
                        <CardDescription>{student.grade}</CardDescription>
                      </div>
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
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Attendance: {student.attendance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Active: {student.lastActive}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="truncate">{student.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{student.phone}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Subjects:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {student.subjects.map((subject) => (
                          <Badge
                            key={subject}
                            variant="outline"
                            className="text-xs"
                          >
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <div className="flex border-t divide-x">
                  <Button
                    variant="ghost"
                    className="flex-1 rounded-none h-10"
                    onClick={() => handleViewProfile(student.id)}
                  >
                    View Profile
                  </Button>
                  <Button variant="ghost" className="flex-1 rounded-none h-10">
                    Contact
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Students</CardTitle>
              <CardDescription>
                Students who have been active in the last 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Content for active students tab</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inactive" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Inactive Students</CardTitle>
              <CardDescription>
                Students who have not been active for more than 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Content for inactive students tab</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
