import { fetchProperties, mapApimoToProperty } from "@/services/apimoService";
import PropertyList from "./PropertyList";


export default async function PropertiesPage() {
  try {
    const apimoProperties = await fetchProperties();
    const initialProperties = apimoProperties.map(mapApimoToProperty);

    return <PropertyList initialProperties={initialProperties} />;
  } catch (error) {
    console.error("❌ Failed to fetch properties:", error);
    return <PropertyList initialProperties={[]} />;
  }
}
