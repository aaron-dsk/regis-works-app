'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const helpTopics = [
  { id: 'create-investment', title: 'How do I create an investment commitment on Republic?' },
  { id: 'how-much-invest', title: 'How much can I invest?' },
  { id: 'waitlist', title: 'How does the waitlist work?' },
  { id: 'who-can-invest', title: 'Who can invest?' },
  { id: 'international-investors', title: 'Can international investors invest?' },
  { id: 'calculate-net-worth', title: 'How do I calculate my net worth?' },
  { id: 'accredited-invest', title: 'Do I have to be accredited to invest?' },
  { id: 'investment-limit', title: 'How is my investment limit calculated?' },
  { id: 'securities-crowdfunding', title: 'What is securities crowdfunding?' },
  { id: 'us-citizen', title: 'Do I have to be a US citizen to invest?' },
  { id: 'rolling-close', title: 'What is a rolling close?' },
  { id: 'canadian-investor', title: 'I am a Canadian investor, can I participate?' },
  { id: 'terms', title: 'What do terms Issuer, Offering and others mean?' },
  { id: 'minimum-investment', title: 'What is the minimum investment amount?' },
  { id: 'republic-fees', title: 'What fees does Republic charge?' },
]

const contentMap: { [key: string]: string } = {
  'how-much-invest': `
    How much you can invest in the different offerings on the Republic platform
    primarily depends on the type of offering you are investing in and your accredited
    investor status. For some offerings, there may be a set minimum and maximum
    investment.

    To know how much you can invest in any offering on Republic, you must first
    understand whether you qualify as an accredited investor or not.

    Many of the offerings hosted on Republic are listed under Regulation
    Crowdfunding, also referred to as Reg CF. If you are an accredited investor, there
    are no investment limits for investing in Reg CF campaigns.

    Note: Once you have self-certified yourself (or you have previously been verified)
    as an accredited investor on the platform, you are able to invest without limits.
    Note, your self-certification may be randomly selected for audit or questioned, so
    please be truthful as providing a false representation is a violation of our terms of
    service and can result in your accounting being suspended.

    If you're a non-accredited investor - most investors are - the amount you can
    invest under Regulation Crowdfunding during any 12 month period depends on
    your annual income level and net worth. As a non-accredited investor, you can
    invest the greater of

    ��� $2,500; or
    • If your annual income or net worth is less than $124,000, you can invest 5% of
      the greater of your annual income or net worth; or
    • If both your income and net worth are equal to or more than $124,000, you
      can invest 10% of the greater of your annual income or net worth, not to
      exceed an amount of $124,000.
    • Remember this limit applies across all Reg CF deals, so if you invest in Reg CF
      deals on other platforms, you will need to disclose this too (and keep the
      disclosure up to date), so we can accurately calculate your limit. You can do
      this in your investor profile.
  `,
  // Add content for other topics here
}

export default function HelpCenter() {
  const [selectedTopic, setSelectedTopic] = useState('how-much-invest')

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="w-1/4 bg-card p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Getting started</h2>
        <nav>
          <ul className="space-y-2">
            {helpTopics.map((topic) => (
              <li key={topic.id}>
                <button
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`text-left w-full p-2 rounded ${
                    selectedTopic === topic.id 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'hover:bg-muted'
                  }`}
                >
                  {topic.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Card>
          <CardHeader>
            <CardTitle>{helpTopics.find(topic => topic.id === selectedTopic)?.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line">{contentMap[selectedTopic]}</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
