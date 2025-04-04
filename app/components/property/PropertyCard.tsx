// app/components/property/PropertyCard.tsx
import React from "react";
import Link from "next/link";
import { Bed, Bath, Square, MapPin, Calendar } from "lucide-react";

export interface IProperty {
  id: number;
  title: string | null;
  reference?: string;
  category?: number;
  subcategory?: number;
  propertyType: string;
  // Localisation
  address?: string;
  addressMore?: string;
  region?: string;
  city?: string;
  zipcode?: string;
  district?: string;
  location?: string;
  // Géolocalisation
  longitude?: number;
  latitude?: number;
  altitude?: number;
  // Caractéristiques physiques
  area: number;
  areaTotal?: number;
  areaWeighted?: number;
  rooms?: number;
  bedrooms: number;
  bathrooms: number; // On conserve ce champ pour l'interface si besoin
  // Nouveau champ pour l'appareil d'eau chaude (donnée hot_device)
  waterHotDevice?: number;
  sleeps?: number;
  floor?: number | string | null;
  constructionYear?: number | null;
  // Finances
  price: number;
  commission?: number;
  deposit?: number;
  currency?: string;
  // Confort et techniques
  heatingType?: string;
  // Supprimer la déclaration en double de waterHotDevice ici (elle était déclarée deux fois)
  condition?: number;
  standing?: number;
  style?: string;
  facades?: number;
  viewType?: string;
  // Autres informations
  services?: any[];
  activities?: any[];
  proximities?: any[];
  tags?: any[];
  // Images et médias
  imageUrl: string;
  pictures?: string[];
  // Langue et commentaires
  language?: string;
  description?: string;
}

const PropertyCard: React.FC<{ property: IProperty }> = ({ property }) => {
  return (
    <Link href={`/properties/${property.id}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col h-full cursor-pointer">
        <div className="relative h-48 w-full">
          <img
            src={property.imageUrl}
            alt={property.title || "Propriété"}
            className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4 flex flex-col justify-between flex-grow">
          <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
            {property.title}
          </h2>
          <p className="text-sm text-gray-500 mt-1 flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {property.city || property.location}
          </p>
          <p className="text-xl font-semibold text-blue-600 mt-2">
            {property.price.toLocaleString("fr-FR")} €
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-600">
            {["Appartement", "Maison", "Studio", "Villa"].includes(property.propertyType) && (
              <>
                <div className="flex items-center">
                  <Square className="w-4 h-4 mr-1" />
                  {property.area} m²
                </div>
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  {property.bedrooms} ch.
                </div>
                {/* Utilisation de waterHotDevice à la place de bathrooms */}
                <div className="flex items-center">
                  <Bath className="w-4 h-4 mr-1" />
                  {property.waterHotDevice !== undefined
                    ? property.waterHotDevice !== 0
                      ? `${property.waterHotDevice} sdb.`
                      : "Non précisé"
                    : "Non précisé"}
                </div>
                {property.propertyType === "Appartement" && property.floor && (
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Étage : {property.floor}
                  </div>
                )}
                {property.propertyType === "Maison" && property.constructionYear && (
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Année : {property.constructionYear}
                  </div>
                )}
              </>
            )}

            {["Commerce", "Local commercial", "Fonds de commerce", "Bureau", "Locaux d'activité"].includes(property.propertyType) && (
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                {property.area} m²
              </div>
            )}

            {property.propertyType === "Parking" && (
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                {property.area} m²
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
