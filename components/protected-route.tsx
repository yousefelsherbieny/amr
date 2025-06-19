"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles?: string[]
}

export function ProtectedRoute({ children, allowedRoles = [] }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    } else if (!isLoading && user && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
      // Redirect to appropriate dashboard based on role
      if (user.role === "admin") {
        router.push("/admin/dashboard")
      } else if (user.role === "teacher") {
        router.push("/teacher/dashboard")
      } else if (user.role === "student") {
        router.push("/student/dashboard")
      } else if (user.role === "owner") {
        router.push("/owner/dashboard")
      } else {
        router.push("/")
      }
    }
  }, [user, isLoading, router, allowedRoles])

  // Show loading or nothing while checking authentication
  if (isLoading || !user) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  // If user is authenticated and has the required role, render children
  if (allowedRoles.length === 0 || allowedRoles.includes(user.role)) {
    return <>{children}</>
  }

  // This should not happen due to the redirect in useEffect, but just in case
  return <div className="flex items-center justify-center min-h-screen">Access denied</div>
}
