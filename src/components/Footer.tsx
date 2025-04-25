
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-elo-black text-elo-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 - Logo e Descrição */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/bf5f1b1e-448e-4b93-8421-f1480e03327d.png" 
                alt="Elo Drinks Logo" 
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-elo-cream/80 text-sm mt-4">
              Serviço premium de bartenders especialistas para eventos corporativos, 
              casamentos, festas de debutante e ocasiões especiais.
            </p>
          </div>

          {/* Coluna 2 - Contato */}
          <div>
            <h3 className="text-elo-terracotta font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="text-elo-terracotta mr-2" />
                <a href="tel:119466-3100" className="text-elo-white/80 hover:text-elo-cream text-sm">
                  (11) 9466-3100
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-elo-terracotta mr-2" />
                <a href="tel:1197350-8282" className="text-elo-white/80 hover:text-elo-cream text-sm">
                  (11) 97350-8282
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-elo-terracotta mr-2" />
                <a href="mailto:atendimento@elodrinks.com.br" className="text-elo-white/80 hover:text-elo-cream text-sm">
                  atendimento@elodrinks.com.br
                </a>
              </li>
              <li className="flex items-center">
                <Instagram size={16} className="text-elo-terracotta mr-2" />
                <a href="https://www.instagram.com/elodrinks/" target="_blank" rel="noopener noreferrer" className="text-elo-white/80 hover:text-elo-cream text-sm">
                  @elodrinks
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Links Rápidos */}
          <div>
            <h3 className="text-elo-terracotta font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-elo-white/80 hover:text-elo-cream text-sm">Home</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-elo-white/80 hover:text-elo-cream text-sm">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/servicos" className="text-elo-white/80 hover:text-elo-cream text-sm">Serviços</Link>
              </li>
              <li>
                <Link to="/cardapio" className="text-elo-white/80 hover:text-elo-cream text-sm">Cardápio</Link>
              </li>
              <li>
                <Link to="/galeria" className="text-elo-white/80 hover:text-elo-cream text-sm">Galeria</Link>
              </li>
              <li>
                <Link to="/contato" className="text-elo-white/80 hover:text-elo-cream text-sm">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Localização e Horário */}
          <div>
            <h3 className="text-elo-terracotta font-semibold text-lg mb-4">Onde Estamos</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={16} className="text-elo-terracotta mr-2 mt-1 flex-shrink-0" />
                <p className="text-elo-white/80 text-sm">
                  São Paulo - SP <br />
                  Atendemos em todo o estado
                </p>
              </div>
              <div className="flex items-start">
                <Clock size={16} className="text-elo-terracotta mr-2 mt-1 flex-shrink-0" />
                <p className="text-elo-white/80 text-sm">
                  Horário de Atendimento: <br />
                  Segunda a Sexta: 9h às 18h <br />
                  Sábados: 10h às 14h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className="border-t border-elo-terracotta/30 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-elo-white/60 text-sm">
          <p>© {new Date().getFullYear()} Elo Drinks Bartenders. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
