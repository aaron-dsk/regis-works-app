'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function OfferingDetails() {
  const [activeTab, setActiveTab] = useState('Location')
  const description = "This townhouse is a rare opportunity for accredited investors seeking a valuable commercial property in Toronto's bustling business district. With its prime location, luxurious design, and versatile space, this property is an excellent investment opportunity that should not be missed. Invest now and benefit from the potential of this valuable asset."
  
  const tabContent = "Investing in this townhouse is an excellent opportunity for accredited investors to own a valuable asset in a prime location. Toronto's real estate market is consistently growing, and this property is poised to benefit from this growth. With the right tenants and management, this townhouse can provide a steady stream of income and substantial returns."

  const tabs = ['Location', 'Architectural Type', 'Building Layout', 'Investment Details', 'Offering Detail']

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Modern Suburban Building</h1>
          
          <p className="mb-4">
            A townhouse, townhome, town house, or town home, is a type of terraced housing. A modern
            townhouse is often one with a small footprint on multiple floors.
            A townhouse, townhome, town house, or town home, is a type of terraced housing. A modern
            townhouse is often one with a small footprint on multiple floors.
          </p>
          <p className="text-gray-600 mb-4">Seller: <span className="text-blue-500">Example Entity</span></p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="bg-black text-white hover:bg-gray-800">Invest Now</Button>
            <Button variant="outline">Message Administrator</Button>
            <Button variant="outline">Relevant Documents</Button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <Image 
            src="/images/townhouse.jpg" 
            alt="Modern Suburban Building" 
            width={600} 
            height={400} 
            className="rounded-lg"
          />
          <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="mt-8 bg-gray-100 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Offering overview</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Offering details</h2>
        <div className="flex">
          <div className="w-1/4 pr-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`block w-full text-left py-2 px-4 mb-2 rounded ${
                  activeTab === tab ? 'bg-gray-100 text-black' : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="w-3/4 bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-700">{tabContent}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
