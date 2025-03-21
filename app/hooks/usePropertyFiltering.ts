
import { useState, useEffect } from 'react';
import { Property } from '@/components/property/PropertyCard';

export const usePropertyFiltering = (
  properties: Property[],
  searchParams: URLSearchParams
) => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);

  useEffect(() => {
    const filterProperties = () => {
      if (!properties || !Array.isArray(properties) || properties.length === 0) return [];

      
      return properties.filter(property => {
        // Type filter
        const type = searchParams.get('type');
        if (type && type !== 'all' && property.propertyType.toLowerCase() !== type.toLowerCase()) {
          return false;
        }
        
        // Location filter
        const location = searchParams.get('location');
        if (location && !property.location.toLowerCase().includes(location.toLowerCase())) {
          return false;
        }
        
        // Price filter
        const price = searchParams.get('price');
        if (price) {
          const [min, max] = price.split('-').map(Number);
          if (min && property.price < min) return false;
          if (max && property.price > max) return false;
        }
        
        // Bedrooms filter
        const bedrooms = searchParams.get('bedrooms');
        if (bedrooms && bedrooms !== 'all') {
          if (property.bedrooms < parseInt(bedrooms)) return false;
        }
        
        // Bathrooms filter
        const bathrooms = searchParams.get('bathrooms');
        if (bathrooms && bathrooms !== 'all') {
          if (property.bathrooms < parseInt(bathrooms)) return false;
        }
        
        return true;
      });
    };

    setFilteredProperties(filterProperties());
  }, [properties, searchParams]);

  return filteredProperties;
};
