"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, DollarSign, Users, TrendingUp, Bus } from "lucide-react"
import { cn } from "@/lib/utils"

export function OwnerSidebarNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/owner/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/owner/revenue", label: "Revenue", icon: DollarSign },
    { href: "/owner/teachers", label: "Teacher Performance", icon: Users },
    { href: "/owner/students", label: "Student Growth", icon: TrendingUp },
    { href: "/owner/transport", label: "Transport Logs", icon: Bus },
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
