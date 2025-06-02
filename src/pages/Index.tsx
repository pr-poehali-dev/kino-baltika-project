import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MovieGrid from "@/components/MovieGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20">
        <Hero />
        <MovieGrid />
      </main>
    </div>
  );
};

export default Index;
