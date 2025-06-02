import React from "react";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative h-[70vh] bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://media.cinemabox.team/r/movies/11114/trailer-kraken.mp4"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={(e) => {
          e.currentTarget.currentTime = 2;
        }}
      />

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
            Кракен
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
              <span className="text-gray-300">134 мин</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={20} className="text-gray-400" />
              <span className="text-gray-300">2025</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center space-x-2">
              <Icon name="Ticket" size={20} />
              <span>Купить билет</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
