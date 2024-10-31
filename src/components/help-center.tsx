'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const helpTopics = [
  { id: 'registration', title: 'How to Register on RDAxis' },
  { id: 'user-types', title: 'User Types on RDAxis' },
  { id: 'onboarding', title: 'Completing the Onboarding Process' },
  { id: 'profile', title: 'Customizing Your Profile' },
  { id: 'resource-types', title: 'Types of Resources Available' },
  { id: 'resource-access', title: 'How to Access and Filter Resources' }
]

const contentMap: { [key: string]: string } = {
  'registration': `Registration is the first step to unlocking the resources and connections on RDAxis. To get started, visit the RDAxis homepage and click the "Sign Up" button. You'll need to enter basic information, including your name, email address, and password.

After filling out this initial information, RDAxis will send a verification link to your email. Click the link to verify your account.

Once verified, return to the platform and select your user type: Research Organization, Advisor, Investor, or Researcher. Each user type offers unique tools and resources tailored to your role within the research and innovation ecosystem.

Follow the guided setup to complete your profile, which helps you get noticed and find the right connections on the platform.`,

  'user-types': `RDAxis is designed to support four main types of users:

Research Organizations (like university departments, corporate R&D teams, or NGOs focused on research) have access to tools for connecting with researchers, advisors, and potential funders to support their projects.

Advisors are professionals with specific expertise who can offer guidance to projects and initiatives on RDAxis. They can browse opportunities to lend their knowledge to innovative research efforts.

Investors (accredited or institutional) can discover projects, startups, and initiatives that align with their investment goals. They receive priority access to funding-related features and programs on the platform.

Researchers are individuals conducting or supporting research. RDAxis provides them with tools for collaboration, resource access, and potential testing partnerships.`,

  'onboarding': `After you register, RDAxis will guide you through an onboarding process tailored to your user type. This step-by-step process helps you fill out essential details that make it easier for other users to find and connect with you.

Research Organizations may be asked to outline their research areas and resource needs, while Advisors can showcase their expertise and availability.

Investors are encouraged to detail their funding criteria, and Researchers can highlight their skills, tools, and research experience.

By completing onboarding thoroughly, you increase your visibility to other users and help ensure you're matched with the right opportunities on the platform.`,

  'profile': `Each user type on RDAxis has unique profile customization options to enhance their experience. Once registered, navigate to your account settings and explore the fields available for customization.

Research Organizations can upload descriptions of their current projects, resource offerings, and collaboration interests.

Advisors can highlight their past experience, notable achievements, and areas of expertise.

Investors can specify funding interests and criteria, and Researchers can list their skills, technology proficiencies, and preferred research areas.

Customizing your profile is essential for standing out on RDAxis and making meaningful connections with others in the research community.`,

  'resource-types': `RDAxis organizes its research resources into multiple categories, making it easy for users to find the support they need:

Human Capital includes experts, researchers, and other professionals who can contribute to a project. Profiles in this category highlight individuals' relevant experience, technical skills, tools they use, and personal information like location and age, all to help teams identify the right people for their projects.

Testing Resources are specifically for alpha and beta testing programs. This category is perfect for organizations that require testers or researchers seeking practical application experiences in new studies or innovations.

Software Resources allow companies and universities to showcase software available for use. This section includes open-source tools, privately-owned software, and software developed by universities. Organizations can advertise their software for broader collaboration.

Hardware Resources provide access to specialized equipment. Universities, research centers, and companies can list hardware such as supercomputers, advanced lab equipment, and one-of-a-kind devices. For example, UF might list its Nvidia-donated supercomputer, or Misiones may offer access to the Da Vinci machine. These resources can be rented, loaned, or shared in collaborative projects.

Data Resources encompass datasets, research data, and other information assets. Organizations can provide or request data sets to aid in specific research projects, fostering data sharing across disciplines.

Programs and Services include offerings like prototyping, product design, and manufacturing. Organizations can request these services or offer them to other users, facilitating collaboration on the practical aspects of research and development.`,

  'resource-access': `RDAxis makes finding the right resource easy through its filtering tools. At the top of the Research Resources tab, you'll see filter options allowing you to select the types of resources you need.

You can view a list of all resources or narrow down by specific types, such as Human Capital or Hardware.

Each resource has a detailed profile with descriptions, contact information, and, where applicable, availability.

Saved resources can be accessed from your favorites for quick reference, and you can directly message resource owners if you're interested in collaboration.`
}

export default function HelpCenter() {
  const [selectedTopic, setSelectedTopic] = useState('registration')

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="w-1/4 bg-card p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Getting Started with RDAxis</h2>
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
