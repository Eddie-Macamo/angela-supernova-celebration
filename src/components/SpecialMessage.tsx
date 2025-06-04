
import { Heart, Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpecialMessage = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-rose-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200/30 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-scale-in">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="text-gold-400 mr-3 animate-sparkle" size={32} />
              <Heart className="text-rose-500 mx-3 animate-float" size={36} />
              <Sparkles className="text-gold-400 ml-3 animate-sparkle" size={32} style={{animationDelay: '0.5s'}} />
            </div>

            <h2 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-8 animate-fade-in">
              Para Minha Melhor Amiga
            </h2>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-200 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <blockquote className="font-inter text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
                "Angela, você é muito mais do que uma amiga - você é família escolhida, 
                é luz nos dias escuros, é risada garantida em qualquer momento. 
                Sua presença na minha vida é um presente que agradeço todos os dias. 
                Que este novo ano seja repleto de realizações, alegrias e muitas aventuras juntas! 
                Você merece todo o amor e felicidade do mundo. 💕"
              </blockquote>

              <div className="flex items-center justify-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                <Heart className="text-rose-400 mx-4 fill-current animate-float" size={20} />
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              </div>
            </div>

            <div className="mt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-inter font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Gift className="mr-2" size={20} />
                Surpresa Especial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialMessage;
