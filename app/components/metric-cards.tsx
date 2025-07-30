"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { TrendingUp, TrendingDown, Activity, DollarSign, Coins, Shield } from "lucide-react"
import useSWR from "swr"

interface MetricCardsProps {
  addr: string
}

interface MetricData {
  txCount: number
  txCountChange: number
  flowAmount: number
  flowChange: number
  tokenCount: number
  tokenChange: number
  riskScore: number
  riskChange: number
}

// Mock fetcher function
const fetcher = async (url: string): Promise<MetricData> => {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000 + 500))

  return {
    txCount: Math.floor(Math.random() * 1000) + 100,
    txCountChange: (Math.random() - 0.5) * 20,
    flowAmount: Math.floor(Math.random() * 1000000) + 50000,
    flowChange: (Math.random() - 0.5) * 30,
    tokenCount: Math.floor(Math.random() * 50) + 5,
    tokenChange: (Math.random() - 0.5) * 10,
    riskScore: Math.floor(Math.random() * 40) + 10,
    riskChange: (Math.random() - 0.5) * 5,
  }
}

export default function MetricCards({ addr }: MetricCardsProps) {
  const { data, error, isLoading } = useSWR(addr ? `/api/summary?addr=${addr}` : null, fetcher, {
    refreshInterval: 30000, // Refresh every 30 seconds
    revalidateOnFocus: false,
  })

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    }
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}K`
    }
    return `$${amount.toFixed(0)}`
  }

  const MetricCard = ({
    title,
    value,
    change,
    icon: Icon,
    formatter = (val: number) => val.toString(),
    suffix = "",
  }: {
    title: string
    value?: number
    change?: number
    icon: React.ComponentType<{ className?: string }>
    formatter?: (val: number) => string
    suffix?: string
  }) => {
    const isPositive = change && change > 0
    const TrendIcon = isPositive ? TrendingUp : TrendingDown

    return (
      <Card className="bg-[#1a202c] border-[#2d3748] hover:border-[#22d3ee]/50 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-[#cbd5e0]">{title}</CardTitle>
          <Icon className="h-4 w-4 text-[#22d3ee]" />
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <>
              <Skeleton className="h-8 w-24 mb-2 bg-[#2d3748]" />
              <Skeleton className="h-4 w-16 bg-[#2d3748]" />
            </>
          ) : error ? (
            <>
              <div className="text-2xl font-bold text-[#ef4444] mb-1">Error</div>
              <p className="text-xs text-[#718096]">Failed to load</p>
            </>
          ) : (
            <>
              <div className="text-2xl font-bold text-[#f7fafc] mb-1">
                {value !== undefined ? formatter(value) : "0"}
                {suffix}
              </div>
              {change !== undefined && (
                <div className="flex items-center text-xs">
                  <TrendIcon className={`h-3 w-3 mr-1 ${isPositive ? "text-[#10b981]" : "text-[#ef4444]"}`} />
                  <span className={isPositive ? "text-[#10b981]" : "text-[#ef4444]"}>
                    {Math.abs(change).toFixed(1)}%
                  </span>
                  <span className="text-[#718096] ml-1">24h</span>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <MetricCard title="Transaction Count" value={data?.txCount} change={data?.txCountChange} icon={Activity} />
      <MetricCard
        title="Fund Flow"
        value={data?.flowAmount}
        change={data?.flowChange}
        icon={DollarSign}
        formatter={formatCurrency}
      />
      <MetricCard
        title="Token Holdings"
        value={data?.tokenCount}
        change={data?.tokenChange}
        icon={Coins}
        suffix=" tokens"
      />
      <MetricCard title="Risk Score" value={data?.riskScore} change={data?.riskChange} icon={Shield} suffix="/100" />
    </div>
  )
}
