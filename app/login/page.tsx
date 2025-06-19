"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Logo } from "@/components/logo"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userRole, setUserRole] = useState("student")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, isLoading } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    try {
      await login(email, password, userRole as any)
      // No need to redirect here as the auth context will handle it
    } catch (err) {
      setError("Invalid credentials. Please try again.")
    }
  }

  const handleReset = () => {
    setEmail("")
    setPassword("")
    setUserRole("student")
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side - Image for desktop */}
      <div className="hidden md:flex md:w-1/2 relative bg-muted">
        <Image src="/school-building.png" alt="School building" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm flex items-center justify-center">
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Logo size="lg" />
            </div>
            <p className="text-lg max-w-md">
              Simplifying school management for administrators, teachers, students, and owners.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex flex-1 items-center justify-center p-6 md:p-12 relative">
        {/* Background for mobile only */}
        <div className="absolute inset-0 -z-10 md:hidden">
          <Image
            src="/school-building.png"
            alt="School building"
            fill
            className="object-cover opacity-20 dark:opacity-10"
          />
        </div>

        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>

        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
              <div className="md:hidden">
                <Logo size="sm" showText={false} />
              </div>
            </div>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@school.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>User Role</Label>
                <RadioGroup value={userRole} onValueChange={setUserRole} className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="admin" id="admin" disabled={isLoading} />
                    <Label htmlFor="admin" className="cursor-pointer">
                      Admin
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="teacher" id="teacher" disabled={isLoading} />
                    <Label htmlFor="teacher" className="cursor-pointer">
                      Teacher
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="student" disabled={isLoading} />
                    <Label htmlFor="student" className="cursor-pointer">
                      Student
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="owner" id="owner" disabled={isLoading} />
                    <Label htmlFor="owner" className="cursor-pointer">
                      Owner
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="flex justify-between text-sm">
                <Link href="/forgot-password" className="text-primary hover:underline">
                  Forgot Password?
                </Link>
                <Button type="button" variant="ghost" size="sm" onClick={handleReset} disabled={isLoading}>
                  Reset
                </Button>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 border-t pt-4">
            <div className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account? Contact your administrator
            </div>
            <div className="text-center">
              <Link href="/" className="text-sm text-primary hover:underline">
                Back to Home
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
