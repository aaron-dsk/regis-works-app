'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Filter } from "lucide-react"

export function Marketplace() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Offerings</h1>
        <div className="flex items-center space-x-2">
          <Input className="w-64" placeholder="Search..." />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Created recently" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Created recently</SelectItem>
              <SelectItem value="oldest">Oldest first</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button>Create offering</Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="mb-4">
        <TabsList>
          <TabsTrigger value="all">All 6</TabsTrigger>
          <TabsTrigger value="live">Live 2</TabsTrigger>
          <TabsTrigger value="coming">Coming soon 2</TabsTrigger>
          <TabsTrigger value="drafts">Drafts 2</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {offerings.map((offering, index) => (
          <Card key={index}>
            <CardHeader className="p-0">
              <img src={offering.image} alt={offering.title} className="w-full h-48 rounded-t-xl object-cover" />
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-sm text-gray-500 mb-1">{offering.company}</div>
              <CardTitle className="text-lg font-semibold mb-1">{offering.title}</CardTitle>
              <p className="text-sm text-gray-600 mb-2">{offering.description}</p>
              <div className="text-xl font-bold text-blue-600 mb-2">{offering.price} <span className="text-sm font-normal">per unit</span></div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Investment term</div>
                <div className="text-right">{offering.investmentTerm}</div>
                <div>Expected return</div>
                <div className="text-right">{offering.expectedReturn}</div>
                <div>Distribution frequency</div>
                <div className="text-right">{offering.distributionFrequency}</div>
              </div>
              <div className="mt-4 bg-blue-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: offering.progress}}></div>
              </div>
              <div className="flex justify-between items-center mt-2 text-sm">
                <div>{offering.raised} raised</div>
                <div>{offering.progress}</div>
              </div>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {offering.timeLeft}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const offerings = [
  {
    status: "Live",
    lastEdit: "12 days ago",
    company: "ELTON by Development Inc.",
    title: "7411 Elton Ave, Huron, ON",
    description: "Class A Office Building with Value-add opportunity for investors.",
    price: "$1,000.00 CAD",
    investmentTerm: "10 years",
    expectedReturn: "16%",
    distributionFrequency: "n/a",
    progress: "80%",
    raised: "212,000.00 CAD",
    timeLeft: "30 days",
    image: "/images/marketplace/office-space.jpg"
  },
  {
    status: "Live",
    lastEdit: "10 days ago",
    company: "GOLD by Giant Mine Inc.",
    title: "The Golden Giant Mine",
    description: "It's a closed underground gold mine in Canada. The grade of the ore is 0.36.",
    price: "$10,000.00 CAD",
    investmentTerm: "15 years",
    expectedReturn: "18%",
    distributionFrequency: "n/a",
    progress: "80%",
    raised: "212,000.00 CAD",
    timeLeft: "30 days",
    image: "/images/marketplace/gold-mine.jpg"
  },
  {
    status: "Coming soon",
    lastEdit: "3 days ago",
    company: "DROPS by Music group LLC",
    title: "Class A Music Royalties Pool",
    description: "Ideal opportunity for an investor with cash flow from a proven catalogue.",
    price: "$100.00 CAD",
    investmentTerm: "5 years",
    expectedReturn: "12%",
    distributionFrequency: "Monthly",
    progress: "0%",
    raised: "0.00 CAD",
    timeLeft: "Coming soon",
    image: "/images/marketplace/pool.jpg"
  },
  {
    status: "Coming soon",
    lastEdit: "2 days ago",
    company: "MALL by Development Group LLC",
    title: "Retail mall, London, ON",
    description: "Retail Mall with value-add opportunity ideal for an investor with occupancy of 72% and cash flow from two anchor stores.",
    price: "$2,500.00 CAD",
    investmentTerm: "8 years",
    expectedReturn: "14%",
    distributionFrequency: "Monthly",
    progress: "0%",
    raised: "0.00 CAD",
    timeLeft: "Coming soon",
    image: "/images/marketplace/retail-mall.jpg"
  },
  {
    status: "Draft",
    lastEdit: "1 day ago",
    company: "GOLF by Apples Parish Golf Club Inc.",
    title: "Apples Parish Golf Club",
    description: "It is one of Canada's most famous golf courses. It includes 17 holes, all of which are in pristine condition.",
    price: "$1,200.00 CAD",
    investmentTerm: "15 years",
    expectedReturn: "18%",
    distributionFrequency: "n/a",
    progress: "0%",
    raised: "0.00 CAD",
    timeLeft: "Draft",
    image: "/images/marketplace/golf-club.jpg"
  },
  {
    status: "Draft",
    lastEdit: "1 day ago",
    company: "OFFICE by Apples Parish Golf Club Inc.",
    title: "2040 Madison Ave Stouffville, ON",
    description: "Class A office building with value-add opportunity ideal for an investor with occupancy of 78% and cash flow from longer-term clients.",
    price: "$1,500.00 CAD",
    investmentTerm: "15 years",
    expectedReturn: "18%",
    distributionFrequency: "n/a",
    progress: "0%",
    raised: "0.00 CAD",
    timeLeft: "Draft",
    image: "/images/marketplace/modern-office.jpg"
  }
]