'use client'

import React, { useState, useMemo } from 'react'
import { MoreVertical, Search } from 'lucide-react'
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type DataSource = {
  name: string
  type: string
  country: 'FRA' | 'DEU'
  records: number
  dateRange: string
  status: 'Ongoing' | 'Decommissioned'
  refreshed: string
  progress: number
}

const dataSources: DataSource[] = [
  { name: 'Disease Analyzer', type: 'EMR', country: 'FRA', records: 4400000, dateRange: '2010-Present', status: 'Ongoing', refreshed: '2 weeks ago', progress: 92 },
  { name: 'Longitudinal Patient Data', type: 'EMR', country: 'FRA', records: 11800000, dateRange: '1992-Present', status: 'Ongoing', refreshed: '5 months ago', progress: 76 },
  { name: 'LRx', type: 'Pharmacy (LRx)', country: 'FRA', records: 47000000, dateRange: '1985-Present', status: 'Ongoing', refreshed: '5 months ago', progress: 64 },
  { name: 'ADOReg/DxCOG', type: 'Registry', country: 'DEU', records: 9900, dateRange: '2008-Present', status: 'Ongoing', refreshed: '2 months ago', progress: 63 },
  { name: 'Disease Analyzer', type: 'EMR', country: 'DEU', records: 40000000, dateRange: '2004-Present', status: 'Decommissioned', refreshed: '5 years ago', progress: 25 },
  { name: 'German Claims - SHI', type: 'Claims', country: 'DEU', records: 5000000, dateRange: '2000-Present', status: 'Decommissioned', refreshed: '6 years ago', progress: 22 },
  { name: 'Système national des Données de Santé', type: 'Claims', country: 'FRA', records: 67000000, dateRange: '2003-Present', status: 'Decommissioned', refreshed: '3 years ago', progress: 22 },
  { name: 'Oncology Dynamics', type: 'Patient Charts', country: 'FRA', records: 131000, dateRange: '2010-Present', status: 'Decommissioned', refreshed: '5 years ago', progress: 22 },
]

const CircularProgressBar = ({ progress }: { progress: number }) => {
  const radius = 16
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="relative w-10 h-10">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <circle
          className="stroke-current text-gray-200"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="18"
          cy="18"
        />
        <circle
          className="stroke-current text-purple-500"
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="18"
          cy="18"
          strokeWidth="3"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
        {progress}%
      </span>
    </div>
  )
}

export function MedicalDataCards() {
  const filters = [
    {
      key: "name",
      title: "Name",
      type: "text"
    },
    {
      key: "type",
      title: "Type",
      type: "select",
      options: ["All", "EMR", "Pharmacy (LRx)", "Registry", "Claims", "Patient Charts"]
    },
    {
      key: "country",
      title: "Country",
      type: "select",
      options: ["FRA", "DEU"]
    },
    {
      key: "status",
      title: "Status",
      type: "select",
      options: ["Ongoing", "Decommissioned"]
    }
  ]

  const [filterValues, setFilterValues] = useState<Record<string, string>>(
    Object.fromEntries(filters.map(filter => [filter.key, ""]))
  )

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }))
  }

  const filteredData = useMemo(() => {
    return dataSources.filter((item) => {
      return filters.every(filter => {
        const filterValue = filterValues[filter.key].toLowerCase()
        if (filterValue === "" || filterValue === "all") return true
        const itemValue = item[filter.key as keyof typeof item]
        return String(itemValue).toLowerCase().includes(filterValue)
      })
    })
  }, [filterValues])

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
        {filters.map((filter) => (
          <div key={filter.key} className="relative">
            {filter.type === 'select' ? (
              <Select value={filterValues[filter.key]} onValueChange={(value) => handleFilterChange(filter.key, value)}>
                <SelectTrigger>
                  <SelectValue placeholder={`Filter by ${filter.title}`} />
                </SelectTrigger>
                <SelectContent>
                  {filter.options?.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <div className="relative">
                <Input
                  type="text"
                  placeholder={`Filter by ${filter.title}`}
                  value={filterValues[filter.key]}
                  onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredData.map((source, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col">
              <div className="p-4 flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{source.name}</h3>
                    <p className="text-sm text-gray-500">{source.type}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-500">Country</span>
                    <span className="text-sm text-gray-900">
                      {source.country === 'FRA' ? '🇫🇷' : '🇩🇪'} {source.country}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-500">Records</span>
                    <span className="text-sm text-gray-900">{source.records.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-500">Date Range</span>
                    <span className="text-sm text-gray-900">{source.dateRange}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Status</span>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      source.status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {source.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-500">Refreshed</span>
                    <span className="text-sm text-gray-900">{source.refreshed}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Progress</span>
                    <CircularProgressBar progress={source.progress} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}