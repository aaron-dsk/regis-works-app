import { useState } from "react"
import { ChevronDown, ChevronUp, Star, MessageSquare, Save, TrendingUp, Flame, ArrowUp, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FindPapers() {
  const [sort, setSort] = useState("Trending")
  const [filters, setFilters] = useState({
    peerReviewed: false,
    openAccess: false,
  })
  const [paperFilters, setPaperFilters] = useState({
    peerReviewed: false,
    openAccess: false,
    authorClaimed: false,
  })
  const [postsFilters, setPostsFilters] = useState({
    peerReviewed: false,
  })
  const [questionFilters, setQuestionFilters] = useState({
    answered: false,
  })

  const papers = [
    {
      id: 1,
      votes: 19,
      title: "Effectiveness of a booster dose of aerosolized or intramuscular adenovirus type 5 vectored COVID-19 vaccine in adults with hybrid immunity against COVID-19: a multicenter, partially randomized, platform trial in China",
      date: "Sep 15, 2024",
      description: "Background The primary objective of this research was to assess if a booster dose with COVID-19 vaccines containing ancestral strain could still provide significant protection against symptomatic SARS...",
      tags: ["Paper", "Biorxiv Community Reviews"],
      rating: 4.0,
      comments: 2,
    },
    {
      id: 2,
      votes: 5,
      title: "Leveraging High-throughput Molecular Simulations and Machine Learning for Formulation Design",
      author: "Alex Chew et al.",
      date: "Nov 11, 2024",
      description: "Formulations, or mixtures of chemical ingredients, are ubiquitous in materials science, but optimizing their properties remains challenging due to the vast design space. Computational approaches offer a promising solution to traverse...",
      tags: ["Paper", "Artificial Intelligence"],
      comments: 1,
    },
    {
      id: 3,
      votes: 11,
      title: "\"Establishing a Dedicated Communication Channel for ResearchHub Users\"",
      author: "Carlos Toro",
      date: "Nov 17, 2024",
      description: "Hello, my name is Carlos Toro, and in this article, I want to present a series of proposals to establish a direct communication channel between users and the technical and management team of ResearchHub. Firstly, I suggest creating...",
      tags: ["Post", "Researchhub"],
      comments: 2,
    },
  ]

  return (
    <div className="bg-background">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-primary">
                All <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem className="flex items-center justify-between">
                <span>Peer reviewed</span>
                <Switch
                  checked={filters.peerReviewed}
                  onCheckedChange={(checked) => 
                    setFilters(prev => ({ ...prev, peerReviewed: checked }))
                  }
                />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center justify-between">
                <span>Open access</span>
                <Switch
                  checked={filters.openAccess}
                  onCheckedChange={(checked) => 
                    setFilters(prev => ({ ...prev, openAccess: checked }))
                  }
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Papers <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem className="flex items-center justify-between">
                <span>Peer reviewed</span>
                <Switch
                  checked={paperFilters.peerReviewed}
                  onCheckedChange={(checked) => 
                    setPaperFilters(prev => ({ ...prev, peerReviewed: checked }))
                  }
                />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center justify-between">
                <span>Open access</span>
                <Switch
                  checked={paperFilters.openAccess}
                  onCheckedChange={(checked) => 
                    setPaperFilters(prev => ({ ...prev, openAccess: checked }))
                  }
                />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center justify-between">
                <span>Author claimed</span>
                <Switch
                  checked={paperFilters.authorClaimed}
                  onCheckedChange={(checked) => 
                    setPaperFilters(prev => ({ ...prev, authorClaimed: checked }))
                  }
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Posts <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem className="flex items-center justify-between">
                <span>Peer reviewed</span>
                <Switch
                  checked={postsFilters.peerReviewed}
                  onCheckedChange={(checked) => 
                    setPostsFilters(prev => ({ ...prev, peerReviewed: checked }))
                  }
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Questions <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem className="flex items-center justify-between">
                <span>Answered</span>
                <Switch
                  checked={questionFilters.answered}
                  onCheckedChange={(checked) => 
                    setQuestionFilters(prev => ({ ...prev, answered: checked }))
                  }
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Flame className="mr-1 h-4 w-4" /> {sort} <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem 
              className="flex items-center gap-2"
              onClick={() => setSort("Trending")}
            >
              <Flame className="h-4 w-4" /> Trending
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="flex items-center gap-2"
              onClick={() => setSort("Newest")}
            >
              <Clock className="h-4 w-4" /> Newest
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="flex items-center gap-2"
              onClick={() => setSort("Most Discussed")}
            >
              <MessageSquare className="h-4 w-4" /> Most Discussed
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="flex items-center gap-2"
              onClick={() => setSort("Most Upvoted")}
            >
              <ArrowUp className="h-4 w-4" /> Most Upvoted
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {papers.map((paper) => (
        <Card key={paper.id} className="mb-4">
          <CardContent className="flex gap-4 p-4">
            <div className="flex flex-col items-center">
              <ChevronUp className="cursor-pointer h-5 w-5 text-muted-foreground" />
              <span className="font-bold text-lg">{paper.votes}</span>
              <ChevronDown className="cursor-pointer h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{paper.title}</h2>
              <p className="text-sm text-muted-foreground">{paper.author ? `${paper.author} | ` : ''}{paper.date}</p>
              <p className="text-sm mt-2 text-muted-foreground">{paper.description}</p>
              <div className="flex items-center gap-2 mt-2">
                {paper.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end justify-between">
              {paper.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm">{paper.rating}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{paper.comments}</span>
              </div>
              <Save className="w-4 h-4 cursor-pointer text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

