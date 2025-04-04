// app/properties/PropertyList.tsx
"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyGrid from "@/components/property/PropertyGrid";
import PropertyListFilters from "@/components/property/PropertyListFilters";
import { IProperty } from "@/components/property/PropertyCard"; // Assurez-vous d'avoir un type Property cohérent
import { useRouter } from "next/navigation";

interface PropertyListProps {
  initialProperties: IProperty[];
}

const PropertyList: React.FC<PropertyListProps> = ({ initialProperties }) => {
  const router = useRouter();
  // On gère les filtres via un état interne
  const [filters, setFilters] = useState({
    type: "all",
    location: "all",
    bedrooms: "all",
    bathrooms: "all",
    price: [0, 5000000] as [number, number],
  });

  // Filtrage côté client en utilisant useMemo pour éviter les recalculs inutiles
  const filteredProperties = useMemo(() => {
    return initialProperties.filter((prop) => {
      // Filtrage par type
      if (filters.type !== "all" && prop.propertyType !== filters.type) return false;
      // Filtrage par localisation
      if (filters.location !== "all" && prop.location !== filters.location) return false;
      // Filtrage pour les chambres et salles de bain (si disponibles)
      if (filters.type !== "Parking") {
        if (filters.bedrooms !== "all" && Number(prop.bedrooms) < Number(filters.bedrooms)) return false;
        if (filters.bathrooms !== "all" && Number(prop.bathrooms) < Number(filters.bathrooms)) return false;
      }
      // Filtrage par budget
      if (prop.price < filters.price[0] || prop.price > filters.price[1]) return false;

      return true;
    });
  }, [initialProperties, filters]);

  const handleResetFilters = () => {
    setFilters({
      type: "all",
      location: "all",
      bedrooms: "all",
      bathrooms: "all",
      price: [0, 5000000],
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-36 pb-20">
        <div className="container mx-auto px-6">
          {/* Disposition flexible : sur mobile, le contenu en haut, les filtres en bas ; sur desktop, filtres à gauche */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Colonne des filtres */}
            <div className="order-2 lg:order-1 w-full lg:w-1/4">
              <PropertyListFilters filters={filters} onChange={setFilters} />
            </div>
            {/* Colonne du contenu principal */}
            <div className="order-1 lg:order-2 w-full lg:w-3/4">
              {filteredProperties.length === 0 ? (
                <div className="text-center mt-10">
                  <p className="text-xl">Aucun bien trouvé avec ces critères.</p>
                  <button
                    onClick={handleResetFilters}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              ) : (
                <PropertyGrid properties={filteredProperties} resetFilters={handleResetFilters} loading={false} />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyList;
