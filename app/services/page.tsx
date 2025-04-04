// app/services/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, HomeIcon, Key, Paintbrush, Building, Clock, Users } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import ServiceCard from '@/components/ServiceCard'; // On peut renommer ou garder le même composant

const services = [
  {
    title: "Transaction Immobilière",
    description: "Accompagnement expert pour l'achat et la vente de propriétés d'exception.",
    icon: <HomeIcon className="h-6 w-6" />,
    features: [
      "Évaluation précise du bien",
      "Stratégie de commercialisation sur-mesure",
      "Négociation optimale",
      "Suivi complet jusqu’à la signature"
    ]
  },
  {
    title: "Gestion Locative",
    description: "Optimisez la rentabilité de votre patrimoine en toute sérénité.",
    icon: <Key className="h-6 w-6" />,
    features: [
      "Sélection rigoureuse des locataires",
      "Baux et états des lieux sur-mesure",
      "Gestion optimisée des loyers",
      "Suivi technique continu"
    ]
  },
  {
    title: "Rénovation & Décoration",
    description: "Valorisez votre bien avec des solutions de rénovation et de design haut de gamme.",
    icon: <Paintbrush className="h-6 w-6" />,
    features: [
      "Conseils en aménagement",
      "Coordination d’artisans d’exception",
      "Home staging personnalisé",
      "Suivi de chantier professionnel"
    ]
  },
  {
    title: "Investissement Immobilier",
    description: "Développez votre patrimoine grâce à nos expertises en investissement.",
    icon: <Building className="h-6 w-6" />,
    features: [
      "Analyse d’opportunités",
      "Étude de rentabilité complète",
      "Conseils fiscaux spécialisés",
      "Suivi de la performance"
    ]
  },
  {
    title: "Conciergerie",
    description: "Services personnalisés pour les biens d'exception, assurant confort et tranquillité.",
    icon: <Clock className="h-6 w-6" />,
    features: [
      "Accueil sur-mesure",
      "Services exclusifs",
      "Maintenance proactive",
      "Organisation d’évènements"
    ]
  },
  {
    title: "Conseil Patrimonial",
    description: "Optimisez la gestion et la transmission de votre patrimoine immobilier.",
    icon: <Users className="h-6 w-6" />,
    features: [
      "Structuration patrimoniale",
      "Optimisation fiscale",
      "Transmission maîtrisée",
      "Planification successorale"
    ]
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white py-24">
          <div className="container mx-auto px-6 text-center">
            <FadeIn>
              <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 tracking-tight">
                  Nos Services Immobiliers d'Exception
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-10">
                  Une offre complète et personnalisée pour répondre à tous vos besoins immobiliers à Paris.
                </p>
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4">
                  Prendre rendez-vous
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <FadeIn delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800">
                Une gamme complète de services sur-mesure
              </h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <FadeIn key={service.title} delay={(index + 1) * 100}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    features={service.features}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="bg-white rounded-2xl shadow-2xl p-12 md:p-16 max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-bold mb-4 text-gray-800">Un service sur-mesure vous attend</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Nos experts sont à votre écoute pour vous accompagner dans tous vos projets immobiliers et vous offrir une expérience unique.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-6 py-3">
                    Nous contacter
                  </Button>
                  <Button size="lg" variant="outline" className="px-6 py-3 border border-gray-800 text-gray-800 hover:bg-gray-100">
                    Demander un devis
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
