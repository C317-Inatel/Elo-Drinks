
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-elo-cream/30">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-elo-terracotta">404</h1>
        <p className="text-3xl text-elo-black mb-8">Página não encontrada</p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi removida.
        </p>
        <Link to="/">
          <Button className="bg-elo-terracotta hover:bg-elo-terracotta/90 text-white">
            <Home className="mr-2" size={16} />
            Voltar para a Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
