
import { Heart, Sparkles, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4 sm:mb-6 animate-fade-in">
            <Sparkles className="mr-2 animate-sparkle" size={20} />
            <Calendar className="mx-2" size={24} />
            <Sparkles className="ml-2 animate-sparkle" size={20} style={{animationDelay: '0.5s'}} />
          </div>

          <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in px-4 leading-tight" style={{animationDelay: '0.2s'}}>
            Que este novo ano seja mágico!
          </h3>

          <p className="font-inter text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in px-4" style={{animationDelay: '0.4s'}}>
            Desejo que cada dia do seu novo ano seja cheio de amor, sucesso e momentos inesquecíveis. 
            Você merece tudo de melhor que a vida pode oferecer! ✨
          </p>

          <div className="flex items-center justify-center mb-6 sm:mb-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Heart className="text-rose-200 mx-1 animate-float fill-current" size={14} />
            <Heart className="text-rose-200 mx-1 animate-float fill-current" size={16} style={{animationDelay: '0.5s'}} />
            <Heart className="text-rose-200 mx-1 animate-float fill-current" size={20} style={{animationDelay: '1s'}} />
            <Heart className="text-rose-200 mx-1 animate-float fill-current" size={16} style={{animationDelay: '1.5s'}} />
            <Heart className="text-rose-200 mx-1 animate-float fill-current" size={14} style={{animationDelay: '2s'}} />
          </div>

          <div className="border-t border-white/20 pt-6 sm:pt-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <p className="font-inter text-rose-100 text-sm sm:text-base">
              Feito com muito 💕 para celebrar seu dia, minha querida!
            </p>
            <p className="font-inter text-rose-200 text-xs sm:text-sm mt-2">
              14 de Junho • Um dia especial para uma pessoa especial
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
