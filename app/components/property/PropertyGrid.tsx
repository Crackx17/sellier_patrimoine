
import React from 'react';
import { Property } from '@/components/property/PropertyCard';
import PropertyCard from '@/components/property/PropertyCard';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/animations/FadeIn';

interface PropertyGridProps {
  properties: Property[];
  loading: boolean;
  resetFilters: () => void;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, loading, resetFilters }) => {
  return (
    <FadeIn delay={300}>
      {properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-100 p-8">
          <p className="text-gray-500 text-lg mb-4">Aucun bien ne correspond à votre recherche</p>
          <Button 
            variant="outline" 
            onClick={resetFilters}
          >
            Réinitialiser les filtres
          </Button>
        </div>
      )}
    </FadeIn>
  );
};

export default PropertyGrid;
