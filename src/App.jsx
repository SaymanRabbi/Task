import React, { useEffect, useMemo, useState } from 'react';
import FilterButtons from './Components/FilterButtons';
import GameCard from './Components/GameCard';
import LoadMoreButton from './Components/LoadingSpinner';
import SkeletonLoader from './Components/SkeletonLoader';

import games from '../public/game_list.json';
import gameTypesData from '../public/game_types.json';
import './App.css';

function App() {
  const [selectedType, setSelectedType] = useState('All');
  const [itemsToShow, setItemsToShow] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  // Extract unique game types
  const gameTypes = useMemo(() => {
    const types = new Set();
    gameTypesData.data.forEach(provider => {
      provider.game_types.forEach(type => types.add(type));
    });
    return ['All', ...Array.from(types)];
  }, []);

  // Simulate async loading
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [selectedType, itemsToShow]);

  // Filter games based on selected type
  const filteredGames = useMemo(() => {
    if (selectedType === 'All') return games;
    return games.filter(game => game.game_type === selectedType);
  }, [selectedType]);

  const displayedGames = useMemo(() => {
    return filteredGames.slice(0, itemsToShow);
  }, [filteredGames, itemsToShow]);

  const hasMore = itemsToShow < filteredGames.length;

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setItemsToShow(prev => prev + 6);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8  bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Game List
        </h1>

        {/* Filter Buttons */}
        <FilterButtons
          gameTypes={gameTypes}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        {/* Game Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: itemsToShow }).map((_, index) => (
                <SkeletonLoader key={`skeleton-${index}`} />
              ))
            : displayedGames.length > 0
            ? displayedGames.map(game => (
                <GameCard key={game.game_code} game={game} />
              ))
            : (
                <p className="text-center col-span-full text-xl text-gray-700 py-10">
                  No games found matching the selected criteria.
                </p>
              )}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <LoadMoreButton
            hasMore={hasMore}
            isLoading={isLoading}
            loadMore={loadMore}
          />
        </div>
      </div>
    </div>
  );
}

export default App;