// app/lib/mapApimoToProperty.ts
import { IProperty } from "@/components/property/PropertyCard";

export function mapApimoToProperty(apimoProperty: any): IProperty | null {
  const userLang = apimoProperty.user?.language || "fr";
  if (userLang !== "fr" && userLang !== "fr_FR") {
    return null;
  }

  const frenchComment = apimoProperty.comments?.find((c: any) =>
    c.language === "fr" || c.language === "fr_FR"
  );

  return {
    id: apimoProperty.id,
    title: frenchComment?.title || apimoProperty.name || null,
    location: apimoProperty.city?.name || "",
    price: apimoProperty.price?.value || 0,
    bedrooms: apimoProperty.bedrooms || 0,
    bathrooms: apimoProperty.bathrooms || 0, // conservé pour l'interface
    // On récupère la donnée "hot_device" et on la place dans waterHotDevice
    waterHotDevice: apimoProperty.water?.hot_device || 0,
    area: apimoProperty.area?.value || 0,
    propertyType: mapType(apimoProperty.type),
    floor: apimoProperty.floor?.value || null,
    constructionYear: apimoProperty.construction?.construction_year || null,
    imageUrl: apimoProperty.pictures?.[0]?.url || "",
    language: userLang,
    address: apimoProperty.address || null,
    addressMore: apimoProperty.address_more || null,
    district: apimoProperty.district?.name || null,
  };
}

function mapType(typeCode: number): string {
  const mapping: Record<number, string> = {
    1: "Appartement",
    2: "Maison",
    4: "Commerce",
    5: "Parking",
    7: "Bureau",
    9: "Locaux d'activité",
  };
  return mapping[typeCode] || "Inconnu";
}
