// app/components/property/PropertyCard.tsx
import React from "react";
import { Bed, Bath, Square, MapPin, Calendar } from "lucide-react";

// Définition du type Property (à adapter selon votre modèle)
export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  propertyType: string; // Par exemple "Appartement", "Maison", "Parking", "Commerce", "Bureau", etc.
  floor?: number | string | null;
  constructionYear?: number | null;
  imageUrl: string;
  // Vous pouvez ajouter d'autres champs spécifiques si nécessaire (ex. : jardin, garage, etc.)
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    title,
    location,
    price,
    bedrooms,
    bathrooms,
    area,
    propertyType,
    floor,
    constructionYear,
    imageUrl,
  } = property;

  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition-shadow">
      {/* Image du bien */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />

      {/* Informations de base */}
      <h2 className="mt-2 font-bold text-lg">{title}</h2>
      <div className="flex items-center text-gray-500 text-sm">
        <MapPin className="w-4 h-4 mr-1" />
        {location}
      </div>
      <p className="text-primary font-semibold text-xl mt-1">
        {price.toLocaleString("fr-FR")} €
      </p>

      {/* Détails complémentaires */}
      <div className="flex flex-wrap gap-2 mt-2 text-sm">
        {/* Affichage de la surface pour tous sauf certains types commerciaux si souhaité */}
        {(propertyType !== "Parking" && propertyType !== "Commerce") && (
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            {area} m²
          </div>
        )}

        {/* Pour les biens résidentiels (Appartement, Maison, Studio) */}
        {["Appartement", "Maison", "Studio", "Villa"].includes(propertyType) && (
          <>
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              {bedrooms} ch.
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              {bathrooms} sb.
            </div>
          </>
        )}

        {/* Pour les appartements, afficher l'étage si disponible */}
        {propertyType === "Appartement" && floor && (
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            Étage : {floor}
          </div>
        )}

        {/* Pour les maisons, afficher l'année de construction si disponible */}
        {propertyType === "Maison" && constructionYear && (
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            Année : {constructionYear}
          </div>
        )}

        {/* Pour les biens commerciaux (Commerce, Locaux d'activité, Bureau) */}
        {["Commerce", "Local commercial", "Fonds de commerce", "Bureau", "Locaux d'activité"].includes(propertyType) && (
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            {area} m²
          </div>
        )}

        {/* Pour les parkings, on n'affiche pas chambres/salles */}
        {propertyType === "Parking" && (
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            {area} m²
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
