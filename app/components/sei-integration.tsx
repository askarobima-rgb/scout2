"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, BarChart3, Network, TrendingUp } from "lucide-react"

interface SeiIntegrationProps {
  walletAddress: string
}

export default function SeiIntegration({ walletAddress }: SeiIntegrationProps) {
  const twinTurboData = [
    {
      block: 2847392,
      timestamp: "2024-01-15 14:23:45",
      transactions: 1247,
      finalityTime: "385ms",
      gasUsed: "45.2M",
      validator: "SeiLabs Validator",
    },
    {
      block: 2847391,
      timestamp: "2024-01-15 14:23:44",
      transactions: 892,
      finalityTime: "392ms",
      gasUsed: "32.1M",
      validator: "Compass Validator",
    },
    {
      block: 2847390,
      timestamp: "2024-01-15 14:23:43",
      transactions: 1156,
      finalityTime: "378ms",
      gasUsed: "41.8M",
      validator: "Fin Validator",
    },
  ]

  const clobAnalysis = [
    {
      pair: "SEI/USDC",
      volume24h: 2450000,
      spread: 0.02,
      depth: 850000,
      orders: 1247,
      priceImpact: 0.15,
    },
    {
      pair: "ATOM/SEI",
      volume24h: 1230000,
      spread: 0.05,
      depth: 420000,
      orders: 892,
      priceImpact: 0.28,
    },
    {
      pair: "OSMO/USDC",
      volume24h: 890000,
      spread: 0.08,
      depth: 320000,
      orders: 634,
      priceImpact: 0.35,
    },
  ]

  const seiDbOptimizations = [
    {
      feature: "State Access Optimization",
      improvement: "45%",
      description: "Faster wallet state queries",
      impact: "High",
    },
    {
      feature: "Transaction Indexing",
      improvement: "60%",
      description: "Improved historical data retrieval",
      impact: "Medium",
    },
    {
      feature: "Real-time Sync",
      improvement: "35%",
      description: "Reduced latency for live updates",
      impact: "High",
    },
  ]

  const walletIntegrations = [
    { name: "Compass Wallet", status: "Connected", users: "45.2K", features: ["Native Sei", "Staking", "DeFi"] },
    { name: "Fin Wallet", status: "Connected", users: "32.1K", features: ["Trading", "Portfolio", "Analytics"] },
    { name: "MetaMask (Sei V2)", status: "Connected", users: "28.9K", features: ["EVM Compatible", "Multi-chain"] },
    { name: "Keplr Wallet", status: "Connected", users: "67.8K", features: ["Cosmos Ecosystem", "IBC"] },
  ]

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Sei Network Integration for {walletAddress}</h2>
        <p className="text-sm text-muted-foreground">How this wallet interacts with Sei Network features</p>
      </div>

      <Tabs defaultValue="clob" className="space-y-4">
        <TabsList>
          <TabsTrigger value="clob">CLOB Activity</TabsTrigger>
          <TabsTrigger value="seidb">SeiDB Access</TabsTrigger>
          <TabsTrigger value="wallets">Wallet Integration</TabsTrigger>
        </TabsList>

        <TabsContent value="clob">
          <Card>
            <CardHeader>
              <CardTitle>CLOB Trading Activity</CardTitle>
              <CardDescription>Trading insights for {walletAddress} on Sei's native CLOB</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clobAnalysis.map((pair, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="h-5 w-5 text-green-500" />
                        <h3 className="font-medium">{pair.pair}</h3>
                      </div>
                      <Badge variant="outline">{pair.orders} orders</Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">24h Volume</p>
                        <p className="font-bold">${pair.volume24h.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Spread</p>
                        <p className="font-bold">{pair.spread}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Depth</p>
                        <p className="font-bold">${pair.depth.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Price Impact</p>
                        <p className="font-bold">{pair.priceImpact}%</p>
                      </div>
                      <div>
                        <Button size="sm" variant="outline">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Trade
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seidb">
          <Card>
            <CardHeader>
              <CardTitle>SeiDB Access Patterns</CardTitle>
              <CardDescription>Database performance insights for {walletAddress}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {seiDbOptimizations.map((optimization, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Database className="h-5 w-5 text-purple-500" />
                        <h3 className="font-medium">{optimization.feature}</h3>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">+{optimization.improvement}</p>
                        <p className="text-xs text-muted-foreground">Performance gain</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">{optimization.description}</p>

                    <div className="flex items-center justify-between">
                      <Badge variant={optimization.impact === "High" ? "default" : "secondary"}>
                        {optimization.impact} Impact
                      </Badge>
                      <Progress value={Number.parseInt(optimization.improvement)} className="w-24" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wallets">
          <Card>
            <CardHeader>
              <CardTitle>Wallet Integration Status</CardTitle>
              <CardDescription>Connected wallet providers and their capabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {walletIntegrations.map((wallet, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Network className="h-5 w-5 text-blue-500" />
                        <div>
                          <p className="font-medium">{wallet.name}</p>
                          <p className="text-sm text-muted-foreground">{wallet.users} active users</p>
                        </div>
                      </div>
                      <Badge variant={wallet.status === "Connected" ? "default" : "secondary"}>{wallet.status}</Badge>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {wallet.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
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
