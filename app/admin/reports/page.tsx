import { Download, Filter, BarChart, PieChart, LineChart, Calendar, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            View and generate reports for academic activities and administrative tasks.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button>Generate Report</Button>
        </div>
      </div>

      <Tabs defaultValue="enrollment">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
          <TabsTrigger value="academic">Academic Performance</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
        </TabsList>

        <TabsContent value="enrollment" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Total Enrollment</CardTitle>
                <CardDescription>Academic Year 2024-2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,248</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">↑ 12%</span> from previous year
                </p>
                <div className="mt-4 h-[80px] w-full bg-muted flex items-center justify-center rounded">
                  <BarChart className="h-10 w-10 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Enrollment by Department</CardTitle>
                <CardDescription>Distribution across departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-4 h-[120px] w-full bg-muted flex items-center justify-center rounded">
                  <PieChart className="h-10 w-10 text-muted-foreground/50" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Computer Science</span>
                    <span className="font-medium">28%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>AI</span>
                    <span className="font-medium">22%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>DataBase</span>
                    <span className="font-medium">18%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Embedded Systems</span>
                    <span className="font-medium">16%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Data Structure</span>
                    <span className="font-medium">16%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Enrollment Trends</CardTitle>
                <CardDescription>Last 5 years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-4 h-[120px] w-full bg-muted flex items-center justify-center rounded">
                  <LineChart className="h-10 w-10 text-muted-foreground/50" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Year-over-Year Growth</div>
                    <div className="text-sm font-medium text-green-500">+8.7%</div>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">Consistent growth over the last 3 years</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Detailed Enrollment Report</CardTitle>
                  <CardDescription>Enrollment statistics by semester, department, and program.</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="current">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current">Current Semester</SelectItem>
                      <SelectItem value="previous">Previous Semester</SelectItem>
                      <SelectItem value="year">Full Academic Year</SelectItem>
                      <SelectItem value="custom">Custom Period</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">New Students</div>
                        <div className="text-2xl font-bold">324</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Continuing Students</div>
                        <div className="text-2xl font-bold">924</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Average Course Load</div>
                        <div className="text-2xl font-bold">5.2</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border">
                  <div className="h-[300px] bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <BarChart className="mx-auto h-12 w-12 text-muted-foreground/50" />
                      <div className="mt-2 text-lg font-medium">Enrollment Data Visualization</div>
                      <div className="text-sm text-muted-foreground">
                        Interactive charts and graphs would appear here
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Performance Report</CardTitle>
              <CardDescription>Grade distribution, performance metrics, and academic outcomes.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <LineChart className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <div className="mt-4 text-lg font-medium">Academic Performance Dashboard</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Detailed academic performance metrics will be displayed here
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Report</CardTitle>
              <CardDescription>Student attendance patterns and statistics.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <BarChart className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <div className="mt-4 text-lg font-medium">Attendance Dashboard</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Detailed attendance metrics will be displayed here
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Financial Report</CardTitle>
              <CardDescription>Tuition revenue, scholarship distribution, and financial metrics.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <PieChart className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <div className="mt-4 text-lg font-medium">Financial Dashboard</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Detailed financial metrics will be displayed here
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
