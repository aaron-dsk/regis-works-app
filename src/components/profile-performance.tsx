'use client'

import React from 'react'
import { HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import GaugeChart from 'react-gauge-chart'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProfilePerformance() {
  return (
    <div className="bg-background text-foreground min-h-screen p-4 pt-6">
      <h1 className="text-2xl font-bold mb-2">ProfilePerformance</h1>
      <p className="text-muted-foreground mb-6">How your profile is performing among recruiters</p>

      <Card className="mb-6 bg-card text-card-foreground">
        <CardContent className="p-6">
          <div className="flex flex-row gap-4">
            <Card className="flex-1 bg-card text-card-foreground">
              <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                <div className="relative w-full h-30">
                  <GaugeChart 
                    id="gauge-chart4"
                    nrOfLevels={20} 
                    arcPadding={0.05} 
                    cornerRadius={3} 
                    percent={0.6}
                    textColor="currentColor"
                    needleColor="currentColor"
                    needleBaseColor="currentColor"
                    colors={["#FF0000", "#FFA500", "#00FF00"]}
                  />
                </div>
              </CardContent>
            </Card>

            {['Regularly log into your JobNest account', 'Respond to recruiters mails and messages', 'Keep your profile update with latest information'].map((tip, index) => (
              <Card key={index} className="flex-1 bg-card text-card-foreground">
                <CardContent className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-semibold mb-2">Tip {index + 1}</h3>
                    <p className="text-sm text-muted-foreground">{tip}</p>
                  </div>
                  <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto text-sm mt-2 self-start">
                    {index === 1 ? 'Check invites' : 'Update profile'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold mb-4">You appeared in recruiter searches</h2>

      <Card className="mb-6 bg-card text-card-foreground">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base font-semibold">31 Search appearances in 90 days</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-green-600">3% more actions since last week</p>
        </CardContent>
      </Card>

      <Card className="bg-amber-100 mb-6">
        <CardContent className="p-4">
          <div className="flex items-center mb-2">
            <div className="bg-amber-300 p-2 rounded-full mr-2">
              <HelpCircle className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">You can also appear in 3 top company searches!</h3>
          </div>
          <p className="text-sm text-gray-800">Share interest to get noticed</p>
        </CardContent>
      </Card>

      {['Stanford Researcher', 'NeuralTech Solutions', 'BioMed Innovations'].map((company, index) => (
        <Card key={index} className="mb-4 bg-card text-card-foreground">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="bg-muted w-10 h-10 rounded-md flex items-center justify-center mr-3">
                  <span className="text-xl font-bold">{company[0]}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{company}</h4>
                  <p className="text-sm text-muted-foreground">Palo Alto, CA</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{index + 1}d ago</p>
            </div>
            <div className="flex justify-between items-end mt-2">
              <p className="text-sm text-muted-foreground">{`Searched "${['Fullstack Developer', 'Python Developer', 'AI/ML Engineer'][index]}"`}</p>
              <Button variant="outline" className="bg-blue-500 hover:bg-blue-600 text-white border-blue-500 hover:border-blue-600">
                View Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
