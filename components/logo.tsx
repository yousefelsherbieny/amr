import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: 24, height: 24 },
    md: { icon: 32, height: 32 },
    lg: { icon: 48, height: 48 },
  }

  const { icon, height } = sizes[size]

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative" style={{ height, width: icon }}>
        <Image src="/graduation.png" alt="EDU Tanta Logo" width={icon} height={height} />
      </div>
      {showText && (
        <div className="font-bold leading-none">
          <span className="text-foreground">Tanta</span> <span className="text-primary">University</span>
        </div>
      )}
    </Link>
  )
}
