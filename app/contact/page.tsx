
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
} from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Formulaire envoyé avec succès !');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Contact" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-20">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contactez-nous</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Notre équipe est à votre disposition pour répondre à toutes vos questions.
              </p>
            </FadeIn>
          </div>
        </section>
        
        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <FadeIn className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="name">
                          Nom complet *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="email">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Votre email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="phone">
                          Téléphone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Votre numéro de téléphone"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="subject">
                          Sujet *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Sujet de votre message"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="message">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Votre message"
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto">
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer le message
                    </Button>
                  </form>
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div className="space-y-8">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Adresse</h3>
                          <p className="text-muted-foreground">123 Avenue des Champs-Élysées</p>
                          <p className="text-muted-foreground">75008 Paris, France</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Téléphone</h3>
                          <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                          <p className="text-muted-foreground">+33 6 12 34 56 78</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Email</h3>
                          <p className="text-muted-foreground">contact@agence-immobilier.fr</p>
                          <p className="text-muted-foreground">info@agence-immobilier.fr</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Horaires d'ouverture</h3>
                          <p className="text-muted-foreground">Lundi - Vendredi: 9h à 19h</p>
                          <p className="text-muted-foreground">Samedi: 10h à 17h</p>
                          <p className="text-muted-foreground">Dimanche: Fermé</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 rounded-xl p-8">
                    <h3 className="text-xl font-bold mb-4">Besoin d'une réponse rapide ?</h3>
                    <p className="text-muted-foreground mb-6">
                      Pour une réponse immédiate, n'hésitez pas à nous appeler directement.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:+33123456789">
                        <Phone className="h-4 w-4 mr-2" />
                        Appeler maintenant
                      </a>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Map */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="rounded-xl overflow-hidden h-[400px] shadow-lg">
              {/* This would be replaced with an actual map integration */}
              <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                <p className="text-lg">
                  Carte interactive (intégration Google Maps ou Mapbox à suivre)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
