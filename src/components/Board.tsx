import React from 'react';
import Square from './Square';

type Player = 'X' | 'O' | null;

interface BoardProps {
  squares: Player[];
  onClick: (index: number) => void;
  winningLine: number[] | null;
}

const Board: React.FC<BoardProps> = ({ squares, onClick, winningLine }) => {
  return (
    <div className="grid grid-cols-3 gap-3 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onClick(index)}
          isWinning={winningLine?.includes(index)}
        />
      ))}
    </div>
  );
};

export default Board;