import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { 
  Award, 
  Users, 
  Clock, 
  Shield,
  BarChart3,
  Heart
} from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Marie Laurent',
      role: 'Fondatrice & Directrice',
      bio: 'Plus de 20 ans d\'expérience dans l\'immobilier de luxe',
      image: 'https://randomuser.me/api/portraits/women/23.jpg'
    },
    {
      name: 'Antoine Dubois',
      role: 'Responsable commercial',
      bio: 'Expert en négociation et stratégie immobilière',
      image: 'https://randomuser.me/api/portraits/men/41.jpg'
    },
    {
      name: 'Camille Moreau',
      role: 'Agent immobilier',
      bio: 'Spécialiste du marché immobilier parisien',
      image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
      name: 'Thomas Leclerc',
      role: 'Agent immobilier',
      bio: 'Dédié aux propriétés d\'exception de la Côte d\'Azur',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Notre équipe" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-20">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">À propos de notre agence</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Une agence immobilière d'exception pour des clients et des biens d'exception.
              </p>
            </FadeIn>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
                  <p className="text-muted-foreground mb-4">
                    Fondée en 2008 par Marie Laurent, notre agence est née d'une vision claire : transformer l'expérience immobilière traditionnelle en un service d'exception, personnalisé et attentif aux moindres détails.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Après avoir travaillé pendant plus de 15 ans dans les plus grandes agences immobilières de luxe à Paris et sur la Côte d'Azur, Marie a souhaité créer une structure à taille humaine où la qualité primerait sur la quantité.
                  </p>
                  <p className="text-muted-foreground">
                    Aujourd'hui, notre équipe de professionnels passionnés partage cette vision et s'engage à offrir un accompagnement sur mesure à chacun de nos clients, qu'ils soient vendeurs ou acquéreurs.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 h-64 w-64 bg-primary/10 rounded-lg"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80" 
                    alt="Notre histoire" 
                    className="rounded-lg relative z-10 h-full w-full object-cover shadow-lg"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Nos valeurs</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Notre philosophie repose sur des valeurs fortes qui guident chacune de nos actions et interactions.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <div className="bg-background rounded-lg p-8 shadow-sm">
                  <Award className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    Nous visons l'excellence dans chaque aspect de notre service, de la sélection des biens à la finalisation des transactions.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div className="bg-background rounded-lg p-8 shadow-sm">
                  <Users className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-3">Personnalisation</h3>
                  <p className="text-muted-foreground">
                    Chaque client est unique, c'est pourquoi nous adaptons notre approche pour répondre précisément à vos besoins et attentes.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={300}>
                <div className="bg-background rounded-lg p-8 shadow-sm">
                  <Shield className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-3">Intégrité</h3>
                  <p className="text-muted-foreground">
                    La transparence et l'honnêteté sont au cœur de notre pratique. Nous construisons des relations de confiance durables.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={400}>
                <div className="bg-background rounded-lg p-8 shadow-sm">
                  <Clock className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-3">Réactivité</h3>
                  <p className="text-muted-foreground">
                    Nous comprenons l'importance de la réactivité dans le secteur immobilier et nous nous engageons à être disponibles quand vous en avez besoin.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={500}>
                <div className="bg-background rounded-lg p-8 shadow-sm">
                  <BarChart3 className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-3">Expertise</h3>
                  <p className="text-muted-foreground">
                    Notre connaissance approfondie du marché immobilier de luxe nous permet de vous offrir des conseils avisés et stratégiques.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={600}>
                <div className="bg-background rounded-lg p-8 shadow-sm">
                  <Heart className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-3">Passion</h3>
                  <p className="text-muted-foreground">
                    Nous sommes passionnés par l'immobilier et par l'art de trouver le bien parfait pour chacun de nos clients.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Notre équipe</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Des professionnels passionnés et expérimentés au service de vos projets immobiliers.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <FadeIn key={member.name} delay={index * 100}>
                  <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                    <div className="aspect-square">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
