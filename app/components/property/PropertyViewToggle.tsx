
import React from 'react';
import { Button } from '@/components/ui/button';
import { LayoutGrid, Map } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

interface PropertyViewToggleProps {
  view: 'grid' | 'map';
  setView: (view: 'grid' | 'map') => void;
  currentPropertiesCount: number;
  totalPropertiesCount: number;
}

const PropertyViewToggle: React.FC<PropertyViewToggleProps> = ({
  view,
  setView,
  currentPropertiesCount,
  totalPropertiesCount
}) => {
  return (
    <FadeIn delay={200}>
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-500">
          Affichage de {currentPropertiesCount} biens sur {totalPropertiesCount}
        </p>
        
        <div className="flex gap-2">
          <Button
            variant={view === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setView('grid')}
            className={view === 'grid' ? 'bg-blue-600 hover:bg-blue-700' : ''}
          >
            <LayoutGrid className="h-4 w-4 mr-2" />
            Grille
          </Button>
          <Button
            variant={view === 'map' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setView('map')}
            className={view === 'map' ? 'bg-blue-600 hover:bg-blue-700' : ''}
          >
            <Map className="h-4 w-4 mr-2" />
            Carte
          </Button>
        </div>
      </div>
    </FadeIn>
  );
};

export default PropertyViewToggle;
