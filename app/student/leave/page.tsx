"use client"

import { useState } from "react"
import { CalendarIcon, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function LeaveApplicationPage() {
  const [date, setDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Leave Application</h1>
        <p className="text-muted-foreground">Submit and track your leave requests</p>
      </div>

      <Tabs defaultValue="apply">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="apply">Apply for Leave</TabsTrigger>
          <TabsTrigger value="history">Leave History</TabsTrigger>
        </TabsList>

        <TabsContent value="apply" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>New Leave Application</CardTitle>
              <CardDescription>Fill in the details to submit your leave request</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="leave-type">Leave Type</Label>
                  <Select>
                    <SelectTrigger id="leave-type">
                      <SelectValue placeholder="Select leave type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medical">Medical Leave</SelectItem>
                      <SelectItem value="personal">Personal Leave</SelectItem>
                      <SelectItem value="family">Family Emergency</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="half">Half Day</SelectItem>
                      <SelectItem value="full">Full Day</SelectItem>
                      <SelectItem value="multiple">Multiple Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !endDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Leave</Label>
                <Textarea
                  id="reason"
                  placeholder="Please provide details about your leave request"
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="attachment">Attachment (Optional)</Label>
                <div className="flex items-center gap-2">
                  <Input id="attachment" type="file" />
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Upload any supporting documents (e.g., medical certificate)
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Submit Application</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Leave History</CardTitle>
              <CardDescription>View your previous leave applications and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaveHistory.map((leave) => (
                  <div key={leave.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">{leave.type}</div>
                      <div className="text-sm text-muted-foreground">
                        {leave.startDate} {leave.endDate ? `to ${leave.endDate}` : ""}
                      </div>
                      <div className="text-sm">{leave.reason}</div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        variant={
                          leave.status === "Approved"
                            ? "success"
                            : leave.status === "Pending"
                              ? "outline"
                              : "destructive"
                        }
                      >
                        {leave.status}
                      </Badge>
                      <div className="text-xs text-muted-foreground">Applied on {leave.appliedDate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Leave Balance</CardTitle>
          <CardDescription>Your remaining leave days for the academic year</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="text-sm font-medium text-muted-foreground">Medical Leave</div>
              <div className="mt-1 text-2xl font-bold">
                8 <span className="text-sm font-normal text-muted-foreground">/ 10 days</span>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-sm font-medium text-muted-foreground">Personal Leave</div>
              <div className="mt-1 text-2xl font-bold">
                3 <span className="text-sm font-normal text-muted-foreground">/ 5 days</span>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-sm font-medium text-muted-foreground">Total Leave</div>
              <div className="mt-1 text-2xl font-bold">
                11 <span className="text-sm font-normal text-muted-foreground">/ 15 days</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const leaveHistory = [
  {
    id: 1,
    type: "Medical Leave",
    startDate: "May 10, 2023",
    endDate: "May 12, 2023",
    reason: "Fever and cold",
    status: "Approved",
    appliedDate: "May 8, 2023",
  },
  {
    id: 2,
    type: "Personal Leave",
    startDate: "April 5, 2023",
    endDate: null,
    reason: "Family function",
    status: "Approved",
    appliedDate: "April 2, 2023",
  },
  {
    id: 3,
    type: "Medical Leave",
    startDate: "March 15, 2023",
    endDate: "March 16, 2023",
    reason: "Dental appointment",
    status: "Approved",
    appliedDate: "March 12, 2023",
  },
  {
    id: 4,
    type: "Personal Leave",
    startDate: "June 5, 2023",
    endDate: "June 7, 2023",
    reason: "Family trip",
    status: "Pending",
    appliedDate: "May 25, 2023",
  },
]
