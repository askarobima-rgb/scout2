"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Gauge, Users, DollarSign, HeartPulse } from "lucide-react"

interface MacroMetricProps {
  title: string
  value: string | number
  icon: React.ElementType
  isLoading: boolean
}

function MacroMetricCard({ title, value, icon: Icon, isLoading }: MacroMetricProps) {
  return (
    <Card className="bg-card border-border shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="h-8 w-3/4" />
        ) : (
          <div className="text-2xl font-bold text-foreground">{value}</div>
        )}
      </CardContent>
    </Card>
  )
}

export function MacroMetrics() {
  // Dummy data and loading state
  const isLoading = false // Set to true to see skeleton loading
  const tps = isLoading ? "" : "1,234 TPS"
  const activeWallets = isLoading ? "" : "56,789"
  const totalVolume = isLoading ? "" : "$1.2B"
  const networkHealth = isLoading ? "" : "Excellent"

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MacroMetricCard title="Live TPS" value={tps} icon={Gauge} isLoading={isLoading} />
      <MacroMetricCard title="Active Wallets (24h)" value={activeWallets} icon={Users} isLoading={isLoading} />
      <MacroMetricCard title="Total Volume (24h)" value={totalVolume} icon={DollarSign} isLoading={isLoading} />
      <MacroMetricCard title="Network Health" value={networkHealth} icon={HeartPulse} isLoading={isLoading} />
    </div>
  )
}
