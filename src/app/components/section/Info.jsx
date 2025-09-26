import React from 'react';

const Info = () => {
  return (
    <div className="px-4 py-8 bg-gray-900 text-white flex flex-col gap-8 h-full">
      <div className="bg-green-500 w-full h-64 md:h-80 flex items-center justify-center text-2xl md:text-3xl font-bold text-gray-900 rounded-lg shadow-lg">
        Зураг
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-4 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full h-36 bg-black rounded-md mb-4"></div>
            <p className="text-sm text-yellow-400 mb-2">2 цаг 36 минутын өмнө</p>
            <span className="text-gray-300 text-sm md:text-base">
              18 ДУГААР ХОРООНЫ ОГЦОМ ЭРГЭЛТТЭЙ 7 БАЙРШИЛД АЮУЛГҮЙН ТОЛЬ СУУРИЛУУЛЛАА
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
