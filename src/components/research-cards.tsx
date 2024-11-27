"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function ResearchCards() {
  const projects = [
    {
      title: "IBM-Q Network",
      institution: "University of Chicago",
      image: "/images/projects/ibm-q.png",
      focus: "Quantum Computing",
      partnership: "Open to Academic Collaborations, Industry Partnerships",
      funding: "Sponsored by IBM, NSF, DOE",
      institutions: ["University of Chicago", "Argonne National Laboratory", "Fermilab"],
      impact: "Advance quantum computing for use in energy research, cryptography, and new materials development",
      timeline: "3-5 years expected breakthroughs",
      needs: ["Quantum researchers", "AI software developers", "Advanced hardware"],
      logoImage: "/images/projects/u-chicago.png",
    },
    {
      title: "Blue Brain Project",
      institution: "EPFL, Switzerland",
      image: "/images/projects/blue-brain.jpg",
      focus: "Neuroscience & AI",
      partnership: "Open to Academic and Industry Collaborations",
      funding: "EU Horizon 2020 (€1B+)",
      institutions: ["EPFL", "Forschungszentrum Jülich", "European research institutes"],
      impact: "Develop deep understanding of the human brain to advance neuroscience, AI, and robotics",
      timeline: "Computational models expected by 2025",
      needs: ["Neuroscientists", "AI developers", "HPC infrastructure"],
      logoImage: "/images/projects/eu.jpg",
    },
    {
      title: "BRAIN Initiative",
      institution: "UCSF",
      image: "/images/projects/global-brain.jpeg",
      focus: "Neuroscience, Biomedical Engineering",
      partnership: "Open to Academic, Government, and Private Sector",
      funding: "NIH, DARPA, private foundations",
      institutions: ["UCSF", "Harvard University", "MIT", "Stanford University"],
      impact: "Map brain circuits to understand neurological and psychiatric diseases",
      timeline: "5-10 years major discoveries expected",
      needs: ["Neuroscientists", "Computational biologists", "Bioinformatics developers"],
      logoImage: "/images/projects/ucsf.png",
    },
  ]

  const filters = [
    {
      key: "title",
      title: "Title",
      type: "text"
    },
    {
      key: "institution",
      title: "Institution",
      type: "text"
    },
    {
      key: "focus",
      title: "Focus",
      type: "text"
    },
    {
      key: "partnership",
      title: "Partnership",
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
    return projects.filter((item) => {
      return filters.every(filter => {
        const filterValue = filterValues[filter.key].toLowerCase()
        if (filterValue === "") return true
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
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden bg-white flex flex-col h-[600px]">
              <div className="relative">
                <img
                  src={project.image}
                  alt={`${project.title} visual representation`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 w-10 h-10 rounded-full overflow-hidden border-2 border-white bg-white shadow-md">
                  <img
                    src={project.logoImage}
                    alt={`${project.institution} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Badge
                  variant="secondary"
                  className="absolute top-2 right-2 font-medium"
                >
                  Research Project
                </Badge>
              </div>
              <CardHeader className="space-y-2">
                <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.institution}</p>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                <div className="space-y-2">
                  <h4 className="font-semibold">Research Focus</h4>
                  <p className="text-sm text-muted-foreground">{project.focus}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Partnership</h4>
                  <p className="text-sm text-muted-foreground">{project.partnership}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Impact</h4>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Timeline</h4>
                  <p className="text-sm text-muted-foreground">{project.timeline}</p>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full">
                  Open Collaboration
                  <Users className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}