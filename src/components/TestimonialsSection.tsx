
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

interface Testimonial {
  name: string;
  event: string;
  text: string;
  image?: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Ana Luiza",
      event: "Casamento - 150 convidados",
      text: "Contratamos a Elo Drinks para o nosso casamento e foi a melhor decisão! Os drinks estavam incríveis, o atendimento impecável e nossos convidados elogiaram muito a qualidade e a apresentação. Super recomendo!",
    },
    {
      name: "Pedro Henrique",
      event: "Aniversário de 30 anos",
      text: "A equipe da Elo Drinks superou todas as expectativas! Drinks deliciosos, atendimento de altíssimo nível e uma apresentação visual impressionante. Todos os meus convidados ficaram encantados!",
    },
    {
      name: "Carla Mendes",
      event: "Evento Corporativo",
      text: "Contratamos para um evento da empresa e foi um sucesso! Profissionais extremamente capacitados, pontuais e atenciosos. Os drinks fizeram toda a diferença no nosso evento.",
    },
    {
      name: "Fábio Costa",
      event: "Festa de 15 anos",
      text: "A Elo Drinks fez a diferença na festa de 15 anos da minha filha! Serviço impecável, drinks deliciosos e não alcoólicos criativos para os adolescentes. Todos adoraram!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-elo-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-elo-white">
            O Que Nossos <span className="text-elo-terracotta">Clientes Dizem</span>
          </h2>
          <div className="w-20 h-1 bg-elo-terracotta mx-auto mb-6"></div>
          <p className="text-elo-cream/80 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior recompensa. 
            Confira alguns depoimentos de pessoas que contrataram nossos serviços.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-gradient-to-br from-elo-black/80 to-elo-terracotta/20 border-elo-terracotta/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-8">
                <MessageSquare size={48} className="text-elo-terracotta" />
              </div>
              
              <blockquote className="text-elo-white text-lg md:text-xl text-center italic mb-8">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="text-center">
                <h4 className="text-elo-terracotta font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-elo-cream/70">{testimonials[currentIndex].event}</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-elo-black/30 hover:bg-elo-terracotta/80 text-elo-white rounded-full p-2 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-elo-terracotta' : 'bg-elo-cream/30'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-elo-black/30 hover:bg-elo-terracotta/80 text-elo-white rounded-full p-2 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
