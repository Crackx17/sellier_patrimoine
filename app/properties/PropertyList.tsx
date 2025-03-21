"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Property } from "@/components/property/PropertyCard";
import PropertyListFilters from "@/components/property/PropertyListFilters";
import PropertyListMap from "@/components/property/PropertyListMap";
import PropertyListHeader from "@/components/property/PropertyListHeader";
import PropertyViewToggle from "@/components/property/PropertyViewToggle";
import PropertyGrid from "@/components/property/PropertyGrid";
import PropertyPagination from "@/components/property/PropertyPagination";
import { usePropertyFiltering } from "@/hooks/usePropertyFiltering";
import { usePropertyPagination } from "@/hooks/usePropertyPagination";
import { useSearchParams } from "next/navigation";

interface PropertyListProps {
  initialProperties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ initialProperties }) => {
  const searchParams = useSearchParams();
  const [view, setView] = useState<"grid" | "map">("grid");
  const [properties] = useState<Property[]>(initialProperties);
  const propertiesPerPage = 6;

  const filteredProperties = usePropertyFiltering(properties, searchParams);
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    currentProperties
  } = usePropertyPagination(filteredProperties, propertiesPerPage);

  const handleResetFilters = () => {
    window.location.href = "/properties";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-36 pb-20">
        <div className="container mx-auto px-6">
          <PropertyListHeader filteredPropertiesCount={filteredProperties.length} />

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/4">
              <PropertyListFilters />
            </div>

            <div className="w-full lg:w-3/4">
              <PropertyViewToggle
                view={view}
                setView={setView}
                currentPropertiesCount={currentProperties.length}
                totalPropertiesCount={filteredProperties.length}
              />

              {view === "grid" ? (
                <PropertyGrid
                  properties={currentProperties}
                  resetFilters={handleResetFilters}
                  loading={false}
                />
              ) : (
                <PropertyListMap properties={filteredProperties} />
              )}

              <PropertyPagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyList;
