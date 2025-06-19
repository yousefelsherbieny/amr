import { PlusCircle, ChevronLeft, ChevronRight, ExternalLink, Printer, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Academic Schedule</h1>
        <Button className="flex items-center gap-1">
          <PlusCircle className="h-4 w-4" />
          <span>Add Schedule Entry</span>
        </Button>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="md:w-1/4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Controls</CardTitle>
              <CardDescription>Configure and manage schedule display options.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="semester-select" className="text-sm font-medium">
                  Semester
                </label>
                <Select defaultValue="fall2023">
                  <SelectTrigger id="semester-select">
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fall2023">Fall 2024</SelectItem>
                    <SelectItem value="spring2024">Spring 2025</SelectItem>
                    <SelectItem value="summer2024">Summer 2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="department-select" className="text-sm font-medium">
                  Department
                </label>
                <Select defaultValue="all">
                  <SelectTrigger id="department-select">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="math">AI</SelectItem>
                    <SelectItem value="phys">DataBase</SelectItem>
                    <SelectItem value="eng">Embedded Systems</SelectItem>
                    <SelectItem value="chem">Data Structure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="view-select" className="text-sm font-medium">
                  View Mode
                </label>
                <Select defaultValue="weekly">
                  <SelectTrigger id="view-select">
                    <SelectValue placeholder="Select view" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4 pt-4">
                <Button variant="outline" className="w-full justify-start">
                  <Printer className="mr-2 h-4 w-4" />
                  Print Schedule
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Export Schedule
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Public Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-3/4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Weekly Schedule</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="text-sm font-medium">October 23 - October 29, 2025</div>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-4">
                <div className="text-center font-medium text-sm">Mon</div>
                <div className="text-center font-medium text-sm">Tue</div>
                <div className="text-center font-medium text-sm">Wed</div>
                <div className="text-center font-medium text-sm">Thu</div>
                <div className="text-center font-medium text-sm">Fri</div>
                <div className="text-center font-medium text-sm">Sat</div>
                <div className="text-center font-medium text-sm">Sun</div>

                {/* Calendar cells */}
                {Array(7)
                  .fill(0)
                  .map((_, dayIndex) => (
                    <div key={dayIndex} className="min-h-[150px] rounded-md border p-2 text-sm">
                      <div className="mb-2 text-right text-sm text-muted-foreground">
                        {dayIndex === 6 ? "29" : `${dayIndex + 23}`}
                      </div>
                      {dayIndex < 5 && ( // Only show classes on weekdays
                        <div className="space-y-2">
                          {dayIndex % 2 === 0 ? (
                            <>
                              <div className="rounded-sm bg-blue-100 p-1 text-xs text-black">
                                <div className="font-medium">CS101</div>
                                <div>9:00 - 10:30 AM</div>
                                <div>Room 101</div>
                              </div>
                              {dayIndex === 2 && (
                                <div className="rounded-sm bg-green-100 p-1 text-xs text-black">
                                  <div className="font-medium">MATH201</div>
                                  <div>11:00 - 12:30 PM</div>
                                  <div>Room 203</div>
                                </div>
                              )}
                            </>
                          ) : (
                            <>
                              <div className="rounded-sm bg-purple-100 p-1 text-xs text-black">
                                <div className="font-medium">ENG220</div>
                                <div>2:00 - 3:30 PM</div>
                                <div>Room 105</div>
                              </div>
                              {dayIndex === 3 && (
                                <div className="rounded-sm bg-amber-100 p-1 text-xs text-black">
                                  <div className="font-medium">DB102</div>
                                  <div>4:00 - 5:30 PM</div>
                                  <div>Lab 002</div>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
