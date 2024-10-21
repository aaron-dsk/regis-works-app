'use client'

import TabBar from '@/components/tab-bar';
import { IncubatorAcceleratorCard } from '@/components/incubator-accelerator-card';
import { ListView, ListViewItem } from '@/components/list-view';
import { SavedJobs } from '@/components/saved-jobs';
import { Badge } from '@/components/ui/badge';

const IncuAccele = () => {

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
    {
      id: 2,
      name: "VentureX Capital",
      type: "VC Firm",
      investmentRange: "$500k - $5M",
      focusAreas: ["Fintech", "Healthcare", "Blockchain"],
      stage: "Series A",
      location: "New York, NY",
      contactPerson: "Jane Smith",
    },
    {
      id: 3,
      name: "GreenTech Investors",
      type: "Angel Investor",
      investmentRange: "$50k - $500k",
      focusAreas: ["Sustainability", "Energy", "AgTech"],
      stage: "Pre-Seed",
      location: "Austin, TX",
      contactPerson: "Robert Green",
    },
    {
      id: 4,
      name: "Blue Horizon Ventures",
      type: "Institutional Investor",
      investmentRange: "$1M - $10M",
      focusAreas: ["Biotech", "Medtech", "Pharmaceuticals"],
      stage: "Series B",
      location: "Boston, MA",
      contactPerson: "Alice Brown",
    }
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
      content: <IncubatorAcceleratorCard />,
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
