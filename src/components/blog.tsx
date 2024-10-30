'use client'

import { Card, CardContent } from "@/components/ui/card"

export function Blog() {
  const projects = [
    {
      title: "Quantum Computing Exploration Initiative",
      image: "/images/blog-1.jpg",
      organization: "University of California, Berkeley",
      location: "Berkeley, California",
      tags: ["quantum computing", "interdisciplinary", "open collaboration", "physics research", "non-commercial"],
      description: "An initiative focused on advancing the foundational principles of quantum computing, exploring theoretical models and algorithms. Open to collaboration with other institutions to share resources, insights, and experimental results in quantum computing."
    },
    {
      title: "Interdisciplinary Climate and Energy Research Collective",
      image: "/images/blog-2.jpg",
      organization: "University of Michigan",
      location: "Ann Arbor, Michigan",
      tags: ["climate science", "renewable energy", "environmental research", "collaborative", "open-access data"],
      description: "A research initiative aimed at studying the intersection of climate change and renewable energy technologies. Open to partnerships with other universities and institutions to pool resources, data, and expertise to address global climate and energy challenges."
    },
    {
      title: "AI and Ethics in Healthcare Initiative",
      image: "/images/blog-3.jpg",
      organization: "Stanford University",
      location: "Stanford, California",
      tags: ["artificial intelligence", "ethics", "healthcare", "interdisciplinary research", "open research"],
      description: "This initiative examines the ethical implications of AI in healthcare, including patient privacy, bias in algorithms, and decision-making transparency. Open to collaborative research opportunities with other universities, healthcare organizations, and ethics institutes to drive responsible AI in medicine."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-card dark:bg-gray-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Organization:</span> {project.organization}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Location:</span> {project.location}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </main>
      </div>
    </div>
  )
}