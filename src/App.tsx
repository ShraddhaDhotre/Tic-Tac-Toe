import React from 'react';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Tic-Tac-Toe
          </h1>
          <p className="text-gray-600 text-lg">
            Challenge your friend to a classic game!
          </p>
        </header>
        
        <main>
          <TicTacToe />
        </main>
        
        <footer className="text-center mt-12 text-gray-500">
          <p>Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;