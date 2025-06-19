"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

// Mock data for results
const semesters = ["First Semester 2024-2025", "Second Semester 2024-2025"]

const semesterResults = {
  "First Semester 2024-2025": [
    { subject: "Math1", marks: 92, grade: "A", fullMarks: 100, passingMarks: 40 },
    { subject: "DB", marks: 85, grade: "A-", fullMarks: 100, passingMarks: 40 },
    { subject: "DS", marks: 78, grade: "B+", fullMarks: 100, passingMarks: 40 },
    { subject: "OS", marks: 88, grade: "A-", fullMarks: 100, passingMarks: 40 },
    { subject: "English", marks: 95, grade: "A+", fullMarks: 100, passingMarks: 40 },
    { subject: "SE", marks: 82, grade: "B+", fullMarks: 100, passingMarks: 40 },
  ],
  "Second Semester 2024-2025": [
    { subject: "Math1", marks: 94, grade: "A", fullMarks: 100, passingMarks: 40 },
    { subject: "DB", marks: 88, grade: "A-", fullMarks: 100, passingMarks: 40 },
    { subject: "DS", marks: 82, grade: "B+", fullMarks: 100, passingMarks: 40 },
    { subject: "OS", marks: 90, grade: "A", fullMarks: 100, passingMarks: 40 },
    { subject: "English", marks: 96, grade: "A+", fullMarks: 100, passingMarks: 40 },
    { subject: "SE", marks: 85, grade: "A-", fullMarks: 100, passingMarks: 40 },
  ],
}

const gradeColors = {
  "A+": "#22c55e", // Green
  A: "#22c55e",
  "A-": "#22c55e",
  "B+": "#3b82f6", // Blue
  B: "#3b82f6",
  "B-": "#3b82f6",
  "C+": "#f59e0b", // Yellow
  C: "#f59e0b",
  "C-": "#f59e0b",
  D: "#ef4444", // Red
  F: "#ef4444",
}

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"]

export default function ResultsPage() {
  const [selectedSemester, setSelectedSemester] = useState(semesters[0])

  const results = semesterResults[selectedSemester as keyof typeof semesterResults] || []

  const totalMarks = results.reduce((sum, subject) => sum + subject.marks, 0)
  const maxMarks = results.reduce((sum, subject) => sum + subject.fullMarks, 0)
  const percentage = maxMarks > 0 ? (totalMarks / maxMarks) * 100 : 0

  // Calculate grade distribution for pie chart
  const gradeDistribution = results.reduce((acc: Record<string, number>, subject) => {
    acc[subject.grade] = (acc[subject.grade] || 0) + 1
    return acc
  }, {})

  const pieData = Object.entries(gradeDistribution).map(([grade, count]) => ({
    name: grade,
    value: count,
  }))

  return (
    <div className="p-4 md:p-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Academic Results</h1>
          <p className="text-muted-foreground">View your academic performance and grades</p>
        </div>
        <Select value={selectedSemester} onValueChange={setSelectedSemester}>
          <SelectTrigger className="w-[240px]">
            <SelectValue placeholder="Select semester" />
          </SelectTrigger>
          <SelectContent>
            {semesters.map((semester) => (
              <SelectItem key={semester} value={semester}>
                {semester}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Result Summary - {selectedSemester}</CardTitle>
          <CardDescription>Overall performance: {percentage.toFixed(2)}%</CardDescription>
          <div className="mt-2">
            <Progress value={percentage} className="h-2" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left">Subject</th>
                  <th className="py-3 px-4 text-center">Marks</th>
                  <th className="py-3 px-4 text-center">Full Marks</th>
                  <th className="py-3 px-4 text-center">Grade</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {results.map((subject, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 font-medium">{subject.subject}</td>
                    <td className="py-3 px-4 text-center">{subject.marks}</td>
                    <td className="py-3 px-4 text-center">{subject.fullMarks}</td>
                    <td className="py-3 px-4 text-center">
                      <Badge
                        style={{ backgroundColor: gradeColors[subject.grade as keyof typeof gradeColors] }}
                        className="font-medium"
                      >
                        {subject.grade}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant={subject.marks >= subject.passingMarks ? "outline" : "destructive"}>
                        {subject.marks >= subject.passingMarks ? "Pass" : "Fail"}
                      </Badge>
                    </td>
                  </tr>
                ))}
                <tr className="bg-muted/50">
                  <td className="py-3 px-4 font-bold">Total</td>
                  <td className="py-3 px-4 text-center font-bold">{totalMarks}</td>
                  <td className="py-3 px-4 text-center font-bold">{maxMarks}</td>
                  <td className="py-3 px-4 text-center" colSpan={2}>
                    <Badge className="bg-purple-600">{percentage.toFixed(2)}%</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance by Subject</CardTitle>
            <CardDescription>Marks obtained in each subject</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={results} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="marks" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
            <CardDescription>Distribution of grades across subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
