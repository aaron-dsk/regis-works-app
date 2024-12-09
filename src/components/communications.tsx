'use client'

import { useState } from 'react'
import { Search, ChevronDown, Send } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const agents = [
  { name: "Concierge Agent", status: "...is typing", time: "09:30", image: "/images/concierge.png" },
  { name: "Help Desk Agent", status: "...is typing", time: "10:15", image: "/images/help-desk.png" },
]

export function ChatInterface() {
  const [selectedAgent, setSelectedAgent] = useState(agents[1])

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 text-gray-900" data-theme="light">
      {/* Left sidebar */}
      <div className="w-1/4 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="relative mb-4">
            <Input 
              placeholder="Search" 
              className="!bg-white !text-gray-900 pl-8 w-full" 
              style={{ 
                backgroundColor: 'white !important',
                color: '#111827 !important'
              }}
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <div className="flex items-center text-blue-500 dark:text-blue-400">
            <span>Filter by</span>
            <Button variant="ghost" className="ml-2 p-1">
              Recent <ChevronDown size={16} />
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className={`p-4 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                selectedAgent.name === agent.name ? 'bg-blue-50 dark:bg-blue-900' : ''
              }`}
              onClick={() => setSelectedAgent(agent)}
            >
              <Image src={agent.image} alt={agent.name} width={40} height={40} className="mr-3" />
              <div className="flex-1">
                <h3 className="font-semibold">{agent.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{agent.status}</p>
              </div>
              <span className="text-xs text-gray-400 dark:text-gray-500">{agent.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right chat area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-900">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center bg-white dark:bg-gray-800">
          <Image src={selectedAgent.image} alt={selectedAgent.name} width={40} height={40} className="mr-3" />
          <div>
            <h2 className="font-semibold">{selectedAgent.name}</h2>
            <p className="text-sm text-green-500">Online</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow mb-4">
            <p className="text-sm">
              Hello! I am here your concierge, here to assist you with understanding and navigating the
              Regis Works platform. If you have any questions or need clarification on anything, I am be happy to help. 
              How can I assist you today?
            </p>
          </div>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="relative">
            <Input placeholder="Type your message here..." className="pr-10 w-full bg-transparent" />
            <Button size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


