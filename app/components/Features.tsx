
import React from 'react';
import { Layers, Feather, Eye, Zap, Shield, Sparkles } from 'lucide-react';
import FadeIn from './animations/FadeIn';
import CustomButton from './ui/CustomButton';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon, delay }) => {
  return (
    <FadeIn delay={delay} className="flex flex-col">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </FadeIn>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "Thoughtful Design",
      description: "Every element serves a purpose, with careful attention to spacing, typography, and visual hierarchy.",
      icon: <Feather className="h-6 w-6" />,
    },
    {
      title: "Visual Clarity",
      description: "Clean aesthetics and intuitive interfaces make navigation simple and user-friendly.",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      title: "Lightning Fast",
      description: "Optimized performance ensures smooth animations and responsive interactions.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Layered Depth",
      description: "Subtle shadows and glass morphism create visual depth without overwhelming the user.",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Secure Framework",
      description: "Built with modern security practices and regular updates to keep your data safe.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Polished Details",
      description: "Refined animations, micro-interactions, and attention to detail create a premium experience.",
      icon: <Sparkles className="h-6 w-6" />,
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium rounded-full bg-secondary/80 text-foreground/80">
              Core Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Designed with purpose
            </h2>
            <p className="text-lg text-foreground/70">
              Our approach combines aesthetics with functionality, creating an experience that feels natural and intuitive.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <Feature
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={(index + 1) * 100}
            />
          ))}
        </div>

        <FadeIn delay={800} className="mt-16">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ready to experience the difference?</h3>
                <p className="text-foreground/70 mb-6">
                  Elevate your digital presence with our thoughtfully designed platform that prioritizes user experience.
                </p>
                <CustomButton>
                  Get started now
                </CustomButton>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden custom-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dashboard preview" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Features;
