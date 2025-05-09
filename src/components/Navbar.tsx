
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-elo-black/90 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/logo.jpg" 
            alt="Elo Drinks Logo" 
            className="h-16 w-auto object-contain"
          />
        </Link>

        {isMobile ? (
          <button 
            onClick={toggleMenu} 
            className="text-elo-white p-2 focus:outline-none"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-elo-white hover:text-elo-cream transition-colors font-medium">Home</Link>
              <Link to="/sobre" className="text-elo-white hover:text-elo-cream transition-colors font-medium">Sobre</Link>
              <Link to="/servicos" className="text-elo-white hover:text-elo-cream transition-colors font-medium">Serviços</Link>
              <Link to="/cardapio" className="text-elo-white hover:text-elo-cream transition-colors font-medium">Cardápio</Link>
              <Link to="/galeria" className="text-elo-white hover:text-elo-cream transition-colors font-medium">Galeria</Link>
              <Link to="/contato" className="text-elo-white hover:text-elo-cream transition-colors font-medium">Contato</Link>
            </div>
            <Button className="bg-elo-terracotta hover:bg-elo-terracotta/90 text-white">
              <Phone size={16} className="mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        )}

        {/* Mobile menu */}
        {isMobile && isOpen && (
          <div className="absolute top-full left-0 right-0 bg-elo-black/95 p-4 flex flex-col space-y-4">
            <Link to="/" className="text-elo-white hover:text-elo-cream py-2 px-4 block" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/sobre" className="text-elo-white hover:text-elo-cream py-2 px-4 block" onClick={() => setIsOpen(false)}>Sobre</Link>
            <Link to="/servicos" className="text-elo-white hover:text-elo-cream py-2 px-4 block" onClick={() => setIsOpen(false)}>Serviços</Link>
            <Link to="/cardapio" className="text-elo-white hover:text-elo-cream py-2 px-4 block" onClick={() => setIsOpen(false)}>Cardápio</Link>
            <Link to="/galeria" className="text-elo-white hover:text-elo-cream py-2 px-4 block" onClick={() => setIsOpen(false)}>Galeria</Link>
            <Link to="/contato" className="text-elo-white hover:text-elo-cream py-2 px-4 block" onClick={() => setIsOpen(false)}>Contato</Link>
            <Button className="bg-elo-terracotta hover:bg-elo-terracotta/90 text-white w-full">
              <Phone size={16} className="mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
