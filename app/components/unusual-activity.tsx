"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, TrendingUp, Users, Ban, Eye, Activity } from "lucide-react"

interface UnusualActivityProps {
  walletAddress: string
}

export default function UnusualActivity({ walletAddress }: UnusualActivityProps) {
  const behavioralAnomalies = [
    {
      pattern: "Collective Behavior Anomaly",
      description: "Wallet participating in coordinated trading pattern with 25 other addresses",
      riskLevel: "High",
      confidence: 89,
      affectedWallets: 26,
      timeframe: "Last 6 hours",
    },
    {
      pattern: "Unusual Time Pattern",
      description: "Trading activity outside normal hours (3-5 AM) for 7 consecutive days",
      riskLevel: "Medium",
      confidence: 76,
      affectedWallets: 1,
      timeframe: "Last 7 days",
    },
    {
      pattern: "Geographic Anomaly",
      description: "Transactions from multiple geographic locations within short timeframe",
      riskLevel: "High",
      confidence: 92,
      affectedWallets: 1,
      timeframe: "Last 2 hours",
    },
  ]

  const sanctionsCheck = [
    {
      address: "sei1sanction...abc",
      status: "FLAGGED",
      source: "OFAC",
      reason: "Sanctioned entity",
      dateAdded: "2024-01-10",
      riskScore: 10,
    },
    {
      address: "sei1suspicious...def",
      status: "WATCH",
      source: "FATF",
      reason: "High-risk jurisdiction",
      dateAdded: "2024-01-08",
      riskScore: 7,
    },
    {
      address: "sei1mixer...ghi",
      status: "FLAGGED",
      source: "Internal",
      reason: "Mixer/Tumbler activity",
      dateAdded: "2024-01-12",
      riskScore: 9,
    },
  ]

  const mlAnomalies = [
    {
      type: "Transaction Pattern",
      anomalyScore: 0.95,
      description: "Highly unusual transaction timing and amounts",
      features: ["Amount variance", "Time clustering", "Gas optimization"],
      recommendation: "Immediate review required",
    },
    {
      type: "Network Behavior",
      anomalyScore: 0.78,
      description: "Abnormal interaction with smart contracts",
      features: ["Contract diversity", "Call frequency", "Value distribution"],
      recommendation: "Monitor closely",
    },
    {
      type: "Liquidity Pattern",
      anomalyScore: 0.82,
      description: "Unusual liquidity provision/removal patterns",
      features: ["Pool selection", "Timing patterns", "Amount consistency"],
      recommendation: "Flag for investigation",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Unusual Activity Detection for {walletAddress}</h2>
        <p className="text-sm text-muted-foreground">Anomaly detection and risk analysis for this specific wallet</p>
      </div>

      <Tabs defaultValue="behavioral" className="space-y-4">
        <TabsList>
          <TabsTrigger value="behavioral">Behavioral Analysis</TabsTrigger>
          <TabsTrigger value="sanctions">Sanctions Check</TabsTrigger>
          <TabsTrigger value="ml-anomalies">ML Anomalies</TabsTrigger>
        </TabsList>

        <TabsContent value="behavioral">
          <Card>
            <CardHeader>
              <CardTitle>Behavioral Anomaly Detection for {walletAddress}</CardTitle>
              <CardDescription>Advanced pattern recognition for unusual wallet behavior</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {behavioralAnomalies.map((anomaly, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-orange-500" />
                        <h3 className="font-medium">{anomaly.pattern}</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={anomaly.riskLevel === "High" ? "destructive" : "default"}>
                          {anomaly.riskLevel} Risk
                        </Badge>
                        <Badge variant="outline">{anomaly.confidence}% Confidence</Badge>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">{anomaly.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Affected Wallets</p>
                          <p className="font-medium">{anomaly.affectedWallets}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Timeframe</p>
                          <p className="font-medium">{anomaly.timeframe}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Investigate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sanctions">
          <Card>
            <CardHeader>
              <CardTitle>Sanctions Check for {walletAddress}</CardTitle>
              <CardDescription>OFAC, FATF, and Interpol database checking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sanctionsCheck.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Ban className="h-5 w-5 text-red-500" />
                        <div>
                          <p className="font-medium font-mono text-sm">{item.address}</p>
                          <p className="text-sm text-muted-foreground">{item.reason}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={item.status === "FLAGGED" ? "destructive" : "secondary"}>{item.status}</Badge>
                        <p className="text-xs text-muted-foreground mt-1">Risk: {item.riskScore}/10</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Source</p>
                          <p className="font-medium">{item.source}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Date Added</p>
                          <p className="font-medium">{item.dateAdded}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Shield className="h-4 w-4 mr-2" />
                        Block
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ml-anomalies">
          <Card>
            <CardHeader>
              <CardTitle>ML Anomaly Detection for {walletAddress}</CardTitle>
              <CardDescription>AI-powered collective behavior analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mlAnomalies.map((anomaly, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Activity className="h-5 w-5 text-purple-500" />
                        <h3 className="font-medium">{anomaly.type}</h3>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{(anomaly.anomalyScore * 100).toFixed(0)}%</p>
                        <p className="text-xs text-muted-foreground">Anomaly Score</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">{anomaly.description}</p>

                    <div className="mb-3">
                      <p className="text-xs text-muted-foreground mb-2">Key Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {anomaly.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge variant={anomaly.recommendation.includes("Immediate") ? "destructive" : "default"}>
                        {anomaly.recommendation}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Analyze
                      </Button>
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
