'use client'

import TabBar from '@/components/tab-bar';
import { Marketplace } from '@/components/marketplace';
import { Blog } from '@/components/blog';

const startupsFilters = [
  { key: 'name', title: 'Name', type: 'text' as const },
  { key: 'type', title: 'Type', type: 'select' as const, options: ['Startup'] },
  { key: 'location', title: 'Location', type: 'text' as const },
];

const projectsFilters = [
  { key: 'name', title: 'Name', type: 'text' as const },
  { key: 'type', title: 'Type', type: 'select' as const, options: ['Project'] },
  { key: 'location', title: 'Location', type: 'text' as const },
];

const startupsData = [
  {
    id: 1,
    name: "TechStars",
    type: "Startup",
    location: "Boulder, Colorado",
    focus: ["Technology", "AI", "Blockchain", "E-commerce"],
    fundingOffered: "Up to $120,000 investment",
    notableAlumni: ["SendGrid", "DigitalOcean", "ClassPass"],
    image: "/images/techstars.jpg",
    logo: "/images/techstars-logo.png",
  },
  {
    id: 2,
    name: "Y Combinator",
    type: "Startup",
    location: "Mountain View, California",
    focus: ["Technology", "AI", "E-commerce"],
    fundingOffered: "$125,000 for 7%",
    notableAlumni: ["Airbnb", "Dropbox", "Stripe"],
    image: "/images/y-combinator.jpg",
    logo: "/images/y-combinator-logo.png",
  },
  {
    id: 3,
    name: "Station F",
    type: "Startup",
    location: "Paris, France",
    focus: ["Technology", "AI", "Blockchain", "E-commerce"],
    fundingOffered: "Non-equity assistance",
    notableAlumni: ["Zenly", "Alan", "Payfit"],
    image: "/images/station-f.jpg",
    logo: "/images/station-f-logo.png",
  },
];

const projectsData = [
  {
    id: 1,
    name: "Project Alpha",
    type: "Project",
    location: "Remote",
    focus: ["Healthcare", "AI", "Data Analysis"],
    fundingOffered: "Grant funding available",
    notableAlumni: ["Project Beta", "Project Gamma"],
    image: "/images/project-alpha.jpg",
    logo: "/images/project-alpha-logo.png",
  },
  {
    id: 2,
    name: "Project Beta",
    type: "Project",
    location: "New York, NY",
    focus: ["Education", "Technology"],
    fundingOffered: "Crowdfunding options",
    notableAlumni: ["Project Delta", "Project Epsilon"],
    image: "/images/project-beta.jpg",
    logo: "/images/project-beta-logo.png",
  },
  {
    id: 3,
    name: "Project Gamma",
    type: "Project",
    location: "San Francisco, CA",
    focus: ["Finance", "Blockchain"],
    fundingOffered: "Venture capital funding",
    notableAlumni: ["Project Zeta", "Project Eta"],
    image: "/images/project-gamma.jpg",
    logo: "/images/project-gamma-logo.png",
  },
];

const SpiPage = () => {

  const tabs = [
    {
      label: 'Startups',
      content: (
        <Marketplace 
          data={startupsData} 
          filters={startupsFilters} 
        />
      ),
    },
    {
      label: 'Projects',
      content: (
        <Marketplace 
          data={projectsData} 
          filters={projectsFilters} 
        />
      ),
    },
    {
      label: 'Initiatives',
      content: <Blog />,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Startups, Projects, and Initiatives</h1>
      <TabBar tabs={tabs} />
    </div>
  );
};

export default SpiPage;
