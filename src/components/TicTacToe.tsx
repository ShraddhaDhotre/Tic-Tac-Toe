import React, { useState, useCallback } from 'react';
import Board from './Board';
import GameStatus from './GameStatus';

type Player = 'X' | 'O' | null;

const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  const checkWinner = useCallback((squares: Player[]): { winner: Player; line: number[] | null } => {
    for (const line of WINNING_LINES) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line };
      }
    }
    return { winner: null, line: null };
  }, []);

  const isDraw = squares.every(square => square !== null) && !winner;

  const handleSquareClick = (index: number) => {
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    setSquares(newSquares);

    const { winner: newWinner, line } = checkWinner(newSquares);
    if (newWinner) {
      setWinner(newWinner);
      setWinningLine(line);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setWinningLine(null);
  };

  return (
    <div className="max-w-md mx-auto">
      <GameStatus
        winner={winner}
        currentPlayer={currentPlayer}
        isDraw={isDraw}
        onReset={resetGame}
      />
      
      <Board
        squares={squares}
        onClick={handleSquareClick}
        winningLine={winningLine}
      />
    </div>
  );
};

export default TicTacToe;