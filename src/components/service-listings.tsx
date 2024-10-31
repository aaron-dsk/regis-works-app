'use client'

import { useState, useMemo } from "react"
import Image from "next/image"
import { Clock, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"

export function ServiceListings() {
  const services = [
    {
      image: "/images/marketplace/globant.jpg",
      title: "Comprehensive Cybersecurity Risk Assessment for Research Infrastructures",
      company: "Globant",
      location: "Global",
      responseTime: "Response time is typically 1 business day"
    },
    {
      image: "/images/projects/concordia.jpg",
      title: "Multi-Stage Engine Stress Testing for Advanced Aerospace Research",
      company: "Concordia University",
      location: "Montreal, Canada"
    },
    {
      image: "/images/marketplace/UF.jpg",
      title: "HAI-Powered Genomic Analysis for Precision Medicine and Drug Discovery",
      company: "University of Florida",
      location: "Gainesville, Florida"
    },
    {
      image: "/images/projects/cambridge.jpg",
      title: "Advanced Biometric Authentication Systems for Research Data Security",
      company: "University of Cambridge",
      location: "Cambridge, UK"
    },
    {
      image: "/images/projects/mit.png",
      title: "Quantum Computing Solutions for Complex Molecular Simulations",
      company: "IBM Research, MIT Collaboration",
      location: "Cambridge, Massachusetts, USA"
    },
    {
      image: "/images/projects/stanford.png",
      title: "AI-Driven Medical Image Analysis for Early Cancer Detection",
      company: "Stanford University",
      location: "Stanford, California, USA"
    }
  ];

  const filters = [
    {
      key: "title",
      title: "Title",
      type: "text"
    },
    {
      key: "company",
      title: "Company",
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
    return services.filter((item) => {
      return filters.every(filter => {
        const filterValue = filterValues[filter.key].toLowerCase()
        if (filterValue === "") return true
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
          >
            <div className="flex items-start space-x-4 p-4 border rounded-lg h-full">
              <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src={service.image}
                  alt={`${service.company} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-lg font-semibold text-blue-600">{service.title}</h3>
                <p className="font-semibold">Provided by: {service.company}</p>
                <p className="text-muted-foreground">{service.location}</p>
                {service.responseTime && (
                  <div className="flex items-center text-green-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{service.responseTime}</span>
                  </div>
                )}
              </div>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
