import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Calendar, Clock, CheckCircle, X, FileText } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function LeaveRequestsPage() {
  // Sample leave request data
  const leaveRequests = [
    {
      id: 1,
      student: {
        name: "Alex Johnson",
        grade: "10th Grade",
        avatar: "/focused-student.png",
      },
      type: "Medical",
      startDate: "2025-06-15",
      endDate: "2025-06-18",
      reason: "Doctor's appointment and recovery from minor surgery",
      status: "Pending",
      documents: true,
    },
    {
      id: 2,
      student: {
        name: "Samantha Lee",
        grade: "10th Grade",
        avatar: "/focused-student.png",
      },
      type: "Family Event",
      startDate: "2025-06-20",
      endDate: "2025-06-22",
      reason: "Family wedding out of town",
      status: "Approved",
      documents: true,
    },
    {
      id: 3,
      student: {
        name: "Michael Chen",
        grade: "10th Grade",
        avatar: "/focused-student.png",
      },
      type: "Medical",
      startDate: "2025-06-10",
      endDate: "2025-06-12",
      reason: "Recovering from flu",
      status: "Rejected",
      documents: false,
    },
    {
      id: 4,
      student: {
        name: "Emily Rodriguez",
        grade: "10th Grade",
        avatar: "/focused-student.png",
      },
      type: "Sports Event",
      startDate: "2025-06-25",
      endDate: "2025-06-27",
      reason: "Participating in state-level swimming competition",
      status: "Pending",
      documents: true,
    },
    {
      id: 5,
      student: {
        name: "David Kim",
        grade: "10th Grade",
        avatar: "/focused-student.png",
      },
      type: "Personal",
      startDate: "2025-06-18",
      endDate: "2025-06-19",
      reason: "Family emergency",
      status: "Approved",
      documents: false,
    },
  ]

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leave Requests</h1>
          <p className="text-muted-foreground">Review and manage student leave requests</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search leave requests..." className="w-full pl-8 bg-background" />
        </div>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3">
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 gap-4">
            {leaveRequests
              .filter((request) => request.status === "Pending")
              .map((request) => (
                <Card key={request.id}>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={request.student.avatar || "/placeholder.svg"} alt={request.student.name} />
                          <AvatarFallback>{request.student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{request.student.name}</CardTitle>
                          <CardDescription>{request.student.grade}</CardDescription>
                        </div>
                      </div>
                      <Badge
                        variant={
                          request.status === "Pending"
                            ? "outline"
                            : request.status === "Approved"
                              ? "default"
                              : "destructive"
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{request.type}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {new Date(request.startDate).toLocaleDateString()} -{" "}
                            {new Date(request.endDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {Math.ceil(
                              (new Date(request.endDate).getTime() - new Date(request.startDate).getTime()) /
                                (1000 * 60 * 60 * 24) +
                                1,
                            )}{" "}
                            days
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-sm font-medium">Reason:</div>
                        <p className="text-sm text-muted-foreground">{request.reason}</p>
                      </div>

                      {request.documents && (
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-blue-600 hover:underline cursor-pointer">View attached documents</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="space-y-2 w-full md:w-auto">
                      <Label htmlFor={`comment-${request.id}`} className="text-sm">
                        Add Comment (Optional)
                      </Label>
                      <div className="flex gap-2">
                        <Textarea
                          id={`comment-${request.id}`}
                          placeholder="Enter your comment here..."
                          className="h-10 min-h-[40px] md:w-[300px]"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 items-end">
                      <Button variant="outline" className="text-red-500 hover:text-red-700">
                        <X className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="approved" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 gap-4">
            {leaveRequests
              .filter((request) => request.status === "Approved")
              .map((request) => (
                <Card key={request.id}>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={request.student.avatar || "/placeholder.svg"} alt={request.student.name} />
                          <AvatarFallback>{request.student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{request.student.name}</CardTitle>
                          <CardDescription>{request.student.grade}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="default">{request.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{request.type}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {new Date(request.startDate).toLocaleDateString()} -{" "}
                            {new Date(request.endDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {Math.ceil(
                              (new Date(request.endDate).getTime() - new Date(request.startDate).getTime()) /
                                (1000 * 60 * 60 * 24) +
                                1,
                            )}{" "}
                            days
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-sm font-medium">Reason:</div>
                        <p className="text-sm text-muted-foreground">{request.reason}</p>
                      </div>

                      {request.documents && (
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-blue-600 hover:underline cursor-pointer">View attached documents</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>Approved on {new Date().toLocaleDateString()}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 gap-4">
            {leaveRequests
              .filter((request) => request.status === "Rejected")
              .map((request) => (
                <Card key={request.id}>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={request.student.avatar || "/placeholder.svg"} alt={request.student.name} />
                          <AvatarFallback>{request.student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{request.student.name}</CardTitle>
                          <CardDescription>{request.student.grade}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="destructive">{request.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{request.type}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {new Date(request.startDate).toLocaleDateString()} -{" "}
                            {new Date(request.endDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {Math.ceil(
                              (new Date(request.endDate).getTime() - new Date(request.startDate).getTime()) /
                                (1000 * 60 * 60 * 24) +
                                1,
                            )}{" "}
                            days
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-sm font-medium">Reason:</div>
                        <p className="text-sm text-muted-foreground">{request.reason}</p>
                      </div>

                      {request.documents && (
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-blue-600 hover:underline cursor-pointer">View attached documents</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2 text-sm text-red-600">
                      <X className="h-4 w-4" />
                      <span>Rejected on {new Date().toLocaleDateString()}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
