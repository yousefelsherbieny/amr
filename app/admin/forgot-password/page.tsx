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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Logo } from "@/components/logo"
import { useAuth } from "@/contexts/auth-context"

export default function AdminForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const router = useRouter()
  const { forgotPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your email address")
      return
    }

    try {
      setIsSubmitting(true)
      await forgotPassword(email)
      setIsSuccess(true)
    } catch (err) {
      setError("Failed to send password reset email. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side - Image for desktop */}
      <div className="hidden md:flex md:w-1/2 relative bg-muted">
        <Image src="/administrator-at-work.png" alt="University Administrator" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm flex items-center justify-center">
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Logo size="lg" />
            </div>
            <p className="text-lg max-w-md font-medium">Administrator Portal</p>
            <p className="text-sm max-w-md mt-2 text-muted-foreground">
              Password recovery for university administrators
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex flex-1 items-center justify-center p-6 md:p-12 relative">
        {/* Background for mobile only */}
        <div className="absolute inset-0 -z-10 md:hidden">
          <Image
            src="/administrator-at-work.png"
            alt="University Administrator"
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
              <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
              <div className="md:hidden">
                <Logo size="sm" showText={false} />
              </div>
            </div>
            <CardDescription>
              {isSuccess
                ? "Check your email for reset instructions"
                : "Enter your email to receive a password reset link"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSuccess ? (
              <div className="space-y-4">
                <div className="flex flex-col items-center justify-center py-4 text-center">
                  <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-lg font-medium">Reset Link Sent</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    We've sent a password reset link to <strong>{email}</strong>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Please check your email and follow the instructions to reset your password.
                  </p>
                </div>
                <Button className="w-full" onClick={() => router.push("/admin/login")}>
                  Return to Login
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="bg-background"
                  />
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Reset Link"}
                </Button>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 border-t pt-4">
            <div className="text-center">
              <Link href="/admin/login" className="text-sm text-primary hover:underline inline-flex items-center">
                <ArrowLeft className="mr-1 h-3 w-3" />
                Back to Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
