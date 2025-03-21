
import { useState, useMemo } from 'react';
import { Property } from '@/components/property/PropertyCard';

export const usePropertyPagination = (
  properties: Property[],
  propertiesPerPage: number = 6
) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate total pages
  const totalPages = useMemo(() => 
    Math.ceil(properties.length / propertiesPerPage), 
    [properties.length, propertiesPerPage]
  );
  
  // Get current properties
  const currentProperties = useMemo(() => {
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    return properties.slice(indexOfFirstProperty, indexOfLastProperty);
  }, [properties, currentPage, propertiesPerPage]);
  
  // Reset to first page when properties change
  useMemo(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);
  
  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentProperties
  };
};
