'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const softwareData = [
  {
    name: "TensorFlow",
    type: "Open Source",
    description: "An end-to-end open-source platform for machine learning. It provides a comprehensive ecosystem for building and deploying ML models.",
    owner: "Google Brain",
    website: "tensorflow.org",
    image: "/images/software/tensor-flow.jpg"
  },
  {
    name: "MATLAB",
    type: "Private",
    description: "A high-level programming language and interactive environment for numerical computation, visualization, and programming.",
    owner: "MathWorks",
    website: "mathworks.com/products/matlab.html",
    image: "/images/software/mat-lab.jpg"
  },
  {
    name: "SPSS Statistics",
    type: "Private",
    description: "A software package used for interactive or batched statistical analysis. It is widely used in social science research.",
    owner: "IBM",
    website: "ibm.com/analytics/spss-statistics",
    image: "/images/software/ibm.svg"
  }
]

export function SoftwareShowcase() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {softwareData.map((software, index) => (
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