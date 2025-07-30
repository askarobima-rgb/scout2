import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface WalletHeaderProps {
  addr: string
  pulseScore: number
  riskLevel: "Low" | "Medium" | "High"
}

export function WalletHeader({ addr, pulseScore, riskLevel }: WalletHeaderProps) {
  const getRiskColor = (level: string) => {
    switch (level) {
      case "Low":
        return "bg-green-500"
      case "Medium":
        return "bg-yellow-500"
      case "High":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card className="w-full bg-card border-border shadow-lg">
      <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary">
            <AvatarImage src={`/placeholder.svg?text=${addr.substring(0, 2)}`} alt="Wallet Identicon" />
            <AvatarFallback>{addr.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-semibold text-foreground">
              Wallet:{" "}
              <span className="font-mono text-primary">
                {addr.substring(0, 10)}...{addr.substring(addr.length - 4)}
              </span>
            </h2>
            <p className="text-sm text-muted-foreground">Insight ≦ 3s - Alert &lt; 1s</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground">PulseScore</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge className="text-lg font-bold bg-primary text-primary-foreground">{pulseScore}</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>A score indicating the overall health and activity of the wallet.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground">Risk Level</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge className={cn("text-lg font-bold", getRiskColor(riskLevel))}>{riskLevel}</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Assessed risk level based on wallet activity and patterns.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
