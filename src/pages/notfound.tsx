// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-red-500 animate-pulse">404</h1>
        <p className="text-2xl font-semibold mt-6 text-white">Oops! Page not found.</p>
        <p className="mt-4 text-lg text-gray-400">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-10 inline-block px-8 py-3 text-black bg-yellow-500 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
