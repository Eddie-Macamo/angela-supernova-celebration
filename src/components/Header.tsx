
import { Heart, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-3 sm:w-4 h-3 sm:h-4 bg-rose-300 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-4 sm:w-6 h-4 sm:h-6 bg-gold-300 rounded-full animate-float opacity-50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-16 sm:bottom-32 left-20 sm:left-40 w-2 sm:w-3 h-2 sm:h-3 bg-purple-300 rounded-full animate-float opacity-70" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-32 sm:top-60 left-1/4 sm:left-1/3 w-3 sm:w-5 h-3 sm:h-5 bg-pink-300 rounded-full animate-float opacity-40" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="text-center z-10 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="animate-scale-in">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Sparkles className="text-gold-400 mr-2 animate-sparkle" size={24} />
            <Heart className="text-rose-400 mx-2 animate-float" size={28} />
            <Sparkles className="text-gold-400 ml-2 animate-sparkle" size={24} style={{animationDelay: '0.5s'}} />
          </div>
          
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4 animate-fade-in leading-tight">
            Feliz Aniversário
          </h1>
          
          <h2 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-bold text-rose-700 mb-4 sm:mb-6 animate-fade-in px-2 leading-tight" style={{animationDelay: '0.3s'}}>
            Angela Belucha Elias Chaguala
          </h2>
          
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-lg animate-fade-in mx-2" style={{animationDelay: '0.6s'}}>
            <span className="font-inter text-lg sm:text-2xl md:text-3xl font-semibold text-rose-600">
              14 de Junho 🎉
            </span>
          </div>
          
          <p className="font-inter text-base sm:text-lg md:text-xl text-gray-700 mt-6 sm:mt-8 max-w-2xl mx-auto leading-relaxed animate-fade-in px-4" style={{animationDelay: '0.9s'}}>
            Mais um ano de vida, mais um ano de momentos especiais, risadas e memórias incríveis. 
            Hoje celebramos você e toda a alegria que traz para nossas vidas! ✨
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-rose-400 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-rose-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
