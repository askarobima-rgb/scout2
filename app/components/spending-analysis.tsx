"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Calendar, Users, ShoppingCart, Gamepad2, Plane, Coffee } from "lucide-react"

interface SpendingAnalysisProps {
  walletAddress: string
}

export default function SpendingAnalysis({ walletAddress }: SpendingAnalysisProps) {
  const spendingCategories = [
    { category: "Gaming", amount: 4520.3, percentage: 36, icon: Gamepad2, color: "bg-purple-500" },
    { category: "Daily Purchases", amount: 4395.25, percentage: 35, icon: Coffee, color: "bg-blue-500" },
    { category: "Travel", amount: 4395.25, percentage: 35, icon: Plane, color: "bg-green-500" },
    { category: "Shopping", amount: 1758.1, percentage: 14, icon: ShoppingCart, color: "bg-orange-500" },
  ]

  const generationalData = [
    { generation: "Gen Z", spending: 8915.55, traits: ["High gaming spend", "Mobile-first", "DeFi native"] },
    { generation: "Millennials", spending: 6395.25, traits: ["Balanced portfolio", "Risk-aware", "Long-term focus"] },
    {
      generation: "Gen X",
      generation: "Gen X",
      spending: 3119.7,
      traits: ["Conservative", "Traditional assets", "Stable patterns"],
    },
  ]

  const behaviorPatterns = [
    {
      pattern: "Weekend Spending Spike",
      frequency: "Weekly",
      impact: "High",
      description: "40% increase in transactions on weekends",
    },
    {
      pattern: "Payday Correlation",
      frequency: "Monthly",
      impact: "Medium",
      description: "Large purchases align with salary dates",
    },
    {
      pattern: "Gas Fee Optimization",
      frequency: "Daily",
      impact: "Low",
      description: "Transactions clustered during low-fee periods",
    },
    {
      pattern: "Seasonal Gaming",
      frequency: "Quarterly",
      impact: "High",
      description: "Gaming spend increases 60% during game releases",
    },
  ]

  const unusualSpending = [
    { date: "2024-01-15", amount: 2500, category: "Gaming", deviation: "+180%", flag: "High" },
    { date: "2024-01-12", amount: 850, category: "Travel", deviation: "+45%", flag: "Medium" },
    { date: "2024-01-10", amount: 1200, category: "Shopping", deviation: "+90%", flag: "High" },
  ]

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Spending Patterns for {walletAddress}</h2>
        <p className="text-sm text-muted-foreground">Categorized spending analysis for this specific wallet</p>
      </div>
      {/* Spending Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {spendingCategories.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.category}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{item.category}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${item.amount.toLocaleString()}</div>
                <Progress value={item.percentage} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-1">{item.percentage}% of total spending</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Tabs defaultValue="patterns" className="space-y-4">
        <TabsList>
          <TabsTrigger value="patterns">Spending Behavior Patterns for {walletAddress}</TabsTrigger>
          <TabsTrigger value="generational">Generational Analysis for {walletAddress}</TabsTrigger>
          <TabsTrigger value="unusual">Unusual Spending for {walletAddress}</TabsTrigger>
        </TabsList>

        <TabsContent value="patterns">
          <Card>
            <CardHeader>
              <CardTitle>Spending Behavior Patterns</CardTitle>
              <CardDescription>AI-powered analysis of spending habits and patterns for this wallet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {behaviorPatterns.map((pattern, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">{pattern.pattern}</p>
                        <p className="text-sm text-muted-foreground">{pattern.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          pattern.impact === "High"
                            ? "destructive"
                            : pattern.impact === "Medium"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {pattern.impact} Impact
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{pattern.frequency}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="generational">
          <Card>
            <CardHeader>
              <CardTitle>Generational Spending Analysis</CardTitle>
              <CardDescription>Behavioral analysis compared to generational cohorts for this wallet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {generationalData.map((gen, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-blue-500" />
                        <h3 className="font-medium">{gen.generation}</h3>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${gen.spending.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Average spending</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {gen.traits.map((trait, traitIndex) => (
                        <Badge key={traitIndex} variant="outline">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unusual">
          <Card>
            <CardHeader>
              <CardTitle>Unusual Spending Detection</CardTitle>
              <CardDescription>Anomalies and deviations from normal spending patterns for this wallet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {unusualSpending.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950"
                  >
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="font-medium">{item.category} Purchase</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${item.amount.toLocaleString()}</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant={item.flag === "High" ? "destructive" : "default"}>{item.deviation}</Badge>
                        <Badge variant="outline">{item.flag} Risk</Badge>
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
