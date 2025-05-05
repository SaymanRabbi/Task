import React from 'react';

const GameCard = ({ game }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
      <div className="h-48 overflow-hidden relative">
        <img
          src={game.game_image}
          alt={game.game_name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {game.game_name}
        </h3>
      </div>
    </div>
  );
};

export default GameCard;