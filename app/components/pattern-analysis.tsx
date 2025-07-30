import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Repeat, Zap } from "lucide-react"

interface Pattern {
  id: string
  name: string
  description: string
  type: "DCA" | "Whale" | "Arbitrage" | "Liquidity Provider" | "NFT Flipper"
  confidence: number // 0-100
}

const dummyPatterns: Pattern[] = [
  { id: "1", name: "Consistent DCA", description: "Regular small buys over time.", type: "DCA", confidence: 95 },
  {
    id: "2",
    name: "Large Accumulation",
    description: "Significant token accumulation from multiple sources.",
    type: "Whale",
    confidence: 88,
  },
  {
    id: "3",
    name: "Frequent Swaps",
    description: "High volume of rapid token exchanges.",
    type: "Arbitrage",
    confidence: 70,
  },
  {
    id: "4",
    name: "LP Activity",
    description: "Consistent deposits and withdrawals from liquidity pools.",
    type: "Liquidity Provider",
    confidence: 82,
  },
  {
    id: "5",
    name: "NFT Flipping",
    description: "Rapid buying and selling of NFTs for profit.",
    type: "NFT Flipper",
    confidence: 75,
  },
]

export function PatternAnalysis() {
  const getPatternIcon = (type: Pattern["type"]) => {
    switch (type) {
      case "DCA":
        return <TrendingUp className="h-5 w-5 text-green-400" />
      case "Whale":
        return <DollarSign className="h-5 w-5 text-blue-400" />
      case "Arbitrage":
        return <Repeat className="h-5 w-5 text-purple-400" />
      case "Liquidity Provider":
        return <Zap className="h-5 w-5 text-yellow-400" />
      case "NFT Flipper":
        return <img src="/placeholder.svg?height=20&width=20" alt="NFT" className="h-5 w-5" />
      default:
        return null
    }
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence > 85) return "bg-green-500/20 text-green-400"
    if (confidence > 60) return "bg-yellow-500/20 text-yellow-400"
    return "bg-red-500/20 text-red-400"
  }

  return (
    <Card className="bg-card border-border shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Behavioral Patterns</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {dummyPatterns.length > 0 ? (
          dummyPatterns.map((pattern) => (
            <div
              key={pattern.id}
              className="flex items-start gap-4 p-3 bg-secondary/20 rounded-md border border-border"
            >
              <div className="flex-shrink-0 mt-1">{getPatternIcon(pattern.type)}</div>
              <div className="flex-1">
                <h3 className="text-md font-semibold text-foreground">{pattern.name}</h3>
                <p className="text-sm text-muted-foreground">{pattern.description}</p>
              </div>
              <Badge className={getConfidenceColor(pattern.confidence)}>{pattern.confidence}% Confidence</Badge>
            </div>
          ))
        ) : (
          <div className="text-center text-muted-foreground py-4">No significant patterns detected.</div>
        )}
      </CardContent>
    </Card>
  )
}
