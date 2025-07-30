"use client"

import { cn } from "@/lib/utils"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowDown, ArrowUp, Info } from "lucide-react"
import useSWR from "swr"

interface MetricCardProps {
  title: string
  value: string | number
  change?: number // Percentage change
  tooltipContent: string
  isLoading: boolean
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function MetricCard({ title, value, change, tooltipContent, isLoading }: MetricCardProps) {
  const changeColor = change !== undefined ? (change >= 0 ? "text-green-500" : "text-red-500") : ""
  const ChangeIcon = change !== undefined ? (change >= 0 ? ArrowUp : ArrowDown) : null

  return (
    <Card className="bg-card border-border shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-1">
          {title}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-3 w-3 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltipContent}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="h-8 w-3/4" />
        ) : (
          <div className="text-2xl font-bold text-foreground">{value}</div>
        )}
        {change !== undefined && (
          <p className={cn("text-xs", changeColor)}>
            {ChangeIcon && <ChangeIcon className="inline-block h-3 w-3 mr-1" />}
            {isLoading ? <Skeleton className="h-3 w-1/4 inline-block" /> : `${Math.abs(change).toFixed(2)}%`} from last
            period
          </p>
        )}
      </CardContent>
    </Card>
  )
}

// Example usage with SWR for a specific metric
export function DynamicMetricCard({
  addr,
  metricKey,
  title,
  tooltipContent,
}: { addr: string; metricKey: string; title: string; tooltipContent: string }) {
  const { data, error, isLoading } = useSWR(`/api/summary?addr=${addr}&metric=${metricKey}`, fetcher)

  if (error) return <MetricCard title={title} value="Error" tooltipContent={tooltipContent} isLoading={false} />

  return (
    <MetricCard
      title={title}
      value={data?.value || "N/A"}
      change={data?.change}
      tooltipContent={tooltipContent}
      isLoading={isLoading}
    />
  )
}
