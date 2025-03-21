"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Calendar } from 'lucide-react';

interface PropertyContactFormProps {
  propertyId: string;
}

const PropertyContactForm: React.FC<PropertyContactFormProps> = ({ propertyId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <div>
      {success ? (
        <div className="bg-green-50 p-4 rounded-lg text-green-800 mb-4">
          <p className="font-medium">Demande envoyée avec succès !</p>
          <p className="text-sm">Nous vous contacterons très prochainement.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
          />
          
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              required
            />
            
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Votre téléphone"
              required
            />
          </div>
          
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            rows={4}
            defaultValue={`Bonjour, je suis intéressé(e) par ce bien et j'aimerais obtenir plus d'informations.`}
            required
          />
          
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </Button>
        </form>
      )}
      
      <div className="mt-6 border-t border-gray-200 pt-6">
        <p className="text-sm mb-4">Ou contactez directement l'agent :</p>
        <div className="space-y-3">
          <a href="tel:+33612345678" className="flex items-center text-sm hover:text-primary">
            <Phone className="h-4 w-4 mr-2" />
            +33 6 12 34 56 78
          </a>
          <a href="mailto:contact@agence.fr" className="flex items-center text-sm hover:text-primary">
            <Mail className="h-4 w-4 mr-2" />
            contact@agence.fr
          </a>
          <Button variant="outline" className="w-full mt-2">
            <Calendar className="h-4 w-4 mr-2" />
            Prendre rendez-vous
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyContactForm;
