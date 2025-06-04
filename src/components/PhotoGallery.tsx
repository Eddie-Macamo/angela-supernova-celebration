
import { useState } from "react";
import { Camera, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  // Placeholder para as fotos - você pode substituir com as fotos reais da Angela
  const photos = [
    {
      id: 1,
      src: "/placeholder.svg",
      alt: "Angela sorrindo",
      caption: "Esse sorriso ilumina qualquer dia! ✨"
    },
    {
      id: 2,
      src: "/placeholder.svg",
      alt: "Momento especial",
      caption: "Memórias que ficam para sempre no coração 💕"
    },
    {
      id: 3,
      src: "/placeholder.svg",
      alt: "Angela radiante",
      caption: "Sua alegria é contagiante! 🌟"
    },
    {
      id: 4,
      src: "/placeholder.svg",
      alt: "Aventuras juntas",
      caption: "As melhores aventuras são ao seu lado 🎈"
    },
    {
      id: 5,
      src: "/placeholder.svg",
      alt: "Celebrando",
      caption: "Cada momento merece ser celebrado! 🎊"
    },
    {
      id: 6,
      src: "/placeholder.svg",
      alt: "Angela especial",
      caption: "Uma pessoa única e especial 💖"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Camera className="text-rose-500 mr-2" size={28} />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800">
              Momentos Especiais
            </h2>
            <Camera className="text-rose-500 ml-2" size={28} />
          </div>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Uma coleção dos nossos momentos mais preciosos juntas. 
            Cada foto conta uma história de amizade e alegria! 📸
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div 
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => setSelectedPhoto(photo.id)}
            >
              <div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center">
                <Camera className="text-white/70" size={48} />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-inter text-sm leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>

              {/* Heart icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="text-white fill-current" size={24} />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for selected photo */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full animate-scale-in">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
                onClick={() => setSelectedPhoto(null)}
              >
                <X size={24} />
              </Button>
              
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center">
                  <Camera className="text-white/70" size={64} />
                </div>
                <div className="p-6">
                  <p className="font-inter text-gray-700 text-center">
                    {photos.find(p => p.id === selectedPhoto)?.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
