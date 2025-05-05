import React from 'react';

const FilterButtons = ({ gameTypes, selectedType, setSelectedType }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {gameTypes.map((type) => (
        <button
          key={type}
          className={`px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 font-medium cursor-pointer
            ${selectedType === type 
              ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
            }`}
          onClick={() => setSelectedType(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;