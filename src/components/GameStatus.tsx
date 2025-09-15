import React from 'react';
import { RotateCcw } from 'lucide-react';

type Player = 'X' | 'O' | null;

interface GameStatusProps {
  winner: Player;
  currentPlayer: Player;
  isDraw: boolean;
  onReset: () => void;
}

const GameStatus: React.FC<GameStatusProps> = ({ winner, currentPlayer, isDraw, onReset }) => {
  const getStatusMessage = () => {
    if (winner) {
      return (
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
            🎉 Player {winner} Wins!
          </div>
          <div className="text-gray-600">Congratulations on your victory!</div>
        </div>
      );
    }
    
    if (isDraw) {
      return (
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">
            🤝 It's a Draw!
          </div>
          <div className="text-gray-600">Well played by both players!</div>
        </div>
      );
    }
    
    return (
      <div className="text-center">
        <div className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          Player {currentPlayer}'s Turn
        </div>
        <div className="text-gray-600">Click on an empty square to make your move</div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      {getStatusMessage()}
      
      {(winner || isDraw) && (
        <button
          onClick={onReset}
          className="
            mt-4 mx-auto flex items-center gap-2 px-6 py-3
            bg-blue-600 hover:bg-blue-700 text-white font-semibold
            rounded-lg transition-all duration-200 ease-in-out
            hover:shadow-md hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          "
        >
          <RotateCcw size={20} />
          Play Again
        </button>
      )}
    </div>
  );
};

export default GameStatus;