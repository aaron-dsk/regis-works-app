"use client"

import { useState, useMemo } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

type Profile = {
  id: number
  name: string
  tools: string[]
  skills: string[]
  fieldOfStudy: string
  degreeLevel: string
  workExperience: number
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Alice Johnson",
    tools: ["Tableau", "EasyEDA", "YellowFinbi"],
    skills: ["Machine Learning", "Data Analysis"],
    fieldOfStudy: "Computer Science",
    degreeLevel: "Masters",
    workExperience: 3,
  },
  {
    id: 2,
    name: "Bob Smith",
    tools: ["Zoho", "Kicad", "Altium"],
    skills: ["Web Development", "UI/UX Design"],
    fieldOfStudy: "Information Technology",
    degreeLevel: "Bachelors",
    workExperience: 5,
  },
  {
    id: 3,
    name: "Carol Williams",
    tools: ["SolidWorks", "Tableau", "EasyEDA"],
    skills: ["Statistical Analysis", "Data Visualization"],
    fieldOfStudy: "Statistics",
    degreeLevel: "PhD",
    workExperience: 7,
  },
  {
    id: 4,
    name: "David Brown",
    tools: ["Kicad", "Altium", "SolidWorks"],
    skills: ["Signal Processing", "Control Systems"],
    fieldOfStudy: "Electrical Engineering",
    degreeLevel: "Masters",
    workExperience: 4,
  },
  {
    id: 5,
    name: "Eva Martinez",
    tools: ["Tableau", "Zoho", "EasyEDA"],
    skills: ["3D Modeling", "Game Design"],
    fieldOfStudy: "Computer Graphics",
    degreeLevel: "Bachelors",
    workExperience: 2,
  },
  {
    id: 6,
    name: "Frank Thompson",
    tools: ["Tableau", "SolidWorks", "Zoho"],
    skills: ["Data Visualization", "3D Modeling"],
    fieldOfStudy: "Mechanical Engineering",
    degreeLevel: "Masters",
    workExperience: 6,
  },
  {
    id: 7,
    name: "Grace Lee",
    tools: ["EasyEDA", "Kicad", "Altium"],
    skills: ["Circuit Design", "Embedded Systems"],
    fieldOfStudy: "Electrical Engineering",
    degreeLevel: "Bachelors",
    workExperience: 3,
  },
  {
    id: 8,
    name: "Henry Adams",
    tools: ["Tableau", "Zoho", "SolidWorks"],
    skills: ["Data Analysis", "Product Design"],
    fieldOfStudy: "Industrial Design",
    degreeLevel: "PhD",
    workExperience: 8,
  },
  {
    id: 9,
    name: "Isabella Garcia",
    tools: ["Kicad", "EasyEDA", "Altium"],
    skills: ["PCB Design", "Prototyping"],
    fieldOfStudy: "Electronics Engineering",
    degreeLevel: "Bachelors",
    workExperience: 4,
  },
  {
    id: 10,
    name: "Jack Wilson",
    tools: ["Tableau", "SolidWorks", "Zoho"],
    skills: ["Data Science", "Machine Learning"],
    fieldOfStudy: "Computer Science",
    degreeLevel: "Masters",
    workExperience: 5,
  },
  {
    id: 11,
    name: "Liam Johnson",
    tools: ["EasyEDA", "Kicad", "SolidWorks"],
    skills: ["Mechanical Design", "Simulation"],
    fieldOfStudy: "Mechanical Engineering",
    degreeLevel: "PhD",
    workExperience: 9,
  },
]

export function ModernResourceBrowser() {
  const [sortColumn, setSortColumn] = useState<keyof Profile>("name")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [filters, setFilters] = useState({
    tools: "",
    skills: "",
    fieldOfStudy: "",
    degreeLevel: "",
    workExperience: "",
  })

  const handleSort = (column: keyof Profile) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const filteredAndSortedProfiles = useMemo(() => {
    return profiles
      .filter((profile) => {
        return (
          (filters.tools === "" || profile.tools.some((tool) => tool.toLowerCase().includes(filters.tools.toLowerCase()))) &&
          (filters.skills === "" || profile.skills.some((skill) => skill.toLowerCase().includes(filters.skills.toLowerCase()))) &&
          (filters.fieldOfStudy === "" || profile.fieldOfStudy.toLowerCase().includes(filters.fieldOfStudy.toLowerCase())) &&
          (filters.degreeLevel === "" || profile.degreeLevel === filters.degreeLevel) &&
          (filters.workExperience === "" || profile.workExperience >= parseInt(filters.workExperience, 10))
        )
      })
      .sort((a, b) => {
        if (sortColumn === "workExperience") {
          return sortDirection === "asc" ? a[sortColumn] - b[sortColumn] : b[sortColumn] - a[sortColumn]
        } else if (sortColumn === "tools" || sortColumn === "skills") {
          const aValue = a[sortColumn].join(", ")
          const bValue = b[sortColumn].join(", ")
          return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
        } else {
          const aValue = a[sortColumn].toString()
          const bValue = b[sortColumn].toString()
          return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
        }
      })
  }, [profiles, sortColumn, sortDirection, filters])

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Resource Browser</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
          <div className="relative">
            <Input
              placeholder="Filter by tools"
              value={filters.tools}
              onChange={(e) => handleFilterChange("tools", e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <div className="relative">
            <Input
              placeholder="Filter by skills"
              value={filters.skills}
              onChange={(e) => handleFilterChange("skills", e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <div className="relative">
            <Input
              placeholder="Filter by field of study"
              value={filters.fieldOfStudy}
              onChange={(e) => handleFilterChange("fieldOfStudy", e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <Select value={filters.degreeLevel} onValueChange={(value) => handleFilterChange("degreeLevel", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by degree level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Degrees</SelectItem>
              <SelectItem value="Bachelors">Bachelors</SelectItem>
              <SelectItem value="Masters">Masters</SelectItem>
              <SelectItem value="PhD">PhD</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="number"
            placeholder="Min. work experience (years)"
            value={filters.workExperience}
            onChange={(e) => handleFilterChange("workExperience", e.target.value)}
          />
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="cursor-pointer font-bold" onClick={() => handleSort("name")}>
                  Name {sortColumn === "name" && (sortDirection === "asc" ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />)}
                </TableHead>
                <TableHead className="cursor-pointer font-bold" onClick={() => handleSort("tools")}>
                  Tools {sortColumn === "tools" && (sortDirection === "asc" ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />)}
                </TableHead>
                <TableHead className="cursor-pointer font-bold" onClick={() => handleSort("skills")}>
                  Skills {sortColumn === "skills" && (sortDirection === "asc" ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />)}
                </TableHead>
                <TableHead className="cursor-pointer font-bold" onClick={() => handleSort("fieldOfStudy")}>
                  Field of Study {sortColumn === "fieldOfStudy" && (sortDirection === "asc" ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />)}
                </TableHead>
                <TableHead className="cursor-pointer font-bold" onClick={() => handleSort("degreeLevel")}>
                  Degree Level {sortColumn === "degreeLevel" && (sortDirection === "asc" ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />)}
                </TableHead>
                <TableHead className="cursor-pointer font-bold" onClick={() => handleSort("workExperience")}>
                  Work Experience {sortColumn === "workExperience" && (sortDirection === "asc" ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />)}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedProfiles.map((profile) => (
                <TableRow key={profile.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{profile.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {profile.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="px-2 py-1 rounded-full text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {profile.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="px-2 py-1 rounded-full text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{profile.fieldOfStudy}</TableCell>
                  <TableCell>{profile.degreeLevel}</TableCell>
                  <TableCell>{profile.workExperience} years</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
