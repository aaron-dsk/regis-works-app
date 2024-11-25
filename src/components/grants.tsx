import { ChevronDown, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"

export default function Grants() {
  return (
    <div className="p-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">Grants</h1>
        <p className="text-muted-foreground mb-4">
          Jumpstart research projects by completing research related grants.
        </p>
      </div>

      <div className="flex gap-4 flex-wrap mb-4">
        <Select>
          <SelectTrigger className="w-[200px]">
            <Filter className="w-4 h-4 mr-2" />
            <span>Keywords</span>
            <ChevronDown className="w-4 h-4 ml-auto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Keywords</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[200px]">
            <Filter className="w-4 h-4 mr-2" />
            <span>Grant Type</span>
            <ChevronDown className="w-4 h-4 ml-auto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[200px]">
            <span>Best</span>
            <ChevronDown className="w-4 h-4 ml-auto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="best">Best Match</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src="/images/job-listings/stanford.png"
                alt="Stanford University"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-medium">Stanford University</span>
            <span className="text-muted-foreground">created a grant</span>
          </div>

          <div className="grid gap-2 mb-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount:</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                </div>
                <span className="text-muted-foreground">$14,000</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Grant type:</span>
              <span>Peer Review</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Expiration date:</span>
              <span>14 days remaining</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm">
              <span className="font-medium">Details:</span>
              <p className="mt-1">
                ResearchHub Foundation is assigning a peer review bounty of{" "}
                <span className="font-medium">$150 in ResearchCoin (RSC)</span> to
                incentivize the peer review of this preprint. Anyone can perform a
                peer review and receive rewards from upvotes/tips, but only those
                who provide a high-quality...
              </p>
              <Button variant="link" className="p-0 h-auto text-sm">
                Read More
              </Button>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-medium mb-4">
                SLC4A1MUTATIONS THAT CAUSE DISTAL RENAL TUBULAR ACIDOSIS ALTER
                CYTOPLASMIC PH AND CELLULAR AUTOPHAGY
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Abstract Distal renal tubular acidosis (dRTA) is a disorder
                characterized by the inability of the collecting duct system to
                secrete acids during metabolic acidosis. The pathophysiology of
                dominant or...
              </p>
              <Button>Answer</Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src="/images/job-listings/hopkins.jpg"
                alt="Hopkins"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-medium">John Hopkins University</span>
            <span className="text-muted-foreground">created a grant</span>
          </div>

          <div className="grid gap-2 mb-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount:</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                </div>
                <span className="text-muted-foreground">$34,000</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Grant type:</span>
              <span>Peer Review</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Expiration date:</span>
              <span>13 days remaining</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm">
              <span className="font-medium">Details:</span>
              <p className="mt-1">
                ResearchHub Foundation is assigning a peer review bounty of{" "}
                <span className="font-medium">$150 in ResearchCoin (RSC)</span> to
                incentivize the peer review of this preprint. Anyone can perform a
                peer review and receive rewards from upvotes/tips, but only those
                who provide a high-quality...
              </p>
              <Button variant="link" className="p-0 h-auto text-sm">
                Read More
              </Button>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-medium mb-4">
                Tailoring Mechanical Properties for Additive Manufacturing:
                Strategic Molecular Design of UV-Curable Bio-based Oligoester
                Resins via Diacid and Diol Exploration
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Digital Light Processing (DLP) is a 3D printing technology that
                enables the fabrication of complex, high-resolution structures;
                however, the mechanical properties of DLP-printed objects are often
                limi...
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                  Automotive Engineering
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                  Biomaterials
                </span>
              </div>
              <Button>Answer</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

