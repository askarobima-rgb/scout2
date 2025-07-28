"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, Activity, DollarSign, Target, Shield, Zap } from "lucide-react"

interface OverviewDashboardProps {
  walletAddress: string
}

export default function OverviewDashboard({ walletAddress }: OverviewDashboardProps) {
  const portfolioData = {
    totalValue: 125430.5,
    change24h: 5.67,
    riskScore: 7,
    successRate: 73,
    tokens: [
      { symbol: "SEI", percentage: 53.8, value: 67541.82, change: 2.3 },
      { symbol: "USDC", percentage: 19.9, value: 24960.67, change: 0.1 },
      { symbol: "ATOM", percentage: 15.2, value: 19065.44, change: -1.2 },
      { symbol: "OSMO", percentage: 11.1, value: 13862.57, change: 4.5 },
    ],
  }

  const recentActivity = [
    { type: "Swap", from: "USDC", to: "SEI", amount: "1,500", time: "2 min ago", status: "success" },
    { type: "Stake", token: "SEI", amount: "5,000", time: "1 hour ago", status: "success" },
    { type: "LP Add", pool: "SEI/USDC", amount: "2,500", time: "3 hours ago", status: "success" },
    { type: "Unstake", token: "ATOM", amount: "1,200", time: "1 day ago", status: "pending" },
  ]

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio for {walletAddress}</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${portfolioData.totalValue.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />+{portfolioData.change24h}% from yesterday
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">PulseScore</CardTitle>
            <Zap className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87/100</div>
            <Progress value={87} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">High activity score</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{portfolioData.riskScore}/10</div>
            <Progress value={portfolioData.riskScore * 10} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">Moderate risk</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{portfolioData.successRate}%</div>
            <Progress value={portfolioData.successRate} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">Trading accuracy</p>
          </CardContent>
        </Card>
      </div>

      {/* Token Allocation */}
      <Card>
        <CardHeader>
          <CardTitle>Token Allocation for {walletAddress}</CardTitle>
          <CardDescription>Current portfolio distribution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {portfolioData.tokens.map((token) => (
              <div key={token.symbol} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                    {token.symbol.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{token.symbol}</p>
                    <p className="text-sm text-muted-foreground">${token.value.toLocaleString()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{token.percentage}%</p>
                  <div className="flex items-center text-xs">
                    {token.change > 0 ? (
                      <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1 text-red-500" />
                    )}
                    <span className={token.change > 0 ? "text-green-500" : "text-red-500"}>
                      {token.change > 0 ? "+" : ""}
                      {token.change}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity for {walletAddress}</CardTitle>
          <CardDescription>Latest wallet transactions and interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <Activity className="h-4 w-4 text-blue-500" />
                  <div>
                    <p className="font-medium">{activity.type}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.type === "Swap" && `${activity.from} → ${activity.to}`}
                      {activity.type === "Stake" && `Stake ${activity.token}`}
                      {activity.type === "LP Add" && `Add to ${activity.pool}`}
                      {activity.type === "Unstake" && `Unstake ${activity.token}`}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${activity.amount}</p>
                  <div className="flex items-center space-x-2">
                    <Badge variant={activity.status === "success" ? "default" : "secondary"}>{activity.status}</Badge>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
