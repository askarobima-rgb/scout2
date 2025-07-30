import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowUp, ExternalLink } from "lucide-react"
import Link from "next/link"

interface Activity {
  id: string
  type: "send" | "receive" | "stake" | "unstake" | "swap" | "nft_mint"
  amount: string
  token: string
  fromTo: string
  timestamp: string
  txHash: string
}

const dummyActivities: Activity[] = [
  {
    id: "1",
    type: "send",
    amount: "100.00",
    token: "SEI",
    fromTo: "sei1recipient...",
    timestamp: "2023-10-26 14:30",
    txHash: "0xabc123...",
  },
  {
    id: "2",
    type: "receive",
    amount: "50.00",
    token: "USDC",
    fromTo: "sei1sender...",
    timestamp: "2023-10-26 14:00",
    txHash: "0xdef456...",
  },
  {
    id: "3",
    type: "stake",
    amount: "1000.00",
    token: "SEI",
    fromTo: "Validator A",
    timestamp: "2023-10-25 10:00",
    txHash: "0xghi789...",
  },
  {
    id: "4",
    type: "swap",
    amount: "20.00",
    token: "SEI",
    fromTo: "30.00 USDC",
    timestamp: "2023-10-24 18:00",
    txHash: "0xjkl012...",
  },
  {
    id: "5",
    type: "nft_mint",
    amount: "1",
    token: "NFT",
    fromTo: "Collection X",
    timestamp: "2023-10-23 09:00",
    txHash: "0xmnp345...",
  },
  {
    id: "6",
    type: "receive",
    amount: "15.00",
    token: "SEI",
    fromTo: "sei1faucet...",
    timestamp: "2023-10-22 11:00",
    txHash: "0xqrst67...",
  },
  {
    id: "7",
    type: "unstake",
    amount: "500.00",
    token: "SEI",
    fromTo: "Validator B",
    timestamp: "2023-10-21 16:00",
    txHash: "0xuvw890...",
  },
]

export function ActivityTimeline() {
  return (
    <Card className="bg-card border-border shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-muted-foreground">Type</TableHead>
                <TableHead className="text-muted-foreground">Amount</TableHead>
                <TableHead className="text-muted-foreground">Token</TableHead>
                <TableHead className="text-muted-foreground">From/To</TableHead>
                <TableHead className="text-muted-foreground">Timestamp</TableHead>
                <TableHead className="text-muted-foreground">Tx Hash</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyActivities.map((activity) => (
                <TableRow key={activity.id} className="hover:bg-secondary/20 transition-colors">
                  <TableCell>
                    <Badge
                      className={
                        activity.type === "send" || activity.type === "unstake"
                          ? "bg-red-500/20 text-red-400"
                          : activity.type === "receive" || activity.type === "stake"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-blue-500/20 text-blue-400"
                      }
                    >
                      {activity.type.replace("_", " ")}
                    </Badge>
                  </TableCell>
                  <TableCell
                    className={
                      activity.type === "send" || activity.type === "unstake" ? "text-red-400" : "text-green-400"
                    }
                  >
                    {activity.type === "send" || activity.type === "unstake" ? (
                      <ArrowDown className="inline-block h-3 w-3 mr-1" />
                    ) : (
                      <ArrowUp className="inline-block h-3 w-3 mr-1" />
                    )}
                    {activity.amount}
                  </TableCell>
                  <TableCell className="text-foreground">{activity.token}</TableCell>
                  <TableCell className="text-muted-foreground">{activity.fromTo.substring(0, 10)}...</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{activity.timestamp}</TableCell>
                  <TableCell>
                    <Link
                      href={`https://www.seiscan.app/transactions/${activity.txHash}`} // Replace with actual Sei explorer link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1 text-sm"
                    >
                      {activity.txHash.substring(0, 6)}...
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {dummyActivities.length === 0 && (
          <div className="text-center text-muted-foreground py-4">No recent activity found.</div>
        )}
      </CardContent>
    </Card>
  )
}
