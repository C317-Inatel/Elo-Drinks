
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, eventType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio de formulário
    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Entraremos em contato em breve para fornecer seu orçamento.",
    });
    
    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      guests: '',
      message: ''
    });
  };

  return (
    <section id="orcamento" className="py-20 bg-elo-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-elo-black">
            Solicite um <span className="text-elo-terracotta">Orçamento</span>
          </h2>
          <div className="w-20 h-1 bg-elo-terracotta mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Preencha o formulário abaixo para solicitar um orçamento personalizado para o seu evento.
            Nossa equipe entrará em contato em até 24 horas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Digite seu e-mail"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="(XX) XXXXX-XXXX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Evento</label>
                  <Select onValueChange={handleSelectChange} value={formData.eventType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o tipo de evento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casamento">Casamento</SelectItem>
                      <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                      <SelectItem value="aniversario">Aniversário</SelectItem>
                      <SelectItem value="formatura">Formatura</SelectItem>
                      <SelectItem value="debutante">Festa de Debutante</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Data do Evento</label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Número de Convidados</label>
                  <Input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Estimativa de convidados"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem / Detalhes do Evento</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Conte-nos mais sobre seu evento, incluindo detalhes e necessidades específicas..."
                  rows={5}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-elo-terracotta hover:bg-elo-terracotta/90 text-white py-3 text-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Solicitação
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-elo-black rounded-lg shadow-xl p-8 text-elo-white h-full">
              <h3 className="text-xl font-bold mb-6 text-elo-terracotta">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-elo-terracotta mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Telefones</h4>
                    <p className="text-elo-cream/80">(11) 9466-3100</p>
                    <p className="text-elo-cream/80">(11) 97350-8282</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-elo-terracotta mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">E-mail</h4>
                    <p className="text-elo-cream/80">atendimento@elodrinks.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-elo-terracotta mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Atendemos em</h4>
                    <p className="text-elo-cream/80">São Paulo - Capital e Grande SP</p>
                    <p className="text-elo-cream/80">Litoral e Interior de SP</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 text-elo-terracotta">Horário de Atendimento</h3>
                <ul className="space-y-2 text-elo-cream/80">
                  <li>Segunda a Sexta: 9h às 18h</li>
                  <li>Sábados: 10h às 14h</li>
                </ul>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 text-elo-terracotta">Siga-nos</h3>
                <a 
                  href="https://www.instagram.com/elodrinks/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-elo-cream/80 hover:text-elo-terracotta transition-colors"
                >
                  @elodrinks
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
