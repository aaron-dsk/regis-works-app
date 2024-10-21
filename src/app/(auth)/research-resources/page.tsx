'use client'

import React, { useState } from 'react';
import TabBar from '@/components/tab-bar';
import { JobListings } from '@/components/job-listings';
import { Marketplace } from '@/components/marketplace';
import { ModernResourceBrowser } from '@/components/modern-resource-browser';
import ToggleView from '@/components/toggle-view';
import { Blog } from '@/components/blog';
import { Marketplace2 } from '@/components/marketplace2';
import { SavedJobs } from '@/components/saved-jobs';

const ResearchResourcesPage = () => {
  const [isGalleryView, setIsGalleryView] = useState(false);

  const handleToggleView = () => {
    setIsGalleryView(!isGalleryView);
  };

  const tabs = [
    {
      label: 'Human capital',
      content: (
        <div className="relative">
          <div className="absolute top-0 right-0 z-10">
            <ToggleView isGalleryView={isGalleryView} onToggle={handleToggleView} />
          </div>
          {isGalleryView ? <JobListings /> : <ModernResourceBrowser />}
        </div>
      ),
    },
    {
      label: 'Testing',
      content: <Marketplace />,
    },
    {
      label: 'Software',
      content: <Blog />,
    },
    {
      label: 'Hardware',
      content: <Blog />,
    },
    {
      label: 'Data',
      content: <Marketplace2 />,
    },
    {
      label: 'Services',
      content: <SavedJobs />,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Research Resources</h1>
      <TabBar tabs={tabs} />
    </div>
  );
};

export default ResearchResourcesPage;
