"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, DollarSign, TrendingUp, Users, Activity, Copy, Eye, Download } from "lucide-react"
import Navbar from "../components/navbar"
import MetricCard from "../components/metric-card"
import FlashAlertFeed from "../components/flash-alert-feed"
import NetworkOverview from "../components/network-overview"
import OverviewDashboard from "../components/overview-dashboard"
import SpendingAnalysis from "../components/spending-analysis"
import InvestmentInsights from "../components/investment-insights"
import UnusualActivity from "../components/unusual-activity"
import SeiIntegration from "../components/sei-integration"
import RealTimeMonitoring from "../components/real-time-monitoring"

export default function Dashboard() {
  const searchParams = useSearchParams()
  const [walletAddress, setWalletAddress] = useState(searchParams.get("addr") || "")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const handleAnalyze = () => {
    if (!walletAddress) return

    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 2000)
  }

  const handleCopyTrade = () => {
    // TODO: Implement copy trade functionality
    console.log("Copy trade clicked")
  }

  const handleWatchlist = () => {
    // TODO: Implement watchlist functionality
    console.log("Add to watchlist clicked")
  }

  const handleExport = () => {
    // TODO: Implement export functionality
    console.log("Export clicked")
  }

  return (
    <div className="min-h-screen bg-[#0C101A]">
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        {/* Search Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#718096]" />
                <Input
                  placeholder="Enter Sei wallet address to analyze..."
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="pl-10 bg-[#1A202C] border-[#2D3748] text-[#F7FAFC] placeholder-[#718096]"
                />
              </div>
            </div>
            <Button
              onClick={handleAnalyze}
              disabled={!walletAddress || isAnalyzing}
              className="bg-[#22D3EE] hover:bg-[#0891B2] text-[#0C101A]"
            >
              {isAnalyzing ? "Analyzing..." : "Scout"}
            </Button>
          </div>

          {walletAddress && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#CBD5E0]">
                <span className="font-medium">Analyzing:</span>{" "}
                <span className="font-mono text-[#22D3EE]">{walletAddress}</span>
              </p>
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopyTrade}
                  className="border-[#2D3748] text-[#CBD5E0] hover:bg-[#1A202C] bg-transparent"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Trade
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleWatchlist}
                  className="border-[#2D3748] text-[#CBD5E0] hover:bg-[#1A202C] bg-transparent"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Watchlist
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleExport}
                  className="border-[#2D3748] text-[#CBD5E0] hover:bg-[#1A202C] bg-transparent"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Portfolio Value"
            walletAddress={walletAddress}
            icon={DollarSign}
            endpoint="portfolio"
            formatter={(val) => `$${(val / 1000).toFixed(1)}K`}
          />
          <MetricCard
            title="PulseScore"
            walletAddress={walletAddress}
            icon={TrendingUp}
            endpoint="pulse-score"
            formatter={(val) => `${val}/100`}
          />
          <MetricCard title="Active Positions" walletAddress={walletAddress} icon={Users} endpoint="positions" />
          <MetricCard title="24h Activity" walletAddress={walletAddress} icon={Activity} endpoint="activity" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Dashboard */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-[#1A202C] border-[#2D3748]">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-[#22D3EE] data-[state=active]:text-[#0C101A] text-[#CBD5E0]"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="network"
                  className="data-[state=active]:bg-[#22D3EE] data-[state=active]:text-[#0C101A] text-[#CBD5E0]"
                >
                  Network
                </TabsTrigger>
                <TabsTrigger
                  value="analysis"
                  className="data-[state=active]:bg-[#22D3EE] data-[state=active]:text-[#0C101A] text-[#CBD5E0]"
                >
                  Analysis
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="space-y-6">
                  {walletAddress ? (
                    <OverviewDashboard walletAddress={walletAddress} />
                  ) : (
                    <div className="text-center py-12 text-[#718096]">
                      <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Enter a wallet address to start analysis</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="network">
                <NetworkOverview />
              </TabsContent>

              <TabsContent value="analysis">
                <div className="space-y-6">
                  {walletAddress ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <SpendingAnalysis walletAddress={walletAddress} />
                      <InvestmentInsights walletAddress={walletAddress} />
                      <UnusualActivity walletAddress={walletAddress} />
                      <SeiIntegration walletAddress={walletAddress} />
                      <RealTimeMonitoring walletAddress={walletAddress} />
                    </div>
                  ) : (
                    <div className="text-center py-12 text-[#718096]">
                      <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Advanced analysis tools coming soon</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - FlashAlert Feed */}
          <div className="lg:col-span-1">
            <FlashAlertFeed />
          </div>
        </div>
      </div>
    </div>
  )
}
