import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import * as contentful from "contentful";
import React from "react";
import { Entry } from "@/models/entry";

const DrinksSection = () => {
  const [drinks, setDrinks] = React.useState([]);
  const [specialDrinks, setSpecialDrinks] = React.useState([]);
  const [classicDrinks, setClassicDrinks] = React.useState([]);
  const [authorialDrinks, setAuthorialDrinks] = React.useState([]);


  const client = contentful.createClient({
      space: '0j61atz8cmij',
      environment: 'master',
      accessToken: '_okSbcfn46diwJXC8TI9tevcxCd2cDb2eOObKe1XI44',
    })


  React.useEffect(() => {
    client
      .getEntries()
      .then((entry) => {
        const entries = entry as unknown as Entry;
        setDrinks(entries.items);
      })
      .catch(console.error);
  }, []);

  React.useEffect(() => {
    if (drinks.length > 0) {
      const specialDrinks = drinks.filter((drink) =>
        drink.fields.type.toLowerCase().includes("special")
      );
      const classicDrinks = drinks.filter((drink) =>
        drink.fields.type.toLowerCase().includes("classic")
      );
      const authorialDrinks = drinks.filter((drink) =>
        drink.fields.type.toLowerCase().includes("authorial")
      );

      setSpecialDrinks(specialDrinks);
      setClassicDrinks(classicDrinks);
      setAuthorialDrinks(authorialDrinks);
    }
  }, [drinks]);

  const getImageUrl = (imageId: string): string => {
    const asset = drinks.find(
      (drink) => drink.fields.image?.sys.id === imageId
    );
    return asset ? `https:${asset.fields.image.fields.file.url}` : "";
  };

  return (
    <section id="cardapio" className="py-20 bg-elo-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-elo-black">
            Nossos <span className="text-elo-terracotta">Drinks</span>
          </h2>
          <div className="w-20 h-1 bg-elo-terracotta mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Conheça algumas das nossas criações exclusivas para tornar seu
            evento único e memorável. Todos nossos drinks são preparados com
            ingredientes frescos e de alta qualidade.
          </p>
        </div>

        <Tabs defaultValue="especiais" className="w-full">
          <TabsList className="w-full justify-center mb-8 bg-elo-cream/30">
            <TabsTrigger
              value="especiais"
              className="data-[state=active]:bg-elo-terracotta data-[state=active]:text-white"
            >
              Drinks Especiais
            </TabsTrigger>
            <TabsTrigger
              value="classicos"
              className="data-[state=active]:bg-elo-terracotta data-[state=active]:text-white"
            >
              Clássicos
            </TabsTrigger>
            <TabsTrigger
              value="autorais"
              className="data-[state=active]:bg-elo-terracotta data-[state=active]:text-white"
            >
              Autorais
            </TabsTrigger>
          </TabsList>

          <TabsContent value="especiais">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialDrinks.map((drink, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={getImageUrl(drink.fields.image.sys.id)}
                      alt={drink.fields.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg text-elo-terracotta mb-2">
                      {drink.fields.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {drink.fields.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="classicos">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {classicDrinks.map((drink, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={getImageUrl(drink.fields.image.sys.id)}
                      alt={drink.fields.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg text-elo-terracotta mb-2">
                      {drink.fields.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {drink.fields.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="autorais">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authorialDrinks.map((drink, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={getImageUrl(drink.fields.image.sys.id)}
                      alt={drink.fields.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg text-elo-terracotta mb-2">
                      {drink.fields.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {drink.fields.description}
                    </p>
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
