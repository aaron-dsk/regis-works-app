'use client'

import { ReactNode } from 'react'
import { ChevronRight, Lock, User, Briefcase, Ban } from "lucide-react"

interface SettingItemProps {
  icon: ReactNode
  title: string
  description: string
}

function SettingItem({ icon, title, description }: SettingItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center">
        <div className="mr-4 text-gray-600">{icon}</div>
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <ChevronRight className="w-6 h-6 text-gray-400" />
    </div>
  )
}

export function Settings() {
  return (
    <div className="min-h-screen bg-background text-foreground max-w-full overflow-x-hidden">
      <header className="p-4 border-b border-border">
        <h1 className="text-xl font-semibold">Settings</h1>
      </header>
      <main className="p-4 space-y-4">
        <SettingItem
          icon={<Lock className="w-6 h-6" />}
          title="Communication & privacy"
          description="Control the visibility of your profile to recruiters & companies"
        />
        <SettingItem
          icon={<User className="w-6 h-6" />}
          title="Account"
          description="Change your primary email, mobile number or password"
        />
        <SettingItem
          icon={<Briefcase className="w-6 h-6" />}
          title="Career preferences"
          description="JobNest shows job recommendations based on your career preferences"
        />
        <SettingItem
          icon={<Ban className="w-6 h-6" />}
          title="Blocked companies"
          description="Choose the companies you do not want to show your profile on JobNest"
        />
      </main>
    </div>
  )
}
