'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Briefcase, DollarSign, BookmarkIcon } from "lucide-react"
import Image from "next/image"

const savedJobs = [
  {
    title: "Java Developer - J2ee & Node Js",
    company: "Godigi Infotech",
    location: "Mumbai, Pune, Bengaluru",
    experience: "0 - 1 years",
    salary: "3-7 Lacs PA",
    skills: "Software Development, Application Programming",
    postedAgo: "5d ago",
  },
  {
    title: "Java Developer - J2ee & Node Js",
    company: "Corbus",
    location: "Mumbai, Pune, Bengaluru",
    experience: "0 - 1 years",
    salary: "3-7 Lacs PA",
    skills: "Software Development, Application Programming",
    postedAgo: "5d ago",
  },
  {
    title: "Python Developer",
    company: "TechSolutions Inc.",
    location: "Bengaluru, Hyderabad",
    experience: "1 - 3 years",
    salary: "5-9 Lacs PA",
    skills: "Python, Django, Flask, API Development",
    postedAgo: "3d ago",
  },
  {
    title: "Frontend Developer",
    company: "WebCraft",
    location: "Delhi, Noida",
    experience: "2 - 4 years",
    salary: "6-10 Lacs PA",
    skills: "React, Vue.js, JavaScript, CSS",
    postedAgo: "1d ago",
  }
]

export function SavedJobs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {savedJobs.map((job, index) => (
          <Card key={index} className="flex flex-col">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span>3.0 (456 reviews)</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{job.experience}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{job.salary}</span>
                </div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {job.skills}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">{job.postedAgo}</div>
              <button className="mt-2 flex items-center text-primary hover:text-primary/80">
                <BookmarkIcon className="h-4 w-4 mr-1" />
                Save
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}