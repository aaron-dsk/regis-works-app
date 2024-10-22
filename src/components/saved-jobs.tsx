'use client'

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Tag, Building2 } from "lucide-react"

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
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {programs.map((program, index) => (
          <Card key={index} className="flex flex-col">
            <CardContent className="p-4">
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
        ))}
      </div>
    </div>
  )
}