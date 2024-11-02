'use client'

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const hardwareData = [
  {
    name: "Da Vinci Surgical System",
    type: "Private",
    description: "A robotic surgical system designed to facilitate complex surgery using a minimally invasive approach, controlled by a surgeon from a console.",
    owner: "Intuitive Surgical",
    website: "intuitive.com",
    image: "/images/hardware/da-vinci-robot.jpg",
    logo: "/images/hardware/intuitive.jpeg"
  },
  {
    name: "MAGNETOM Terra 7T MRI Scanner",
    type: "Private",
    description: "A state of the art, cutting-edge, high-tech MRI scanner with a 7 Tesla magnetic field strength, designed for advanced brain and neurological research.",
    owner: "Siemens Healthineers",
    website: "siemens-healthineers.com",
    image: "/images/hardware/magnetom.webp",
    logo: "/images/hardware/siemens.webp"
  },
  {
    name: "NVIDIA DGX A100 Supercomputer",
    type: "University-Owned (University of Florida)",
    description: "A powerful AI supercomputer designed for research in AI, machine learning, and computational biology. Donated to the University of Florida for research purposes.",
    owner: "University of Florida",
    website: "ufl.edu",
    image: "/images/hardware/dgx.webp",
    logo: "/images/marketplace/UF.jpg"
  },
  {
    name: "IBM Quantum System One",
    type: "Private",
    description: "The world's first integrated quantum computing system for commercial use, designed for scientific and commercial applications of quantum computing.",
    owner: "IBM",
    website: "ibm.com/quantum-computing",
    image: "/images/hardware/ibm-quantum.jpeg",
    logo: "/images/hardware/ibm.svg"
  }
]

export function HardwareShowcase() {
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
      options: ["All", "Private", "University-Owned (University of Florida)"]
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
    return hardwareData.filter((item) => {
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
        {filteredData.map((hardware, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="overflow-hidden relative flex flex-col h-full">
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full overflow-hidden border-2 border-white z-10">
                <Image
                  src={hardware.logo}
                  alt={`${hardware.owner} logo`}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="h-32 relative">
                <Image
                  src={hardware.image}
                  alt={hardware.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <CardHeader className="pb-2 pt-3">
                <CardTitle className="text-lg">{hardware.name}</CardTitle>
                <CardDescription>{hardware.type}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm mb-2 line-clamp-3">{hardware.description}</p>
                <div className="text-sm">
                  <p><strong>Owner:</strong> {hardware.owner}</p>
                  <Link href={`https://${hardware.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">
                    {hardware.website}
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