'use client'

import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function SearchJobs() {
  const recentSearches = [
    "Ux And UI designer, bihpur",
    "Software Engineer Python D...",
    "Software Engineer ,bengalu...",
    "Software Engineer Python D...",
  ]

  const topCompanies = [
    { name: "Adobe", logo: "/placeholder.svg?height=40&width=40", rating: 3.9, reviews: "1.7k", category: "Indian MNC" },
    { name: "Corbus", logo: "/placeholder.svg?height=40&width=40", rating: 3.6, reviews: "123", category: "Foreign MNC" },
    { name: "Quest", logo: "/placeholder.svg?height=40&width=40", rating: 3.7, reviews: "1.9k", category: "Foreign MNC" },
    { name: "Oppo", logo: "/placeholder.svg?height=40&width=40", rating: 4, reviews: "4.1k", category: "Foreign MNC" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-3xl font-bold mb-6">Search jobs and internships</h1>
      <div className="space-y-4 mb-8">
        <Input placeholder="Skills, designations, companies" className="w-full" />
        <Input placeholder="Location" className="w-full" />
        <Button className="w-full">Search jobs</Button>
      </div>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your most recent searches</h2>
        <div className="flex flex-wrap gap-2">
          {recentSearches.map((search, index) => (
            <Button key={index} variant="outline" className="flex items-center bg-background dark:bg-gray-800">
              <Search className="mr-2 h-4 w-4" />
              {search}
            </Button>
          ))}
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Top companies</h2>
          <Link href="#" className="text-blue-600 hover:text-blue-800">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topCompanies.map((company, index) => (
            <Card key={index} className="bg-card dark:bg-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <Image src={company.logo} alt={company.name} width={40} height={40} className="mr-3" />
                  <h3 className="font-semibold text-lg">{company.name}</h3>
                </div>
                <div className="flex items-center text-sm mb-3">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 font-medium">{company.rating}</span>
                  <span className="ml-2 text-muted-foreground">({company.reviews} reviews)</span>
                </div>
                <div className="mb-3 rounded-full bg-orange-100 dark:bg-orange-900 px-3 py-1 text-sm text-orange-800 dark:text-orange-100 inline-block">{company.category}</div>
                <Button variant="link" className="w-full p-0 text-blue-600 hover:text-blue-800 justify-start">
                  View jobs
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
