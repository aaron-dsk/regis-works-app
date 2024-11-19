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
    title: 'Global Climate Projections',
    logo: '/images/data/nasa.jpg',
    sources: ['https://data.nasa.gov/'],
    updatedAt: 'August 2023',
    author: 'NASA',
    description: 'High-resolution global climate projections dataset designed to help predict environmental changes, assess climate risks, and support scientific research on global climate change impacts and mitigation strategies.',
    country: 'Worldwide',
    dateRange: '1958 - Present',
    tags: ['Climate', 'Projections', 'Global'],
    recordCount: '5,000,000+',
    status: 'Ongoing',
    formats: ['CSV', 'NetCDF', 'JSON']
  },
  {
    id: '2',
    title: 'Immune Profiling of COVID-19',
    logo: '/images/data/prague.jpg',
    sources: ['https://zenodo.org/records/14096648'],
    updatedAt: 'April 10, 2021',
    author: 'Multiple',
    description: 'Immune profiling of COVID-19 patients using single-cell RNA sequencing and other techniques, providing critical insights into immune system behavior, disease progression, and therapeutic interventions.',
    country: 'Worldwide',
    dateRange: '2019 - 2021',
    tags: ['COVID-19', 'Immune Profiling', 'Therapeutics'],
    recordCount: '5,400,000+',
    status: 'Decommissioned',
    formats: ['CSV', 'RDS', 'TAR.GZ', 'TXT']
  },
  {
    id: '3',
    title: 'Glucose Monitoring in Diabetes Mellitus',
    logo: '/images/data/mayo.webp',
    sources: ['https://clinicaltrials.gov/study/NCT04653454?cond=Diabetes&rank=3'],
    updatedAt: 'August 2022',
    author: 'Mayo Clinic',
    description: 'This clinical trial investigated the effectiveness of continuous glucose monitoring (CGM) devices in managing blood sugar levels among hospitalized patients with diabetes. ',
    country: 'United States',
    dateRange: '2020 - 2022',
    tags: ['Diabetes', 'Glucose Monitoring', 'Clinical Trial'],
    recordCount: 'Estimated 500+',
    status: 'Completed',
    formats: ['PDF', 'XML', 'TXT']
  },
  {
    id: '4',
    title: 'E-Cigarette Use During Pregnancy',
    logo: '/images/data/uconn.jpg',
    sources: ['https://clinicaltrials.gov/study/NCT03480373?cond=Cigarette%20Smoking-Related%20Carcinoma&rank=4'],
    updatedAt: 'September 2019',
    author: 'Uconn Health',
    description: 'The study examines the effects of e-cigarette use versus traditional smoking during pregnancy, focusing on maternal health and neonatal outcomes, including exposure to carcinogens.',
    country: 'United States',
    dateRange: '2018 - 2019',
    tags: ['Pregnancy', 'E-cigarettes', 'Neonatal Health'],
    recordCount: '3,400',
    status: 'Completed',
    formats: ['PDF', 'XML', 'TXT']
  },
  {
    id: '5',
    title: 'PROBA-V Global Vegetation Data',
    logo: '/images/data/belspo.jpg',
    sources: ['https://docs.terrascope.be/#/DataProducts/PROBA-V/ProductsOverview'],
    updatedAt: 'October 31, 2021',
    author: 'VITO on behalf of BELSPO',
    description: 'Global satellite imagery and vegetation data from PROBA-V, supporting environmental monitoring with free, reprocessed datasets. It provides crucial observation data for agriculture, biodiversity, and water management.',
    country: 'Worldwide',
    dateRange: '2013 - 2021',
    tags: ['Vegetation', 'Satellite Imagery', 'Environmental Monitoring'],
    recordCount: 'Over 1 Petabyte',
    status: 'Decommissioned',
    formats: ['GeoTIFF', 'NetCDF', 'HDF5', 'XML']
  },
  {
    id: '6',
    title: 'ATLAS Top Tagging Open Data Set',
    logo: '/images/data/atlas.png',
    sources: ['https://opendata.cern.ch/record/80030'],
    updatedAt: '2 months ago',
    author: 'ATLAS Collaboration',
    description: 'Top quark tagging for machine learning. This dataset is crucial for developing ML algorithms to differentiate top quark events from background noise in particle collisions.',
    country: 'Worldwide',
    dateRange: '2015 - 2024',
    tags: ['High Energy Physics', 'Top Quark', 'Machine Learning'],
    recordCount: '~205 million jets',
    status: 'Ongoing',
    formats: ['CSV', 'ROOT', 'JSON']
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
    options: ["All", "Ongoing", "Decommissioned", "Completed"]
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    <Card className="bg-[#f8f8f8] bg-dot-gray-200/50 relative">
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
        <div className="space-y-1 flex-1">
          <div className="flex justify-between items-start gap-4">
            <h2 className="text-md font-semibold leading-none tracking-tight">
              {data.title}
            </h2>
            <Badge 
              variant={
                data.status.toLowerCase() === 'completed' ? 'completed' :
                data.status.toLowerCase() === 'decommissioned' ? 'secondary' :
                'ongoing'
              }
              className="text-[10px] px-1.5 py-0.5 flex-shrink-0"
            >
              {data.status}
            </Badge>
          </div>
          <div className="space-y-1 text-sm text-blue-600">
            {data.sources.map((source, index) => (
              <Link 
                key={index} 
                href={source} 
                className="block hover:underline"
                target="_blank"  // Opens in new tab
              >
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
            <h3 className="font-semibold">Description:</h3>
            <p className="text-sm text-muted-foreground">
              {data.description}
            </p>
          </div>
        </div>

        <div className="space-y-6">
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
              <h3 className="font-semibold">Records:</h3>
              <p>{data.recordCount}</p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <h3 className="font-semibold">Tags:</h3>
            <div className="flex flex-wrap gap-1">
              {data.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2 text-sm">
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