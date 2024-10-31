'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select"
import { Search } from "lucide-react"

const startups = [
  {
    name: "IonQ",
    image: "/images/startups/ionq.avif",
    researchFocus: "Quantum Computing",
    partnershipOpportunities: "Open to Research Collaboration, Seeking Corporate Partners",
    fundingStage: "Publicly traded (NYSE: IONQ)",
    institutionInvolvement: "Collaborating with the University of Maryland, Duke University",
    impact: "Building scalable, general-purpose quantum computers to solve complex problems in finance, chemistry, and machine learning",
    timeline: "Ongoing development; next-generation systems expected in 2025",
    resourceNeeds: "Quantum algorithms researchers, AI software for quantum applications, cloud infrastructure support",
    collaborationType: "Open"
  },
  {
    name: "23andMe",
    image: "/images/startups/23-me.png",
    researchFocus: "Genomics & Precision Medicine",
    partnershipOpportunities: "Open to Academic Collaborations and Corporate Partnerships",
    fundingStage: "Publicly traded (NASDAQ: ME)",
    institutionInvolvement: "Collaborating with Stanford University, National Institutes of Health (NIH)",
    impact: "Providing personalized genetic insights to improve healthcare and contribute to precision medicine research",
    timeline: "Ongoing service offerings, with expanded health research expected by 2025",
    resourceNeeds: "Genetic data analysts, AI-driven health tech solutions, bioinformatics software",
    collaborationType: "Open"
  },
  {
    name: "Relativity Space",
    image: "/images/startups/relativity.avif",
    researchFocus: "Aerospace & Additive Manufacturing (3D Printing)",
    partnershipOpportunities: "Seeking Joint Ventures and Government Contracts",
    fundingStage: "Series E ($1.3 billion raised)",
    institutionInvolvement: "Collaborating with NASA and the U.S. Air Force",
    impact: "Using 3D printing to build and launch rockets faster and more efficiently for space exploration and satellite deployment",
    timeline: "First orbital launch planned for 2024 with further expansion by 2026",
    resourceNeeds: "Advanced 3D printing technology, aerospace materials experts, machine learning software for manufacturing optimization",
    collaborationType: "Closed"
  }
]

export function StartupCards() {
  const filters = [
    {
      key: "name",
      title: "Name",
      type: "text"
    },
    {
      key: "researchFocus",
      title: "Research Focus",
      type: "text"
    },
    {
      key: "collaborationType",
      title: "Collaboration Type",
      type: "select",
      options: ["Open", "Closed"]
    },
    {
      key: "fundingStage",
      title: "Funding Stage",
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
    return startups.filter((item) => {
      return filters.every(filter => {
        const filterValue = filterValues[filter.key].toLowerCase()
        if (filterValue === "") return true
        const itemValue = item[filter.key as keyof typeof item]
        return String(itemValue).toLowerCase().includes(filterValue)
      })
    })
  }, [filterValues])

  return (
    <div className="w-full space-y-6">
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
        {filteredData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="flex flex-col h-full">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <CardTitle className="text-lg font-bold mb-2">{project.name}</CardTitle>
                <div className="space-y-2">
                  <p><strong>Research Focus:</strong> {project.researchFocus}</p>
                  <p><strong>Partnership:</strong> {project.partnershipOpportunities}</p>
                  <p><strong>Funding Stage:</strong> {project.fundingStage}</p>
                  <p><strong>Institution:</strong> {project.institutionInvolvement}</p>
                  <p><strong>Impact:</strong> {project.impact}</p>
                  <p><strong>Timeline:</strong> {project.timeline}</p>
                  <p><strong>Needs:</strong> {project.resourceNeeds}</p>
                  <Badge variant={project.collaborationType === 'Open' ? 'default' : 'secondary'}>
                    {project.collaborationType} Collaboration
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}