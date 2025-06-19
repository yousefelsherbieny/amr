"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X, Bell, ChevronDown, Search, Settings, LogOut, User } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"
import { Logo } from "@/components/logo"
import { StudentSidebarNav } from "@/components/student-sidebar-nav"
import { Suspense } from "react"
import { ProtectedRoute } from "@/components/protected-route"

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <ProtectedRoute allowedRoles={["student"]}>
      <div className="flex min-h-screen flex-col">
        {/* Mobile sidebar */}
        <div
          className={cn(
            "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden",
            sidebarOpen ? "block" : "hidden",
          )}
        >
          <div className="fixed inset-y-0 left-0 z-50 w-72 bg-background shadow-lg">
            <div className="flex h-16 items-center px-4 border-b">
              <Logo />
              <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setSidebarOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="py-4">
              <StudentSidebarNav />
            </div>
          </div>
        </div>

        {/* Desktop sidebar */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col border-r">
          <div className="flex h-16 items-center gap-2 px-4 border-b">
            <Logo />
          </div>
          <div className="flex-1 overflow-auto py-4">
            <StudentSidebarNav />
          </div>
        </div>

        {/* Main content */}
        <div className="lg:pl-72">
          {/* Top bar */}
          <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex-1 flex items-center gap-4 md:gap-8">
              <form className="flex-1 hidden md:flex">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search..." className="w-full pl-8 bg-background" />
                </div>
              </form>
              <div className="ml-auto flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-white">
                        2
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="max-h-[300px] overflow-auto">
                      <div className="flex items-start gap-4 p-3 hover:bg-muted">
                        <div className="rounded-full p-2 bg-green-100 dark:bg-green-900/30">
                          <Bell className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">New Notice Published</p>
                          <p className="text-xs text-muted-foreground">
                            Annual Sports Day Announcement has been published.
                          </p>
                          <p className="text-xs text-muted-foreground">1 hour ago</p>
                        </div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                <ModeToggle />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.avatar || "/focused-student.png"} alt="Student" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div className="hidden md:flex flex-col items-start text-sm">
                        <span>{user?.name || "Ahmed Hassan"}</span>
                        <span className="text-xs text-muted-foreground">Class 10-A</span>
                      </div>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1">
            <Suspense>{children}</Suspense>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}
