// app/components/property/PropertyContactForm.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface PropertyContactFormProps {
  propertyId: string; // ou number -> converti en string plus haut
}

const PropertyContactForm: React.FC<PropertyContactFormProps> = ({ propertyId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `Bonjour, je suis intéressé(e) par le bien ${propertyId} et j'aimerais obtenir plus d'informations.`,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simule un appel API
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      // Réinitialise le formulaire
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: `Bonjour, je suis intéressé(e) par le bien ${propertyId} et j'aimerais obtenir plus d'informations.`,
      });

      // Masquer le message de succès après 3 secondes
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div>
      {success && (
        <div className="mb-4 bg-green-50 border border-green-300 text-green-700 p-3 rounded">
          Demande envoyée avec succès ! Nous vous contacterons très prochainement.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom
          </label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <Input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Votre téléphone"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white hover:bg-blue-700"
          disabled={submitting}
        >
          {submitting ? "Envoi en cours..." : "Envoyer ma demande"}
        </Button>
      </form>
    </div>
  );
};

export default PropertyContactForm;
