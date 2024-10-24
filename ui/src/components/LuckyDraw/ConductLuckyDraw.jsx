import React, { useState } from 'react';
import SpinWheel from './SpinWheel';

const ConductLuckyDraw = () => {
  const [scheduledDraws, setScheduledDraws] = useState([
    // Mock data, replace with actual data from API or state management
    { id: 1, name: 'Summer Raffle', date: '2023-07-15', participants: 50 },
    { id: 2, name: 'Fall Giveaway', date: '2023-09-01', participants: 75 },
  ]);

  const [selectedDraw, setSelectedDraw] = useState(null);
  const [winners, setWinners] = useState([]);

  const handleConduct = (draw) => {
    setSelectedDraw(draw);
    // TODO: Fetch participants for the selected draw
  };

  const handleWinnerSelected = (winner) => {
    setWinners(prevWinners => [...prevWinners, winner]);
    // TODO: Remove winner from participants list
  };

  return (
    <div>
      {!selectedDraw ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Scheduled Lucky Draws</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Participants</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {scheduledDraws.map(draw => (
                <tr key={draw.id}>
                  <td className="border p-2">{draw.name}</td>
                  <td className="border p-2">{draw.date}</td>
                  <td className="border p-2">{draw.participants}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleConduct(draw)}
                      className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                      Conduct
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Conducting: {selectedDraw.name}</h2>
          <SpinWheel onWinnerSelected={handleWinnerSelected} />
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Winners</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Position</th>
                  <th className="border p-2">Name</th>
                </tr>
              </thead>
              <tbody>
                {winners.map((winner, index) => (
                  <tr key={index}>
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConductLuckyDraw;