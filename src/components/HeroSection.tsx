import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen  bg-[#332918] bg-contain bg-no-repeat bg-center flex items-center bg-[url('/lovable-uploads/banner.png')]">
      <div className="absolute inset-0 bg-gradient-to-r from-elo-black/70 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-elo-white mb-4">
            Experiências únicas em{" "}
            <span className="text-elo-terracotta">bartending</span> para seu
            evento
          </h1>
          <p className="text-elo-cream text-xl mb-8">
            Transformamos momentos em memórias inesquecíveis com coquetéis
            artesanais e serviço de excelência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-elo-terracotta hover:bg-elo-terracotta/90 text-white px-8 py-6 text-lg"
              onClick={() => scrollToSection("orcamento")}
            >
              Solicitar Orçamento
            </Button>
            <Button
              variant="outline"
              className="border-elo-cream text-elo-cream hover:bg-elo-cream/10 px-8 py-6 text-lg"
              onClick={() => scrollToSection("servicos")}
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-elo-white hover:text-elo-cream transition-colors"
        onClick={() => scrollToSection("sobre")}
        aria-label="Scroll para baixo"
      >
        <ChevronDown size={36} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
