// app/properties/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchProperties, mapApimoToProperty } from "@/services/apimoService";
import {
  Bed, Bath, Square, MapPin, Calendar, Home, CheckCircle, Ruler, Wallet, ShieldCheck
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PropertyContactForm from "@/components/property/PropertyContactForm";
import PropertyImageGallery from "@/components/property/PropertyImageGallery";

export default async function PropertyDetail({ params }: { params: { id: string } }) {
  const id = params?.id;
  const properties = await fetchProperties();
  const property = properties.find((p: any) => p.id?.toString() === id);

  if (!property) notFound();
  const mappedProperty = mapApimoToProperty(property);

  return (
    <main className="container mx-auto px-6 pt-24 pb-10">
      {/* 🔄 Galerie d'images */}
      <PropertyImageGallery images={property.pictures?.map((pic: any) => pic.url) || [mappedProperty.imageUrl]} />

      {/* 📊 Détails du bien */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{mappedProperty.title}</h1>
          <div className="flex items-center text-gray-500 mb-4">
            <MapPin className="h-4 w-4 mr-1" /> {mappedProperty.location} - {property.district?.name || "Quartier inconnu"}
          </div>
          <p className="text-2xl font-bold text-primary">
            {mappedProperty.price.toLocaleString("fr-FR")} €
          </p>

          {/* 📏 Caractéristiques */}
          <div className="flex flex-wrap gap-4 my-6">
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
            {property.construction?.construction_year && (
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                Construite en {property.construction.construction_year}
              </div>
            )}
            {property.propertyType && (
              <div className="flex items-center">
                <Home className="h-5 w-5 text-primary mr-2" />
                {property.propertyType}
              </div>
            )}
          </div>

          {/* 💰 Informations financières */}
          {(property.price.commission || property.residence?.fees) && (
            <>
              <h2 className="text-xl font-semibold mb-2">Informations financières</h2>
              <ul className="list-disc pl-5 text-gray-700">
                {property.price.commission && <li>Honoraires : {property.price.commission} €</li>}
                {property.residence?.fees && <li>Charges copropriété : {property.residence.fees} €/mois</li>}
                {property.price.deposit && <li>Caution : {property.price.deposit} €</li>}
              </ul>
            </>
          )}

          {/* 🏗️ Services et équipements */}
          {property.services?.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mt-6 mb-2">Services & Équipements</h2>
              <ul className="grid grid-cols-2 gap-4">
                {property.services.map((service: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    {service}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* 🔍 Diagnostics et réglementations */}
          {property.regulations?.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mt-6 mb-2">Diagnostics & Réglementations</h2>
              <ul className="list-disc pl-5 text-gray-700">
                {property.regulations.map((regulation: any, index: number) => (
                  <li key={index}>
                    <ShieldCheck className="h-5 w-5 text-primary mr-2 inline" />
                    {regulation.type} : {regulation.value} ({regulation.date})
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* 🏡 Description */}
          <h2 className="text-xl font-semibold mt-6 mb-2">Description</h2>
          <p className="text-gray-700">
            {property.comments?.[0]?.comment || "Aucune description disponible."}
          </p>
        </div>

        {/* 📩 Formulaire de contact */}
        <div>
          <Card className="sticky top-28">
            <CardContent className="p-6">
              <PropertyContactForm propertyId={mappedProperty.id} />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
