import React from "react";
import Icon from "@/components/ui/icon";

interface MovieCardProps {
  title: string;
  genre: string;
  duration: string;
  rating: number;
  ageLimit: string;
  image: string;
  times: string[];
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  genre,
  duration,
  rating,
  ageLimit,
  image,
  times,
}) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
          <span className="text-white text-sm font-medium">{ageLimit}</span>
        </div>
        <div className="absolute top-3 left-3 flex items-center space-x-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
          <Icon
            name="Star"
            size={14}
            className="text-yellow-500 fill-current"
          />
          <span className="text-white text-sm font-medium">{rating}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-3">{genre}</p>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={16} className="text-gray-500" />
            <span className="text-gray-400 text-sm">{duration}</span>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4">
          <p className="text-gray-400 text-sm mb-2">Сеансы:</p>
          <div className="flex flex-wrap gap-2">
            {times.map((time, index) => (
              <button
                key={index}
                className="bg-orange-500/20 hover:bg-orange-500 text-orange-500 hover:text-white px-3 py-1 rounded-lg text-sm transition-all"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
