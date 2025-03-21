// app/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/home/HeroSection';
import FeaturedPropertiesServer from '@/components/home/FeaturedPropertiesServer';
import AgencyStats from '@/components/home/AgencyStats';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <FadeIn>
        <FeaturedPropertiesServer />
      </FadeIn>
      <FadeIn delay={200}>
        <AgencyStats />
      </FadeIn>
      <FadeIn delay={300}>
        <Testimonials />
      </FadeIn>
      <FadeIn delay={400}>
        <CallToAction />
      </FadeIn>
      <Footer />
    </div>
  );
};

export default Index;
