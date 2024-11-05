'use client'

import { Badge } from "@/components/ui/badge"

interface HumanCapitalCardProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    name: string;
    location: string;
    bio: string;
    tools: string[];
    skills: string[];
    relevantExperience: string;
    avatar?: string;
  };
}

export function HumanCapitalCard({ isOpen, onClose, data }: HumanCapitalCardProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <img 
              src={data.avatar || "/default-avatar.png"}
              alt={data.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold mb-1">{data.name}</h2>
              <p className="text-gray-500">{data.location}</p>
            </div>
          </div>

          <div className="border-t border-gray-200" />

          <div>
            <h3 className="font-semibold mb-2">Bio</h3>
            <p className="text-gray-600">{data.bio}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Tools/Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {data.tools.map((tool, i) => (
                <Badge key={i} variant="secondary">{tool}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <Badge key={i} variant="outline">{skill}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Relevant Experience</h3>
            <p className="text-gray-600">{data.relevantExperience}</p>
          </div>
        </div>
      </div>
    </div>
  );
}