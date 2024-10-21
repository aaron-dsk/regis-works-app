'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Star } from "lucide-react"
import Image from "next/image"

interface Job {
  title: string
  company: string
  location: string
  logo: string
  rating?: number
  postedAgo: string
}

interface JobSectionProps {
  title: string
  jobs: Job[]
  totalJobs: number
}

function JobCard({ job }: { job: Job }) {
  return (
    <Card className="dark:bg-gray-800 text-card-foreground border border-border">
      <CardContent className="p-4">
        <div className="mb-2">
          <Image
              src={job.logo}
              alt={`${job.company} logo`}
              width={32}
              height={32}
              className="w-8 h-8"
          />
        </div>
        <h3 className="font-semibold">{job.title}</h3>
        <p className="text-sm text-muted-foreground">{job.company}</p>
        {job.rating && (
          <div className="flex items-center mt-1">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm">{job.rating}</span>
          </div>
        )}
        <div className="flex items-center mt-1 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{job.location}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">{job.postedAgo}</p>
      </CardContent>
    </Card>
  )
}

function JobSection({ title, jobs, totalJobs }: JobSectionProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-foreground">
          {title} <span className="text-muted-foreground">({totalJobs})</span>
        </h2>
        <Button variant="link" className="text-primary hover:text-primary/80">
          View all
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  )
}

export function DataGrid() {
  const jobsBasedOnPreferences: Job[] = [
    {
      title: "Data Scientist (Genomics)",
      company: "Harvard Medical School",
      location: "Cambridge, MA",
      logo: "/images/job-listings/harvard.jpg",
      postedAgo: "1d ago",
    },
    {
      title: "Full Stack Developer",
      company: "University of Michigan",
      location: "Ann Arbor, MI",
      logo: "/images/job-listings/michigan.jpg",
      postedAgo: "3d ago",
    },
    {
      title: "SAI Research Engineer",
      company: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      logo: "/images/job-listings/gt.png",
      postedAgo: "4d ago",
    },
    {
      title: "Blockchain Developer",
      company: "MIT",
      location: "Cambridge, MA",
      logo: "/images/job-listings/mit.png",
      postedAgo: "6d ago",
    },
    
  ]

  const recommendedJobs: Job[] = [
    {
      title: "Cloud Infrastructure Engineer",
      company: "University of Texas, Austin",
      location: "Austin, TX",
      logo: "/images/job-listings/austin.jpg",
      postedAgo: "1d ago",
    },
    {
      title: "AI/ML for Medical Diagnostics",
      company: "University of California, Berkeley",
      location: "Berkeley, CA",
      logo: "/images/job-listings/berkley.png",
      postedAgo: "2d ago",
    },
    {
      title: "Renewable Energy Solutions",
      company: "Stanford University",
      location: "Stanford, CA",
      logo: "/images/job-listings/stanford.png",
      postedAgo: "3d ago",
    },
    {
      title: "Cancer Immunotherapy Research",
      company: "Johns Hopkins University",
      location: "Baltimore, MD",
      logo: "/images/job-listings/hopkins.jpg",
      postedAgo: "3d ago",
    },
  ]

  const youMightLike: Job[] = [
    {
      title: "3D Printing for Biomedical Devices",
      company: "University of Pennsylvania",
      location: "Philadelphia, PA",
      logo: "/images/job-listings/upenn.png",
      postedAgo: "3d ago",
    },
    {
      title: "Autonomous Vehicle Systems Development",
      company: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      logo: "/images/job-listings/carnegie.png",
      postedAgo: "3d ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground w-full max-w-10xl mx-auto">
      <JobSection title="Jobs based on your preferences" jobs={jobsBasedOnPreferences} totalJobs={10} />
      <JobSection title="Recommended jobs" jobs={recommendedJobs} totalJobs={10} />
      <JobSection title="You might like" jobs={youMightLike} totalJobs={2} />
    </div>
  )
}
