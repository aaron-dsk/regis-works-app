'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const hardwareData = [
  {
    name: "Da Vinci Surgical System",
    type: "Private",
    description: "A robotic surgical system designed to facilitate complex surgery using a minimally invasive approach, controlled by a surgeon from a console.",
    owner: "Intuitive Surgical",
    website: "intuitive.com",
    image: "/images/hardware/da-vinci.jpg"
  },
  {
    name: "MAGNETOM Terra 7T MRI Scanner",
    type: "Private",
    description: "A state of the art, cutting-edge, high-tech MRI scanner with a 7 Tesla magnetic field strength, designed for advanced brain and neurological research.",
    owner: "Siemens Healthineers",
    website: "siemens-healthineers.com",
    image: "/images/hardware/siemens.jpg"
  },
  {
    name: "NVIDIA DGX A100 Supercomputer",
    type: "University-Owned (University of Florida)",
    description: " A powerful AI supercomputer designed for research in AI, machine learning, and computational biology. Donated to the University of Florida for research purposes.",
    owner: "University of Florida",
    website: "ufl.edu",
    image: "/images/marketplace/UF.jpg"
  }
]

export function HardwareShowcase() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hardwareData.map((software, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={software.image}
              alt={software.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader className="pb-2">
              <CardTitle>{software.name}</CardTitle>
              <CardDescription>{software.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{software.description}</p>
              <div className="text-sm">
                <p><strong>Owner:</strong> {software.owner}</p>
                <Link href={`https://${software.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {software.website}
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}