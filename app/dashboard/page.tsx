"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Activity,
  TrendingUp,
  Shield,
  AlertTriangle,
  Target,
  BarChart3,
  PieChart,
  Search,
  Zap,
  Globe,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import NetworkOverview from "../components/network-overview"
import OverviewDashboard from "../components/overview-dashboard"
import SpendingAnalysis from "../components/spending-analysis"
import InvestmentInsights from "../components/investment-insights"
import UnusualActivity from "../components/unusual-activity"
import SeiIntegration from "../components/sei-integration"
import RealTimeMonitoring from "../components/real-time-monitoring"

export default function WalletBehaviorAnalyst() {
  const [walletAddress, setWalletAddress] = useState("sei1abc...xyz")
  const [pulseScore, setPulseScore] = useState(87)
  const [isConnected, setIsConnected] = useState(true)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [activeTab, setActiveTab] = useState("network")

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseScore((prev) => Math.max(0, Math.min(100, prev + Math.floor(Math.random() * 6) - 3)))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setActiveTab("overview")
    }, 1500)
  }

  const getTabClassName = (tabValue: string) => {
    if (tabValue === "network") {
      return activeTab === "network"
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
        : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
    } else {
      return activeTab === tabValue
        ? "bg-indigo-700 text-white shadow-lg"
        : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sei Wallet Analyst
                </h1>
              </div>
              <Badge variant={isConnected ? "default" : "destructive"} className="ml-4">
                {isConnected ? "Connected to Sei Network" : "Disconnected"}
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Network Health: {pulseScore}%</span>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Enter Sei wallet address to analyze..."
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button onClick={handleAnalyze} disabled={isAnalyzing}>
                {isAnalyzing ? "Analyzing..." : "Analyze"}
              </Button>
            </div>
            {walletAddress && (
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Currently Analyzing:</span> {walletAddress}
              </p>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="network" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-7 lg:w-auto lg:grid-cols-7">
            <TabsTrigger value="network" className={getTabClassName("network")}>
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Network</span>
            </TabsTrigger>
            <TabsTrigger value="overview" className={getTabClassName("overview")}>
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="spending" className={getTabClassName("spending")}>
              <PieChart className="h-4 w-4" />
              <span className="hidden sm:inline">Spending</span>
            </TabsTrigger>
            <TabsTrigger value="investment" className={getTabClassName("investment")}>
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Investment</span>
            </TabsTrigger>
            <TabsTrigger value="unusual" className={getTabClassName("unusual")}>
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden sm:inline">Unusual</span>
            </TabsTrigger>
            <TabsTrigger value="sei" className={getTabClassName("sei")}>
              <Target className="h-4 w-4" />
              <span className="hidden sm:inline">Sei Native</span>
            </TabsTrigger>
            <TabsTrigger value="monitoring" className={getTabClassName("monitoring")}>
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">Real-time</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="network">
            <NetworkOverview />
          </TabsContent>

          <TabsContent value="overview">
            <OverviewDashboard walletAddress={walletAddress} />
          </TabsContent>

          <TabsContent value="spending">
            <SpendingAnalysis walletAddress={walletAddress} />
          </TabsContent>

          <TabsContent value="investment">
            <InvestmentInsights walletAddress={walletAddress} />
          </TabsContent>

          <TabsContent value="unusual">
            <UnusualActivity walletAddress={walletAddress} />
          </TabsContent>

          <TabsContent value="sei">
            <SeiIntegration walletAddress={walletAddress} />
          </TabsContent>

          <TabsContent value="monitoring">
            <RealTimeMonitoring walletAddress={walletAddress} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
