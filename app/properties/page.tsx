// app/properties/page.tsx
import { fetchProperties } from "@/services/apimoService";
import { mapApimoToProperty } from "@/lib/mapApimoToProperty";
import PropertyList from "./PropertyList";
import { IProperty } from "@/components/property/PropertyCard";

export default async function PropertiesPage() {
  let initialProperties: IProperty[] = [];

  try {
    const apimoProperties = await fetchProperties();
    // On mappe puis on filtre les valeurs null
    initialProperties = apimoProperties
      .map(mapApimoToProperty)
      .filter((prop): prop is IProperty => prop !== null);
  } catch (error) {
    console.error("❌ Erreur de récupération des propriétés:", error);
  }

  return <PropertyList initialProperties={initialProperties} />;
}
