'use client'

import Image from "next/image"
import { Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServiceListings() {
  const services = [
    {
      image: "/images/marketplace/globant.jpg",
      title: "Comprehensive Cybersecurity Risk Assessment for Research Infrastructures",
      company: "Globant",
      location: "Global",
      responseTime: "Response time is typically 1 business day"
    },
    {
      image: "/images/projects/concordia.jpg",
      title: "Multi-Stage Engine Stress Testing for Advanced Aerospace Research",
      company: "Concordia University",
      location: "Montreal, Canada"
    },
    {
      image: "/images/marketplace/UF.jpg",
      title: "HAI-Powered Genomic Analysis for Precision Medicine and Drug Discovery",
      company: "University of Florida",
      location: "Gainesville, Florida"
    },
    {
      image: "/images/projects/cambridge.jpg",
      title: "Advanced Biometric Authentication Systems for Research Data Security",
      company: "University of Cambridge",
      location: "Cambridge, UK"
    },
    {
      image: "/images/projects/mit.png",
      title: "Quantum Computing Solutions for Complex Molecular Simulations",
      company: "IBM Research, MIT Collaboration",
      location: "Cambridge, Massachusetts, USA"
    },
    {
      image: "/images/projects/stanford.png",
      title: "AI-Driven Medical Image Analysis for Early Cancer Detection",
      company: "Stanford University",
      location: "Stanford, California, USA"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Top service picks for you</h2>
      <p className="text-muted-foreground mb-4">Based on your profile and search history</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
            <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full">
              <Image
                src={service.image}
                alt={`${service.company} logo`}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
              <p className="font-semibold">Provided by: {service.company}</p>
              <p className="text-muted-foreground">{service.location}</p>
              {service.responseTime && (
                <div className="flex items-center text-green-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{service.responseTime}</span>
                </div>
              )}
            </div>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
