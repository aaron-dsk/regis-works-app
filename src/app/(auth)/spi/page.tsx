'use client'

import TabBar from '@/components/tab-bar';
import { Marketplace } from '@/components/marketplace';
import { Blog } from '@/components/blog';


const SpiPage = () => {

  const tabs = [
    {
      label: 'Startups',
      content: <Marketplace/>
    },
    {
      label: 'Projects',
      content: <Marketplace/>,
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
