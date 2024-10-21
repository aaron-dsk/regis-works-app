'use client'

import React, { useState } from 'react';
import TabBar from '@/components/tab-bar';
import { JobListings } from '@/components/job-listings';
import { ModernResourceBrowser } from '@/components/modern-resource-browser';
import { SavedJobs } from '@/components/saved-jobs';

const IncuAccele = () => {
  const [isGalleryView, setIsGalleryView] = useState(false);

  const handleToggleView = () => {
    setIsGalleryView(!isGalleryView);
  };

  const tabs = [
    {
      label: 'Incubation and Acceleration Programs',
      content: <SavedJobs/>
    },
    {
      label: 'Incubators and Accelerators',
      content: <JobListings />,
    },
    {
      label: 'Financing',
      content: <ModernResourceBrowser />,
    },
    {
      label: 'Personal',
      content: <div>Content goes here...</div>,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Incubators & Accelerators</h1>
      <TabBar tabs={tabs} />
    </div>
  );
};

export default IncuAccele;
