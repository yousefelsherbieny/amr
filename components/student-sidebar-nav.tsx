"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Calendar, Clock, FileCheck, FileText, LayoutDashboard, Bell, User, BookCopy } from "lucide-react"
import { cn } from "@/lib/utils"

export function StudentSidebarNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/student/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/student/profile", label: "My Profile", icon: User },
    { href: "/student/courses", label: "My Courses", icon: BookCopy },
    { href: "/student/results", label: "My Results", icon: FileCheck },
    { href: "/student/assignments", label: "Assignments", icon: FileText },
    { href: "/student/timetable", label: "Timetable", icon: Calendar },
    { href: "/student/notices", label: "Notices", icon: Bell },
    { href: "/student/syllabus", label: "Syllabus", icon: BookOpen },
    { href: "/student/leave", label: "Leave Application", icon: Clock },
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
              ? "bg-primary/10 text-primary"
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
