"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrendingUp, Copy, Eye, Star, Zap, DollarSign, Users, Target, Rocket } from "lucide-react"
import Navbar from "../components/navbar"

export default function OpportunitiesPage() {
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null)

  const alphaLeaderboard = [
    {
      rank: 1,
      address: "sei1alpha7k2x8n9p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0",
      nickname: "DeFi Degen",
      roi: 245.6,
      winRate: 89,
      volume24h: 2450000,
      followers: 1250,
      strategy: "Yield Farming + Arbitrage",
      pulseScore: 94,
      verified: true,
    },
    {
      rank: 2,
      address: "sei1whale5k2x8n9p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0",
      nickname: "Sei Whale",
      roi: 189.3,
      winRate: 76,
      volume24h: 1890000,
      followers: 890,
      strategy: "Large Cap Swing Trading",
      pulseScore: 87,
      verified: true,
    },
    {
      rank: 3,
      address: "sei1smart3k2x8n9p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0",
      nickname: "Smart Money",
      roi: 156.7,
      winRate: 82,
      volume24h: 1560000,
      followers: 2100,
      strategy: "Long-term Value",
      pulseScore: 91,
      verified: false,
    },
    {
      rank: 4,
      address: "sei1trader1k2x8n9p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0",
      nickname: "Flash Trader",
      roi: 134.2,
      winRate: 71,
      volume24h: 980000,
      followers: 567,
      strategy: "High Frequency Trading",
      pulseScore: 83,
      verified: true,
    },
    {
      rank: 5,
      address: "sei1hodler9k2x8n9p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0",
      nickname: "Diamond Hands",
      roi: 128.9,
      winRate: 85,
      volume24h: 750000,
      followers: 1890,
      strategy: "HODL + Staking",
      pulseScore: 88,
      verified: false,
    },
  ]

  const handleCopyTrade = (address: string) => {
    if (!connectedWallet) {
      alert("Please connect your Keplr wallet first")
      return
    }
    console.log(`Copy trading from ${address}`)
    // TODO: Implement copy trade functionality
  }

  const handleConnectWallet = () => {
    // TODO: Implement Keplr wallet connection
    setConnectedWallet("sei1user123...")
  }

  const handleFollow = (address: string) => {
    console.log(`Following ${address}`)
    // TODO: Implement follow functionality
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 8)}...${address.slice(-8)}`
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    }
    return `$${(amount / 1000).toFixed(0)}K`
  }

  return (
    <div className="min-h-screen bg-[#0c101a]">
      <Navbar />

      <div className="container mx-auto px-4 py-8 space-y-8 text-center">
        <h1 className="text-4xl font-bold text-foreground">Opportunities</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore potential alpha, copy-trade strategies, and discover new insights on the Sei Network.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card border-border shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground flex items-center justify-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" /> Alpha Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Discover top-performing wallets and protocols based on their recent gains and activity.
              </p>
              <Button variant="secondary" className="w-full">
                View Leaderboard
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground flex items-center justify-center gap-2">
                <Users className="h-6 w-6 text-primary" /> Copy-Trade List
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Identify wallets with successful trading strategies and consider mirroring their moves.
              </p>
              <Button variant="secondary" className="w-full">
                Explore Copy-Trades
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground flex items-center justify-center gap-2">
                <Rocket className="h-6 w-6 text-primary" /> Emerging Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Get early insights into new and promising projects launching on the Sei Network.
              </p>
              <Button variant="secondary" className="w-full">
                Discover Projects
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <p className="text-muted-foreground">
            Disclaimer: All investment opportunities carry risk. Do your own research.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#1a202c] border-[#2d3748]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#cbd5e0]">Top Performers</CardTitle>
              <TrendingUp className="h-4 w-4 text-[#f59e0b]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f7fafc]">{alphaLeaderboard.length}</div>
              <p className="text-xs text-[#718096]">Active alpha wallets</p>
            </CardContent>
          </Card>

          <Card className="bg-[#1a202c] border-[#2d3748]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#cbd5e0]">Avg ROI</CardTitle>
              <DollarSign className="h-4 w-4 text-[#10b981]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f7fafc]">
                +{(alphaLeaderboard.reduce((acc, w) => acc + w.roi, 0) / alphaLeaderboard.length).toFixed(1)}%
              </div>
              <p className="text-xs text-[#718096]">30-day average</p>
            </CardContent>
          </Card>

          <Card className="bg-[#1a202c] border-[#2d3748]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#cbd5e0]">Total Followers</CardTitle>
              <Users className="h-4 w-4 text-[#8b5cf6]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f7fafc]">
                {(alphaLeaderboard.reduce((acc, w) => acc + w.followers, 0) / 1000).toFixed(1)}K
              </div>
              <p className="text-xs text-[#718096]">Community size</p>
            </CardContent>
          </Card>

          <Card className="bg-[#1a202c] border-[#2d3748]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#cbd5e0]">24h Volume</CardTitle>
              <Target className="h-4 w-4 text-[#f59e0b]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f7fafc]">
                {formatCurrency(alphaLeaderboard.reduce((acc, w) => acc + w.volume24h, 0))}
              </div>
              <p className="text-xs text-[#718096]">Combined volume</p>
            </CardContent>
          </Card>
        </div>

        {/* Alpha Leaderboard */}
        <Card className="bg-[#1a202c] border-[#2d3748]">
          <CardHeader>
            <CardTitle className="text-[#f7fafc] flex items-center">
              <Star className="h-5 w-5 mr-2 text-[#f59e0b]" />
              Alpha Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-[#2d3748]">
                  <TableHead className="text-[#cbd5e0]">Rank</TableHead>
                  <TableHead className="text-[#cbd5e0]">Wallet</TableHead>
                  <TableHead className="text-[#cbd5e0]">ROI</TableHead>
                  <TableHead className="text-[#cbd5e0]">Win Rate</TableHead>
                  <TableHead className="text-[#cbd5e0]">24h Volume</TableHead>
                  <TableHead className="text-[#cbd5e0]">PulseScore</TableHead>
                  <TableHead className="text-[#cbd5e0]">Strategy</TableHead>
                  <TableHead className="text-[#cbd5e0]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alphaLeaderboard.map((wallet) => (
                  <TableRow key={wallet.address} className="border-[#2d3748] hover:bg-[#2d3748]/30">
                    <TableCell className="text-[#f7fafc] font-bold">#{wallet.rank}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div>
                          <div className="flex items-center space-x-1">
                            <span className="font-medium text-[#f7fafc]">{wallet.nickname}</span>
                            {wallet.verified && <Badge className="bg-[#22d3ee] text-[#0c101a] text-xs">✓</Badge>}
                          </div>
                          <div className="text-xs text-[#718096] font-mono">{formatAddress(wallet.address)}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-[#10b981] font-bold">+{wallet.roi}%</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-[#f7fafc]">{wallet.winRate}%</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-[#f7fafc]">{formatCurrency(wallet.volume24h)}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Zap className="h-3 w-3 text-[#22d3ee]" />
                        <span className="text-[#22d3ee] font-bold">{wallet.pulseScore}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-[#cbd5e0] text-sm">{wallet.strategy}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          onClick={() => handleCopyTrade(wallet.address)}
                          disabled={!connectedWallet}
                          className="bg-[#f59e0b] hover:bg-[#d97706] text-[#0c101a]"
                        >
                          <Copy className="h-3 w-3 mr-1" />
                          Copy
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleFollow(wallet.address)}
                          className="border-[#2d3748] text-[#cbd5e0] hover:bg-[#2d3748]"
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          Follow
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
