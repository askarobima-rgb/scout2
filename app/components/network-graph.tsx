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
  { id: "wallet1", label: "Your Wallet", group: "main", value: 100 },
  { id: "wallet2", label: "Whale A", group: "whale", value: 500 },
  { id: "wallet3", label: "Exchange B", group: "exchange", value: 200 },
  { id: "wallet4", label: "DEX C", group: "dex", value: 150 },
  { id: "wallet5", label: "Scammer D", group: "scammer", value: 50 },
  { id: "wallet6", label: "LP Pool E", group: "lp", value: 300 },
]

const dummyEdges: Edge[] = [
  { from: "wallet1", to: "wallet2", value: 10, title: "10 SEI transfer" },
  { from: "wallet1", to: "wallet3", value: 5, title: "5 SEI deposit" },
  { from: "wallet2", to: "wallet1", value: 2, title: "2 SEI received" },
  { from: "wallet3", to: "wallet4", value: 15, title: "15 SEI swap" },
  { from: "wallet1", to: "wallet5", value: 1, title: "1 SEI to scammer" },
  { from: "wallet4", to: "wallet6", value: 20, title: "20 SEI LP deposit" },
]

export function NetworkGraph() {
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
          main: {
            color: { background: "#22d3ee", border: "#22d3ee" },
            font: { color: "#0c101a", bold: true },
            size: 20,
          },
          whale: { color: { background: "#3b82f6", border: "#3b82f6" } }, // Blue
          exchange: { color: { background: "#f97316", border: "#f97316" } }, // Orange
          dex: { color: { background: "#a855f7", border: "#a855f7" } }, // Purple
          scammer: { color: { background: "#ef4444", border: "#ef4444" } }, // Red
          lp: { color: { background: "#10b981", border: "#10b981" } }, // Green
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

      // Optional: Add event listeners or other interactions
      network.on("click", (params) => {
        if (params.nodes.length > 0) {
          const nodeId = params.nodes[0]
          console.log("Clicked node:", nodes.get(nodeId))
        }
      })

      return () => {
        network.destroy()
      }
    }
  }, [nodes, edges])

  return (
    <Card className="bg-card border-border shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Network Graph</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={networkRef} className="h-[400px] w-full bg-secondary/20 rounded-md" />
        <p className="text-sm text-muted-foreground mt-2">
          Visualisasi interaksi dompet Anda dengan entitas lain di jaringan.
        </p>
      </CardContent>
    </Card>
  )
}
