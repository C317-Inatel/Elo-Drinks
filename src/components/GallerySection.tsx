
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface GalleryImage {
  url: string;
  alt: string;
}

const GallerySection = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    { url: "/Elo-Drinks/lovable-uploads/bar.webp", alt: "Bar montado com bartenders" },
    { url: "/Elo-Drinks/lovable-uploads/aniversario.webp", alt: "Aniversario" },
    { url: "/Elo-Drinks/lovable-uploads/casamento.webp", alt: "Casamento" },
    { url: "/Elo-Drinks/lovable-uploads/corp.webp", alt: "Corporativo" },
    { url: "/Elo-Drinks/lovable-uploads/clinic.webp", alt: "Clínica de Drinks" },
    { url: "/Elo-Drinks/lovable-uploads/evento-judeu.webp", alt: "Evento Judaico" },
  ];

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <section id='galeria' className="py-20 bg-elo-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-elo-black">
            Nossa <span className="text-elo-terracotta">Galeria</span>
          </h2>
          <div className="w-20 h-1 bg-elo-terracotta mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Confira alguns registros dos nossos serviços em diferentes eventos.
            Cada imagem representa nosso compromisso com a excelência e criatividade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg aspect-square cursor-pointer relative group"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-elo-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-elo-white text-center max-w-[80%]">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/elodrinks/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-elo-terracotta hover:text-elo-black transition-colors font-medium"
          >
            Veja mais no nosso Instagram @elodrinks
          </a>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 bg-elo-black/50 text-elo-white rounded-full hover:bg-elo-terracotta transition-colors"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>
            {selectedImage && (
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
