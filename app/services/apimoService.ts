// app/services/apimoService.ts

const BASE_URL = process.env.NEXT_PUBLIC_APIMO_API_BASE_URL;
const AGENCY_ID = process.env.APIMO_AGENCY_ID;
const RAW_CREDENTIALS = process.env.APIMO_CREDENTIALS;

const isServer = typeof window === "undefined";

if (isServer && (!BASE_URL || !AGENCY_ID || !RAW_CREDENTIALS)) {
  throw new Error("❌ APIMO env vars missing. Check your .env.local file.");
}

const AUTH_HEADER = isServer
  ? `Basic ${Buffer.from(RAW_CREDENTIALS!).toString("base64")}`
  : "";

/**
 * 🏠 Récupère les propriétés via l'API Apimo (server-only)
 */
export async function fetchProperties(limit = 200): Promise<any[]> {
  if (!isServer) {
    throw new Error("❌ fetchProperties() must only be called server-side.");
  }

  const url = `${BASE_URL}/agencies/${AGENCY_ID}/properties`;
  console.log(`📡 Fetching properties from ${url}`);

  const res = await fetch(url, {
    headers: {
      Authorization: AUTH_HEADER,
      Accept: "application/json",
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error("❌ Failed to fetch properties:", res.status, res.statusText);
    throw new Error("Failed to fetch properties");
  }

  const json = await res.json();
  return json?.data ?? json?.properties ?? [];
}

/**
 * 🔍 **Autocomplétion des villes via API locale**
 */
/**
 * 🔍 **Autocomplétion des villes**
 */
export async function fetchCities(query: string): Promise<string[]> {
  if (!query) return [];

  const url = `/api/cities?query=${encodeURIComponent(query)}`; // 🔥 Appel de l'API interne Next.js
  console.log(`📡 Fetching cities from ${url}`);

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch cities: ${res.status}`);

    const json = await res.json();
    return json?.map((city: any) => city.name) ?? [];
  } catch (error) {
    console.error("❌ Error fetching cities:", error);
    return [];
  }
}


/**
 * 🏡 **Liste des types de biens disponibles**
 */
export async function fetchPropertyTypes(): Promise<string[]> {
  return Object.values(propertyTypeMap);
}

/**
 * 🔄 Transforme une propriété brute Apimo en Property (frontend)
 */
export function mapApimoToProperty(apimo: any): any {
  return {
    id: apimo?.id,
    title: apimo?.name ?? apimo?.comments?.[0]?.title ?? "Propriété sans titre",
    location: apimo?.city?.name ?? "Localisation inconnue",
    price: apimo?.price?.value ?? 0,
    bedrooms: apimo?.bedrooms ?? apimo?.rooms ?? 0,
    bathrooms: apimo?.bathrooms ?? 0,
    area: apimo?.area?.value ?? 0,
    imageUrl: apimo?.pictures?.[0]?.url ?? "https://placehold.co/600x400/gray/white?text=No+Image",
    url: apimo?.url?.trim() ? apimo.url : `/properties/${apimo?.id ?? ""}`,
    propertyType: propertyTypeMap[apimo?.type] ?? "Type inconnu",
    isNew: apimo?.status === 1,
  };
}

/**
 * 📍 **Mapping des types de propriétés**
 */
export const propertyTypeMap: Record<number, string> = {
  1: "Appartement",
  2: "Maison",
  3: "Terrain",
  4: "Local commercial",
  5: "Parking",
  6: "Villa",
  7: "Château",
  8: "Loft",
  9: "Duplex",
  10: "Penthouse",
  11: "Studio",
  12: "Immeuble",
  13: "Ferme",
  14: "Bureau",
  15: "Commerce",
  16: "Entrepôt",
};
