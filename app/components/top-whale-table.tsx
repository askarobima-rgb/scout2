import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowUp, ExternalLink } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Whale {
  id: string
  address: string
  flow24h: number // in SEI
  flashAlert: boolean
}

const dummyWhales: Whale[] = [
  { id: "1", address: "sei1whale1...", flow24h: 150000, flashAlert: true },
  { id: "2", address: "sei1whale2...", flow24h: -80000, flashAlert: false },
  { id: "3", address: "sei1whale3...", flow24h: 200000, flashAlert: true },
  { id: "4", address: "sei1whale4...", flow24h: -120000, flashAlert: false },
  { id: "5", address: "sei1whale5...", flow24h: 90000, flashAlert: false },
  { id: "6", address: "sei1whale6...", flow24h: 300000, flashAlert: true },
  { id: "7", address: "sei1whale7...", flow24h: -50000, flashAlert: false },
  { id: "8", address: "sei1whale8...", flow24h: 100000, flashAlert: false },
  { id: "9", address: "sei1whale9...", flow24h: -20000, flashAlert: false },
  { id: "10", address: "sei1whale10...", flow24h: 75000, flashAlert: true },
]

export function TopWhaleTable() {
  return (
    <Card className="bg-card border-border shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Top Whales (24h Flow)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-muted-foreground">Wallet</TableHead>
                <TableHead className="text-muted-foreground">24h Flow (SEI)</TableHead>
                <TableHead className="text-muted-foreground">Alert</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyWhales.map((whale) => (
                <TableRow key={whale.id} className="hover:bg-secondary/20 transition-colors">
                  <TableCell>
                    <Link
                      href={`/wallet/${whale.address}`}
                      className="text-primary hover:underline flex items-center gap-1 text-sm"
                    >
                      {whale.address.substring(0, 10)}...{whale.address.substring(whale.address.length - 4)}
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </TableCell>
                  <TableCell className={cn(whale.flow24h >= 0 ? "text-green-400" : "text-red-400", "font-medium")}>
                    {whale.flow24h >= 0 ? (
                      <ArrowUp className="inline-block h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDown className="inline-block h-3 w-3 mr-1" />
                    )}
                    {Math.abs(whale.flow24h).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {whale.flashAlert && <Badge className="bg-yellow-500/20 text-yellow-400 pulse">Flash Alert</Badge>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {dummyWhales.length === 0 && <div className="text-center text-muted-foreground py-4">No top whales found.</div>}
      </CardContent>
    </Card>
  )
}
