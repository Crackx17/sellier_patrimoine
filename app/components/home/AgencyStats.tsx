
import React from 'react';
import { Users, Home, Award, Clock } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const Stat: React.FC<StatProps> = ({ icon, value, label, delay }) => {
  return (
    <FadeIn delay={delay} className="flex flex-col items-center justify-center p-6">
      <div className="rounded-full bg-primary/10 p-4 mb-4">
        {icon}
      </div>
      <p className="text-3xl font-bold mb-2">{value}</p>
      <p className="text-muted-foreground text-center">{label}</p>
    </FadeIn>
  );
};

const AgencyStats: React.FC = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre expertise en chiffres</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La confiance de nos clients et notre expérience dans le secteur immobilier de luxe nous permettent de vous offrir un service d'exception.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat 
            icon={<Home className="h-8 w-8 text-primary" />}
            value="450+"
            label="Propriétés vendues"
            delay={100}
          />
          <Stat 
            icon={<Users className="h-8 w-8 text-primary" />}
            value="98%"
            label="Clients satisfaits"
            delay={200}
          />
          <Stat 
            icon={<Award className="h-8 w-8 text-primary" />}
            value="15+"
            label="Années d'expérience"
            delay={300}
          />
          <Stat 
            icon={<Clock className="h-8 w-8 text-primary" />}
            value="72h"
            label="Délai de réponse moyen"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default AgencyStats;
