"use client";

import { useRouter } from "next/navigation";
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
  Calendar,
  BookOpen,
  Users,
  TrendingUp,
  Star,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TeachersPage() {
  const router = useRouter();

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
  ];

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Doctor Performance
          </h1>
          <p className="text-muted-foreground">
            Monitor and analyze Doctor performance metrics
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
            placeholder="Search teachers..."
            className="w-full pl-8 bg-background"
          />
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
                        <AvatarImage
                          src={teacher.avatar || "/placeholder.svg"}
                          alt={teacher.name}
                        />
                        <AvatarFallback>
                          {teacher.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">
                          {teacher.name}
                        </CardTitle>
                        <CardDescription>{teacher.subject}</CardDescription>
                      </div>
                    </div>
                    <Badge
                      variant={
                        teacher.performance >= 90
                          ? "default"
                          : teacher.performance >= 80
                          ? "secondary"
                          : "outline"
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
                          <Badge
                            key={cls}
                            variant="outline"
                            className="text-xs"
                          >
                            {cls}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span className="font-medium">{teacher.rating}</span>
                      <span className="text-muted-foreground">
                        Student Rating
                      </span>
                    </div>
                  </div>
                </CardContent>
                <div className="flex border-t divide-x">
                  <Button
                    variant="ghost"
                    className="flex-1 rounded-none h-10"
                    onClick={() => router.push(`/owner/teachers/${teacher.id}`)}
                  >
                    View Profile
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex-1 rounded-none h-10"
                    onClick={() =>
                      router.push(`/owner/teachers/performance/${teacher.id}`)
                    }
                  >
                    Performance Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
