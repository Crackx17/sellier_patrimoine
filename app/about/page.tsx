// app/about/page.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
          {/* Hero Section */}
          <section className="py-16">
            <FadeIn>
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 tracking-tight">
                  À propos de Sellier Patrimoine
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-10">
                  Votre partenaire de confiance dans l'immobilier d'exception.
                </p>
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4">
                  En savoir plus
                </Button>
              </div>
            </FadeIn>
          </section>

          {/* Histoire & Mission */}
          <section className="py-16 bg-gray-50">
            <FadeIn delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image illustrative */}
                <div>
                  <img
                    src="/images/about.jpg"
                    alt="Notre équipe"
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                </div>
                {/* Texte */}
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-gray-800">
                    Notre Histoire
                  </h2>
                  <p className="text-gray-700 text-lg">
                    Fondée par Denis Sellier, Sellier Patrimoine est devenue une référence
                    dans l'immobilier de prestige à Paris. Nous accompagnons nos clients
                    avec expertise, passion et innovation pour valoriser chaque bien d’exception.
                  </p>
                  <p className="text-gray-700 text-lg">
                    Chaque projet est unique et notre mission est de révéler tout le potentiel
                    de vos biens grâce à une approche sur-mesure alliant tradition et modernité.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Notre Mission
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Offrir des solutions immobilières innovantes et personnalisées,
                    en mettant l'accent sur la qualité, l'expertise et l'accompagnement
                    sur-mesure pour répondre aux besoins spécifiques de chaque client.
                  </p>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Valeurs et Engagement */}
          <section className="py-16">
            <FadeIn delay={200}>
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Nos Valeurs et Engagements
                </h2>
                <div className="max-w-4xl mx-auto text-left space-y-6 text-gray-700 text-lg">
                  <p>
                    Chez Sellier Patrimoine, nous plaçons l'humain et la qualité au cœur de
                    notre démarche. Notre équipe d'experts s'engage à vous offrir un service
                    personnalisé et à anticiper vos besoins pour transformer vos projets en réussites.
                  </p>
                  <p>
                    Notre approche se base sur la transparence, la rigueur et une écoute
                    attentive, afin de créer des partenariats durables et de vous accompagner
                    tout au long de votre parcours immobilier.
                  </p>
                  <p>
                    Nous sommes fiers de contribuer à la valorisation de votre patrimoine en
                    vous proposant des solutions innovantes, adaptées à un marché en constante évolution.
                  </p>
                </div>
              </div>
            </FadeIn>
          </section>
        </div>
      </main>
    </div>
  );
}
