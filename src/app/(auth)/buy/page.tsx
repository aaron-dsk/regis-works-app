'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BuyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <svg className="w-6 h-6 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <h1 className="text-2xl font-semibold">Submit your Investment Offer</h1>
      </div>
      <p className="text-gray-600 mb-8">Enter share purchase details and send your request to administration</p>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Modern Suburban Building</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Image 
              src="/images/townhouse.jpg" 
              alt="Modern Suburban Building" 
              width={400} 
              height={300} 
              className="rounded-lg"
            />
            <p className="mt-4 text-sm text-gray-600">
              This exceptional commercial property located in the heart of Tokyo presents an unparalleled investment opportunity for accredited investors seeking a valuable asset in a prime location.
            </p>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-lg font-semibold mb-4">Share Class: Limited Partner Shares</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Shares Available</p>
                <p className="font-semibold">824</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Price / Share</p>
                <p className="font-semibold">$100.00</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Minimum Shares to Purchase</p>
                <p className="font-semibold">30</p>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Investor Entity</label>
              <div className="flex items-center">
                <select className="flex-grow border border-gray-300 rounded-md p-2">
                  <option>Select Entity</option>
                </select>
                <Button className="ml-2">CREATE NEW ENTITY</Button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of shares to buy</label>
              <Input type="number" defaultValue={30} />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Currency</label>
              <select className="w-full border border-gray-300 rounded-md p-2">
                <option>USD ($)</option>
              </select>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Price before any fees/discounts (SubTotal):</span>
                <span className="font-semibold">$3,000.00</span>
              </div>
              <div className="flex justify-between">
                <span>Transaction Fee:</span>
                <span className="font-semibold">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Discounts:</span>
                <span className="font-semibold">$0.00</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Total Price</span>
                <span>$3,000.00</span>
              </div>
            </div>
            <Button className="w-full mt-6">SEND BUY SHARES REQUEST</Button>
            <div className="mt-8 border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Share Class: Class T (Test)</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Shares Available</span>
                  <span className="font-semibold">63,516</span>
                </div>
                <div className="flex justify-between">
                  <span>Price / Share</span>
                  <span className="font-semibold">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minimum Shares to Purchase</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Investor Entity</span>
                  <Button className="bg-blue-500 text-white px-4 py-2 rounded">+ CREATE NEW ENTITY</Button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of shares to buy</label>
                  <Input type="number" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Currency</label>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option>USD ($)</option>
                  </select>
                </div>
                <div className="flex justify-between">
                  <span>Price before any fees/discounts (SubTotal):</span>
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Transaction Fee</span>
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Discounts</span>
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total Price</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Receiver Wallet</span>
                  <span className="text-sm text-gray-500">0xb370707751df7da1ac6bc0b83ea485ff0cb63479</span>
                </div>
                <Button className="w-full bg-blue-500 text-white py-2 rounded">SEND BUY SHARES REQUEST</Button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}