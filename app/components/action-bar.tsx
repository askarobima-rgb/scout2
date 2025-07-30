"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Eye, Share2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ActionBarProps {
  walletAddress: string
}

export function ActionBar({ walletAddress }: ActionBarProps) {
  const { toast } = useToast()

  const handleCopyTrade = () => {
    toast({
      title: "Copy-Trade Initiated",
      description: `Attempting to copy trades for ${walletAddress.substring(0, 10)}...`,
    })
  }

  const handleWatchlist = () => {
    toast({
      title: "Added to Watchlist",
      description: `${walletAddress.substring(0, 10)}... added to your watchlist.`,
    })
  }

  const handleExportPDF = () => {
    toast({
      title: "Exporting PDF",
      description: `Generating PDF report for ${walletAddress.substring(0, 10)}...`,
    })
  }

  return (
    <Card className="w-full bg-card border-border shadow-md">
      <CardContent className="p-4 flex flex-wrap justify-center gap-4">
        <Button onClick={handleCopyTrade} className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Share2 className="mr-2 h-4 w-4" /> Copy-Trade
        </Button>
        <Button onClick={handleWatchlist} variant="secondary">
          <Eye className="mr-2 h-4 w-4" /> Watchlist
        </Button>
        <Button onClick={handleExportPDF} variant="secondary">
          <Download className="mr-2 h-4 w-4" /> Export PDF
        </Button>
      </CardContent>
    </Card>
  )
}
