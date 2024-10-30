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
    image: "/images/hardware/da-vinci-robot.jpg",
    logo: "/images/hardware/intuitive.jpeg"
  },
  {
    name: "MAGNETOM Terra 7T MRI Scanner",
    type: "Private",
    description: "A state of the art, cutting-edge, high-tech MRI scanner with a 7 Tesla magnetic field strength, designed for advanced brain and neurological research.",
    owner: "Siemens Healthineers",
    website: "siemens-healthineers.com",
    image: "/images/hardware/magnetom.webp",
    logo: "/images/hardware/siemens.webp"
  },
  {
    name: "NVIDIA DGX A100 Supercomputer",
    type: "University-Owned (University of Florida)",
    description: "A powerful AI supercomputer designed for research in AI, machine learning, and computational biology. Donated to the University of Florida for research purposes.",
    owner: "University of Florida",
    website: "ufl.edu",
    image: "/images/hardware/dgx.webp",
    logo: "/images/marketplace/UF.jpg"
  },
  {
    name: "IBM Quantum System One",
    type: "Private",
    description: "The world's first integrated quantum computing system for commercial use, designed for scientific and commercial applications of quantum computing.",
    owner: "IBM",
    website: "ibm.com/quantum-computing",
    image: "/images/hardware/ibm-quantum.jpeg",
    logo: "/images/hardware/ibm.svg"
  }
]

export function HardwareShowcase() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {hardwareData.map((hardware, index) => (
          <Card key={index} className="overflow-hidden relative flex flex-col">
            <div className="absolute top-2 right-2 w-8 h-8 rounded-full overflow-hidden border-2 border-white z-10">
              <Image
                src={hardware.logo}
                alt={`${hardware.owner} logo`}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div className="h-32 relative">
              <Image
                src={hardware.image}
                alt={hardware.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-lg">{hardware.name}</CardTitle>
              <CardDescription>{hardware.type}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm mb-2 line-clamp-3">{hardware.description}</p>
              <div className="text-sm">
                <p><strong>Owner:</strong> {hardware.owner}</p>
                <Link href={`https://${hardware.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">
                  {hardware.website}
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}