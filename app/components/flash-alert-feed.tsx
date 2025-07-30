"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Bell, CheckCircle, XCircle } from "lucide-react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { cn } from "@/lib/utils"

interface FlashAlert {
  id: string
  timestamp: string
  type: "anomaly" | "info" | "success" | "error"
  message: string
}

// Dummy WebSocket simulation
const dummyWebSocket = (onMessage: (data: FlashAlert) => void) => {
  let counter = 0
  const types = ["anomaly", "info", "success", "error"]
  const messages = [
    "Large transfer detected from unknown address!",
    "New block validated on Sei Network.",
    "Transaction confirmed successfully.",
    "Failed to fetch latest data.",
    "Unusual staking activity observed.",
    "New smart contract deployed.",
    "Wallet balance updated.",
    "API rate limit exceeded.",
  ]

  const interval = setInterval(() => {
    counter++
    const type = types[Math.floor(Math.random() * types.length)] as FlashAlert["type"]
    const message = messages[Math.floor(Math.random() * messages.length)]
    const newAlert: FlashAlert = {
      id: `alert-${Date.now()}-${counter}`,
      timestamp: new Date().toLocaleTimeString(),
      type,
      message: `${message} (ID: ${counter})`,
    }
    onMessage(newAlert)
  }, 3000) // Push a new alert every 3 seconds

  return () => clearInterval(interval)
}

export function FlashAlertFeed() {
  const [alerts, setAlerts] = useState<FlashAlert[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cleanup = dummyWebSocket((newAlert) => {
      setAlerts((prevAlerts) => {
        const updatedAlerts = [newAlert, ...prevAlerts.slice(0, 9)] // Keep max 10 alerts
        return updatedAlerts
      })
    })

    return cleanup
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0 // Scroll to top for new alerts
    }
  }, [alerts])

  const getIcon = (type: FlashAlert["type"]) => {
    switch (type) {
      case "anomaly":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      case "info":
        return <Bell className="h-4 w-4 text-blue-500" />
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getBorderColor = (type: FlashAlert["type"]) => {
    switch (type) {
      case "anomaly":
        return "border-l-yellow-500"
      case "info":
        return "border-l-blue-500"
      case "success":
        return "border-l-green-500"
      case "error":
        return "border-l-red-500"
      default:
        return "border-l-gray-500"
    }
  }

  return (
    <Card className="w-full bg-card border-border shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-foreground">Flash Alert Feed</CardTitle>
      </CardHeader>
      <CardContent className="h-64 overflow-y-auto pr-2" ref={scrollRef}>
        <TransitionGroup>
          {alerts.map((alert) => (
            <CSSTransition key={alert.id} timeout={300} classNames="alert-enter">
              <div
                className={cn(
                  "flex items-start gap-2 p-2 mb-2 rounded-md bg-secondary/30 border-l-4",
                  getBorderColor(alert.type),
                )}
              >
                <div className="pt-1">{getIcon(alert.type)}</div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{alert.message}</p>
                  <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                </div>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
        {alerts.length === 0 && (
          <div className="flex items-center justify-center h-full text-muted-foreground">No alerts yet.</div>
        )}
      </CardContent>
    </Card>
  )
}
