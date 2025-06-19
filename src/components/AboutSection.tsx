
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-elo-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/Elo-Drinks/lovable-uploads/ceo.webp" 
                alt="Equipe Elo Drinks" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-elo-terracotta rounded-lg p-4 shadow-lg md:max-w-xs">
              <p className="text-elo-white text-sm italic">
                "Transformamos cada evento em uma experiência única e memorável através dos nossos coquetéis exclusivos."
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-elo-black">
              Sobre a <span className="text-elo-terracotta">Elo Drinks</span>
            </h2>
            <div className="w-20 h-1 bg-elo-terracotta mb-6"></div>
            
            <p className="text-gray-700 mb-6">
              Somos uma empresa especializada em serviços de bartending de alta qualidade para eventos, 
              trazendo sofisticação e exclusividade para cada ocasião.
            </p>
            
            <p className="text-gray-700 mb-6">
              Nossa equipe é formada por profissionais experientes e apaixonados pela arte da coquetelaria,
              prontos para criar uma experiência sensorial completa através de drinks elaborados com ingredientes
              premium e técnicas inovadoras.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-elo-terracotta font-bold mr-2">•</span>
                <span className="text-gray-700">Equipe de bartenders profissionais</span>
              </li>
              <li className="flex items-start">
                <span className="text-elo-terracotta font-bold mr-2">•</span>
                <span className="text-gray-700">Cardápios personalizados para cada evento</span>
              </li>
              <li className="flex items-start">
                <span className="text-elo-terracotta font-bold mr-2">•</span>
                <span className="text-gray-700">Ingredientes frescos e de alta qualidade</span>
              </li>
              <li className="flex items-start">
                <span className="text-elo-terracotta font-bold mr-2">•</span>
                <span className="text-gray-700">Estrutura completa de bar móvel</span>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
