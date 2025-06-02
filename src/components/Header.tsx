import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-black/90 backdrop-blur-sm fixed top-0 w-full z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <Icon name="Film" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">Киносфера</h1>
              <p className="text-orange-500 text-xs">Балтика</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-orange-500 transition-colors"
            >
              Сегодня
            </a>
            <a href="#" className="text-orange-500 font-medium">
              Завтра
            </a>
            <a
              href="#"
              className="text-white hover:text-orange-500 transition-colors"
            >
              Расписание
            </a>
            <a
              href="#"
              className="text-white hover:text-orange-500 transition-colors"
            >
              О нас
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Билеты
            </button>
            <button className="md:hidden text-white">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
