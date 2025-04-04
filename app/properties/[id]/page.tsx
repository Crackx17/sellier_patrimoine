// app/properties/[id]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import { fetchProperties } from "@/services/apimoService";
import { mapApimoToProperty } from "@/lib/mapApimoToProperty";
import { Bed, Bath, Square, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import PropertyContactForm from "@/components/property/PropertyContactForm";
import PropertyImageGallery from "@/components/property/PropertyImageGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HoverRappel from "@/components/HoverRappel"; // Composant client pour le rappel

// Fonction pour formater la description.
// Si une ligne commence par '-' ou '•', elle sera convertie en élément de liste.
function formatDescription(text: string) {
  const lines = text.split("\n");
  return lines
    .filter((line) => line.trim().length > 0)
    .map((line, index) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("-") || trimmed.startsWith("•")) {
        const content = trimmed.slice(1).trim();
        return <li key={index}>{content}</li>;
      }
      return (
        <p key={index} className="mb-2">
          {trimmed}
        </p>
      );
    });
}

// Fonction d'aide pour formater un compte en singulier ou pluriel
function formatCount(count: number, singular: string, plural: string): string {
  if (count === 0) return "Non précisé";
  return count === 1 ? `1 ${singular}` : `${count} ${plural}`;
}

export default async function PropertyDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await Promise.resolve(params);
  const properties = await fetchProperties();
  const property = properties.find(
    (p: any) => p.id?.toString() === id
  );
  if (!property) return notFound();

  const mappedProperty = mapApimoToProperty(property);
  if (!mappedProperty) return notFound();

  // Extraction du commentaire en français pour la description
  const frenchComment = property.comments?.find(
    (c: any) => c.language === "fr" || c.language === "fr_FR"
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative">
      <Navbar />
      <main className="flex-grow pt-24 pb-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
          {/* Galerie d'images avec ratio d'aspect */}
          <section className="relative w-full aspect-[16/9] rounded overflow-hidden mb-8">
            <PropertyImageGallery
              images={
                property.pictures?.map((pic: any) => pic.url) || [
                  mappedProperty.imageUrl,
                ]
              }
            />
          </section>

          {/* Titre, localisation et prix */}
          <section className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {mappedProperty.title || "Titre non défini"}
            </h1>
            <div className="flex items-center text-gray-500 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              {mappedProperty.location}
              {property.district?.name && (
                <span> - {property.district.name}</span>
              )}
            </div>
            <p className="text-2xl font-bold text-blue-600">
              {mappedProperty.price.toLocaleString("fr-FR")} €
            </p>
          </section>

          <div className="space-y-8">
            {/* Caractéristiques */}
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Caractéristiques</h2>
              <div className="flex flex-wrap gap-6 text-gray-700">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 text-blue-600 mr-2" />
                  {formatCount(
                    mappedProperty.bedrooms,
                    "chambre",
                    "chambres"
                  )}
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 text-blue-600 mr-2" />
                  {mappedProperty.waterHotDevice !== undefined
                    ? formatCount(
                        mappedProperty.waterHotDevice,
                        "salle de bain",
                        "salles de bain"
                      )
                    : formatCount(
                        mappedProperty.bathrooms,
                        "salle de bain",
                        "salles de bain"
                      )}
                </div>
                <div className="flex items-center">
                  <Square className="h-5 w-5 text-blue-600 mr-2" />
                  {mappedProperty.area} m²
                </div>
                {mappedProperty.propertyType === "Appartement" &&
                  mappedProperty.floor && (
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      Étage : {mappedProperty.floor}
                    </div>
                  )}
                {mappedProperty.propertyType === "Maison" &&
                  mappedProperty.constructionYear && (
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      Année de construction :{" "}
                      {mappedProperty.constructionYear}
                    </div>
                  )}
              </div>
            </section>

            {/* Informations complémentaires */}
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Informations complémentaires
              </h2>
              <div className="text-gray-700 space-y-4">
                {mappedProperty.address && (
                  <div>
                    <span className="font-semibold">Adresse : </span>
                    {mappedProperty.address}
                    {mappedProperty.addressMore &&
                      `, ${mappedProperty.addressMore}`}
                  </div>
                )}
                {mappedProperty.district && (
                  <div>
                    <span className="font-semibold">Quartier : </span>
                    {mappedProperty.district}
                  </div>
                )}
              </div>
            </section>

            {/* Description */}
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <div className="text-gray-700 leading-relaxed">
                {frenchComment && frenchComment.comment ? (
                  <div>{formatDescription(frenchComment.comment)}</div>
                ) : (
                  <p>Aucune description disponible.</p>
                )}
              </div>
            </section>
          </div>

          {/* Composant hover pour "Demander à être rappelé" */}
          <HoverRappel />

          <aside className="mt-8">
            <Card className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Contactez-nous</h2>
              <PropertyContactForm
                propertyId={mappedProperty.id.toString()}
              />
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
