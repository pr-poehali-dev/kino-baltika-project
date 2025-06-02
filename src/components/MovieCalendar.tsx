import React, { useState } from "react";
import Icon from "@/components/ui/icon";

const MovieCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date: Date) => {
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    const days = [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
    ];

    return `${date.getDate()} ${months[date.getMonth()]}, ${days[date.getDay()]}`;
  };

  const getDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  return (
    <div className="mb-8">
      <div className="flex items-center space-x-4 overflow-x-auto">
        {getDates().map((date, index) => (
          <button
            key={index}
            onClick={() => setSelectedDate(date)}
            className={`flex-shrink-0 px-4 py-2 rounded-lg transition-all ${
              date.toDateString() === selectedDate.toDateString()
                ? "bg-orange-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <div className="text-center">
              <div className="text-sm">{date.getDate()}</div>
              <div className="text-xs opacity-75">
                {date.toLocaleDateString("ru-RU", { weekday: "short" })}
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-4 text-orange-500 text-lg font-medium">
        Сеансы на {formatDate(selectedDate)}
      </div>
    </div>
  );
};

export default MovieCalendar;
