
import { Heart, Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpecialMessage = () => {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-rose-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-24 sm:w-32 h-24 sm:h-32 bg-purple-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-pink-200/30 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-scale-in">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <Sparkles className="text-gold-400 mr-2 sm:mr-3 animate-sparkle" size={24} />
              <Heart className="text-rose-500 mx-2 sm:mx-3 animate-float" size={28} />
              <Sparkles className="text-gold-400 ml-2 sm:ml-3 animate-sparkle" size={24} style={{animationDelay: '0.5s'}} />
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 sm:mb-8 animate-fade-in px-4 leading-tight">
              Para Minha Melhor Amiga
            </h2>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-rose-200 animate-fade-in mx-2" style={{animationDelay: '0.3s'}}>
              <blockquote className="font-inter text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 mb-6 sm:mb-8">
                "Yuyucha, você é muito mais do que uma amiga - você é muito especial para mim!
                Sua amizade é um tesouro que guardo com carinho. 
                É luz nos dias escuros, é risada garantida em qualquer momento. 
                Sua presença na minha vida é um presente que agradeço todos os dias. 
                Que este novo ano seja repleto de realizações, alegrias e muitas aventuras juntas! 
                Você merece todo o amor e felicidade do mundo. 💕"
              </blockquote>

              <div className="flex items-center justify-center">
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                <Heart className="text-rose-400 mx-3 sm:mx-4 fill-current animate-float" size={16} />
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-inter font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Gift className="mr-2" size={18} />
                <span className="text-sm sm:text-base">te amo Yuyucha</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialMessage;
