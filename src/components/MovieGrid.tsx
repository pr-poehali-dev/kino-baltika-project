import React from "react";
import MovieCard from "./MovieCard";
import MovieCalendar from "./MovieCalendar";

const MovieGrid = () => {
  const movies = [
    {
      title: "Кракен",
      genre: "Приключения, экшн",
      duration: "134 мин",
      rating: 7.8,
      ageLimit: "12+",
      image:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/11114/147621_6825dff31b2d25.02131649.webp",
      times: ["14:30", "18:00", "21:30"],
      trailer:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/11114/147621_6825dff31b2d25.02131649.webp",
    },
    {
      title:
        "Миссия невыполнима: Финальная расплата предсеанс. обсл. & Куда уходят папы?",
      genre: "Короткометражный",
      duration: "169 мин",
      rating: 8.1,
      ageLimit: "16+",
      image:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000355/148052_6836c7ae7c1571.56221774.webp",
      times: ["13:15", "17:00", "20:45"],
      trailer:
        "https://media.cinemabox.team/net/c5/movies/1000000000355/trailer-missiya-nevypolnima-finalnaya-rasplata-predseans-obsl-kuda-ukhodyat-papy.mp4",
    },
    {
      title: "Лило и Стич предсеанс. обсл. & Куда уходят папы?",
      genre: "Короткометражный",
      duration: "108 мин",
      rating: 7.2,
      ageLimit: "6+",
      image:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000354/147965_6830cae02b9974.26300785.webp",
      times: ["12:00", "15:45", "19:20"],
      trailer:
        "https://media.cinemabox.team/net/c5/movies/1000000000354/trailer-lilo-i-stich-predseans-obsl-kuda-ukhodyat-papy.mp4",
    },
    {
      title: "Пункт назначения: Узы крови предсеанс. обсл. & Куда уходят папы?",
      genre: "Короткометражный",
      duration: "110 мин",
      rating: 7.1,
      ageLimit: "18+",
      image:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000353/147825_682da245cf2e77.04306911.webp",
      times: ["15:00", "18:15", "21:45"],
      trailer:
        "https://media.cinemabox.team/net/c5/movies/1000000000347/trailer-gromoverzhtsy-predseans-obsl-kuda-ukhodyat-papy.mp4",
    },
    {
      title: "Громовержцы предсеанс. обсл. & Куда уходят папы?",
      genre: "Короткометражный",
      duration: "127 мин",
      rating: 6.2,
      ageLimit: "18+",
      image:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000347/147961_6830caddaffd65.48423817.webp",
      times: ["16:30", "19:45", "22:30"],
      trailer:
        "https://media.cinemabox.team/net/c5/movies/1000000000353/trailer-punkt-naznacheniya-uzy-krovi-predseans-obsl-kuda-ukhodyat-papy.mp4",
    },
    {
      title: "Балерина",
      genre: "Приключения, боевик",
      duration: "154 мин",
      rating: 7.5,
      ageLimit: "12+",
      image:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/12119/148199_6839b806f07419.75827179.webp",
      times: ["14:00", "17:30", "21:00"],
    },
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Афиша</h2>

        <MovieCalendar />

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
