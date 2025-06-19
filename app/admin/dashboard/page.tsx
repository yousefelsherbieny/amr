"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, GraduationCap, Bell, Bus } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

// Stats Card Component
function StatsCard({ title, value, description, icon }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex flex-col space-y-1">
            <span className="text-sm font-medium text-muted-foreground">{title}</span>
            <span className="text-2xl font-bold">{value}</span>
            <span className="text-xs text-muted-foreground">{description}</span>
          </div>
          <div className="rounded-full bg-blue-50 p-2.5 dark:bg-blue-950">{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AdminDashboard() {
  const { user } = useAuth()

  // Sample data for recent registrations
  const recentRegistrations = [
    { id: 1, name: "Emma Thompson", department: "Computer Science", date: "2025-04-15", status: "Active" },
    { id: 2, name: "James Wilson", department: "AI", date: "2025-04-14", status: "Active" },
    { id: 3, name: "Sophia Garcia", department: "Cyber Security", date: "2025-04-13", status: "Pending" },
    { id: 4, name: "Liam Johnson", department: "Information Technology", date: "2025-04-12", status: "Active" },
    { id: 5, name: "Olivia Martinez", department: "Embedded Systems", date: "2025-04-11", status: "Active" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, {user?.name || "Admin"}! Here's what's happening today.</p>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Students"
          value="2,856"
          description="+12 this week"
          icon={<Users className="h-5 w-5 text-blue-600" />}
        />
        <StatsCard
          title="Total Faculty"
          value="142"
          description="+3 this month"
          icon={<GraduationCap className="h-5 w-5 text-blue-600" />}
        />
        <StatsCard
          title="Notices Today"
          value="8"
          description="+2 since yesterday"
          icon={<Bell className="h-5 w-5 text-blue-600" />}
        />
        <StatsCard
          title="Buses Running"
          value="24/28"
          description="4 in maintenance"
          icon={<Bus className="h-5 w-5 text-blue-600" />}
        />
      </div>

      {/* Recent registrations */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Student Registrations</CardTitle>
            <CardDescription>Showing the 5 most recent student registrations</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Registration Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentRegistrations.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.department}</TableCell>
                  <TableCell>{student.date}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                      }`}
                    >
                      {student.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button className="justify-start">Add New Student</Button>
            <Button className="justify-start" variant="outline">
              Create Notice
            </Button>
            <Button className="justify-start" variant="outline">
              Manage Faculty
            </Button>
            <Button className="justify-start" variant="outline">
              View Reports
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current system metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Server Load</span>
                  <span className="text-sm text-muted-foreground">42%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-full w-[42%] rounded-full bg-blue-500"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Database Usage</span>
                  <span className="text-sm text-muted-foreground">67%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-full w-[67%] rounded-full bg-blue-500"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Storage</span>
                  <span className="text-sm text-muted-foreground">28%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-full w-[28%] rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
