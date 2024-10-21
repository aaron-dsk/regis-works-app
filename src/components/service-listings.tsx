'use client'

import Image from "next/image"
import { Clock, Shield, ChevronRight } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ServiceListings() {
  return (
    <Card className="w-full max-w-5xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">Top service picks for you</h2>
        <p className="text-muted-foreground">Based on your profile and search history</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-4">
          <Image
            src="/images/marketplace/globant.jpg"
            alt="TechGuard logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="flex-1 space-y-1">
            <h3 className="text-xl font-semibold text-blue-600">Advanced Cybersecurity Solutions</h3>
            <p className="font-semibold">Globant</p>
            <p className="text-muted-foreground">Global</p>
            <div className="flex items-center text-green-600">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">Response time is typically 1 business day</span>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-start space-x-4">
          <Image
            src="/images/concordia.avif"
            alt="DataPro logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="flex-1 space-y-1">
            <h3 className="text-xl font-semibold text-blue-600">Engine Stress Testing</h3>
            <p className="font-semibold">Concordia University</p>
            <p className="text-muted-foreground">Montreal, Canada</p>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-start space-x-4">
          <Image
            src="/images/super-computer.jpg"
            alt="AInnov logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="flex-1 space-y-1">
            <h3 className="text-xl font-semibold text-blue-600">High-Performance Computing for Biomedical Research</h3>
            <p className="font-semibold">University of Florida</p>
            <p className="text-muted-foreground">Gainesville, Florida</p>
          </div>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}