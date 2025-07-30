import { MacroMetrics } from "@/app/components/macro-metrics"
import { HeatMap } from "@/app/components/heat-map"
import { TopWhaleTable } from "@/app/components/top-whale-table"
import { ClusterGraph } from "@/app/components/cluster-graph"
import { Filters } from "@/app/components/filters"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default function NetworkOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Suspense fallback={<Skeleton className="h-28 w-full" />}>
        <MacroMetrics />
      </Suspense>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
          <HeatMap />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
          <TopWhaleTable />
        </Suspense>
      </div>

      <Suspense fallback={<Skeleton className="h-[450px] w-full" />}>
        <ClusterGraph />
      </Suspense>

      <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
        <Filters />
      </Suspense>
    </div>
  )
}
