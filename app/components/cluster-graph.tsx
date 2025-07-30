"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef } from "react"
import { DataSet, Network } from "vis-network/standalone"

interface Node {
  id: string
  label: string
  group: string
  value?: number
}

interface Edge {
  from: string
  to: string
  value?: number
  title?: string
}

const dummyNodes: Node[] = [
  { id: "cluster1", label: "DeFi Hub", group: "cluster", value: 500 },
  { id: "cluster2", label: "NFT Market", group: "cluster", value: 300 },
  { id: "cluster3", label: "Gaming DApp", group: "cluster", value: 200 },
  { id: "walletA", label: "Wallet A", group: "user", value: 10 },
  { id: "walletB", label: "Wallet B", group: "user", value: 5 },
  { id: "walletC", label: "Wallet C", group: "user", value: 8 },
  { id: "protocolX", label: "Protocol X", group: "protocol", value: 50 },
  { id: "protocolY", label: "Protocol Y", group: "protocol", value: 30 },
]

const dummyEdges: Edge[] = [
  { from: "cluster1", to: "walletA", value: 5, title: "Interaction" },
  { from: "cluster1", to: "protocolX", value: 10, title: "Integration" },
  { from: "cluster2", to: "walletB", value: 3, title: "Interaction" },
  { from: "cluster3", to: "walletC", value: 2, title: "Interaction" },
  { from: "protocolX", to: "protocolY", value: 7, title: "Cross-protocol" },
  { from: "walletA", to: "walletB", value: 1, title: "P2P Transfer" },
]

export function ClusterGraph() {
  const networkRef = useRef<HTMLDivElement>(null)
  const nodes = new DataSet<Node>(dummyNodes)
  const edges = new DataSet<Edge>(dummyEdges)

  useEffect(() => {
    if (networkRef.current) {
      const data = { nodes, edges }
      const options = {
        nodes: {
          shape: "dot",
          size: 15,
          font: {
            color: "#f7fafc",
            size: 12,
          },
          borderWidth: 2,
          color: {
            border: "#22d3ee",
            background: "#1a202c",
            highlight: {
              border: "#22d3ee",
              background: "#2d3748",
            },
          },
        },
        edges: {
          width: 1,
          color: {
            color: "#718096",
            highlight: "#22d3ee",
            inherit: false,
          },
          arrows: "to",
          smooth: {
            enabled: true,
            type: "dynamic",
          },
        },
        groups: {
          cluster: {
            color: { background: "#22d3ee", border: "#22d3ee" },
            font: { color: "#0c101a", bold: true },
            size: 30,
            shape: "box",
          },
          user: { color: { background: "#3b82f6", border: "#3b82f6" } }, // Blue
          protocol: { color: { background: "#f97316", border: "#f97316" } }, // Orange
        },
        physics: {
          enabled: true,
          barnesHut: {
            gravitationalConstant: -2000,
            centralGravity: 0.3,
            springLength: 95,
            springConstant: 0.04,
            damping: 0.09,
            avoidOverlap: 0.5,
          },
          solver: "barnesHut",
          stabilization: {
            enabled: true,
            iterations: 1000,
            updateInterval: 100,
            fit: true,
          },
        },
        interaction: {
          hover: true,
          tooltipDelay: 300,
        },
        layout: {
          improvedLayout: true,
        },
      }

      const network = new Network(networkRef.current, data, options)

      return () => {
        network.destroy()
      }
    }
  }, [nodes, edges])

  return (
    <Card className="bg-card border-border shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Global Cluster Graph</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={networkRef} className="h-[400px] w-full bg-secondary/20 rounded-md" />
        <p className="text-sm text-muted-foreground mt-2">
          Visualisasi klaster dompet dan interaksi protokol di seluruh jaringan.
        </p>
      </CardContent>
    </Card>
  )
}
