import React from 'react';

interface ToggleViewProps {
  isGalleryView: boolean;
  onToggle: () => void;
}

const ToggleView: React.FC<ToggleViewProps> = ({ isGalleryView, onToggle }) => {
  return (
    <div className="flex space-x-1 bg-white border border-gray-200 rounded-md">
      <button
        onClick={() => isGalleryView && onToggle()}
        className={`p-2 ${isGalleryView ? '' : 'bg-gray-100'}`}
        aria-label="List view"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
      </button>
      <button
        onClick={() => !isGalleryView && onToggle()}
        className={`p-2 ${isGalleryView ? 'bg-gray-100' : ''}`}
        aria-label="Gallery view"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      </button>
    </div>
  );
};

export default ToggleView;