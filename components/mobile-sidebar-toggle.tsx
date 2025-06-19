"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useEffect } from "react"

export function MobileSidebarToggle() {
  const toggleSidebar = () => {
    const sidebar = document.getElementById("mobile-sidebar")
    if (sidebar) {
      sidebar.classList.toggle("hidden")
    }
  }

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar")
      const target = event.target as HTMLElement

      if (sidebar && !sidebar.classList.contains("hidden") && !sidebar.contains(target)) {
        sidebar.classList.add("hidden")
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleSidebar}>
      <Menu className="h-5 w-5" />
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  )
}
