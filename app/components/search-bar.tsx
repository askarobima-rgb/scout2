"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SearchBar() {
  const [address, setAddress] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault()
    if (address) {
      router.push(`/wallet/${address}`)
    }
  }

  const handleDemoAddress = (demoAddr: string) => {
    setAddress(demoAddr)
    toast({
      title: "Demo Address Copied!",
      description: demoAddr,
    })
  }

  return (
    <form onSubmit={handleAnalyze} className="w-full max-w-lg space-y-4">
      <div className="relative flex items-center">
        <Search className="absolute left-3 text-muted-foreground" size={20} />
        <Input
          type="text"
          placeholder="Enter Sei wallet address..."
          className="pl-10 pr-24 py-2 rounded-lg bg-card border border-border focus:ring-primary focus:border-primary"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          autoFocus
        />
        <Button type="submit" className="absolute right-2 bg-primary text-primary-foreground hover:bg-primary/90">
          Analyze
        </Button>
      </div>
      <div className="text-sm text-muted-foreground flex items-center gap-2">
        <span>Contoh:</span>
        <Button
          variant="link"
          className="h-auto p-0 text-muted-foreground hover:text-foreground"
          onClick={() => handleDemoAddress("sei1demoaddress1")}
        >
          sei1demo…
        </Button>
        <Button
          variant="link"
          className="h-auto p-0 text-muted-foreground hover:text-foreground"
          onClick={() => handleDemoAddress("sei1demoaddress2")}
        >
          sei1another…
        </Button>
        <Button
          variant="link"
          className="h-auto p-0 text-muted-foreground hover:text-foreground"
          onClick={() => handleDemoAddress("sei1demoaddress3")}
        >
          sei1third…
        </Button>
      </div>
    </form>
  )
}
