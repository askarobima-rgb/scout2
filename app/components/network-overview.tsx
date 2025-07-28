"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  AlertTriangle,
  Target,
  Network,
  BarChart3,
  Eye,
  Bell,
} from "lucide-react"

export default function NetworkOverview() {
  const [alerts, setAlerts] = useState(3)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date())
      if (Math.random() > 0.8) {
        setAlerts((prev) => prev + 1)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const networkMetrics = [
    { metric: "Daily Volume", value: "$45.2M", change: "+12.3%", icon: DollarSign },
    { metric: "Active Users", value: "127,450", change: "+8.7%", icon: Users },
    { metric: "Total TVL", value: "$892.1M", change: "+15.2%", icon: TrendingUp },
    { metric: "Network TPS", value: "22,000", change: "Stable", icon: Activity },
  ]

  const seiNetworkStatus = [
    { metric: "Finality Time", value: "390ms", status: "Optimal", description: "Sub-400ms transaction finality" },
    { metric: "Active Validators", value: "125", status: "Healthy", description: "Network decentralization" },
    { metric: "Network Uptime", value: "99.98%", status: "Excellent", description: "Network reliability" },
    { metric: "Consensus Health", value: "100%", status: "Optimal", description: "Twin-Turbo performance" },
  ]

  const globalFlashAlerts = [
    {
      id: 1,
      type: "Network-Wide Rapid Transfers",
      severity: "High",
      timestamp: "2 minutes ago",
      description: "Detected 49 wallets with unusual rapid transfer patterns",
      affectedWallets: 49,
      responseTime: "285ms",
    },
    {
      id: 2,
      type: "High Frequency Trading Spike",
      severity: "Medium",
      timestamp: "8 minutes ago",
      description: "25% increase in high-frequency trading across CLOB",
      affectedWallets: 23,
      responseTime: "320ms",
    },
    {
      id: 3,
      type: "Sanctions List Update",
      severity: "High",
      timestamp: "15 minutes ago",
      description: "3 new addresses added to OFAC sanctions list",
      affectedWallets: 3,
      responseTime: "195ms",
    },
  ]

  const topSmartMoney = [
    {
      address: "sei1smart...abc",
      roi: 245.6,
      winRate: 89,
      volume24h: 2450000,
      followers: 1250,
      strategy: "DeFi Yield Farming",
    },
    {
      address: "sei1whale...def",
      roi: 189.3,
      winRate: 76,
      volume24h: 1890000,
      followers: 890,
      strategy: "Swing Trading",
    },
    {
      address: "sei1alpha...ghi",
      roi: 156.7,
      winRate: 82,
      volume24h: 1560000,
      followers: 2100,
      strategy: "Long-term Hold",
    },
  ]

  const globalSpendingTrends = [
    { category: "Gaming", percentage: 36, volume: "$16.2M", growth: "+23%" },
    { category: "DeFi Trading", percentage: 28, volume: "$12.6M", growth: "+18%" },
    { category: "NFT Marketplace", percentage: 20, volume: "$9.0M", growth: "+45%" },
    { category: "Daily Transactions", percentage: 16, volume: "$7.2M", growth: "+12%" },
  ]

  const popularProtocols = [
    { name: "Sei CLOB", tvl: "$245M", users: "45.2K", volume24h: "$12.5M" },
    { name: "SeiSwap", tvl: "$189M", users: "32.1K", volume24h: "$8.9M" },
    { name: "Sei Staking", tvl: "$156M", users: "67.8K", volume24h: "$5.2M" },
    { name: "Sei Lending", tvl: "$98M", users: "18.9K", volume24h: "$3.1M" },
  ]

  return (
    <div className="space-y-6">
      {/* Network Health Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {networkMetrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card key={metric.metric}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.metric}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  {metric.change} from yesterday
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Global Flash Alerts */}
      <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-red-800 dark:text-red-200">
            <Bell className="h-5 w-5" />
            <span>Network-Wide FlashAlerts</span>
            <Badge variant="destructive">{alerts} ACTIVE</Badge>
          </CardTitle>
          <CardDescription className="text-red-700 dark:text-red-300">
            Real-time anomaly detection across the entire Sei Network (Last update: {lastUpdate.toLocaleTimeString()})
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {globalFlashAlerts.map((alert) => (
              <Alert key={alert.id} className="border-red-300 bg-red-100 dark:border-red-700 dark:bg-red-900">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-red-800 dark:text-red-200">
                        {alert.type} - {alert.affectedWallets} wallets affected
                      </p>
                      <p className="text-sm text-red-700 dark:text-red-300">{alert.description}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={alert.severity === "High" ? "destructive" : "default"}>{alert.severity}</Badge>
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">Response: {alert.responseTime}</p>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="network-status" className="space-y-4">
        <TabsList>
          <TabsTrigger value="network-status">Network Status</TabsTrigger>
          <TabsTrigger value="smart-money">Top Smart Money</TabsTrigger>
          <TabsTrigger value="spending-trends">Global Trends</TabsTrigger>
          <TabsTrigger value="protocols">Popular Protocols</TabsTrigger>
        </TabsList>

        <TabsContent value="network-status">
          <Card>
            <CardHeader>
              <CardTitle>Sei Network Infrastructure Status</CardTitle>
              <CardDescription>Real-time performance metrics of Sei Network infrastructure</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {seiNetworkStatus.map((metric) => (
                  <div key={metric.metric} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Target className="h-5 w-5 text-blue-500" />
                        <h3 className="font-medium">{metric.metric}</h3>
                      </div>
                      <Badge
                        variant={metric.status === "Optimal" || metric.status === "Excellent" ? "default" : "secondary"}
                      >
                        {metric.status}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold mb-1">{metric.value}</div>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="smart-money">
          <Card>
            <CardHeader>
              <CardTitle>Top Smart Money Wallets (Network-Wide)</CardTitle>
              <CardDescription>Highest performing wallets across the entire Sei Network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSmartMoney.map((wallet, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">
                          #{index + 1}
                        </div>
                        <div>
                          <p className="font-medium font-mono text-sm">{wallet.address}</p>
                          <p className="text-sm text-muted-foreground">{wallet.strategy}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Analyze
                      </Button>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">ROI</p>
                        <p className="font-bold text-green-600">+{wallet.roi}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Win Rate</p>
                        <p className="font-bold">{wallet.winRate}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">24h Volume</p>
                        <p className="font-bold">${wallet.volume24h.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Followers</p>
                        <p className="font-bold">{wallet.followers.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="spending-trends">
          <Card>
            <CardHeader>
              <CardTitle>Global Spending Trends</CardTitle>
              <CardDescription>Aggregate spending patterns across all Sei Network users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {globalSpendingTrends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">{trend.category}</p>
                        <p className="text-sm text-muted-foreground">{trend.volume} total volume</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{trend.percentage}%</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="default">{trend.growth}</Badge>
                        <Progress value={trend.percentage} className="w-16" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="protocols">
          <Card>
            <CardHeader>
              <CardTitle>Popular DeFi Protocols</CardTitle>
              <CardDescription>Most used protocols on Sei Network by TVL and user count</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularProtocols.map((protocol, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Network className="h-5 w-5 text-purple-500" />
                        <h3 className="font-medium">{protocol.name}</h3>
                      </div>
                      <Badge variant="outline">#{index + 1}</Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">TVL</p>
                        <p className="font-bold">{protocol.tvl}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Users</p>
                        <p className="font-bold">{protocol.users}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">24h Volume</p>
                        <p className="font-bold">{protocol.volume24h}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
