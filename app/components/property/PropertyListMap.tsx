
import React from 'react';
import { Property } from '@/components/property/PropertyCard';
import { Card } from '@/components/ui/card';

interface PropertyListMapProps {
  properties: Property[];
}

const PropertyListMap: React.FC<PropertyListMapProps> = ({ properties }) => {
  return (
    <Card className="w-full h-[700px] overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
        <p className="text-lg">
          Carte de visualisation (intégration réelle avec Mapbox/Google Maps à suivre)
        </p>
      </div>
      
      {/* This is a placeholder for the actual map integration */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
        <div className="grid grid-cols-3 gap-2 w-full h-full p-4">
          {properties.map((property) => (
            <div key={property.id} className="bg-primary/10 rounded-lg p-2">
              <p className="text-xs truncate">{property.title}</p>
              <p className="text-xs">{property.location}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PropertyListMap;
