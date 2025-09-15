import React from 'react';

interface SquareProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
  isWinning?: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinning = false }) => {
  return (
    <button
      className={`
        w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
        bg-white border-2 border-gray-200 rounded-lg
        text-2xl md:text-3xl lg:text-4xl font-bold
        transition-all duration-200 ease-in-out
        hover:border-blue-400 hover:shadow-md hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        disabled:cursor-not-allowed
        ${isWinning ? 'bg-green-100 border-green-400' : ''}
        ${value === 'X' ? 'text-blue-600' : 'text-red-500'}
      `}
      onClick={onClick}
      disabled={value !== null}
      aria-label={`Square ${value || 'empty'}`}
    >
      {value && (
        <span className="animate-pulse">
          {value}
        </span>
      )}
    </button>
  );
};

export default Square;