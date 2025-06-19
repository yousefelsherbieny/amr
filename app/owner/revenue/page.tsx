import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight, Download, TrendingUp, DollarSign, CreditCard, FileBarChart } from "lucide-react"

export default function RevenuePage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Revenue Management</h1>
          <p className="text-muted-foreground">Track and analyze your Faculty's financial performance</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="current">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Current Academic Year</SelectItem>
              <SelectItem value="previous">Previous Academic Year</SelectItem>
              <SelectItem value="custom">Custom Period</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$842,500</div>
            <p className="text-xs text-muted-foreground">+20.1% from previous year</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[75%] bg-green-500" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">75% of annual target</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fee Collection</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$720,300</div>
            <div className="flex items-center gap-1 text-xs text-green-500">
              <ArrowUpRight className="h-3 w-3" />
              <span>+12.5% from previous year</span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                Tuition: $650,200
              </Badge>
              <Badge variant="outline" className="text-xs">
                Other: $70,100
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding Fees</CardTitle>
            <FileBarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$124,800</div>
            <div className="flex items-center gap-1 text-xs text-red-500">
              <ArrowDownRight className="h-3 w-3" />
              <span>+8.2% from previous month</span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                Due: $85,300
              </Badge>
              <Badge variant="outline" className="text-xs">
                Overdue: $39,500
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expenses</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$615,200</div>
            <div className="flex items-center gap-1 text-xs text-amber-500">
              <ArrowUpRight className="h-3 w-3" />
              <span>+5.3% from previous year</span>
            </div>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[68%] bg-amber-500" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">68% of annual budget</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="fee-collection">Fee Collection</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue vs Expenses</CardTitle>
                <CardDescription>Comparison of revenue and expenses over the academic year</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <FileBarChart className="mx-auto h-12 w-12 mb-2" />
                  <p>Revenue vs Expenses Chart</p>
                  <p className="text-sm">(Chart visualization would appear here)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Distribution of revenue by source</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <FileBarChart className="mx-auto h-12 w-12 mb-2" />
                  <p>Revenue Breakdown Chart</p>
                  <p className="text-sm">(Chart visualization would appear here)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Financial Summary</CardTitle>
              <CardDescription>Overview of monthly revenue and expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead className="text-right">Revenue</TableHead>
                    <TableHead className="text-right">Expenses</TableHead>
                    <TableHead className="text-right">Net Profit</TableHead>
                    <TableHead className="text-right">Fee Collection Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { month: "January", revenue: 78500, expenses: 52300, rate: 92 },
                    { month: "February", revenue: 82300, expenses: 54100, rate: 88 },
                    { month: "March", revenue: 85600, expenses: 58200, rate: 90 },
                    { month: "April", revenue: 79200, expenses: 51800, rate: 85 },
                    { month: "May", revenue: 81400, expenses: 53600, rate: 87 },
                  ].map((item) => (
                    <TableRow key={item.month}>
                      <TableCell>{item.month}</TableCell>
                      <TableCell className="text-right">${item.revenue.toLocaleString()}</TableCell>
                      <TableCell className="text-right">${item.expenses.toLocaleString()}</TableCell>
                      <TableCell className="text-right font-medium">
                        ${(item.revenue - item.expenses).toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right">{item.rate}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fee-collection" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Fee Collection Status</CardTitle>
              <CardDescription>Overview of fee collection by class and category</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Class</TableHead>
                    <TableHead className="text-right">Total Fees</TableHead>
                    <TableHead className="text-right">Collected</TableHead>
                    <TableHead className="text-right">Outstanding</TableHead>
                    <TableHead className="text-right">Collection Rate</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { class: "Class 10-A", total: 125000, collected: 118750, rate: 95 },
                    { class: "Class 10-B", total: 120000, collected: 108000, rate: 90 },
                    { class: "Class 11-A", total: 135000, collected: 121500, rate: 90 },
                    { class: "Class 11-B", total: 130000, collected: 104000, rate: 80 },
                    { class: "Class 12-A", total: 140000, collected: 126000, rate: 90 },
                  ].map((item) => (
                    <TableRow key={item.class}>
                      <TableCell>{item.class}</TableCell>
                      <TableCell className="text-right">${item.total.toLocaleString()}</TableCell>
                      <TableCell className="text-right">${item.collected.toLocaleString()}</TableCell>
                      <TableCell className="text-right">${(item.total - item.collected).toLocaleString()}</TableCell>
                      <TableCell className="text-right">{item.rate}%</TableCell>
                      <TableCell>
                        <Badge variant={item.rate >= 95 ? "default" : item.rate >= 85 ? "secondary" : "outline"}>
                          {item.rate >= 95 ? "Excellent" : item.rate >= 85 ? "Good" : "Needs Attention"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Fee Collection Trends</CardTitle>
                <CardDescription>Monthly fee collection trends</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <FileBarChart className="mx-auto h-12 w-12 mb-2" />
                  <p>Fee Collection Trend Chart</p>
                  <p className="text-sm">(Chart visualization would appear here)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Outstanding Fees by Duration</CardTitle>
                <CardDescription>Analysis of outstanding fees by time period</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <FileBarChart className="mx-auto h-12 w-12 mb-2" />
                  <p>Outstanding Fees Chart</p>
                  <p className="text-sm">(Chart visualization would appear here)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Expense Categories</CardTitle>
              <CardDescription>Breakdown of expenses by category</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Budget</TableHead>
                    <TableHead className="text-right">Spent</TableHead>
                    <TableHead className="text-right">Remaining</TableHead>
                    <TableHead className="text-right">Utilization</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { category: "Salaries & Benefits", budget: 450000, spent: 315000 },
                    { category: "Infrastructure & Maintenance", budget: 120000, spent: 85000 },
                    { category: "Educational Resources", budget: 80000, spent: 62000 },
                    { category: "Administrative Expenses", budget: 60000, spent: 42000 },
                    { category: "Transportation", budget: 90000, spent: 65000 },
                    { category: "Miscellaneous", budget: 50000, spent: 32000 },
                  ].map((item) => (
                    <TableRow key={item.category}>
                      <TableCell>{item.category}</TableCell>
                      <TableCell className="text-right">${item.budget.toLocaleString()}</TableCell>
                      <TableCell className="text-right">${item.spent.toLocaleString()}</TableCell>
                      <TableCell className="text-right">${(item.budget - item.spent).toLocaleString()}</TableCell>
                      <TableCell className="text-right">{Math.round((item.spent / item.budget) * 100)}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Expense Distribution</CardTitle>
                <CardDescription>Visual breakdown of expenses by category</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <FileBarChart className="mx-auto h-12 w-12 mb-2" />
                  <p>Expense Distribution Chart</p>
                  <p className="text-sm">(Chart visualization would appear here)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Monthly Expense Trends</CardTitle>
                <CardDescription>Monthly expense trends by category</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <FileBarChart className="mx-auto h-12 w-12 mb-2" />
                  <p>Monthly Expense Trend Chart</p>
                  <p className="text-sm">(Chart visualization would appear here)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
              <CardDescription>Access and download financial reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Annual Financial Report 2025", date: "December 31, 2025", type: "PDF" },
                  { title: "Quarterly Financial Statement Q1 2025", date: "March 31, 2025", type: "Excel" },
                  { title: "Quarterly Financial Statement Q2 2025", date: "June 30, 2025", type: "Excel" },
                  { title: "Quarterly Financial Statement Q3 2025", date: "September 30, 2025", type: "Excel" },
                  { title: "Fee Collection Summary 2025", date: "December 31, 2025", type: "PDF" },
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-muted p-2 rounded">
                        <FileBarChart className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium">{report.title}</h4>
                        <p className="text-sm text-muted-foreground">Generated on {report.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{report.type}</Badge>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
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
