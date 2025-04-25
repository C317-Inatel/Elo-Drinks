
import { GlassWater, Wine, Utensils, Users, Coffee, PenTool } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: <GlassWater className="h-10 w-10 text-elo-terracotta" />,
      title: "Bar Completo",
      description: "Serviço completo de bar para seu evento, com bartenders profissionais, equipamentos e insumos."
    },
    {
      icon: <Wine className="h-10 w-10 text-elo-terracotta" />,
      title: "Drinks Exclusivos",
      description: "Criamos drinks personalizados e exclusivos para o seu evento, alinhados com a sua identidade."
    },
    {
      icon: <Utensils className="h-10 w-10 text-elo-terracotta" />,
      title: "Open Bar",
      description: "Pacotes de open bar com diversas opções de bebidas para seu evento, incluindo drinks especiais."
    },
    {
      icon: <Users className="h-10 w-10 text-elo-terracotta" />,
      title: "Consultoria",
      description: "Ajudamos a planejar todo o serviço de bar do seu evento, com dicas de quantidades e variedades."
    },
    {
      icon: <Coffee className="h-10 w-10 text-elo-terracotta" />,
      title: "Degustações",
      description: "Sessões de degustação para escolha dos drinks que serão servidos no seu evento."
    },
    {
      icon: <PenTool className="h-10 w-10 text-elo-terracotta" />,
      title: "Personalização",
      description: "Drinks, rótulos e copos personalizados com a identidade do seu evento ou marca."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-elo-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-elo-black">
            Nossos <span className="text-elo-terracotta">Serviços</span>
          </h2>
          <div className="w-20 h-1 bg-elo-terracotta mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços para tornar seu evento inesquecível.
            Cada detalhe é cuidadosamente planejado para proporcionar uma experiência incrível.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-elo-black">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
