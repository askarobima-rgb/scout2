"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Network, Eye, Brain } from "lucide-react"
import Navbar from "../components/navbar"

export default function Analysis() {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)

  const behaviorPatterns = [
    {
      pattern: "High Frequency Trading",
      confidence: 89,
      description: "Wallet shows consistent high-frequency trading patterns with sub-second execution times",
      risk: "medium",
      frequency: "Daily",
    },
    {
      pattern: "Yield Farming Rotation",
      confidence: 76,
      description: "Regular rotation between different DeFi protocols for yield optimization",
      risk: "low",
      frequency: "Weekly",
    },
    {
      pattern: "Arbitrage Opportunities",
      confidence: 94,
      description: "Systematic exploitation of price differences across DEXs",
      risk: "low",
      frequency: "Hourly",
    },
  ]

  const riskFactors = [
    { factor: "Sanctions Risk", score: 15, status: "low" },
    { factor: "Behavioral Anomaly", score: 45, status: "medium" },
    { factor: "Volume Spike", score: 78, status: "high" },
    { factor: "New Counterparty", score: 32, status: "medium" },
  ]

  const getRiskColor = (status: string) => {
    switch (status) {
      case "low":
        return "text-[#10B981]"
      case "medium":
        return "text-[#F59E0B]"
      case "high":
        return "text-[#EF4444]"
      default:
        return "text-[#718096]"
    }
  }

  const getRiskBg = (status: string) => {
    switch (status) {
      case "low":
        return "bg-[#10B981]"
      case "medium":
        return "bg-[#F59E0B]"
      case "high":
        return "bg-[#EF4444]"
      default:
        return "bg-[#718096]"
    }
  }

  return (
    <div className="min-h-screen bg-[#0C101A]">
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#F7FAFC] mb-2">Advanced Analysis</h1>
          <p className="text-[#CBD5E0]">Deep dive into wallet behavior patterns and risk assessment</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {/* Behavior Pattern Analysis */}
          <AccordionItem value="behavior-patterns" className="border-[#2D3748]">
            <AccordionTrigger className="text-[#F7FAFC] hover:text-[#22D3EE] px-6 py-4 bg-[#1A202C] rounded-t-lg">
              <div className="flex items-center space-x-3">
                <Brain className="h-5 w-5 text-[#22D3EE]" />
                <span>Behavior Pattern Analysis</span>
                <Badge className="bg-[#22D3EE] text-[#0C101A]">{behaviorPatterns.length} Patterns</Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-[#1A202C] rounded-b-lg border-t border-[#2D3748]">
              <div className="p-6 space-y-4">
                {behaviorPatterns.map((pattern, index) => (
                  <Card key={index} className="bg-[#2D3748] border-[#4A5568]">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-[#F7FAFC] text-lg">{pattern.pattern}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge className={getRiskBg(pattern.risk)}>{pattern.risk.toUpperCase()}</Badge>
                          <span className="text-sm text-[#CBD5E0]">{pattern.confidence}% confidence</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#CBD5E0] mb-3">{pattern.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#718096]">Frequency: {pattern.frequency}</span>
                        <Progress value={pattern.confidence} className="w-24 h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Risk Assessment */}
          <AccordionItem value="risk-assessment" className="border-[#2D3748]">
            <AccordionTrigger className="text-[#F7FAFC] hover:text-[#22D3EE] px-6 py-4 bg-[#1A202C] rounded-t-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-[#EF4444]" />
                <span>Risk Assessment</span>
                <Badge className="bg-[#EF4444] text-[#F7FAFC]">
                  {riskFactors.filter((r) => r.status === "high").length} High Risk
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-[#1A202C] rounded-b-lg border-t border-[#2D3748]">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {riskFactors.map((risk, index) => (
                    <div key={index} className="p-4 bg-[#2D3748] rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-[#F7FAFC]">{risk.factor}</h4>
                        <span className={`text-sm font-bold ${getRiskColor(risk.status)}`}>{risk.score}/100</span>
                      </div>
                      <Progress value={risk.score} className="h-2" />
                      <div className="mt-2 text-xs text-[#718096]">
                        Status: <span className={getRiskColor(risk.status)}>{risk.status.toUpperCase()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Network Graph */}
          <AccordionItem value="network-graph" className="border-[#2D3748]">
            <AccordionTrigger className="text-[#F7FAFC] hover:text-[#22D3EE] px-6 py-4 bg-[#1A202C] rounded-t-lg">
              <div className="flex items-center space-x-3">
                <Network className="h-5 w-5 text-[#8B5CF6]" />
                <span>Network Graph Visualization</span>
                <Badge className="bg-[#8B5CF6] text-[#F7FAFC]">Interactive</Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-[#1A202C] rounded-b-lg border-t border-[#2D3748]">
              <div className="p-6">
                <div className="h-96 bg-[#2D3748] rounded-lg flex items-center justify-center">
                  <div className="text-center text-[#718096]">
                    <Network className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Network visualization will render here</p>
                    <p className="text-sm mt-2">Interactive graph showing wallet connections and fund flows</p>
                    <Button
                      className="mt-4 bg-[#8B5CF6] hover:bg-[#7C3AED] text-[#F7FAFC]"
                      onClick={() => console.log("Initialize network graph")}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Load Graph
                    </Button>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
