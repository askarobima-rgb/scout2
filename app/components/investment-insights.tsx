"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, Target, Brain, Users, Copy, Star, Activity } from "lucide-react"

interface InvestmentInsightsProps {
  walletAddress: string
}

export default function InvestmentInsights({ walletAddress }: InvestmentInsightsProps) {
  const smartMoneyWallets = [
    {
      address: "sei1smart...abc",
      roi: 245.6,
      winRate: 89,
      followers: 1250,
      strategy: "DeFi Yield Farming",
      recentTrade: "SEI → USDC (+12.5%)",
    },
    {
      address: "sei1whale...def",
      roi: 189.3,
      winRate: 76,
      followers: 890,
      strategy: "Swing Trading",
      recentTrade: "ATOM → SEI (+8.2%)",
    },
    {
      address: "sei1alpha...ghi",
      roi: 156.7,
      winRate: 82,
      followers: 2100,
      strategy: "Long-term Hold",
      recentTrade: "USDC → SEI (+15.1%)",
    },
  ]

  const alphaSignals = [
    {
      signal: "Large SEI Accumulation",
      confidence: 92,
      timeframe: "24h",
      action: "BUY",
      reasoning: "Smart money wallets accumulating 2.5M SEI tokens",
      impact: "High",
    },
    {
      signal: "USDC Liquidity Increase",
      confidence: 78,
      timeframe: "12h",
      action: "WATCH",
      reasoning: "Unusual USDC inflows suggest upcoming volatility",
      impact: "Medium",
    },
    {
      signal: "DeFi Protocol Migration",
      confidence: 85,
      timeframe: "6h",
      action: "FOLLOW",
      reasoning: "Top wallets moving funds to new yield opportunities",
      impact: "High",
    },
  ]

  const performanceMetrics = [
    { metric: "Total ROI", value: "156.7%", change: "+12.3%", period: "30d" },
    { metric: "Win Rate", value: "73%", change: "+5.2%", period: "30d" },
    { metric: "Avg Hold Time", value: "12.5d", change: "-2.1d", period: "30d" },
    { metric: "Portfolio Diversity", value: "8.2", change: "+0.5", period: "30d" },
  ]

  const predictiveInsights = [
    {
      prediction: "SEI Price Movement",
      probability: 78,
      direction: "UP",
      timeframe: "7 days",
      factors: ["Smart money accumulation", "Technical breakout", "Volume increase"],
    },
    {
      prediction: "DeFi Yield Opportunity",
      probability: 85,
      direction: "OPPORTUNITY",
      timeframe: "3 days",
      factors: ["New protocol launch", "High APY rates", "Low risk score"],
    },
    {
      prediction: "Market Volatility",
      probability: 65,
      direction: "NEUTRAL",
      timeframe: "24 hours",
      factors: ["Mixed signals", "Consolidation pattern", "Low volume"],
    },
  ]

  return (
    <div className="space-y-6">
      {/* Performance Overview */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Investment Performance for {walletAddress}</h2>
        <p className="text-sm text-muted-foreground">Investment strategy and performance metrics for this wallet</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric) => (
          <Card key={metric.metric}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.metric}</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {metric.change.startsWith("+") ? (
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1 text-red-500" />
                )}
                {metric.change} ({metric.period})
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="alpha" className="space-y-4">
        <TabsList>
          <TabsTrigger value="alpha">Alpha Signals</TabsTrigger>
          <TabsTrigger value="smart-money">Smart Money</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
        </TabsList>

        <TabsContent value="alpha">
          <Card>
            <CardHeader>
              <CardTitle>Alpha Signals for {walletAddress}</CardTitle>
              <CardDescription>Real-time investment opportunities and market insights for this wallet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alphaSignals.map((signal, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Activity className="h-5 w-5 text-blue-500" />
                        <h3 className="font-medium">{signal.signal}</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            signal.action === "BUY" ? "default" : signal.action === "WATCH" ? "secondary" : "outline"
                          }
                        >
                          {signal.action}
                        </Badge>
                        <Badge variant="outline">{signal.timeframe}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{signal.reasoning}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Confidence</p>
                          <Progress value={signal.confidence} className="w-20" />
                        </div>
                        <Badge variant={signal.impact === "High" ? "destructive" : "default"}>
                          {signal.impact} Impact
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Trade
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="smart-money">
          <Card>
            <CardHeader>
              <CardTitle>Smart Money Analysis for {walletAddress}</CardTitle>
              <CardDescription>
                Follow top-performing wallets and their strategies related to this wallet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {smartMoneyWallets.map((wallet, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <div>
                          <p className="font-medium">{wallet.address}</p>
                          <p className="text-sm text-muted-foreground">{wallet.strategy}</p>
                        </div>
                      </div>
                      <Button size="sm">
                        <Users className="h-4 w-4 mr-2" />
                        Follow
                      </Button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-3">
                      <div>
                        <p className="text-xs text-muted-foreground">ROI</p>
                        <p className="font-bold text-green-600">+{wallet.roi}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Win Rate</p>
                        <p className="font-bold">{wallet.winRate}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Followers</p>
                        <p className="font-bold">{wallet.followers.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Recent Trade</p>
                        <p className="text-sm font-medium">{wallet.recentTrade}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictions">
          <Card>
            <CardHeader>
              <CardTitle>Predictive Analytics</CardTitle>
              <CardDescription>AI-powered market predictions and investment insights for this wallet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictiveInsights.map((insight, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Brain className="h-5 w-5 text-purple-500" />
                        <h3 className="font-medium">{insight.prediction}</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            insight.direction === "UP"
                              ? "default"
                              : insight.direction === "OPPORTUNITY"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {insight.direction}
                        </Badge>
                        <Badge variant="outline">{insight.timeframe}</Badge>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground">Probability</span>
                        <span className="text-xs font-medium">{insight.probability}%</span>
                      </div>
                      <Progress value={insight.probability} />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Key Factors:</p>
                      <div className="flex flex-wrap gap-1">
                        {insight.factors.map((factor, factorIndex) => (
                          <Badge key={factorIndex} variant="outline" className="text-xs">
                            {factor}
                          </Badge>
                        ))}
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
