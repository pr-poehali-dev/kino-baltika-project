import React from "react";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const movies = [
    {
      title: "Опpenheimer",
      genre: "Биография, драма, история",
      duration: "180 мин",
      rating: 8.7,
      ageLimit: "16+",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&q=80",
      times: ["14:30", "18:00", "21:30"],
    },
    {
      title: "Барби",
      genre: "Комедия, приключения",
      duration: "114 мин",
      rating: 7.2,
      ageLimit: "12+",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
      times: ["12:00", "15:45", "19:20"],
    },
    {
      title: "Миссия невыполнима 7",
      genre: "Боевик, триллер",
      duration: "163 мин",
      rating: 8.1,
      ageLimit: "12+",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
      times: ["13:15", "17:00", "20:45"],
    },
    {
      title: "Быстрые и яростные X",
      genre: "Боевик, криминал",
      duration: "141 мин",
      rating: 6.8,
      ageLimit: "12+",
      image:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=400&q=80",
      times: ["16:30", "19:45", "22:30"],
    },
    {
      title: "Индиана Джонс 5",
      genre: "Приключения, боевик",
      duration: "154 мин",
      rating: 7.5,
      ageLimit: "12+",
      image:
        "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=400&q=80",
      times: ["14:00", "17:30", "21:00"],
    },
    {
      title: "Трансформеры: Восхождение звёрей",
      genre: "Фантастика, боевик",
      duration: "127 мин",
      rating: 6.9,
      ageLimit: "12+",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80",
      times: ["15:00", "18:15", "21:45"],
    },
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Сеансы на завтра</h2>
          <div className="text-orange-500 text-lg font-medium">
            3 июня, понедельник
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieGrid;
