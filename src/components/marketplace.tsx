'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import Image from "next/image"

interface MarketplaceItem {
  id: number;
  name: string;
  company: string;
  experience: string;
  skills: string[];
  image: string;
  companyLogo: string;
}

interface MarketplaceProps {
  data: MarketplaceItem[];
  filters: {
    key: string;
    title: string;
    type: 'text' | 'select';
    options?: string[];
  }[];
}

export function Marketplace({ data, filters }: MarketplaceProps) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {filters.map((filter) => (
          <div key={filter.key} className="relative">
            {filter.type === 'select' ? (
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={`Filter by ${filter.title}`} />
                </SelectTrigger>
                <SelectContent>
                  {filter.options?.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <div className="relative">
                <Input
                  type="text"
                  placeholder={`Filter by ${filter.title}`}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative h-24">
              <Image 
                src={item.image} 
                alt={item.name} 
                layout="fill" 
                objectFit="cover" 
                objectPosition="center" 
                className="rounded-t-xl"
              />
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full overflow-hidden border-2 border-white bg-white">
                <Image 
                  src={item.companyLogo} 
                  alt={`${item.company} logo`} 
                  layout="fill" 
                  objectFit="contain"
                />
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
              <p className="text-sm mb-2">{item.experience}</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {item.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
