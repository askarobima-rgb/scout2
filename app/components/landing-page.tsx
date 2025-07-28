"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Globe,
  BarChart3,
  PieChart,
  TrendingUp,
  AlertTriangle,
  Target,
  Activity,
  Shield,
  Rocket,
  Lightbulb,
  Users,
  DollarSign,
  LineChart,
  ChevronRight,
  Search,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-200">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-80 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Shield className="mx-auto h-16 w-16 text-white mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Sei Network Wallet Analyst
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Unlock deep insights into Sei Network wallet behavior. Monitor spending, analyze investments, and detect
            unusual activities with cutting-edge analytics.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Analyzing Now <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center size-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-semibold mb-2">1. Enter Wallet Address</CardTitle>
              <CardContent className="text-slate-600 dark:text-slate-400">
                Simply input any Sei Network wallet address you wish to analyze. Our system is ready to process.
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center size-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 mx-auto mb-4">
                <Rocket className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-semibold mb-2">2. Initiate Analysis</CardTitle>
              <CardContent className="text-slate-600 dark:text-slate-400">
                Click 'Analyze' and let our powerful engine process vast amounts of on-chain data in real-time.
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center size-16 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mx-auto mb-4">
                <Lightbulb className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-semibold mb-2">3. Gain Insights</CardTitle>
              <CardContent className="text-slate-600 dark:text-slate-400">
                Explore comprehensive dashboards, identify patterns, and receive alerts on critical activities.
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-700 dark:text-slate-300">
            Dive Deeper into Our Analysis Modules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Network Overview</CardTitle>
                <Globe className="h-5 w-5 text-blue-500" />
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                Monitor the overall health and activity of the Sei Network, including real-time alerts and
                infrastructure status.
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Overview Dashboard</CardTitle>
                <BarChart3 className="h-5 w-5 text-indigo-500" />
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                Get a high-level summary of any specific wallet's portfolio, balances, and recent activity.
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Spending Analysis</CardTitle>
                <PieChart className="h-5 w-5 text-orange-500" />
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                Uncover detailed spending patterns, categorize transactions, and identify behavioral trends.
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Investment Insights</CardTitle>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                Discover potential investment strategies, analyze smart money movements, and track portfolio
                performance.
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Unusual Activity Detection</CardTitle>
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                Receive instant alerts on suspicious transactions, behavioral anomalies, and sanctions checks.
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Sei Native Integration</CardTitle>
                <Target className="h-5 w-5 text-purple-500" />
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                Deep dive into Sei-specific features like CLOB trading activity and SeiDB access patterns.
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Real-time Monitoring</CardTitle>
                <Activity className="h-5 w-5 text-cyan-500" />
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                Keep a live watch on transaction flows, gas fees, and network congestion for immediate insights.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-700 dark:text-slate-300">
            Numbers Speak Louder
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <p className="text-5xl font-bold text-blue-600 mb-2">10K+</p>
              <p className="text-lg text-slate-600 dark:text-slate-400">Wallets Analyzed</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
              <DollarSign className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <p className="text-5xl font-bold text-purple-600 mb-2">$50M+</p>
              <p className="text-lg text-slate-600 dark:text-slate-400">Value Monitored Daily</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
              <LineChart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <p className="text-5xl font-bold text-green-600 mb-2">99%</p>
              <p className="text-lg text-slate-600 dark:text-slate-400">Accuracy in Anomaly Detection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">Ready to Uncover Sei Wallet Secrets?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Join the leading edge of blockchain analysis. Start your journey with Sei Network Wallet Analyst today.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started for Free <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-slate-400 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Sei Network Wallet Analyst. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Separator orientation="vertical" className="h-4 bg-slate-700" />
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
