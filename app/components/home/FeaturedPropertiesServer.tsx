// app/components/home/FeaturedPropertiesServer.tsx
import { fetchProperties, mapApimoToProperty } from "@/services/apimoService";
import FeaturedProperties from "./FeaturedProperties";

export default async function FeaturedPropertiesServer() {
  const raw = await fetchProperties();
  const top3 = raw.slice(0, 3).map(mapApimoToProperty);

  return <FeaturedProperties properties={top3} />;
}
