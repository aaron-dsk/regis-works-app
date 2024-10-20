'use client'

import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { useRouter } from 'next/navigation'

const offeringCategories = [
  { name: "Primary Offerings", count: 11 },
  { name: "Profile Matches", count: 0 },
  { name: "Secondary Offerings", count: 1, hasView: true },
]

const offeringCards = [
  {
    title: "Modern Suburban Building",
    seller: "Example Entity",
    minInvestment: "1,000",
    yearlyReturn: "9,66%",
    description:
      "A townhouse, townhome, town house, or town home, is a type of terraced housing. A modern townhouse is often one with a small footprint on multiple floors.",
  },
  {
    title: "Commercial Building",
    seller: "",
    minInvestment: "1,500",
    yearlyReturn: "8,4%",
    description:
      "This exceptional commercial property located in the heart of Tokyo presents an unparalleled investment opportunity for accredited investors seeking a valuable asset in a prime location.",
  },
  {
    title: "Residential Building",
    seller: "test",
    minInvestment: "850",
    yearlyReturn: "16%",
    description:
      "This residential building offers a spacious layout that can accommodate a variety of high-end rental properties.",
  },
]

export function Offerings() {
  const router = useRouter()

  return (
    <div className="p-6min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">Browse offerings</h1>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="w-3/4 mb-8">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {offeringCategories.map((category, index) => (
          <div key={index} className={`bg-white p-4 pl-6 rounded-lg shadow flex flex-col relative border-l-4 ${
       index === 0 ? 'border-green-500' : index === 1 ? 'border-blue-500' : 'border-red-500'
     }`}>
            <div className="text-gray-500 mb-2">{category.name}</div>
            <div className="text-4xl font-bold mb-2">{category.count}</div>

          </div>
        ))}
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offeringCards.map((card, index) => (
          <Card key={index} className="bg-white shadow-lg overflow-hidden">
            <CardHeader className="p-0">
              <CardTitle className="bg-blue-500 text-white p-4 rounded-t">{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              {card.seller && (
                <div className="flex align-bottom items-center">
                  <p className="text-gray-400 text-sm mb-1">Seller:&nbsp;</p>
                  <p className="text-blue-400 text-sm mb-1">{card.seller}</p>
                  <hr className="border-gray-200 mb-2" />
                </div>
              )}
              <p className="text-gray-500 mb-2">Minimum investment: {card.minInvestment}</p>
              <p className="text-gray-500 mb-2">Yearly Return Rate: {card.yearlyReturn}</p>
              <hr className="border-gray-200 mb-2" />
              <p className="text-sm text-gray-600">{card.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <Button 
                className="flex-1 mr-2 bg-white hover:bg-white border-blue-600 text-blue-600"
                onClick={() => router.push('/details')}
              >
                VIEW DETAILS
              </Button>
              <Button 
                className="flex-1 bg-blue-600 hover:bg-blue-600 text-white"
                onClick={() => router.push('/buy')}
              >
                BUY
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offeringCards.map((card, index) => (
          <Card key={index} className="bg-white shadow-lg overflow-hidden">
            <CardHeader className="p-0">
              <CardTitle className="bg-blue-500 text-white p-4 rounded-t">{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              {card.seller && (
                <div className="flex align-bottom items-center">
                  <p className="text-gray-400 text-sm mb-1">Seller:&nbsp;</p>
                  <p className="text-blue-400 text-sm mb-1">{card.seller}</p>
                  <hr className="border-gray-200 mb-2" />
                </div>
              )}
              <p className="text-gray-500 mb-2">Minimum investment: {card.minInvestment}</p>
              <p className="text-gray-500 mb-2">Yearly Return Rate: {card.yearlyReturn}</p>
              <hr className="border-gray-200 mb-2" />
              <p className="text-sm text-gray-600">{card.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
            <Button 
                className="flex-1 mr-2 bg-white hover:bg-white border-blue-600 text-blue-600"
                onClick={() => router.push('/details')}
              >
                VIEW DETAILS
              </Button>
              <Button 
                className="flex-1 bg-blue-600 hover:bg-blue-600 text-white"
                onClick={() => router.push('/buy')}
              >
                BUY
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
