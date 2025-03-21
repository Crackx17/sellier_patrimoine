"use client";

import React, { useState } from "react";
import { Search, MapPin, Home, Euro } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // ✅ Remplacement de useNavigate par useRouter

const QuickSearchForm: React.FC = () => {
  const router = useRouter(); // ✅ Remplace useNavigate
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (propertyType) params.append("type", propertyType);
    if (location) params.append("location", location);
    if (priceRange) params.append("price", priceRange);

    router.push(`/properties?${params.toString()}`); // ✅ Remplacement de navigate()
  };

  return (
    <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger className="w-full border-0 bg-white/90 text-gray-800 shadow-sm hover:bg-white hover:shadow-md transition-all">
            <div className="flex items-center">
              <Home className="mr-2 h-4 w-4 text-primary" />
              <SelectValue placeholder="Type de bien" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apartment">Appartement</SelectItem>
            <SelectItem value="house">Maison</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
            <SelectItem value="land">Terrain</SelectItem>
            <SelectItem value="commercial">Local commercial</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="w-full border-0 bg-white/90 text-gray-800 shadow-sm hover:bg-white hover:shadow-md transition-all">
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-primary" />
              <SelectValue placeholder="Arrondissement" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="paris-1">Paris 1er</SelectItem>
            <SelectItem value="paris-2">Paris 2ème</SelectItem>
            <SelectItem value="paris-3">Paris 3ème</SelectItem>
            <SelectItem value="paris-4">Paris 4ème</SelectItem>
            <SelectItem value="paris-5">Paris 5ème</SelectItem>
            <SelectItem value="paris-6">Paris 6ème</SelectItem>
            <SelectItem value="paris-7">Paris 7ème</SelectItem>
            <SelectItem value="paris-8">Paris 8ème</SelectItem>
            <SelectItem value="paris-16">Paris 16ème</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger className="w-full border-0 bg-white/90 text-gray-800 shadow-sm hover:bg-white hover:shadow-md transition-all">
            <div className="flex items-center">
              <Euro className="mr-2 h-4 w-4 text-primary" />
              <SelectValue placeholder="Budget" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-1000000">Jusqu'à 1 000 000 €</SelectItem>
            <SelectItem value="1000000-2000000">1 M€ - 2 M€</SelectItem>
            <SelectItem value="2000000-5000000">2 M€ - 5 M€</SelectItem>
            <SelectItem value="5000000-10000000">5 M€ - 10 M€</SelectItem>
            <SelectItem value="10000000+">Plus de 10 M€</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="bg-black hover:bg-gray-800 text-white">
        <Search className="mr-2 h-4 w-4" />
        Rechercher
      </Button>
    </form>
  );
};

export default QuickSearchForm;
