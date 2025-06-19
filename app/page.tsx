"use client"

import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { BookOpen, ClipboardCheck, Clock, Bus, Bell, Menu, X } from "lucide-react"
import { useState } from "react"
import { Logo } from "@/components/logo"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <UserTypesSection />
      </main>
      <Footer />
    </div>
  )
}

// Update the Navbar component to use our new Logo
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="/login" className="text-sm font-medium transition-colors hover:text-primary">
            Login
          </Link>
          <ModeToggle />
        </nav>

        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden p-4 flex flex-col gap-4">
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

// In the HeroSection component, remove the View Demo button and update the text
function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="absolute inset-0 z-0">
        <Image
          src="/vibrant-campus-life.png"
          alt="University background"
          fill
          className="object-cover opacity-20 dark:opacity-10"
          priority
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Simplify University Management
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A comprehensive solution for universities to manage students, faculty, and resources efficiently.
              Streamline administrative tasks and focus on higher education.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="outline" size="lg">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Update the FeaturesSection to reflect university terminology
function FeaturesSection() {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Student Records",
      description: "Maintain comprehensive student profiles with academic history and personal details.",
    },
    {
      icon: <ClipboardCheck className="h-10 w-10" />,
      title: "Exam Results",
      description: "Record and analyze examination results with customizable grading systems for university courses.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Attendance",
      description: "Track student and faculty attendance with automated reports and notifications.",
    },
    {
      icon: <Bus className="h-10 w-10" />,
      title: "Campus Transport",
      description: "Manage university transport routes, vehicles, and student assignments efficiently.",
    },
    {
      icon: <Bell className="h-10 w-10" />,
      title: "Notice Upload",
      description: "Share announcements, circulars, and important notices with specific university departments.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Powerful Features for Modern Universities
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform offers everything you need to run your higher education institution efficiently.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="text-primary">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Update the UserTypesSection to reflect university roles
function UserTypesSection() {
  const userTypes = [
    {
      title: "Admin",
      description: "Complete control over the system with access to all modules and settings.",
      image: "/administrator-at-work.png",
    },
    {
      title: "Professor",
      description: "Manage classes, record attendance, upload results, and communicate with students.",
      image: "/engaged-classroom.png",
    },
    {
      title: "Student",
      description: "Access timetables, view results, download study materials, and check notices.",
      image: "/focused-student.png",
    },
    {
      title: "Dean",
      description: "Monitor university performance, generate reports, and make data-driven decisions.",
      image: "/principal-at-desk.png",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Tailored for Every Role</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Different interfaces and permissions for various stakeholders in the higher education ecosystem.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {userTypes.map((userType, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image src={userType.image || "/placeholder.svg"} alt={userType.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">{userType.title}</h3>
              <p className="text-center text-muted-foreground">{userType.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Update the Footer component to use our new Logo
function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <Logo size="sm" />
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Terms
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            GitHub
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Tanta University. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
