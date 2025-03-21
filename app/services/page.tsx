
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, HomeIcon, Key, Paintbrush, Building, Clock, Users } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}> = ({ title, description, icon, features }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-border hover:shadow-lg transition-all">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Transaction Immobilière",
      description: "Nous vous accompagnons dans l'achat ou la vente de votre propriété avec expertise et professionnalisme.",
      icon: <HomeIcon className="h-6 w-6" />,
      features: [
        "Évaluation précise de votre bien",
        "Stratégie de commercialisation personnalisée",
        "Négociation optimale",
        "Accompagnement jusqu'à la signature"
      ]
    },
    {
      title: "Gestion Locative",
      description: "Confiez-nous la gestion de votre patrimoine immobilier pour une rentabilité optimisée et sans tracas.",
      icon: <Key className="h-6 w-6" />,
      features: [
        "Recherche de locataires qualifiés",
        "Rédaction des baux et états des lieux",
        "Gestion des loyers et charges",
        "Suivi technique du bien"
      ]
    },
    {
      title: "Rénovation & Décoration",
      description: "Valorisez votre bien grâce à nos services de rénovation et de décoration intérieure haut de gamme.",
      icon: <Paintbrush className="h-6 w-6" />,
      features: [
        "Conseils en aménagement d'espace",
        "Coordination des artisans",
        "Home staging pour la vente",
        "Suivi de chantier"
      ]
    },
    {
      title: "Investissement Immobilier",
      description: "Développez votre patrimoine immobilier avec nos conseils d'experts en investissement.",
      icon: <Building className="h-6 w-6" />,
      features: [
        "Analyse des opportunités d'investissement",
        "Étude de rentabilité détaillée",
        "Conseils fiscaux spécialisés",
        "Suivi de la performance de vos investissements"
      ]
    },
    {
      title: "Conciergerie",
      description: "Un service de conciergerie dédié pour les propriétaires et locataires de biens d'exception.",
      icon: <Clock className="h-6 w-6" />,
      features: [
        "Accueil des locataires",
        "Services à la carte",
        "Maintenance et entretien",
        "Organisation d'événements"
      ]
    },
    {
      title: "Conseil Patrimonial",
      description: "Optimisez la gestion de votre patrimoine immobilier avec nos conseillers experts.",
      icon: <Users className="h-6 w-6" />,
      features: [
        "Structuration patrimoniale",
        "Optimisation fiscale",
        "Transmission de patrimoine",
        "Planification successorale"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services Immobiliers d'Exception</h1>
                <p className="text-xl text-muted-foreground mb-10">
                  Une offre complète de services haut de gamme pour répondre à tous vos besoins immobiliers à Paris.
                </p>
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                  Prendre rendez-vous
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <FadeIn delay={100}>
              <h2 className="text-3xl font-bold mb-16 text-center">Une gamme complète de services personnalisés</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <FadeIn key={service.title} delay={(index + 1) * 100}>
                  <ServiceCard {...service} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Besoin d'un service sur mesure ?</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Notre équipe d'experts est à votre disposition pour vous accompagner dans tous vos projets immobiliers et répondre à vos besoins spécifiques.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                    Nous contacter
                  </Button>
                  <Button size="lg" variant="outline">
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
