'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    name: "IBM-Q Network (University of Chicago)",
    image: "/images/projects/ibm-q.png",
    logoImage: "/images/projects/u-chicago.png",
    researchFocus: "Quantum Computing",
    partnershipOpportunities: "Open to Academic Collaborations, Industry Partnerships",
    fundingStage: "Sponsored by IBM, National Science Foundation (NSF), Department of Energy (DOE)",
    institutionInvolvement: "University of Chicago, Argonne National Laboratory, Fermilab",
    impact: "Advance quantum computing for use in energy research, cryptography, and new materials development",
    timeline: "Ongoing development, research milestones achieved annually, with breakthroughs expected in the next 3-5 years",
    resourceNeeds: "Quantum researchers, AI software developers, advanced hardware for quantum simulations",
    collaborationType: "Open"
  },
  {
    name: "Human Brain Project (EPFL, Switzerland)",
    image: "/images/projects/blue-brain.jpg",
    logoImage: "/images/projects/eu.jpg",
    researchFocus: "Neuroscience & AI",
    partnershipOpportunities: "Open to Academic and Industry Collaborations",
    fundingStage: "Funded by the European Union's Horizon 2020 program (over €1 billion)",
    institutionInvolvement: "École Polytechnique Fédérale de Lausanne (EPFL), Forschungszentrum Jülich, and other European research institutes",
    impact: "Develop a deep understanding of the human brain to advance neuroscience, AI, and robotics, while contributing to brain disease treatments",
    timeline: "Ongoing; large-scale computational models of brain function expected by 2025",
    resourceNeeds: "Neuroscientists, AI developers, high-performance computing (HPC) infrastructure",
    collaborationType: "Open"
  },
  {
    name: "BRAIN Initiative (University of California, San Francisco - UCSF)",
    image: "/images/projects/global-brain.jpeg",
    logoImage: "/images/projects/ucsf.png",
    researchFocus: "Neuroscience, Biomedical Engineering",
    partnershipOpportunities: "Open to Collaborations with Academic, Government, and Private Sector",
    fundingStage: "Funded by National Institutes of Health (NIH), DARPA, private foundations",
    institutionInvolvement: "UCSF, Harvard University, MIT, Stanford University",
    impact: "Map brain circuits to understand the underlying causes of neurological and psychiatric diseases, develop new therapies for brain disorders",
    timeline: "Project ongoing with major discoveries expected in the next 5-10 years",
    resourceNeeds: "Neuroscientists, computational biologists, bioinformatics software developers",
    collaborationType: "Open"
  }
]

export function ProjectCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <Card key={index} className="flex flex-col relative">
          <CardHeader className="p-0">
            <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="absolute top-2 right-2 w-8 h-8 rounded-full overflow-hidden border-2 border-white">
              <Image
                src={project.logoImage || "/placeholder-logo.png"}
                alt={`${project.name} logo`}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <CardTitle className="text-lg font-bold mb-2">{project.name}</CardTitle>
            <div className="space-y-2">
              <p><strong>Research Focus:</strong> {project.researchFocus}</p>
              <p><strong>Partnership:</strong> {project.partnershipOpportunities}</p>
              <p><strong>Funding Stage:</strong> {project.fundingStage}</p>
              <p><strong>Institution:</strong> {project.institutionInvolvement}</p>
              <p><strong>Impact:</strong> {project.impact}</p>
              <p><strong>Timeline:</strong> {project.timeline}</p>
              <p><strong>Needs:</strong> {project.resourceNeeds}</p>
              <Badge variant={project.collaborationType === 'Open' ? 'default' : 'secondary'}>
                {project.collaborationType} Collaboration
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
