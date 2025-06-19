"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  BookOpen,
  Calendar,
  Cog,
  LayoutDashboard,
  MessageSquare,
  School,
  Users,
  BookOpenCheck,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function AdminSidebarNav() {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Students",
      href: "/admin/students",
      icon: Users,
    },
    {
      title: "Faculty",
      href: "/admin/faculty",
      icon: School,
    },
    {
      title: "Courses",
      href: "/admin/courses",
      icon: BookOpen,
    },
    {
      title: "Schedule",
      href: "/admin/schedule",
      icon: Calendar,
    },
    {
      title: "Messaging",
      href: "/admin/messaging",
      icon: MessageSquare,
    },
    {
      title: "Reports",
      href: "/admin/reports",
      icon: BarChart3,
    },
    {
      title: "Academic",
      href: "/admin/academic",
      icon: BookOpenCheck,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Cog,
    },
  ]

  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <Button
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn("w-full justify-start", pathname === item.href ? "bg-secondary font-medium" : "font-normal")}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Button>
        </Link>
      ))}
    </nav>
  )
}
