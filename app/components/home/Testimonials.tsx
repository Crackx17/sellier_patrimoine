
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sophie Marceau',
    role: 'Acheteuse à Paris',
    content: "Un accompagnement personnalisé et une sélection de biens haut de gamme qui correspondait parfaitement à mes attentes. Je recommande vivement cette agence pour son professionnalisme et sa discrétion.",
    rating: 5,
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '2',
    name: 'Jean Dupont',
    role: 'Investisseur',
    content: "Des conseillers à l'écoute et une connaissance approfondie du marché immobilier de luxe. J'ai pu réaliser un excellent investissement grâce à leurs conseils avisés.",
    rating: 5,
    imageUrl: 'https://randomuser.me/api/portraits/men/46.jpg'
  },
  {
    id: '3',
    name: 'Marie Laurent',
    role: 'Propriétaire',
    content: "La vente de ma propriété s'est déroulée avec une efficacité remarquable. L'équipe a su mettre en valeur les atouts de mon bien et trouver rapidement un acquéreur sérieux.",
    rating: 4,
    imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ce que disent nos clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité absolue.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full overflow-hidden">
                            <img
                              src={testimonial.imageUrl}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-1">
                            <Star className="h-3 w-3 fill-current" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      
                      <p className="text-sm text-muted-foreground">{testimonial.content}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative -left-0 top-0 translate-y-0 right-auto" />
              <CarouselNext className="relative -right-0 top-0 translate-y-0 left-auto" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
