'use client';
import html2pdf from 'html2pdf.js';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export default function ContactSection() {
  const drinkOptions = {
    tradicionais: ['Cerveja', 'Gin', 'Vodka', 'Whisky', 'Drinks clássicos'],
    especiais: ['Moscow Mule', 'Basil Smash', 'Penicilin', 'Fitzgerald', 'Classic Tonic'],
    softs: ['Cirque Blue', 'Pink Lemonade', 'Pina Descolada', 'Lichia Paradise', 'Sonho Brilhante']
  };
  
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    eventType: '',
    date: '',
    time: '',
    guests: '',
    drinks: {
      tradicionais: [],
      especiais: [],
      softs: []
    },
    barStructure: '',
    bartenders: 0,
    barbacks: 0,
    copeiras: 0,
    coordenadores: 0,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const today = new Date();
    const day = today.getDate(); 
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const pdfContent = `<div id="orcamento" style="font-family: 'Arial', sans-serif; padding: 40px; background-color: white; color: #000; max-width: 800px; margin: auto; border: 1px solid #ccc;">

        <h2 style="text-align: center; color: #c8a95a; margin-bottom: 10px;">ORÇAMENTO</h2>
        <p style="text-align: center;"><strong>Data: ${day}/${month}/${year}</strong></p>

        <hr style="border: none; border-top: 2px solid #c8a95a; margin: 20px 0;" />

        <h3 style="color: #c8a95a;">INFORMAÇÕES DA FESTA</h3>
        <p><strong>Nome do solicitante:</strong> ${formData.name}</p>
        <p><strong>Local da Festa:</strong> ${formData.address}</p>
        <p><strong>E-mail:</strong> ${formData.address}</p>
        <p><strong>Telefone:</strong> ${formData.phone}</p>
        <p><strong>Tipo de Evento:</strong> ${formData.eventType}</p>
        <p><strong>Carga horária:</strong> ${formData.time}</p>
        <p><strong>Data da Festa:</strong> ${formData.date}</p>
        <p><strong>Número de convidados:</strong> ${formData.guests} pessoas</p>

        <h3 style="color: #c8a95a; margin-top: 30px;">A DOSE CERTA PARA SUA FESTA</h3>
        <ul>
          ${formData.drinks.tradicionais.length
            ? `<li><strong>Drinks Tradicionais:</strong> ${formData.drinks.tradicionais.join(', ')}</li>`
            : ''}
          ${formData.drinks.especiais.length
            ? `<li><strong>Drinks Especiais:</strong> ${formData.drinks.especiais.join(', ')}</li>`
            : ''}
          ${formData.drinks.softs.length
            ? `<li><strong>Soft Drinks:</strong> ${formData.drinks.softs.join(', ')}</li>`
            : ''}
          ${formData.drinks.tradicionais.length === 0 &&
          formData.drinks.especiais.length === 0 &&
          formData.drinks.softs.length === 0
            ? `<li><em>Nenhuma bebida selecionada.</em></li>`
            : ''}
        </ul>


        <h3 style="color: #c8a95a;">INVESTIMENTO</h3>
        <p><strong>Opção 01:</strong> Serviço completo com bebidas alcoólicas (vodka/gin importados)</p>
        <p><strong>Valor:</strong> R$ 1500 (a partir de R$ 85,00 por pessoa)</p>
  
        <p><em>Valor condicionado à presença de cerveja, espumante e whisky fornecidos pelo cliente.</em></p>

        <h4 style="margin-top: 20px; color: #b9975b;">ITENS OPCIONAIS</h4>
        <ul>
          <li>Cerveja Stella/Heineken: + R$ 9,00</li>
          <li>Espumante Freixenet: + R$ 75,00</li>
          <li>Whisky Black Label: + R$ 160,00</li>
          <li>Drink na Lâmpada: + R$ 8,00</li>
          <!-- e assim por diante... -->
        </ul>

        <h3 style="color: #c8a95a; margin-top: 20px">ESTRUTURA E SERVIÇOS</h3>
        ${formData.barStructure === 'precisa' ? '<p><strong>Estrutura:</strong> Balcão do decorador ou bar profissional (+ R$ 1.500,00)</p>' : '<p><strong>Estrutura:</strong> Balcão próprio</p>' }
        <p><strong>Inclusos:</strong> Bartenders, barbacks, copeira, utensílios premium, gelo, copos, etc.</p>

        <h4 style="margin-top: 20px; color: #b9975b;">OBSERVAÇÕES</h4>
        <ul>
          <li>Quebra de copos: R$ 25,00 cada</li>
          <li>Seguro quebra: R$ 9,00 por convidado</li>
          <li>Reposição de canecas de cobre: R$ 10,00 / R$ 55,00</li>
          <li>Pagamentos: 40% na aprovação, 60% na semana do evento</li>
        </ul>

        <p style="margin-top: 100px;">__________________________________________</p>
        <p><strong>De acordo – Data:</strong> ____/____/____</p>

        <hr style="border: none; border-top: 1px solid #ccc; margin: 30px 0;" />

        <div style="text-align: center;">
          <p style="color: #555;"><strong>Contato:</strong></p>
          <p>📞 (11) 99466-3100 / (11) 97350-8282</p>
          <p>📧 <a href="mailto:atendimento@elodrinks.com.br">atendimento@elodrinks.com.br</a></p>
          <p>📷 <a href="https://www.instagram.com/elodrinks">@elodrinks</a></p>
          <p style="font-size: 12px; color: #999;">Este orçamento é válido por 5 dias</p>

        </div>
      </div>
    `

    const options = {
      margin:       0.5,
      filename:     'orcamento-evento.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
    .set(options)
    .from(pdfContent)
    .save();

    const mensagem = `Olá, segue o orçamento: Nome: ${formData.name}`;
    const link = `https://wa.me/5511973508282?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');

  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </div>

          {/* Local da festa */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Local da festa</label>
            <Input name="address" value={formData.address} onChange={handleChange} />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
            <Input type="tel"  name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          {/* Tipo de Evento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Evento</label>
            <Input name="eventType" value={formData.eventType} onChange={handleChange} />
          </div>

          {/* Data */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data</label>
            <Input type="date" name="date" value={formData.date} onChange={handleChange} />
          </div>

          {/* Horário */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duração do evento</label>
            <Input type="time" name="time" value={formData.time} onChange={handleChange} />
          </div>

          {/* Número de Convidados */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Convidados</label>
            <Input
              type="number"
              name="guests"
              min={1}
              value={formData.guests}
              onChange={handleChange}
            />
          </div>

          {/* Estrutura do Bar */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Estrutura do Bar</label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, barStructure: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="proprio">Balcão próprio</SelectItem>
                <SelectItem value="precisa">Necessita estrutura (+R$1500)</SelectItem>
              </SelectContent>
            </Select>
            {formData.barStructure === 'precisa' && (
              <p className="text-sm text-red-600 mt-2">Valor adicional de R$1500 será aplicado.</p>
            )}
          </div>

          {/* Bebidas */}
          {Object.entries(drinkOptions).map(([category, drinks]) => (
  <div key={category}>
    <h4 className="text-sm font-semibold capitalize mt-4">
      {category === 'tradicionais' && 'Drinks Tradicionais'}
      {category === 'especiais' && 'Drinks Especiais'}
      {category === 'softs' && 'Soft Drinks'}
    </h4>
    <div className="flex flex-wrap gap-4 mt-2">
      {drinks.map((drink) => (
        <label key={drink} className="flex items-center gap-2">
          <input
            type="checkbox"
            value={drink}
            checked={formData.drinks[category as keyof typeof formData.drinks].includes(drink)}
            onChange={(e) => {
              const checked = e.target.checked;
              const updated = checked
                ? [...formData.drinks[category as keyof typeof formData.drinks], drink]
                : formData.drinks[category as keyof typeof formData.drinks].filter((d) => d !== drink);

              setFormData((prev) => ({
                ...prev,
                drinks: {
                  ...prev.drinks,
                  [category]: updated
                }
              }));
            }}
          />
          <span>{drink}</span>
        </label>
      ))}
    </div>
  </div>
))}



          {/* Equipe */}
          {[
            { label: 'Bartenders', key: 'bartenders' },
            { label: 'Barbacks', key: 'barbacks' },
            { label: 'Copeiras', key: 'copeiras' },
            { label: 'Coordenadores', key: 'coordenadores' }
          ].map(({ label, key }) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <Input
                type="number"
                name={key}
                min={0}
                value={formData[key as keyof typeof formData] as number}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [key]: parseInt(e.target.value, 10) || 0
                  }))
                }
              />
            </div>
          ))}
        </div>

        {/* Mensagem */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
          <Textarea name="message" value={formData.message} onChange={handleChange} />
        </div>

        <Button type="submit">Gerar orçamento</Button>
      </form>
    </section>
  );
}
