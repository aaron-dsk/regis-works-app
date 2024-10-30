'use client'

import TabBar from '@/components/tab-bar';
import  { StartupCards } from '@/components/startup-card';
import { ResearchCards } from '@/components/research-cards'
import { SoftwareShowcase } from '@/components/software-showcase';


const FavoritesPage = () => {

  const tabs = [
    {
      label: 'Startups',
      content: <StartupCards/>
    },
    {
      label: 'Projects',
      content: <ResearchCards/>,
    },
    {
      label: 'Software',
      content: <SoftwareShowcase />,
    },
    {
        label: 'Hardware',
        content: <h1>No saved hardware items...</h1>
      },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorite Items</h1>
      <TabBar tabs={tabs} />
    </div>
  );
};

export default FavoritesPage;
