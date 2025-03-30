// app/properties/[id]/page.tsx
import { notFound } from "next/navigation";
import { fetchProperties } from "@/services/apimoService";
import { mapApimoToProperty } from "@/lib/mapApimoToProperty";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  Home,
  // D'autres icônes si besoin
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PropertyContactForm from "@/components/property/PropertyContactForm";
import PropertyImageGallery from "@/components/property/PropertyImageGallery";

export default async function PropertyDetail({ params }: { params: { id: string } }) {
  // Récupération de l'ID depuis les paramètres dynamiques
  const { id } = await Promise.resolve(params);
  const properties = await fetchProperties();
  const property = properties.find((p: any) => p.id?.toString() === id);
  if (!property) notFound();

  // Transformation des données via le mapping
  const mappedProperty = mapApimoToProperty(property);

  return (
    <main className="container mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-10">
      {/* Galerie d'images */}
      <PropertyImageGallery
        images={property.pictures?.map((pic: any) => pic.url) || [mappedProperty.imageUrl]}
      />

      {/* Informations de base */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{mappedProperty.title}</h1>
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {mappedProperty.location} {property.district?.name ? `- ${property.district.name}` : ""}
        </div>
        <p className="text-2xl font-bold text-primary">
          {mappedProperty.price.toLocaleString("fr-FR")} €
        </p>
      </section>

      {/* Caractéristiques et infos spécifiques (profil dynamique) */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Caractéristiques</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <Bed className="h-5 w-5 text-primary mr-2" />
            {mappedProperty.bedrooms} chambres
          </div>
          <div className="flex items-center">
            <Bath className="h-5 w-5 text-primary mr-2" />
            {mappedProperty.bathrooms} salles de bain
          </div>
          <div className="flex items-center">
            <Square className="h-5 w-5 text-primary mr-2" />
            {mappedProperty.area} m²
          </div>
          {/* Affichage conditionnel pour un appartement */}
          {mappedProperty.propertyType === "Appartement" && mappedProperty.floor && (
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-primary mr-2" />
              Étage : {mappedProperty.floor}
            </div>
          )}
          {/* Exemple d'info pour une maison */}
          {mappedProperty.propertyType === "Maison" && mappedProperty.constructionYear && (
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-primary mr-2" />
              Année de construction : {mappedProperty.constructionYear}
            </div>
          )}
          {/* Vous pouvez ajouter d'autres conditions pour d'autres profils */}
        </div>
      </section>

      {/* Informations complémentaires */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Informations complémentaires</h2>
        <div className="space-y-4 text-gray-700">
          {mappedProperty.address && (
            <div>
              <span className="font-semibold">Adresse : </span>
              {mappedProperty.address}
              {mappedProperty.addressMore && `, ${mappedProperty.addressMore}`}
            </div>
          )}
          {mappedProperty.district && (
            <div>
              <span className="font-semibold">Quartier : </span>
              {mappedProperty.district}
            </div>
          )}
          {/* Ajoutez d'autres champs complémentaires selon vos besoins */}
        </div>
      </section>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">
          {property.comments?.[0]?.comment || "Aucune description disponible."}
        </p>
      </section>

      {/* Formulaire de contact */}
      <aside className="mb-8">
        <Card className="shadow">
          <CardContent className="p-6">
            <PropertyContactForm propertyId={mappedProperty.id} />
          </CardContent>
        </Card>
      </aside>
    </main>
  );
}
