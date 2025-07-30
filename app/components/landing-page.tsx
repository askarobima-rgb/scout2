"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SearchBar } from "./search-bar"
import { Shield, Zap, TrendingUp, AlertTriangle, Target, Activity, BarChart3, ChevronRight, Eye } from "lucide-react"

export default function LandingPage() {
  const [searchAddress, setSearchAddress] = useState("")

  const sampleWallets = [
    { label: "Demo Whale", address: "sei1whale7k2x8n9p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0" },
    { label: "DeFi Alpha", address: "sei1alpha3k2x8n9p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0" },
    { label: "Smart Money", address: "sei1smart5k2x8n9p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0" },
  ]

  const handleQuickDemo = (address: string) => {
    setSearchAddress(address)
  }

  const handleSearch = () => {
    if (searchAddress) {
      window.location.href = `/dashboard?addr=${encodeURIComponent(searchAddress)}`
    }
  }

  return (
    <div className="min-h-screen bg-[#0C101A] text-[#F7FAFC]">
      {/* Hero Section with Search */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 text-[#22D3EE] mr-4" />
            <div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent">
                SeiScout – AI Wallet Radar
              </h1>
              <p className="text-xl md:text-2xl text-[#22D3EE] font-medium mt-2">Insight ≦ 3s - Alert &lt; 1s</p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-[#CBD5E0] max-w-3xl mx-auto mb-10 leading-relaxed">
            Analyze Sei Network wallets and monitor network activity with AI-powered insights.
          </p>

          {/* Main Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar />
          </div>

          {/* Quick Demo Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {sampleWallets.map((wallet, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleQuickDemo(wallet.address)}
                className="border-[#2D3748] text-[#CBD5E0] hover:bg-[#1A202C] hover:text-[#22D3EE]"
              >
                <Eye className="h-4 w-4 mr-2" />
                {wallet.label}
              </Button>
            ))}
          </div>

          <Link href="/network">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] hover:from-[#0891B2] hover:to-[#2563EB] text-[#0C101A] font-bold shadow-xl"
            >
              📊 Explore Network Now <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#1A202C]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#F7FAFC]">DeFi Radar Suite</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A202C] border-[#2D3748] hover:border-[#22D3EE]/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#22D3EE]/20 rounded-lg">
                    <Zap className="h-6 w-6 text-[#22D3EE]" />
                  </div>
                  <CardTitle className="text-[#F7FAFC]">PulseScore</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#CBD5E0]">
                  Real-time wallet health scoring dengan update sub-detik. Monitor aktivitas dan performa portfolio.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A202C] border-[#2D3748] hover:border-[#22D3EE]/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#EF4444]/20 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-[#EF4444]" />
                  </div>
                  <CardTitle className="text-[#F7FAFC]">FlashAlert</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#CBD5E0]">
                  Deteksi anomali instan dengan latensi {"<"}400ms. Notifikasi real-time untuk aktivitas mencurigakan.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A202C] border-[#2D3748] hover:border-[#22D3EE]/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#10B981]/20 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-[#10B981]" />
                  </div>
                  <CardTitle className="text-[#F7FAFC]">Alpha Leaderboard</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#CBD5E0]">
                  Track smart money movements dan copy-trade dari top performers di ekosistem Sei.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A202C] border-[#2D3748] hover:border-[#22D3EE]/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#8B5CF6]/20 rounded-lg">
                    <Target className="h-6 w-6 text-[#8B5CF6]" />
                  </div>
                  <CardTitle className="text-[#F7FAFC]">Sei Native</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#CBD5E0]">
                  Deep integration dengan CLOB, SeiDB, dan Twin-Turbo consensus untuk insights maksimal.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A202C] border-[#2D3748] hover:border-[#22D3EE]/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#F59E0B]/20 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-[#F59E0B]" />
                  </div>
                  <CardTitle className="text-[#F7FAFC]">Behavior Patterns</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#CBD5E0]">
                  ML-powered pattern recognition untuk prediksi pergerakan dan identifikasi trend.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A202C] border-[#2D3748] hover:border-[#22D3EE]/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#06B6D4]/20 rounded-lg">
                    <Activity className="h-6 w-6 text-[#06B6D4]" />
                  </div>
                  <CardTitle className="text-[#F7FAFC]">Network Graph</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#CBD5E0]">
                  Visualisasi interaksi wallet dan flow dana dalam jaringan Sei secara real-time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#22D3EE] mb-2">{"<"}400ms</div>
              <div className="text-[#CBD5E0]">FlashAlert Latency</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#22D3EE] mb-2">50K+</div>
              <div className="text-[#CBD5E0]">Wallets Monitored</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#22D3EE] mb-2">99.9%</div>
              <div className="text-[#CBD5E0]">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#22D3EE]/20 to-[#3B82F6]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F7FAFC]">Ready to Scout Sei Network?</h2>
          <p className="text-lg text-[#CBD5E0] mb-8 max-w-2xl mx-auto">
            Join ribuan traders yang menggunakan SeiScout untuk mendapatkan alpha dan menghindari risiko.
          </p>
          <Link href="/network" className="w-full max-w-lg">
            <Button className="w-full py-3 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/80">
              📊 Explore Network Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#2D3748] bg-[#1A202C]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#718096]">© 2024 SeiScout. Advanced wallet intelligence for Sei Network.</p>
        </div>
      </footer>
    </div>
  )
}
