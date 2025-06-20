"use client"

import { useState } from "react"
import {
  PlusCircle,
  Search,
  Filter,
  MoreHorizontal,
  Pencil,
  Trash2,
  CalendarPlus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default function SchedulePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [entries, setEntries] = useState([
    { course: "CS101", time: "09:00", room: "Room 101", day: "Mon" },
    { course: "MATH201", time: "11:00", room: "Room 203", day: "Wed" },
    { course: "ENG220", time: "14:00", room: "Room 105", day: "Tue" },
  ])

  const [formEntry, setFormEntry] = useState({
    course: "",
    time: "",
    room: "",
    day: "Mon",
  })

  const handleSave = () => {
    if (editingIndex !== null) {
      const updated = [...entries]
      updated[editingIndex] = formEntry
      setEntries(updated)
    } else {
      setEntries((prev) => [...prev, formEntry])
    }
    setFormEntry({ course: "", time: "", room: "", day: "Mon" })
    setEditingIndex(null)
    setIsDialogOpen(false)
  }

  const handleEdit = (entry: any, index: number) => {
    setFormEntry(entry)
    setEditingIndex(index)
    setIsDialogOpen(true)
  }

  const handleDelete = (index: number) => {
    setEntries((prev) => prev.filter((_, i) => i !== index))
  }

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Academic Schedule</h1>
        <Button onClick={() => setIsDialogOpen(true)} className="flex items-center gap-1">
          <CalendarPlus className="h-4 w-4" />
          <span>{editingIndex !== null ? "Edit Schedule Entry" : "Add Schedule Entry"}</span>
        </Button>
      </div>

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
            {days.map((day) => (
              <div key={day} className="min-h-[150px] rounded-md border p-2 text-sm">
                <div className="mb-2 text-center font-medium text-sm">{day}</div>
                {entries
                  .map((entry, idx) => ({ ...entry, idx }))
                  .filter((entry) => entry.day === day)
                  .map((entry) => (
                    <div
                      key={entry.idx}
                      className="rounded-sm bg-blue-100 p-1 text-xs text-black mb-1"
                    >
                      <div className="font-medium flex justify-between items-center">
                        {entry.course}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-4 w-4 p-0"
                            >
                              <MoreHorizontal className="h-3 w-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => handleEdit(entry, entry.idx)}
                              className="flex items-center"
                            >
                              <Pencil className="mr-2 h-3 w-3" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDelete(entry.idx)}
                              className="flex items-center text-destructive"
                            >
                              <Trash2 className="mr-2 h-3 w-3" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div>{entry.time}</div>
                      <div>{entry.room}</div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          if (!open) setEditingIndex(null)
          setIsDialogOpen(open)
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingIndex !== null ? "Edit" : "Add"} Schedule Entry
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Course</Label>
                <Input
                  value={formEntry.course}
                  onChange={(e) =>
                    setFormEntry({ ...formEntry, course: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Time</Label>
                <Input
                  type="time"
                  value={formEntry.time}
                  onChange={(e) =>
                    setFormEntry({ ...formEntry, time: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Room</Label>
                <Input
                  value={formEntry.room}
                  onChange={(e) =>
                    setFormEntry({ ...formEntry, room: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Day</Label>
                <select
                  className="w-full border rounded p-2"
                  value={formEntry.day}
                  onChange={(e) =>
                    setFormEntry({ ...formEntry, day: e.target.value })
                  }
                >
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSave}>
              {editingIndex !== null ? "Update" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
