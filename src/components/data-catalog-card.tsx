'use client'

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useMemo } from "react"
import { AnimatePresence } from "framer-motion"

type CatalogData = {
  id: string
  title: string
  logo: string
  sources: string[]
  updatedAt: string
  author: string
  description: string
  country: string
  dateRange: string
  tags: string[]
  recordCount: string
  status: string
  formats: string[]
}

const datasetItems: CatalogData[] = [
  {
    id: '1',
    title: 'National Space Science Data Center Master Catalog',
    logo: '/images/data/nasa.png',
    sources: ['catalog.data.gov', 'data.nasa.gov'],
    updatedAt: 'Dec 6, 2023',
    author: 'NASA',
    description: 'The National Space Science Data Center serves as the permanent archive for NASA space science mission data. Space science means astronomy and astrophysics, solar and space plasma physics, and planetary...',
    country: 'United States',
    dateRange: '1958 - Present',
    tags: ['Satellite', 'Earth', 'Physics'],
    recordCount: '1,234,567',
    status: 'Ongoing',
    formats: ['CSV', 'PDF', 'ZIP']
  },
  {
    id: '2',
    title: 'Disease Analyzer France',
    logo: '/images/data/iqvia.png',
    sources: ['iqvia.com', 'health-data.fr'],
    updatedAt: '2 weeks ago',
    author: 'IQVIA',
    description: 'Comprehensive EMR dataset covering 4.4M patient records from French healthcare providers. Includes detailed clinical data, prescriptions, and outcomes across various therapeutic areas.',
    country: 'France',
    dateRange: '2010-Present',
    tags: ['EMR', 'Clinical', 'Prescriptions'],
    recordCount: '4,400,000',
    status: 'Ongoing',
    formats: ['CSV', 'FHIR', 'JSON']
  },
  {
    id: '3',
    title: 'Longitudinal Patient Data France',
    logo: '/images/data/iqvia.png',
    sources: ['iqvia.com', 'lpd-database.fr'],
    updatedAt: '5 months ago',
    author: 'IQVIA',
    description: 'Long-term patient tracking database with 11.8M records spanning 30+ years. Provides insights into treatment patterns, disease progression, and healthcare utilization.',
    country: 'France',
    dateRange: '1992-Present',
    tags: ['EMR', 'Longitudinal', 'Patient Outcomes'],
    recordCount: '11,800,000',
    status: 'Ongoing',
    formats: ['CSV', 'SAS', 'Parquet']
  },
  {
    id: '4',
    title: 'ADOReg/DxCOG Registry',
    logo: '/images/data/adoreg.jpg',
    sources: ['german-research.de', 'adoreg.de'],
    updatedAt: '2 months ago',
    author: 'German Research Network',
    description: 'Specialized registry focusing on cognitive disorders and Alzheimers disease, containing detailed clinical assessments and outcomes for 9,900 patients.',
    country: 'Germany',
    dateRange: '2008-Present',
    tags: ['Registry', 'Cognitive', 'Alzheimers'],
    recordCount: '9,900',
    status: 'Ongoing',
    formats: ['CSV', 'SPSS', 'Excel']
  },
  {
    id: '5',
    title: 'SNDS Health Database',
    logo: '/images/data/snds.avif',
    sources: ['health-data.fr', 'snds.gouv.fr'],
    updatedAt: '3 years ago',
    author: 'French Ministry of Health',
    description: 'National health insurance database covering 67M French residents. Includes claims, hospitalizations, and long-term care data with comprehensive coverage.',
    country: 'France',
    dateRange: '2003-Present',
    tags: ['Claims', 'Insurance', 'National'],
    recordCount: '67,000,000',
    status: 'Decommissioned',
    formats: ['CSV', 'SAS', 'R']
  },
  {
    id: '6',
    title: 'German Claims - SHI',
    logo: '/images/data/shi.jpeg',
    sources: ['shi-germany.de', 'health-data.de'],
    updatedAt: '6 years ago',
    author: 'German SHI',
    description: 'Statutory Health Insurance claims database covering 5M German patients. Contains comprehensive healthcare utilization, prescriptions, and outcomes data.',
    country: 'Germany',
    dateRange: '2000-Present',
    tags: ['Claims', 'Insurance', 'Prescriptions'],
    recordCount: '5,000,000',
    status: 'Decommissioned',
    formats: ['CSV', 'SAS', 'XML']
  }
]

type Filter = {
  key: string;
  title: string;
  type: "text" | "select";
  options: string[];
}

const filters: Filter[] = [
  {
    key: "title",
    title: "Name",
    type: "text",
    options: []
  },
  {
    key: "type",
    title: "Type",
    type: "select",
    options: ["All", "EMR", "Pharmacy", "Registry", "Claims", "Patient Charts"]
  },
  {
    key: "country",
    title: "Country",
    type: "select",
    options: ["All", "France", "Germany", "United States"]
  },
  {
    key: "status",
    title: "Status",
    type: "select",
    options: ["All", "Ongoing", "Decommissioned"]
  }
]

export function DataCatalogGrid() {
  const [filterValues, setFilterValues] = useState<Record<string, string>>(
    Object.fromEntries(filters.map(filter => [filter.key, "All"]))
  )

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues(prev => ({ ...prev, [key]: value }))
  }

  const filteredItems = useMemo(() => {
    return datasetItems.filter(item => {
      return filters.every(filter => {
        const filterValue = filterValues[filter.key].toLowerCase()
        if (filterValue === "" || filterValue === "all") return true
        
        if (filter.key === "title") {
          return item.title.toLowerCase().includes(filterValue)
        }
        
        return String(item[filter.key as keyof typeof item]).toLowerCase() === filterValue
      })
    })
  }, [filterValues])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filters.map(filter => (
          <div key={filter.key} className="space-y-2">
            <label className="text-sm font-medium">{filter.title}</label>
            {filter.type === "text" ? (
              <Input
                placeholder={`Search ${filter.title.toLowerCase()}...`}
                value={filterValues[filter.key]}
                onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                className="w-full"
              />
            ) : (
              <Select
                value={filterValues[filter.key]}
                onValueChange={(value) => handleFilterChange(filter.key, value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={`Select ${filter.title.toLowerCase()}`} />
                </SelectTrigger>
                <SelectContent>
                  {filter.options.map(option => (
                    <SelectItem key={option} value={option.toLowerCase()}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <DataCatalogCard data={item} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  )
}

function DataCatalogCard({ data }: { data: CatalogData }) {
  return (
    <Card className="bg-[#f8f8f8] bg-dot-gray-200/50">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center bg-white">
          <Image
            src={data.logo}
            alt={`${data.author} Logo`}
            width={64}
            height={64}
            className="w-full h-full object-cover"
            style={{ aspectRatio: '1/1' }}
          />
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold leading-none tracking-tight">
            {data.title}
          </h2>
          <div className="space-y-1 text-sm text-blue-600">
            {data.sources.map((source, index) => (
              <Link key={index} href="#" className="block hover:underline">
                {source}
              </Link>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Updated: {data.updatedAt}</span>
            <div>
              Author:{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                {data.author}
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold underline">Description:</h3>
            <p className="text-sm text-muted-foreground">
              {data.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-semibold">Country:</h3>
            <p>{data.country}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Date Range:</h3>
            <p>{data.dateRange}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Tags:</h3>
            <div className="flex flex-wrap gap-1">
              {data.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Records:</h3>
            <p>{data.recordCount}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Status:</h3>
            <Badge 
              variant="secondary" 
              className="text-[10px] px-1.5 py-0.5 whitespace-normal"
            >
              {data.status}
            </Badge>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Format:</h3>
            <div className="flex flex-wrap gap-1">
              {data.formats.map((format, index) => (
                <Badge key={index} variant="secondary">
                  {format}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}