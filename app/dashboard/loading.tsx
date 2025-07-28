import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 md:p-6">
      <div className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 sticky top-0 z-50 py-4 px-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-24" /> {/* Back to Home button */}
            <Skeleton className="h-8 w-8 rounded-full" /> {/* Shield icon */}
            <Skeleton className="h-8 w-48" /> {/* Title */}
            <Skeleton className="h-6 w-32 rounded-full" /> {/* Badge */}
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded-full" /> {/* Zap icon */}
            <Skeleton className="h-4 w-24" /> {/* Network Health */}
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2 max-w-md">
          <Skeleton className="h-10 flex-1" /> {/* Input */}
          <Skeleton className="h-10 w-24" /> {/* Analyze button */}
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          <div className="grid w-full grid-cols-7 lg:w-auto lg:grid-cols-7 gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-48 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
