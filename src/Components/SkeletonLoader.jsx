import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="h-48 bg-gray-200 animate-pulse"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto animate-pulse mb-2"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;