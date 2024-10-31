'use client'

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const softwareData = [
  {
    name: "TensorFlow",
    type: "Open Source",
    description: "An end-to-end open-source platform for machine learning. It provides a comprehensive ecosystem for building and deploying ML models.",
    owner: "Google Brain",
    website: "tensorflow.org",
    image: "/images/software/tensor-flow.jpg"
  },
  {
    name: "MATLAB",
    type: "Private",
    description: "A high-level programming language and interactive environment for numerical computation, visualization, and programming.",
    owner: "MathWorks",
    website: "mathworks.com",
    image: "/images/software/mat-lab.jpg"
  },
  {
    name: "SPSS Statistics",
    type: "Private",
    description: "A software package used for interactive or batched statistical analysis. It is widely used in social science research.",
    owner: "IBM",
    website: "ibm.com/analytics/spss-statistics",
    image: "/images/software/ibm.svg"
  },
  {
    name: "NVivo",
    type: "Private",
    description: "A qualitative data analysis (QDA) software package for researchers working with unstructured data.",
    owner: "QSR International",
    website: "qsrinternational.com/nvivo-qualitative-data-analysis-software/home",
    image: "/images/software/nvivo.jpg"
  },
  {
    name: "GROMACS",
    type: "Open Source",
    description: "A molecular dynamics package primarily designed for simulations of proteins, lipids, and nucleic acids.",
    owner: "GROMACS Development Team",
    website: "gromacs.org",
    image: "/images/software/gromacs.png"
  }
]

export function SoftwareShowcase() {
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
      options: ["Open Source", "Private"]
    },
    {
      key: "owner",
      title: "Owner",
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
    return softwareData.filter((item) => {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredData.map((software, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="flex flex-col h-full overflow-hidden">
            <Image
              src={software.image}
              alt={software.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover" // No need for separate border radius
            />
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{software.name}</CardTitle>
                <CardDescription>{software.type}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm mb-4">{software.description}</p>
                <div className="text-sm">
                  <p><strong>Owner:</strong> {software.owner}</p>
                  <Link href={`https://${software.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {software.website}
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
