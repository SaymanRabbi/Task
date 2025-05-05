import React from 'react';

const LoadingSpinner = () => (
  <span className="inline-block animate-spin h-5 w-5 rounded-full border-2 border-current border-t-transparent"></span>
);

const LoadMoreButton = ({ hasMore, isLoading, loadMore }) => {
  if (isLoading) {
    return (
      <button
        disabled
        className="px-8 py-3 bg-gray-300 text-gray-600 rounded-full cursor-not-allowed flex items-center justify-center mx-auto"
      >
        <LoadingSpinner /> <span className="ml-2">Loading...</span>
      </button>
    );
  }

  if (!hasMore) return null;

  return (
    <button
      onClick={loadMore}
      className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 flex items-center justify-center mx-auto cursor-pointer"
    >
      <span className="mr-2">Load More</span>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  );
};

export default LoadMoreButton;