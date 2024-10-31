'use client'

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Tag, Building2, Search } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const programs = [
  {
    title: "NSF I-Corps Program",
    organization: "National Science Foundation",
    location: "United States",
    tags: ["early-stage startups", "customer discovery", "commercialization", "science & technology"],
  },
  {
    title: "Y Combinator Startup School",
    organization: "Y Combinator",
    location: "Global (based in the U.S.)",
    tags: ["seed funding", "tech startups", "mentorship", "entrepreneurship", "global access"],
  },
  {
    title: "MassChallenge Accelerator",
    organization: "MassChallenge",
    location: "Boston, USA (and global locations)",
    tags: ["high-impact startups", "equity-free", "industry-specific accelerators", "mentorship"],
  },
  {
    title: "Creative Destruction Lab (CDL)",
    organization: "University of Toronto",
    location: "Toronto, Canada",
    tags: ["scalable startups", "AI", "science-based innovation", "seed stage", "deep-tech"],
  }
]

export function SavedJobs() {
  const filters = [
    {
      key: "title",
      title: "Title",
      type: "text"
    },
    {
      key: "organization",
      title: "Organization",
      type: "text"
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
    return programs.filter((item) => {
      return filters.every(filter => {
        const filterValue = filterValues[filter.key].toLowerCase()
        if (filterValue === "") return true
        const itemValue = item[filter.key as keyof typeof item]
        return String(itemValue).toLowerCase().includes(filterValue)
      })
    })
  }, [filterValues])

  return (
    <div className="container mx-auto w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {filters.map((filter) => (
          <div key={filter.key} className="relative">
            {filter.type === 'select' ? (
              <Select value={filterValues[filter.key]} onValueChange={(value) => handleFilterChange(filter.key, value)}>
                <SelectTrigger>
                  <SelectValue placeholder={`Filter by ${filter.title}`} />
                </SelectTrigger>
                <SelectContent>
                  {filter.type === 'select' && (
                    <SelectItem value="">All</SelectItem>
                  )}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredData.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="flex flex-col h-full">
              <CardContent className="p-4 flex-grow">
                <div className="mb-2">
                  <h3 className="font-semibold text-lg">{program.title}</h3>
                  <p className="text-sm text-muted-foreground">{program.organization}</p>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{program.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{program.organization}</span>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {program.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}