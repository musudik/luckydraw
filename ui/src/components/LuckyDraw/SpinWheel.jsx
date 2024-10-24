import React, { useState, useEffect } from 'react';

const SpinWheel = ({ onWinnerSelected }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);
  const [participants, setParticipants] = useState([
    // Mock data, replace with actual participants
    'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Henry'
  ]);

  const spinWheel = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * participants.length);
      const selectedWinner = participants[randomIndex];
      setWinner(selectedWinner);
      setIsSpinning(false);
      onWinnerSelected(selectedWinner);
      // Remove winner from participants
      setParticipants(participants.filter(p => p !== selectedWinner));
    }, 10000); // Spin for 10 seconds
  };

  useEffect(() => {
    // Reset winner when participants change
    setWinner(null);
  }, [participants]);

  return (
    <div className="text-center">
      <div className="mb-4">
        {/* Placeholder for actual wheel animation */}
        <div className="w-64 h-64 rounded-full bg-gray-300 mx-auto flex items-center justify-center">
          {isSpinning ? (
            <p className="text-xl font-bold">Spinning...</p>
          ) : (
            <p className="text-xl font-bold">{winner || 'Spin the Wheel'}</p>
          )}
        </div>
      </div>
      <button
        onClick={spinWheel}
        disabled={isSpinning || participants.length === 0}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        Spin the Wheel
      </button>
    </div>
  );
};

export default SpinWheel;