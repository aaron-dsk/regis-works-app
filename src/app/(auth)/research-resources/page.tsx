'use client'

import React, { useState } from 'react';
import TabBar from '@/components/tab-bar';
import { DataGrid } from '@/components/data-grid';
import { Marketplace } from '@/components/marketplace';
import { ListView, ListViewItem } from '@/components/list-view';
import ToggleView from '@/components/toggle-view';
import { Blog } from '@/components/blog';
import { Marketplace2 } from '@/components/marketplace2';
import { SavedJobs } from '@/components/saved-jobs';
import { Badge } from '@/components/ui/badge'

const ResearchResourcesPage = () => {
  const [isGalleryView, setIsGalleryView] = useState(false);

  const handleToggleView = () => {
    setIsGalleryView(!isGalleryView);
  };

  const humanCapitalData = [
    {
      id: 1,
      name: "Alice Johnson",
      location: "New York, NY",
      age: 28,
      bio: "Experienced data scientist with a passion for machine learning and AI applications.",
      tools: ["Python", "TensorFlow", "Jupyter"],
      skills: ["Machine Learning", "Data Analysis", "Statistical Modeling"],
      relevantExperience: "5 years in data science roles at tech startups",
    },
    // ... more data
  ];

  const humanCapitalColumns = [
    {
      key: 'name',
      title: 'Name & Location',
      render: (item: ListViewItem) => (
        <div>
          <div className="font-medium">{item.name}</div>
          <div className="text-sm text-gray-500">{item.location}</div>
        </div>
      ),
    },
    { key: 'age', title: 'Age', render: (item: ListViewItem) => item.age },
    {
      key: 'bio',
      title: 'Bio',
      render: (item: ListViewItem) => item.bio.length > 100 ? `${item.bio.substring(0, 100)}...` : item.bio,
    },
    {
      key: 'tools',
      title: 'Tools/Technologies',
      render: (item: ListViewItem) => (
        <div className="flex flex-wrap gap-1">
          {item.tools.map((tool: string) => (
            <Badge key={tool} variant="secondary" className="px-2 py-1 rounded-full text-xs">
              {tool}
            </Badge>
          ))}
        </div>
      ),
    },
    {
      key: 'skills',
      title: 'Skills',
      render: (item: ListViewItem) => (
        <div className="flex flex-wrap gap-1">
          {item.skills.map((skill: string) => (
            <Badge key={skill} variant="outline" className="px-2 py-1 rounded-full text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      ),
    },
    { key: 'relevantExperience', title: 'Relevant Experience', render: (item: ListViewItem) => item.relevantExperience },
  ];

  const humanCapitalFilters: {
    key: string;
    title: string;
    type: 'text' | 'select' | 'number';
    options?: string[];
  }[] = [
    { key: 'name', title: 'Name', type: 'text' },
    { key: 'tools', title: 'Tools', type: 'text' },
    { key: 'skills', title: 'Skills', type: 'text' },
  ];

  const tabs = [
    {
      label: 'Human capital',
      content: (
        <div className="relative">
          <div className="absolute top-0 right-0 z-10">
            <ToggleView isGalleryView={isGalleryView} onToggle={handleToggleView} />
          </div>
          {isGalleryView ? <DataGrid /> : <ListView
            title="Human Capital Resources"
            data={humanCapitalData}
            columns={humanCapitalColumns}
            filters={humanCapitalFilters}
          />}
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
