// app/components/home/FeaturedProperties.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard, { Property } from "@/components/property/PropertyCard";

interface Props {
  properties: Property[];
}

const FeaturedProperties: React.FC<Props> = ({ properties }) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-3">Propriétés à la une</h2>
            <p className="text-muted-foreground">
              Notre sélection de biens d'exception
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/properties" className="flex items-center">
              Voir tous nos biens <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
