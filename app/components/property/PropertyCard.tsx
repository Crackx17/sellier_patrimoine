// app/components/property/PropertyCard.tsx
import Link from "next/link";
import React from 'react';
import { Eye, Bed, Bath, Square, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  propertyType: string;
  isNew?: boolean;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-FR') + ' €';
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "https://placehold.co/600x400/gray/white?text=No+Image";
  };

  const href = property.id ? `/properties/${property.id}` : '/properties';

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl border-0 group rounded-xl">
      <div className="relative">
        <Link href={href}>
          <div className="h-64 overflow-hidden">
            <img 
              src={property.imageUrl} 
              alt={property.title} 
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              onError={handleImageError}
            />
          </div>
        </Link>
        
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-gray-700 shadow-sm border-0">
            {property.propertyType}
          </Badge>
          {property.isNew && (
            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-sm">
              Nouveau
            </Badge>
          )}
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-sm border-0"
        >
          <Heart className="h-4 w-4 text-gray-700 hover:text-rose-500 transition-colors" />
        </Button>
      </div>
      
      <CardContent className="p-6 bg-white">
        <div className="mb-4">
          <h3 className="text-xl font-semibold line-clamp-1 mb-2 group-hover:text-blue-600 transition-colors">
            <Link href={href}>
              {property.title}
            </Link>
          </h3>
          <p className="text-muted-foreground">{property.location}</p>
        </div>
        
        <p className="text-xl font-bold text-gradient-to-r from-blue-600 to-indigo-600 mb-4">
          {formatPrice(property.price)}
        </p>
        
        <div className="flex justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{property.bedrooms}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{property.bathrooms}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{property.area} m²</span>
          </div>
          
          <Link href={href} className="text-blue-600 hover:text-blue-800 flex items-center group">
            <Eye className="h-4 w-4 mr-1" />
            <span className="text-sm group-hover:underline">Voir</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
