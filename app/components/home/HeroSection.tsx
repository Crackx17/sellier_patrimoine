import Link from "next/link";

import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/animations/FadeIn';
import QuickSearchForm from '@/components/search/QuickSearchForm';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image - Elegant Parisian Architecture */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
          alt="Paris Luxury Real Estate" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center pt-10">
        <FadeIn delay={100}>
          <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-md border border-white/10">
            <MapPin className="mr-1 h-3 w-3" /> Paris, France
          </div>
        </FadeIn>
        
        <FadeIn delay={300}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight">
            L'immobilier d'exception <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">à Paris</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={500}>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl font-light">
            Une expérience immobilière sur mesure dans les plus beaux quartiers de la capitale.
          </p>
        </FadeIn>
        
        <FadeIn delay={700} className="w-full max-w-4xl">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
            <QuickSearchForm />
          </div>
        </FadeIn>
        
        <FadeIn delay={900} className="mt-12">
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-lg">
              <Link href="/properties">
                <Search className="mr-2 h-5 w-5" />
                Explorer nos biens
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 shadow-lg" asChild>
              <Link href="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
