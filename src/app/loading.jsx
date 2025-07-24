"use client";

import React, { useEffect, useState } from 'react';

const Loading = () => {
  const fullName = 'AVI DEBNATH';
  const displayLength = 10;
  const letters = fullName.replace(' ', '').toUpperCase().split('');

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= displayLength) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full bg-secondary flex items-center justify-center">
      <div className="flex flex-col gap-4">
        {/* Top 3 boxes */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-white rounded bg-secondary"
            >
              <span
                className={`text-xl font-bold transition-all duration-300 ${
                  i < currentIndex ? 'text-white' : 'text-transparent'
                }`}
              >
                {letters[i]}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom 7 boxes */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i + 3}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-white rounded bg-secondary"
            >
              <span
                className={`text-xl font-bold transition-all duration-300 ${
                  i + 3 < currentIndex ? 'text-white' : 'text-transparent'
                }`}
              >
                {letters[i + 3]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
