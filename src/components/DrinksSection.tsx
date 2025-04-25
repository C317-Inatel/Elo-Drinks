
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const DrinksSection = () => {
  return (
    <section className="py-20 bg-elo-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-elo-black">
            Nossos <span className="text-elo-terracotta">Drinks</span>
          </h2>
          <div className="w-20 h-1 bg-elo-terracotta mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Conheça algumas das nossas criações exclusivas para tornar seu evento único e memorável.
            Todos nossos drinks são preparados com ingredientes frescos e de alta qualidade.
          </p>
        </div>

        <Tabs defaultValue="especiais" className="w-full">
          <TabsList className="w-full justify-center mb-8 bg-elo-cream/30">
            <TabsTrigger value="especiais" className="data-[state=active]:bg-elo-terracotta data-[state=active]:text-white">Drinks Especiais</TabsTrigger>
            <TabsTrigger value="caipirinhas" className="data-[state=active]:bg-elo-terracotta data-[state=active]:text-white">Caipirinhas</TabsTrigger>
            <TabsTrigger value="naoalcoolicos" className="data-[state=active]:bg-elo-terracotta data-[state=active]:text-white">Não Alcoólicos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="especiais">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Moscow Mule",
                  description: "Vodka, xarope de gengibre, limão tahiti e espuma de gengibre",
                  image: "/lovable-uploads/a8486d4f-863b-4abd-aeb1-30b25189cf27.png"
                },
                {
                  name: "Basil Smash",
                  description: "Gin, suco de limão siciliano, syrup de manjericão e folhas de manjericão",
                  image: "/lovable-uploads/e8ac5e6a-dff0-4575-9c9c-cbbd21d4a5a0.png"
                },
                {
                  name: "Penicillin",
                  description: "Whisky, suco de limão siciliano, xarope de gengibre e limão desidratado",
                  image: "/lovable-uploads/513d86bb-9bed-41a7-a429-103e89ace01b.png"
                },
                {
                  name: "Fitzgerald",
                  description: "Gin, syrup de açúcar, suco de limão siciliano e angostura bitters",
                  image: "/lovable-uploads/6c30b204-f7a0-40f4-9b2a-55fb250fbd6b.png"
                },
                {
                  name: "Classic Tonic",
                  description: "Gin, limão siciliano, zimbro e tônica",
                  image: "/lovable-uploads/7197d102-c531-4f88-a574-34dca0f2688d.png"
                },
                {
                  name: "Whisky Sour",
                  description: "Whisky, limão siciliano, clara de ovo e angostura",
                  image: "/lovable-uploads/e8ac5e6a-dff0-4575-9c9c-cbbd21d4a5a0.png"
                }
              ].map((drink, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={drink.image} 
                      alt={drink.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg text-elo-terracotta mb-2">{drink.name}</h3>
                    <p className="text-gray-600 text-sm">{drink.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="caipirinhas">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Abacaxi com Hortelã",
                  description: "Vodka, abacaxi fresco, hortelã e açúcar",
                  image: "/lovable-uploads/513d86bb-9bed-41a7-a429-103e89ace01b.png"
                },
                {
                  name: "Uva com Manjericão",
                  description: "Vodka ou cachaça, uvas frescas, manjericão e açúcar",
                  image: "/lovable-uploads/6c30b204-f7a0-40f4-9b2a-55fb250fbd6b.png"
                },
                {
                  name: "Kiwi com Limão",
                  description: "Vodka ou cachaça, kiwi, limão e açúcar",
                  image: "/lovable-uploads/e8ac5e6a-dff0-4575-9c9c-cbbd21d4a5a0.png"
                }
              ].map((drink, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={drink.image} 
                      alt={drink.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg text-elo-terracotta mb-2">{drink.name}</h3>
                    <p className="text-gray-600 text-sm">{drink.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="naoalcoolicos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Cirque Blue",
                  description: "Curaçau blue, suco de blueberry, amora, mix de limão, água com gás e algodão doce",
                  image: "/lovable-uploads/a8486d4f-863b-4abd-aeb1-30b25189cf27.png"
                },
                {
                  name: "Pink Lemonade",
                  description: "Mix de limão, água com gás e syrup de romã servidos em lâmpadas brilhantes",
                  image: "/lovable-uploads/513d86bb-9bed-41a7-a429-103e89ace01b.png"
                },
                {
                  name: "Pina Descolada",
                  description: "Suco de abacaxi, leite de coco, leite condensado e granulado colorido",
                  image: "/lovable-uploads/6c30b204-f7a0-40f4-9b2a-55fb250fbd6b.png"
                },
                {
                  name: "Lichia Paradise",
                  description: "Água com gás, xarope simples, lichia, suco de limão e hortelã",
                  image: "/lovable-uploads/7197d102-c531-4f88-a574-34dca0f2688d.png"
                },
                {
                  name: "Sonho Brilhante",
                  description: "Espumante sem álcool, algodão doce rosa mágico",
                  image: "/lovable-uploads/e8ac5e6a-dff0-4575-9c9c-cbbd21d4a5a0.png"
                }
              ].map((drink, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={drink.image} 
                      alt={drink.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg text-elo-terracotta mb-2">{drink.name}</h3>
                    <p className="text-gray-600 text-sm">{drink.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DrinksSection;
