
import React from 'react';
import CustomButton from './ui/CustomButton';
import { ArrowRight, ChevronDown } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen-dynamic pt-24 overflow-hidden bg-grid">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 pt-20 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={100}>
            <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-medium rounded-full bg-secondary/80 text-foreground/80">
              Experience simplicity at its finest
            </div>
          </FadeIn>
          
          <FadeIn delay={300}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
              Design that speaks
              <span className="text-primary block mt-2">Without saying a word</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={500}>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 md:mb-10 max-w-2xl mx-auto text-balance">
              Elevate your digital presence with a design philosophy that prioritizes clarity, 
              functionality, and the perfect balance of form and purpose.
            </p>
          </FadeIn>
          
          <FadeIn delay={700}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CustomButton size="lg" className="px-8 py-3">
                Start exploring
                <ArrowRight className="ml-2 h-4 w-4" />
              </CustomButton>
              <CustomButton variant="outline" size="lg" className="px-8 py-3">
                Learn more
              </CustomButton>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={1000} className="mt-20 max-w-5xl mx-auto">
          <div className="aspect-video relative overflow-hidden rounded-2xl shadow-2xl custom-shadow">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/5"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 cursor-pointer transition-all duration-300">
                <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-primary/80">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-slate-900/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
              alt="Design Showcase" 
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-pulse-soft">
          <button 
            onClick={scrollToFeatures}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 text-foreground backdrop-blur-sm hover:bg-white transition-colors duration-300"
            aria-label="Scroll to features"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
