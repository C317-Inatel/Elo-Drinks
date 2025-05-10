
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const DrinksSection = () => {
  return (
    <section id="cardapio" className="py-20 bg-elo-white">
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
            <TabsTrigger value="classicos" className="data-[state=active]:bg-elo-terracotta data-[state=active]:text-white">Clássicos</TabsTrigger>
            <TabsTrigger value="autorais" className="data-[state=active]:bg-elo-terracotta data-[state=active]:text-white">Autorais</TabsTrigger>
          </TabsList>

          <TabsContent value="especiais">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Moscow Mule",
                  description: "Vodka, xarope de gengibre, limão tahiti e espuma de gengibre",
                  image: "/lovable-uploads/moscow.webp"
                },
                {
                  name: "Aerol Spritz",
                  description: "Gin, suco de limão siciliano, syrup de manjericão e folhas de manjericão",
                  image: "/lovable-uploads/aerol.webp"
                },
                {
                  name: "Penicillin",
                  description: "Whisky, suco de limão siciliano, xarope de gengibre e limão desidratado",
                  image: "/lovable-uploads/penin.webp"
                },
                {
                  name: "Fitzgerald",
                  description: "Gin, syrup de açúcar, suco de limão siciliano e angostura bitters",
                  image: "/lovable-uploads/fitz.webp"
                },
                {
                  name: "Negroni",
                  description: "Gin, limão siciliano, zimbro e tônica",
                  image: "/lovable-uploads/negroni.webp"
                },
                {
                  name: "Toranja Tonic",
                  description: "Whisky, limão siciliano, clara de ovo e angostura",
                  image: "/lovable-uploads/toranja.webp"
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

          <TabsContent value="classicos">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Expresso Martini",
                  description: "Vodka, abacaxi fresco, hortelã e açúcar",
                  image: "/lovable-uploads/martini.webp"
                },
                {
                  name: "Mojito",
                  description: "Vodka ou cachaça, uvas frescas, manjericão e açúcar",
                  image: "/lovable-uploads/mojito.webp"
                },
                {
                  name: "Aerol Spritz",
                  description: "Vodka ou cachaça, kiwi, limão e açúcar",
                  image: "/lovable-uploads/aerol.webp"
                },
                {
                  name: "Negroni",
                  description: "Vodka ou cachaça, kiwi, limão e açúcar",
                  image: "/lovable-uploads/negroni.webp"
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

          <TabsContent value="autorais">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Vintage Pink",
                  description: "Curaçau blue, suco de blueberry, amora, mix de limão, água com gás e algodão doce",
                  image: "/lovable-uploads/vintage.webp"
                },
                {
                  name: "Elo Tonic",
                  description: "Mix de limão, água com gás e syrup de romã servidos em lâmpadas brilhantes",
                  image: "/lovable-uploads/elo-tonic.webp"
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
