"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Users, Upload, Clock, Calendar, FileCheck } from "lucide-react"
import { cn } from "@/lib/utils"

export function TeacherSidebarNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/teacher/dashboard", label: "Dashboard", icon: FileText },
    { href: "/teacher/students", label: "My Students", icon: Users },
    { href: "/teacher/upload-notes", label: "Upload Notes", icon: Upload },
    { href: "/teacher/upload-results", label: "Upload Results", icon: FileCheck },
    { href: "/teacher/attendance", label: "Attendance", icon: Clock },
    { href: "/teacher/leave-requests", label: "Leave Requests", icon: Calendar },
  ]

  return (
    <nav className="space-y-1 px-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            pathname === item.href
              ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}
