// /lib/mapApimoToProperty.ts

import {
    propertyCategoryMapping,
    propertySubcategoryMapping,
    propertyTypeMapping,
    propertySubtypeMapping,
  } from "./mappings";
  
  export function mapApimoToProperty(apimoProperty: any) {
    // On convertit les codes en nombre pour être sûr d'utiliser les bons index
    const categoryKey = Number(apimoProperty.category);
    const subcategoryKey = Number(apimoProperty.subcategory);
    const typeKey = Number(apimoProperty.type);
    const subtypeKey = Number(apimoProperty.subtype);
  
    return {
      id: apimoProperty.id,
      title: apimoProperty.name || "Titre non défini",
      location: apimoProperty.city?.name || "Localisation inconnue",
      price: apimoProperty.price?.value || 0,
      bedrooms: apimoProperty.bedrooms || 0,
      bathrooms: apimoProperty.bathrooms || 0,
      area: apimoProperty.area?.value || 0,
      category: propertyCategoryMapping[categoryKey as keyof typeof propertyCategoryMapping] || "Non défini",
      subcategory: propertySubcategoryMapping[subcategoryKey as keyof typeof propertySubcategoryMapping] || "",
      propertyType: propertyTypeMapping[typeKey as keyof typeof propertyTypeMapping] || "Non défini",
      propertySubtype: propertySubtypeMapping[subtypeKey as keyof typeof propertySubtypeMapping] || "",
      address: apimoProperty.address || "",
      addressMore: apimoProperty.address_more || "",
      district: apimoProperty.district?.name || "",
      constructionYear: apimoProperty.construction?.construction_year || null,
      floor: apimoProperty.floor?.value || null,
      heating: apimoProperty.heating?.type || "",
      // Ajoute ici d'autres champs que tu souhaites exploiter
      imageUrl: apimoProperty.pictures?.[0]?.url || "/placeholder.jpg",
    };
  }
  