'use client'

import { MapPin, Briefcase, DollarSign, Star, BookmarkIcon } from "lucide-react"
import Image from "next/image"

export function SavedJobs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-background border-b border-border p-4">
        <h1 className="text-xl font-bold">SavedJobs</h1>
      </header>

      <main className="container mx-auto p-4 space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h2 className="font-semibold mb-2 text-gray-900">How early application can benefit you</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-800">Early application helps recruiters know your interest</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-800">Applying ahead of other candidates improves your chances of getting shortlisted</span>
            </li>
          </ul>
        </div>

        {[
          { company: "Godigi Infotech", logo: "/placeholder.svg?height=40&width=40" },
          { company: "Corbus", logo: "/placeholder.svg?height=40&width=40" },
          { company: "Quest", logo: "/placeholder.svg?height=40&width=40" },
        ].map((job, index) => (
          <div key={index} className="bg-card text-card-foreground border border-border rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="font-semibold text-lg">Java Developer - J2ee & Node Js</h2>
                <p className="text-muted-foreground">{job.company}</p>
              </div>
              <Image src={job.logo} alt={`${job.company} logo`} width={40} height={40} className="rounded" />
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span>3.0 (456 reviews)</span>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Mumbai, Pune, Bengaluru</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>0 - 1 years</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>3-7 Lacs PA</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Software Development, Application Programming, Software Development
            </div>
            <div className="mt-2 text-xs text-muted-foreground">5d ago</div>
            <button className="mt-2 flex items-center text-primary hover:text-primary/80">
              <BookmarkIcon className="h-4 w-4 mr-1" />
              Save
            </button>
          </div>
        ))}
      </main>
    </div>
  )
}
