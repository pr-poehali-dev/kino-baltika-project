import React from "react";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative h-[70vh] bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1489599045776-c6c45b1fd3f3?auto=format&fit=crop&w=1920&q=80)",
        }}
      ></div>

      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Премьера
            </span>
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
              16+
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Дюна: Часть вторая
          </h1>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Пол Атрейдес объединяется с Чани и фременами, желая отомстить
            заговорщикам, которые разрушили его семью.
          </p>

          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center space-x-1">
              <Icon
                name="Star"
                size={20}
                className="text-yellow-500 fill-current"
              />
              <span className="text-white font-medium">8.9</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={20} className="text-gray-400" />
              <span className="text-gray-300">166 мин</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={20} className="text-gray-400" />
              <span className="text-gray-300">2024</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center space-x-2">
              <Icon name="Ticket" size={20} />
              <span>Купить билет</span>
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://vkvideo.ru/video-113076019_456249230?ref_domain=yastatic.net",
                  "_blank",
                )
              }
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all flex items-center space-x-2"
            >
              <Icon name="Play" size={20} />
              <span>Трейлер</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
