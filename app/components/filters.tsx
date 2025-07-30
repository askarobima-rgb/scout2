"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import { useState } from "react"

export function Filters() {
  const [chainId, setChainId] = useState("all")
  const [amount, setAmount] = useState("")
  const [label, setLabel] = useState("")

  const handleApplyFilters = () => {
    console.log("Applying filters:", { chainId, amount, label })
    // Implement actual filtering logic here
  }

  return (
    <Card className="bg-card border-border shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Filters</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="chainId" className="text-muted-foreground">
            Chain ID
          </Label>
          <Select value={chainId} onValueChange={setChainId}>
            <SelectTrigger id="chainId" className="bg-secondary/20 border-border">
              <SelectValue placeholder="Select Chain ID" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="all">All Chains</SelectItem>
              <SelectItem value="sei-mainnet">Sei Mainnet</SelectItem>
              <SelectItem value="sei-testnet">Sei Testnet</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="amount" className="text-muted-foreground">
            Min Amount
          </Label>
          <Input
            id="amount"
            type="number"
            placeholder="e.g., 1000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-secondary/20 border-border"
          />
        </div>
        <div>
          <Label htmlFor="label" className="text-muted-foreground">
            Label
          </Label>
          <Input
            id="label"
            type="text"
            placeholder="e.g., Exchange"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="bg-secondary/20 border-border"
          />
        </div>
        <div className="md:col-span-3 flex justify-end">
          <Button onClick={handleApplyFilters} className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Filter className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
