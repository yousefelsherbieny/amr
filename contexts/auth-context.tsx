"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useRouter } from "next/navigation"

type UserRole = "admin" | "teacher" | "student" | "owner"

interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string, role: UserRole) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string, role: UserRole) => {
    setIsLoading(true)
    try {
      // In a real app, you would make an API call to authenticate
      // For now, we'll simulate a successful login
      const mockUser: User = {
        id: "123",
        name: getMockName(role),
        email,
        role,
        avatar: getMockAvatar(role),
      }

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(mockUser))
      setUser(mockUser)

      // Redirect to appropriate dashboard
      if (role === "admin") {
        router.push("/admin/dashboard")
      } else if (role === "teacher") {
        router.push("/teacher/dashboard")
      } else if (role === "student") {
        router.push("/student/dashboard")
      } else if (role === "owner") {
        router.push("/owner/dashboard")
      }
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
    router.push("/login")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// Helper functions for mock data
function getMockName(role: UserRole): string {
  switch (role) {
    case "admin":
      return "Admin User"
    case "teacher":
      return "Sarah Johnson"
    case "student":
      return "Ahmed Hassan"
    case "owner":
      return "Dr: Nancy"
    default:
      return "User"
  }
}

function getMockAvatar(role: UserRole): string {
  switch (role) {
    case "admin":
      return "/administrator-at-work.png"
    case "teacher":
      return "/engaged-classroom.png"
    case "student":
      return "/focused-student.png"
    case "owner":
      return "/principal-at-desk.png"
    default:
      return "/placeholder-icon.png"
  }
}
