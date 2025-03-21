
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { fetchProperties } from "@/services/apimoService";
import React, { useState, useEffect } from "react";


const PropertyListFilters: React.FC = () => {
  const searchParams = useSearchParams();

  // Fetch des propriétés pour extraire les villes disponibles
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true);
      const props = await fetchProperties();
      setProperties(props);
      setLoading(false);
    };
    loadProperties();
  }, []);

  // Extraire les villes uniques
  const uniqueCities = [...new Set(properties.map((p) => p.city?.name).filter(Boolean))];

  const [selectedCity, setSelectedCity] = useState(searchParams.get("location") || "");

  return (
    <div>
      <h3 className="font-semibold text-lg">Localisation</h3>
      
      {loading ? (
        <p className="text-gray-500 text-sm">Chargement...</p>
      ) : (
        <Select value={selectedCity} onValueChange={setSelectedCity}>
          <SelectTrigger className="border-gray-300">
            <SelectValue placeholder="Choisissez une ville" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Toutes les villes</SelectItem>
            {uniqueCities.map((city) => (
              <SelectItem key={city} value={city}>{city}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
      
      <Button className="mt-4 w-full" onClick={() => console.log(`Filtrer avec ${selectedCity}`)}>
        Appliquer les filtres
      </Button>
    </div>
  );
};

export default PropertyListFilters;
