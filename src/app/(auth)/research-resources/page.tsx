'use client'

import React, { useState } from 'react';
import TabBar from '@/components/tab-bar';
import { DataGrid, DataGridItem } from '@/components/data-grid';
import { Marketplace } from '@/components/marketplace';
import { ListView, ListViewItem } from '@/components/list-view';
import ToggleView from '@/components/toggle-view';
import { HardwareShowcase } from '@/components/hardware-showcase'
import { Marketplace2 } from '@/components/marketplace2';
import { ServiceListings } from '@/components/service-listings';
import { Badge } from '@/components/ui/badge'
import { SoftwareShowcase } from '@/components/software-showcase'

const ResearchResourcesPage = () => {
  const [isGalleryView, setIsGalleryView] = useState(false);

  const handleToggleView = () => {
    setIsGalleryView(!isGalleryView);
  };

  const humanCapitalData: ListViewItem[] = [
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
    {
      id: 2,
      name: "Dr. Rajesh Patel",
      location: "Boston, MA",
      age: 42,
      bio: "AI researcher specializing in deep learning for medical image analysis and disease detection.",
      tools: ["PyTorch", "CUDA", "OpenCV"],
      skills: ["Deep Learning", "Computer Vision", "Medical Imaging"],
      relevantExperience: "10 years in AI research, 5 years focused on medical applications",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "San Francisco, CA",
      age: 31,
      bio: "Bioinformatics expert with experience in genomic data analysis and drug discovery pipelines.",
      tools: ["R", "Bioconductor", "Galaxy"],
      skills: ["Genomics", "Sequence Analysis", "Drug Target Identification"],
      relevantExperience: "7 years in pharmaceutical research, 3 years in a biotech startup",
    },
    {
      id: 4,
      name: "Dr. Sarah Chen",
      location: "Seattle, WA",
      age: 38,
      bio: "Environmental scientist specializing in climate modeling and data visualization for policy makers.",
      tools: ["MATLAB", "ArcGIS", "Tableau"],
      skills: ["Climate Modeling", "Geospatial Analysis", "Data Visualization"],
      relevantExperience: "8 years in environmental research, 3 years consulting for government agencies",
    },
    {
      id: 5,
      name: "Michael O'Brien",
      location: "Chicago, IL",
      age: 35,
      bio: "Research software engineer with expertise in high-performance computing and scientific simulations.",
      tools: ["C++", "MPI", "CUDA"],
      skills: ["Parallel Computing", "Algorithm Optimization", "Scientific Computing"],
      relevantExperience: "10 years developing software for physics and engineering simulations",
    },
    {
      id: 6,
      name: "Dr. Aisha Mahmood",
      location: "London, UK",
      age: 40,
      bio: "Neuroscientist specializing in brain-computer interfaces and neural signal processing.",
      tools: ["MATLAB", "LabVIEW", "EEGlab"],
      skills: ["Signal Processing", "Machine Learning", "Experimental Design"],
      relevantExperience: "12 years in neuroscience research, 5 years leading BCI projects",
    }
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

  const humanCapitalFilters = [
    { key: 'name', title: 'Name', type: 'text' as const },
    { key: 'tools', title: 'Tools', type: 'text' as const },
    { key: 'skills', title: 'Skills', type: 'text' as const },
  ];

  const humanCapitalFields = [
    { 
      key: 'name', 
      label: 'Name', 
      render: (item: DataGridItem) => (
        <div>
          <div className="font-medium">{item.name}</div>
          <div className="text-sm text-muted-foreground">{item.location}</div>
        </div>
      )
    },
    { key: 'age', label: 'Age', render: (item: DataGridItem) => item.age },
    { 
      key: 'bio', 
      label: 'Bio', 
      render: (item: DataGridItem) => item.bio.length > 100 ? `${item.bio.substring(0, 100)}...` : item.bio 
    },
    {
      key: 'tools',
      label: 'Tools/Technologies',
      render: (item: DataGridItem) => (
        <div className="flex flex-wrap gap-1">
          {item.tools.map((tool: string, index: number) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tool}
            </Badge>
          ))}
        </div>
      ),
    },
    {
      key: 'skills',
      label: 'Skills',
      render: (item: DataGridItem) => (
        <div className="flex flex-wrap gap-1">
          {item.skills.map((skill: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      ),
    },
    { key: 'relevantExperience', label: 'Relevant Experience', render: (item: DataGridItem) => item.relevantExperience },
  ];

  const testingData = [
    {
      id: 1,
      name: "Clinical Trial for Parkinson's Disease Biomarkers",
      company: "University of California, San Francisco (UCSF)",
      experience: "University of California, San Francisco (UCSF)",
      skills: ["Parkinson's Disease", "Biomarkers", "Neurology"],
      image: "/images/projects/parkinsons.jpg",
      companyLogo: "/images/projects/ucsf.png",
    },
    {
      id: 2,
      name: "Alpha Testing of AI-Assisted Cancer Detection Software",
      company: "Harvard Medical School",
      experience: "Harvard Medical School",
      skills: ["Cancer Research", "AI-Assisted Diagnostics", "Medical Software", "Oncology"],
      image: "/images/projects/ai-disease.jpg",
      companyLogo: "/images/projects/harvard.jpg",
    },
    {
      id: 3,
      name: "Beta Testing of Wearable Insulin Delivery System",
      company: "University of Cambridge",
      experience: "University of Cambridge",
      skills: ["Wearable Tech", "Diabetes Management", "Insulin Delivery"],
      image: "/images/projects/insulin.png",
      companyLogo: "/images/projects/cambridge.jpg",
    }
  ];

  const testingFilters = [
    { key: 'name', title: 'Name', type: 'text' as const },
    { key: 'company', title: 'Company', type: 'text' as const },
    { key: 'skills', title: 'Skills', type: 'text' as const },
  ];

  const tabs = [
    {
      label: 'Human capital',
      content: (
        <div className="relative">
          <div className="absolute top-0 right-0 z-10">
            <ToggleView isGalleryView={isGalleryView} onToggle={handleToggleView} />
          </div>
          {isGalleryView ? (
            <DataGrid 
              data={humanCapitalData} 
              fields={humanCapitalFields}
              filters={humanCapitalFilters}
            />
          ) : (
            <ListView
              title="Human Capital Resources"
              data={humanCapitalData}
              columns={humanCapitalColumns}
              filters={humanCapitalFilters}
            />
          )}
        </div>
      ),
    },
    {
      label: 'Testing',
      content: (
        <Marketplace 
          data={testingData}
          filters={testingFilters}
        />
      ),
    },
    {
      label: 'Software',
      content: <SoftwareShowcase />,
    },
    {
      label: 'Hardware',
      content: <HardwareShowcase />,
    },
    {
      label: 'Data',
      content: <Marketplace2 />,
    },
    {
      label: 'Services',
      content: <ServiceListings />,
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
