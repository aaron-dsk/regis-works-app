'use client'

import React, { useState } from 'react';
import TabBar from '@/components/tab-bar';
import { DataGrid } from '@/components/data-grid';
import { ListView, ListViewItem } from '@/components/list-view';
import { SavedJobs } from '@/components/saved-jobs';
import { Badge } from '@/components/ui/badge';
import ToggleView from '@/components/toggle-view';

const IncuAccele = () => {
  const [isGalleryView, setIsGalleryView] = useState(false);

  const handleToggleView = () => {
    setIsGalleryView(!isGalleryView);
  };

  const financingData: ListViewItem[] = [
    {
      id: 1,
      name: "Investment Corp",
      type: "Investor",
      investmentRange: "$100k - $1M",
      focusAreas: ["AI", "Robotics", "Cleantech"],
      stage: "Seed",
      location: "San Francisco, CA",
      contactPerson: "John Doe",
    },
    // ... add more financing data items
  ];

  const financingColumns = [
    { key: 'name', title: 'Name', render: (item: ListViewItem) => item.name },
    { key: 'type', title: 'Type', render: (item: ListViewItem) => item.type },
    { key: 'investmentRange', title: 'Investment Range', render: (item: ListViewItem) => item.investmentRange },
    {
      key: 'focusAreas',
      title: 'Focus Areas',
      render: (item: ListViewItem) => (
        <div className="flex flex-wrap gap-1">
          {item.focusAreas.map((area: string) => (
            <Badge key={area} variant="secondary" className="px-2 py-1 rounded-full text-xs">
              {area}
            </Badge>
          ))}
        </div>
      ),
    },
    { key: 'stage', title: 'Stage', render: (item: ListViewItem) => item.stage },
    { key: 'location', title: 'Location', render: (item: ListViewItem) => item.location },
    { key: 'contactPerson', title: 'Contact Person', render: (item: ListViewItem) => item.contactPerson },
  ];

  const financingFilters = [
    { key: 'name', title: 'Name', type: 'text' as const },
    { key: 'type', title: 'Type', type: 'select' as const, options: ['Investor', 'Lender', 'Grant'] },
    { key: 'focusAreas', title: 'Focus Areas', type: 'text' as const },
    { key: 'stage', title: 'Stage', type: 'select' as const, options: ['Seed', 'Series A', 'Series B', 'Growth'] },
    { key: 'location', title: 'Location', type: 'text' as const },
  ];

  const tabs = [
    {
      label: 'Incubation and Acceleration Programs',
      content: <SavedJobs/>
    },
    {
      label: 'Incubators and Accelerators',
      content: <DataGrid />,
    },
    {
      label: 'Financing',
      content: (
        <div className="relative">
            <ListView
              title="Financing Resources"
              data={financingData}
              columns={financingColumns}
              filters={financingFilters}
            />
        </div>
      ),
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
