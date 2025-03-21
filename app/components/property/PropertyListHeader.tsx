
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';

interface PropertyListHeaderProps {
  filteredPropertiesCount: number;
}

const PropertyListHeader: React.FC<PropertyListHeaderProps> = ({ filteredPropertiesCount }) => {
  return (
    <FadeIn>
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Découvrez nos propriétés
        </h1>
        <p className="text-gray-600">
          {filteredPropertiesCount} biens disponibles
        </p>
      </div>
    </FadeIn>
  );
};

export default PropertyListHeader;
