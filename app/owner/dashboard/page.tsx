"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpRight, ArrowDownRight, Download, Settings } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export default function OwnerDashboard() {
  const { user } = useAuth()

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Faculty Performance Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {user?.name?.split(" ")[0] || "Dr:Nancy"}Nancy ! Monitor your Faculty's performance and growth
              metrics
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="thisMonth">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="thisWeek">This Week</SelectItem>
                <SelectItem value="thisMonth">This Month</SelectItem>
                <SelectItem value="lastQuarter">Last Quarter</SelectItem>
                <SelectItem value="thisYear">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard title="Total Revenue" value="$52,489" description="+12.5% from last month" trend="up" />
          <StatsCard title="Active Users" value="3,248" description="+8.2% from last month" trend="up" />
          <StatsCard title="Monthly Enrollments" value="128" description="-2.5% from last month" trend="down" />
          <StatsCard title="Bus Usage" value="85%" description="+4.3% from last month" trend="up" />
        </div>

        {/* Charts */}
        <div className="grid gap-4 md:grid-cols-2">
          <TeacherPerformanceChart />
          <MonthlyExpensesChart />
        </div>

        {/* Additional metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Student Growth</CardTitle>
              <CardDescription>Year-over-year student enrollment growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={studentGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="students" fill="#16a34a" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Revenue Streams</CardTitle>
              <CardDescription>Breakdown of revenue sources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={revenueStreamsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {revenueStreamsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Transport Efficiency</CardTitle>
              <CardDescription>Bus route efficiency metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">Route Coverage</div>
                  <div>92%</div>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-full w-[92%] rounded-full bg-green-600" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">On-time Performance</div>
                  <div>87%</div>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-full w-[87%] rounded-full bg-green-600" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">Fuel Efficiency</div>
                  <div>78%</div>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-full w-[78%] rounded-full bg-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function StatsCard({ title, value, description, trend }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center text-xs">
          {trend === "up" ? (
            <ArrowUpRight className="mr-1 h-4 w-4 text-green-600" />
          ) : (
            <ArrowDownRight className="mr-1 h-4 w-4 text-red-600" />
          )}
          <span className={trend === "up" ? "text-green-600" : "text-red-600"}>{description}</span>
        </div>
      </CardContent>
    </Card>
  )
}

function TeacherPerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Teacher Performance</CardTitle>
        <CardDescription>Average student scores by teacher</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={teacherPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#16a34a" name="Avg. Student Score" />
              <Bar dataKey="satisfaction" fill="#3b82f6" name="Parent Satisfaction" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function MonthlyExpensesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Expenses</CardTitle>
        <CardDescription>Breakdown of expenses by category</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={monthlyExpensesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {monthlyExpensesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data for charts
const teacherPerformanceData = [
  { name: "Johnson", score: 85, satisfaction: 90 },
  { name: "Smith", score: 78, satisfaction: 82 },
  { name: "Davis", score: 92, satisfaction: 95 },
  { name: "Wilson", score: 88, satisfaction: 85 },
  { name: "Brown", score: 76, satisfaction: 80 },
  { name: "Miller", score: 82, satisfaction: 88 },
]

const COLORS = ["#16a34a", "#3b82f6", "#eab308", "#ef4444", "#8b5cf6", "#ec4899"]

const monthlyExpensesData = [
  { name: "Salaries", value: 65 },
  { name: "Maintenance", value: 15 },
  { name: "Supplies", value: 10 },
  { name: "Transport", value: 5 },
  { name: "Utilities", value: 5 },
]

const studentGrowthData = [
  { year: "2021", students: 1800 },
  { year: "2022", students: 2100 },
  { year: "2023", students: 2400 },
  { year: "2024", students: 2650 },
  { year: "2025", students: 3000 },
]

const revenueStreamsData = [
  { name: "Tuition", value: 75 },
  { name: "Transport", value: 10 },
  { name: "Extracurricular", value: 8 },
  { name: "Donations", value: 7 },
]
