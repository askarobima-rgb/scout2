"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ArrowRight } from "lucide-react"
import Navbar from "../components/navbar"

export default function WalletTrackerPage() {
  const [walletAddress, setWalletAddress] = useState("")
  const router = useRouter()

  const demoAddresses = [
    { label: "Demo Whale", address: "sei1whale7k2x8n9p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0" },
    { label: "DeFi Alpha", address: "sei1alpha3k2x8n9p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0" },
    { label: "Smart Money", address: "sei1smart5k2x8n9p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0" },
  ]

  const handleAnalyze = () => {
    if (walletAddress.trim()) {
      router.push(`/wallet/${encodeURIComponent(walletAddress.trim())}`)
    }
  }

  const handleDemoAddress = (address: string) => {
    router.push(`/wallet/${encodeURIComponent(address)}`)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAnalyze()
    }
  }

  return (
    <div className="min-h-screen bg-[#0c101a]">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#f7fafc] mb-4">Wallet Tracker</h1>
          <p className="text-[#cbd5e0] mb-8">
            Enter a Sei wallet address to get deep insights, pattern analysis, dan real-time monitoring
          </p>

          <Card className="bg-[#1a202c] border-[#2d3748] p-6 mb-8">
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#718096]" />
                    <Input
                      placeholder="Enter Sei wallet address..."
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="pl-10 bg-[#2d3748] border-[#4a5568] text-[#f7fafc] placeholder-[#718096] h-12 text-lg"
                      autoFocus
                    />
                  </div>
                </div>
                <Button
                  onClick={handleAnalyze}
                  disabled={!walletAddress.trim()}
                  size="lg"
                  className="bg-[#10b981] hover:bg-[#059669] text-white font-semibold h-12 px-8"
                >
                  Track Wallet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-sm text-[#718096] mr-2">Try demo:</span>
                {demoAddresses.map((demo, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleDemoAddress(demo.address)}
                    className="border-[#4a5568] text-[#cbd5e0] hover:bg-[#2d3748] hover:text-[#10b981]"
                  >
                    {demo.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-[#718096] text-sm">
            <p>Supported formats: sei1... addresses on Sei Network</p>
          </div>
        </div>
      </div>
    </div>
  )
}
