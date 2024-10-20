'use client'

import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Cpu, Zap, Wheat } from 'lucide-react'

const BadgeVariants = {
  success: "bg-green-500 text-white hover:bg-green-600",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
  destructive: "bg-red-500 text-white hover:bg-red-600",
}

type AssetType = 'property' | 'startup' | 'energy' | 'agriculture'

interface Transaction {
  id: string
  assetType: AssetType
  assetName: string
  amount: number
  cryptoCurrency: string
  date: string
  status: 'completed' | 'pending' | 'failed'
  tokenId: string
  blockchainNetwork: string
}

const transactions: Transaction[] = [
  { id: '1', assetType: 'property', assetName: 'Downtown Loft', amount: 0.5, cryptoCurrency: 'ETH', date: '2023-06-01', status: 'completed', tokenId: 'TOKEN001', blockchainNetwork: 'Ethereum' },
  { id: '2', assetType: 'startup', assetName: 'TechNova Inc.', amount: 1000, cryptoCurrency: 'USDC', date: '2023-06-02', status: 'pending', tokenId: 'TOKEN002', blockchainNetwork: 'Polygon' },
  { id: '3', assetType: 'energy', assetName: 'SolarField Project', amount: 0.25, cryptoCurrency: 'BTC', date: '2023-06-03', status: 'completed', tokenId: 'TOKEN003', blockchainNetwork: 'Bitcoin' },
  { id: '4', assetType: 'agriculture', assetName: 'Vertical Farm', amount: 500, cryptoCurrency: 'USDT', date: '2023-06-04', status: 'failed', tokenId: 'TOKEN004', blockchainNetwork: 'Tron' },
  { id: '5', assetType: 'property', assetName: 'Beachfront Villa', amount: 1.2, cryptoCurrency: 'ETH', date: '2023-06-05', status: 'completed', tokenId: 'TOKEN005', blockchainNetwork: 'Ethereum' },
]

const assetIcons: Record<AssetType, React.ReactNode> = {
  property: <Building className="h-4 w-4" />,
  startup: <Cpu className="h-4 w-4" />,
  energy: <Zap className="h-4 w-4" />,
  agriculture: <Wheat className="h-4 w-4" />,
}

export function Transactions() {
  const [filter, setFilter] = useState<AssetType | 'all'>('all')

  const filteredTransactions = filter === 'all' 
    ? transactions 
    : transactions.filter(t => t.assetType === filter)

  return (
    <Card className="w-full max-w-6xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select onValueChange={(value: AssetType | 'all') => setFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by asset type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Assets</SelectItem>
              <SelectItem value="property">Property</SelectItem>
              <SelectItem value="startup">Startup</SelectItem>
              <SelectItem value="energy">Energy</SelectItem>
              <SelectItem value="agriculture">Agriculture</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Crypto</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Token ID</TableHead>
              <TableHead>Blockchain</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center space-x-2">
                    {assetIcons[transaction.assetType]}
                    <span>{transaction.assetName}</span>
                  </div>
                </TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.cryptoCurrency}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      transaction.status === 'completed' ? 'default' :
                      transaction.status === 'pending' ? 'secondary' : 'destructive'
                    }
                    className={BadgeVariants[
                      transaction.status === 'completed' ? 'success' :
                      transaction.status === 'pending' ? 'secondary' : 'destructive'
                    ]}
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell>{transaction.tokenId}</TableCell>
                <TableCell>{transaction.blockchainNetwork}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}