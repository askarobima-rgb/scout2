"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Activity, Bell, Eye, TrendingUp, TrendingDown, Clock, AlertTriangle, CheckCircle, XCircle } from "lucide-react"

interface RealTimeMonitoringProps {
  walletAddress: string
}

export default function RealTimeMonitoring({ walletAddress }: RealTimeMonitoringProps) {
  const [isMonitoring, setIsMonitoring] = useState(true)
  const [pendingTxs, setPendingTxs] = useState(3)
  const [riskProfile, setRiskProfile] = useState(7.2)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date())
      setPendingTxs((prev) => Math.max(0, prev + Math.floor(Math.random() * 3) - 1))
      setRiskProfile((prev) => Math.max(0, Math.min(10, prev + (Math.random() - 0.5) * 0.5)))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const liveTransactions = [
    {
      hash: "0xabc123...def456",
      type: "Swap",
      amount: "$2,450",
      status: "pending",
      gasPrice: "25 gwei",
      timestamp: "2s ago",
      riskScore: 3.2,
    },
    {
      hash: "0xdef789...ghi012",
      type: "Transfer",
      amount: "$850",
      status: "confirmed",
      gasPrice: "22 gwei",
      timestamp: "8s ago",
      riskScore: 1.8,
    },
    {
      hash: "0xghi345...jkl678",
      type: "Stake",
      amount: "$5,000",
      status: "pending",
      gasPrice: "28 gwei",
      timestamp: "15s ago",
      riskScore: 2.1,
    },
  ]

  const riskIndicators = [
    { indicator: "Transaction Frequency", value: 85, status: "High", trend: "up" },
    { indicator: "Amount Variance", value: 42, status: "Medium", trend: "down" },
    { indicator: "Time Pattern", value: 23, status: "Low", trend: "stable" },
    { indicator: "Network Behavior", value: 67, status: "Medium", trend: "up" },
  ]

  const maliciousAddresses = [
    {
      address: "sei1malicious...abc",
      threat: "Phishing",
      confidence: 95,
      lastSeen: "5 min ago",
      interactions: 0,
    },
    {
      address: "sei1scammer...def",
      threat: "Rug Pull",
      confidence: 88,
      lastSeen: "12 min ago",
      interactions: 2,
    },
    {
      address: "sei1mixer...ghi",
      threat: "Money Laundering",
      confidence: 92,
      lastSeen: "1 hour ago",
      interactions: 0,
    },
  ]

  const notifications = [
    {
      id: 1,
      type: "High Risk Transaction",
      message: "Large transfer to unknown address detected",
      severity: "high",
      timestamp: "30s ago",
    },
    {
      id: 2,
      type: "Pattern Alert",
      message: "Unusual trading frequency in last hour",
      severity: "medium",
      timestamp: "2m ago",
    },
    {
      id: 3,
      type: "Network Alert",
      message: "Interaction with flagged smart contract",
      severity: "high",
      timestamp: "5m ago",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Monitoring Status */}
      <Card
        className={
          isMonitoring
            ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
            : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950"
        }
      >
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className={`h-5 w-5 ${isMonitoring ? "text-green-600" : "text-red-600"}`} />
              <span>Real-Time Monitoring for {walletAddress}</span>
              <Badge variant={isMonitoring ? "default" : "destructive"}>{isMonitoring ? "ACTIVE" : "INACTIVE"}</Badge>
            </div>
            <Button
              size="sm"
              variant={isMonitoring ? "destructive" : "default"}
              onClick={() => setIsMonitoring(!isMonitoring)}
            >
              {isMonitoring ? "Stop" : "Start"} Monitoring
            </Button>
          </CardTitle>
          <CardDescription>
            Last update: {lastUpdate.toLocaleTimeString()} | Pending transactions: {pendingTxs} | Risk profile:{" "}
            {riskProfile.toFixed(1)}/10
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Live Notifications */}
      {notifications.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-orange-500" />
              <span>Live Notifications</span>
              <Badge variant="destructive">{notifications.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <Alert
                  key={notification.id}
                  className={
                    notification.severity === "high"
                      ? "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900"
                      : "border-orange-300 bg-orange-50 dark:border-orange-700 dark:bg-orange-900"
                  }
                >
                  <AlertTriangle
                    className={`h-4 w-4 ${notification.severity === "high" ? "text-red-600" : "text-orange-600"}`}
                  />
                  <AlertDescription>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{notification.type}</p>
                        <p className="text-sm">{notification.message}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={notification.severity === "high" ? "destructive" : "default"}>
                          {notification.severity.toUpperCase()}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{notification.timestamp}</p>
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Live Transaction Feed for {walletAddress}</CardTitle>
            <CardDescription>Real-time transaction monitoring and analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {liveTransactions.map((tx, index) => (
                <div key={index} className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {tx.status === "confirmed" ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Clock className="h-4 w-4 text-orange-500" />
                      )}
                      <span className="font-medium">{tx.type}</span>
                    </div>
                    <Badge variant={tx.status === "confirmed" ? "default" : "secondary"}>{tx.status}</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Amount</p>
                      <p className="font-medium">{tx.amount}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Risk Score</p>
                      <p className="font-medium">{tx.riskScore}/10</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Gas Price</p>
                      <p className="font-medium">{tx.gasPrice}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Time</p>
                      <p className="font-medium">{tx.timestamp}</p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-2 font-mono">{tx.hash}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Risk Profile Building */}
        <Card>
          <CardHeader>
            <CardTitle>Dynamic Risk Profile for {walletAddress}</CardTitle>
            <CardDescription>Real-time risk assessment and scoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskIndicators.map((indicator, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{indicator.indicator}</span>
                    <div className="flex items-center space-x-2">
                      {indicator.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 text-red-500" />
                      ) : indicator.trend === "down" ? (
                        <TrendingDown className="h-3 w-3 text-green-500" />
                      ) : (
                        <Activity className="h-3 w-3 text-gray-500" />
                      )}
                      <Badge
                        variant={
                          indicator.status === "High"
                            ? "destructive"
                            : indicator.status === "Medium"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {indicator.status}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={indicator.value} className="h-2" />
                  <p className="text-xs text-muted-foreground">{indicator.value}% risk level</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Malicious Address Detection */}
      <Card>
        <CardHeader>
          <CardTitle>Malicious Address Detection for {walletAddress}</CardTitle>
          <CardDescription>Real-time monitoring of known malicious addresses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {maliciousAddresses.map((address, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="font-medium font-mono text-sm">{address.address}</p>
                      <p className="text-sm text-muted-foreground">{address.threat}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="destructive">{address.confidence}% Confidence</Badge>
                    <p className="text-xs text-muted-foreground mt-1">Last seen: {address.lastSeen}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Interactions: </span>
                      <span className={address.interactions > 0 ? "font-bold text-red-600" : "text-green-600"}>
                        {address.interactions}
                      </span>
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Block Address
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
