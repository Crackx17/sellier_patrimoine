import { fetchProperties, mapApimoToProperty } from "@/services/apimoService";
import PropertyList from "./PropertyList"; // Adjust path if needed

export default async function PropertiesPage() {
  let initialProperties = [];

  try {
    const apimoProperties = await fetchProperties();
    initialProperties = apimoProperties.map(mapApimoToProperty);
  } catch (error) {
    console.error("❌ Erreur de récupération des propriétés:", error);
  }

  return <PropertyList initialProperties={initialProperties} />;
}
