'use client'

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

interface IncubatorAcceleratorProps {
  name: string
  type: "incubator" | "accelerator"
  location: string
  focus: string[]
  fundingOffered: string
  notableAlumni: string[]
  imageUrl: string
}

export function IncubatorAcceleratorCard({ 
  incubators = [
    {
      name: "TechStars",
      type: "accelerator",
      location: "Boulder, Colorado",
      focus: ["Technology", "AI", "Blockchain", "E-commerce"],
      fundingOffered: "Up to $120,000 investment",
      notableAlumni: ["SendGrid", "DigitalOcean", "ClassPass"],
      imageUrl: "/images/accele/techstars.png"
    },
    {
      name: "Y Combinator",
      type: "accelerator",
      location: "Mountain View, Cali",
      focus: ["Technology", "AI", "Blockchain", "E-commerce"],
      fundingOffered: "$125,000 for 7%",
      notableAlumni: ["Airbnb", "Dropbox", "Stripe"],
      imageUrl: "/images/accele/y-combinator.png"
    },
    {
      name: "Station F",
      type: "incubator",
      location: "Paris, France",
      focus: ["Technology", "AI", "Blockchain", "E-commerce"],
      fundingOffered: "Non-equity assistance",
      notableAlumni: ["Zenly", "Alan", "Payfit"],
      imageUrl: "/images/accele/station-f.png"
    }
  ]
}: { incubators?: IncubatorAcceleratorProps[] }) {
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
      options: ["All", "incubator", "accelerator"]
    },
    {
      key: "location",
      title: "Location",
      type: "text"
    }
  ]

  const [filterValues, setFilterValues] = useState<Record<string, string>>(
    Object.fromEntries(filters.map(filter => [filter.key, ""]))
  )

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }))
  }

  const filteredData = useMemo(() => {
    return incubators.filter((item) => {
      return filters.every(filter => {
        const filterValue = filterValues[filter.key].toLowerCase()
        if (filterValue === "" || filterValue === "all") return true
        const itemValue = item[filter.key as keyof typeof item]
        return String(itemValue).toLowerCase().includes(filterValue)
      })
    })
  }, [filterValues])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((incubator, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="w-full h-full flex flex-col">
              <div className="flex items-center p-6 pb-2">
                <div className="w-1/5 mr-4">
                  <Image
                    src={incubator.imageUrl}
                    alt={`${incubator.name} logo`}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                </div>
                <div className="w-4/5">
                  <CardTitle className="text-xl font-bold mb-2">{incubator.name}</CardTitle>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant={incubator.type === "incubator" ? "secondary" : "default"}>
                      {incubator.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{incubator.location}</span>
                  </div>
                </div>
              </div>
              <CardContent className="pt-2">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Focus:</h4>
                    <div className="flex flex-wrap gap-1">
                      {incubator.focus.map((item, i) => (
                        <Badge key={i} variant="outline">{item}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Funding Offered:</h4>
                    <p className="text-sm">{incubator.fundingOffered}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Notable Alumni:</h4>
                    <p className="text-sm">{incubator.notableAlumni.join(", ")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}