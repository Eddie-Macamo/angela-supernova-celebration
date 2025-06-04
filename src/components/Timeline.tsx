
import { Calendar, Star, Gift, MapPin } from "lucide-react";

const Timeline = () => {
  const moments = [
    {
      icon: Star,
      title: "Primeira vez que nos conhecemos",
      description: "O início de uma amizade que mudou nossas vidas para sempre",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Gift,
      title: "Aventuras inesquecíveis",
      description: "Tantas risadas, descobertas e momentos únicos compartilhados",
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: MapPin,
      title: "Lugares especiais",
      description: "Cada lugar que visitamos juntas se tornou mais especial",
      color: "from-purple-400 to-indigo-400"
    },
    {
      icon: Calendar,
      title: "Hoje - Seu aniversário!",
      description: "Celebrando mais um ano da pessoa incrível que você é",
      color: "from-rose-400 to-pink-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nossa Jornada Juntas
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Cada momento da nossa amizade é um tesouro que guardo no coração 💝
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {moments.map((moment, index) => (
            <div 
              key={index}
              className="relative flex items-center mb-12 animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Timeline line */}
              {index < moments.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-rose-300 to-pink-300"></div>
              )}

              {/* Icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${moment.color} flex items-center justify-center shadow-lg z-10`}>
                <moment.icon className="text-white" size={20} />
              </div>

              {/* Content */}
              <div className="ml-8 flex-1">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-rose-100">
                  <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                    {moment.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {moment.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
