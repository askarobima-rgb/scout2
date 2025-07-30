import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface Block {
  id: number
  tps: number
}

const generateDummyBlocks = (count: number): Block[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    tps: Math.floor(Math.random() * 100) + 1, // TPS between 1 and 100
  }))
}

export function HeatMap() {
  const blocks = generateDummyBlocks(100) // 100 dummy blocks

  const getBlockColor = (tps: number) => {
    if (tps > 80) return "bg-red-500"
    if (tps > 60) return "bg-orange-500"
    if (tps > 40) return "bg-yellow-500"
    if (tps > 20) return "bg-green-500"
    return "bg-blue-500"
  }

  return (
    <Card className="bg-card border-border shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Block Explorer Heat-Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-10 gap-1 p-2 bg-secondary/20 rounded-md h-[200px] overflow-hidden">
          <TooltipProvider>
            {blocks.map((block) => (
              <Tooltip key={block.id}>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      "aspect-square rounded-sm cursor-pointer transition-colors duration-100",
                      getBlockColor(block.tps),
                    )}
                    style={{ opacity: block.tps / 100 + 0.2 }} // Vary opacity based on TPS
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Block #{block.id}</p>
                  <p>TPS: {block.tps}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground mt-2">
          <span>Low TPS</span>
          <span>High TPS</span>
        </div>
      </CardContent>
    </Card>
  )
}
