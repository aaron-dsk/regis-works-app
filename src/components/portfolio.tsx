'use client'

import Image from "next/image"
import { Settings, Info } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export function PortfolioComponent() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-700">Your Portfolio</h1>
        <Button variant="ghost" size="icon" className="text-blue-600 hover:bg-blue-50 hover:text-blue-700">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Total Amount Invested", value: "100,520.50" },
          { title: "Portfolio Value", value: "$101,695.50" },
          { title: "Total Distributions Received", value: "$9,744.00" },
          { title: "Total Owed Before Profit Sharing", value: "$91,951.50" },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <Info className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h10" />
              <path d="M7 12h10" />
              <path d="M7 17h10" />
            </svg>
            Transaction Requests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            You have previous transaction requests, the company administration is in the process of reviewing these requests. As soon as the administrator approves your transaction requests, you will receive an email and your portfolio will be updated accordingly. You can delete your requests if you so desire.
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Company / Project</TableHead>
                <TableHead>Share</TableHead>
                <TableHead>Price to pay</TableHead>
                <TableHead>Shares</TableHead>
                <TableHead>Payment Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">BUY</TableCell>
                <TableCell>Wed, Feb 21, 2024</TableCell>
                <TableCell>Commercial Building</TableCell>
                <TableCell>Class T (Test)</TableCell>
                <TableCell>$360.00</TableCell>
                <TableCell>72</TableCell>
                <TableCell className="text-yellow-500">Blockchain Transaction Processing</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Accessible Offers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <Image
              src="/images/townhouse.jpg"
              alt="Modern Suburban Building"
              width={400}
              height={300}
              className="rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex flex-col flex-grow">
              <div className="space-y-4 flex-grow">
                <h3 className="text-2xl font-bold">Modern Suburban Building</h3>
                <p className="text-muted-foreground">Seller: Example Entity</p>
                <p className="text-sm">
                  A townhouse, townhome, town house, or town home, is a type of terraced housing. A modern townhouse is often one with a small footprint on multiple floors.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <span>Class A</span>
                    <span className="ml-auto">51,454.00 Shares / $51,454.00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <span>Class C</span>
                    <span className="ml-auto">50.00 Shares / $50.00</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-end mt-4">
                <Button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 w-full sm:w-auto px-4 py-2 text-sm font-medium">VIEW DETAILS</Button>
                <Button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 w-full sm:w-auto px-4 py-2 text-sm font-medium">BUY</Button>
                <Button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 w-full sm:w-auto px-4 py-2 text-sm font-medium">SELL TO COMPANY</Button>
                <Button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 w-full sm:w-auto px-4 py-2 text-sm font-medium">SHARE CERTIFICATE</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}