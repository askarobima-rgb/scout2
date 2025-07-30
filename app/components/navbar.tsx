"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  const getBadgeColor = (path: string) => {
    if (pathname.startsWith(path)) {
      if (path === "/wallet") return "bg-green-500 hover:bg-green-500/80" // Green for Wallet Tracker
      if (path === "/network") return "bg-blue-500 hover:bg-blue-500/80" // Blue for Network Overview
      if (path === "/opportunities") return "bg-yellow-500 hover:bg-yellow-500/80" // Yellow for Opportunities
    }
    return "bg-muted text-muted-foreground"
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-4 md:px-6 bg-card border-b border-border shadow-sm">
      <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
        <span className="text-primary">Sei</span>Scout
      </Link>
      <nav className="flex items-center gap-4 sm:gap-6">
        <Link
          href="/wallet/demo"
          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          Wallet Tracker
          <Badge className={cn("ml-1", getBadgeColor("/wallet"))}>
            {pathname.startsWith("/wallet") ? "Active" : "Inactive"}
          </Badge>
        </Link>
        <Link
          href="/network"
          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          Network Overview
          <Badge className={cn("ml-1", getBadgeColor("/network"))}>
            {pathname.startsWith("/network") ? "Active" : "Inactive"}
          </Badge>
        </Link>
        <Link
          href="/opportunities"
          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          Opportunities
          <Badge className={cn("ml-1", getBadgeColor("/opportunities"))}>
            {pathname.startsWith("/opportunities") ? "Active" : "Inactive"}
          </Badge>
        </Link>
      </nav>
    </header>
  )
}
