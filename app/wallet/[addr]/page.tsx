"use client"

import { useParams } from "next/navigation"
import { WalletHeader } from "@/app/components/wallet-header"
import { DynamicMetricCard } from "@/app/components/metric-card"
import { FlashAlertFeed } from "@/app/components/flash-alert-feed"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActionBar } from "@/app/components/action-bar"
import { ActivityTimeline } from "@/app/components/activity-timeline"
import { PatternAnalysis } from "@/app/components/pattern-analysis"
import { NetworkGraph } from "@/app/components/network-graph"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"

export default function WalletTrackerPage() {
  const params = useParams()
  const walletAddress = params.addr as string

  // Dummy data for WalletHeader, replace with actual fetched data
  const dummyPulseScore = 85
  const dummyRiskLevel = "Low" as "Low" | "Medium" | "High"

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Suspense fallback={<Skeleton className="h-32 w-full" />}>
        <WalletHeader addr={walletAddress} pulseScore={dummyPulseScore} riskLevel={dummyRiskLevel} />
      </Suspense>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Suspense fallback={<Skeleton className="h-28 w-full" />}>
          <DynamicMetricCard
            addr={walletAddress}
            metricKey="txCount"
            title="Total Transactions"
            tooltipContent="Total number of transactions associated with this wallet."
          />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-28 w-full" />}>
          <DynamicMetricCard
            addr={walletAddress}
            metricKey="flow"
            title="Net Flow (24h)"
            tooltipContent="Net inflow/outflow of assets in the last 24 hours."
          />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-28 w-full" />}>
          <DynamicMetricCard
            addr={walletAddress}
            metricKey="tokenCount"
            title="Unique Tokens"
            tooltipContent="Number of unique token types held by the wallet."
          />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-28 w-full" />}>
          <DynamicMetricCard
            addr={walletAddress}
            metricKey="riskScore"
            title="Risk Score"
            tooltipContent="Calculated risk score based on various on-chain metrics."
          />
        </Suspense>
      </div>

      <Suspense fallback={<Skeleton className="h-64 w-full" />}>
        <FlashAlertFeed />
      </Suspense>

      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-secondary/20">
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="network-graph">Network Graph</TabsTrigger>
        </TabsList>
        <TabsContent value="activity" className="mt-4">
          <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
            <ActivityTimeline />
          </Suspense>
        </TabsContent>
        <TabsContent value="patterns" className="mt-4">
          <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
            <PatternAnalysis />
          </Suspense>
        </TabsContent>
        <TabsContent value="network-graph" className="mt-4">
          <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
            <NetworkGraph />
          </Suspense>
        </TabsContent>
      </Tabs>

      <Suspense fallback={<Skeleton className="h-24 w-full" />}>
        <ActionBar walletAddress={walletAddress} />
      </Suspense>
    </div>
  )
}
