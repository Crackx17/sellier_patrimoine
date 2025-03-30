"use client";

import React, { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";

// Type pour les propriétés (à ajuster selon votre modèle réel)
interface Property {
  city?: { name?: string };
}

export interface PropertyFilters {
  type: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  price: [number, number];
}

interface PropertyListFiltersProps {
  filters: PropertyFilters;
  onChange: (filters: PropertyFilters) => void;
}

const PriceSlider: React.FC<{
  value: [number, number];
  onValueChange: (value: [number, number]) => void;
  max: number;
  step: number;
}> = ({ value, onValueChange, max, step }) => {
  return (
    <SliderPrimitive.Root
      value={value}
      onValueChange={(val: number[]) => {
        if (val.length === 2) {
          onValueChange([val[0], val[1]]);
        }
      }}
      max={max}
      step={step}
      aria-label="Price Range"
      className="relative flex items-center select-none touch-none w-full h-5"
    >
      <SliderPrimitive.Track className="bg-gray-200 relative flex-grow rounded h-2">
        <SliderPrimitive.Range className="absolute bg-blue-600 rounded h-full" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block w-4 h-4 bg-white border border-gray-300 rounded-full" />
      <SliderPrimitive.Thumb className="block w-4 h-4 bg-white border border-gray-300 rounded-full" />
    </SliderPrimitive.Root>
  );
};

// Import de SliderPrimitive après la déclaration du composant PriceSlider
import * as SliderPrimitive from "@radix-ui/react-slider";

const PropertyListFilters: React.FC<PropertyListFiltersProps> = ({ filters, onChange }) => {
  const [locations, setLocations] = useState<string[]>([]);

  // Chargement asynchrone des villes
  useEffect(() => {
    const loadProperties = async () => {
      try {
        // On précise le type de la réponse pour que TS sache que properties est un tableau de Property
        const res = await fetch("/api/properties");
        const json = (await res.json()) as { properties?: Property[]; data?: Property[] };
        const props: Property[] = json.properties ?? json.data ?? [];
        const cities: string[] = props
          .map((p) => p.city?.name)
          .filter((name): name is string => typeof name === "string" && name.trim() !== "");
        const uniqueCities = Array.from(new Set(cities)).sort((a, b) => a.localeCompare(b));
        setLocations(uniqueCities);
      } catch (error) {
        console.error("❌ Error fetching cities:", error);
      }
    };
    loadProperties();
  }, []);

  // Fonction pour mettre à jour un filtre individuel
  const updateFilter = (key: keyof PropertyFilters, value: any) => {
    onChange({ ...filters, [key]: value });
  };

  const handleResetFilters = () => {
    onChange({ type: "all", location: "all", bedrooms: "all", bathrooms: "all", price: [0, 5000000] });
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("fr-FR") + " €";
  };

  return (
    <Card className="overflow-hidden shadow-md border-gray-200 transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-white px-4 py-2">
        <CardTitle className="flex justify-between items-center text-xl font-semibold tracking-wide">
          <span>Filtres</span>
          <Button variant="ghost" size="sm" onClick={handleResetFilters} className="text-gray-500 hover:text-gray-800">
            <X className="h-4 w-4 mr-1" />
            Réinitialiser
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        {/* Type de bien */}
        <div className="space-y-2">
          <label className="text-base font-medium">Type de bien</label>
          <Select value={filters.type} onValueChange={(val) => updateFilter("type", val)}>
            <SelectTrigger className="border-gray-300">
              <SelectValue placeholder="Tous les types" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-md">
              <SelectItem value="all">Tous les types</SelectItem>
              <SelectItem value="Appartement">Appartement</SelectItem>
              <SelectItem value="Maison">Maison</SelectItem>
              <SelectItem value="Villa">Villa</SelectItem>
              <SelectItem value="Studio">Studio</SelectItem>
              <SelectItem value="Parking">Parking</SelectItem>
              <SelectItem value="Local commercial">Local commercial</SelectItem>
              <SelectItem value="Fonds de commerce">Fonds de commerce</SelectItem>
              <SelectItem value="Bureau">Bureau</SelectItem>
              <SelectItem value="Commerce">Commerce</SelectItem>
              <SelectItem value="Locaux d'activité">Locaux d'activité</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Localisation */}
        <div className="space-y-2">
          <label className="text-base font-medium">Localisation</label>
          <Select value={filters.location} onValueChange={(val) => updateFilter("location", val)}>
            <SelectTrigger className="border-gray-300">
              <SelectValue placeholder="Choisissez une ville" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-md">
              <SelectItem value="all">Toutes les villes</SelectItem>
              {locations.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Budget avec PriceSlider */}
        <div className="space-y-4">
          <label className="text-base font-medium">Budget</label>
          <PriceSlider
            value={filters.price}
            onValueChange={(val: [number, number]) => updateFilter("price", val)}
            max={10000000}
            step={100000}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{formatPrice(filters.price[0])}</span>
            <span>{formatPrice(filters.price[1])}</span>
          </div>
        </div>
        {/* Chambres et Salles de bain (affiché si type ≠ Parking) */}
        {filters.type !== "Parking" && (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-base font-medium">Chambres</label>
              <Select value={filters.bedrooms} onValueChange={(val) => updateFilter("bedrooms", val)}>
                <SelectTrigger className="border-gray-300">
                  <SelectValue placeholder="Min." />
                </SelectTrigger>
                <SelectContent className="bg-white shadow-md">
                  <SelectItem value="all">Min.</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-base font-medium">Salles de bain</label>
              <Select value={filters.bathrooms} onValueChange={(val) => updateFilter("bathrooms", val)}>
                <SelectTrigger className="border-gray-300">
                  <SelectValue placeholder="Min." />
                </SelectTrigger>
                <SelectContent className="bg-white shadow-md">
                  <SelectItem value="all">Min.</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PropertyListFilters;
