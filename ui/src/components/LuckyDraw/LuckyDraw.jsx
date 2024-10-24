import React, { useState } from 'react';
import ScheduleLuckyDraw from './ScheduleLuckyDraw';
import ConductLuckyDraw from './ConductLuckyDraw';
import RegisterCustomers from './RegisterCustomers';

const LuckyDraw = () => {
  const [activeTab, setActiveTab] = useState('schedule');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Lucky Draw Spin Wheel</h1>
      <div className="flex mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${activeTab === 'schedule' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('schedule')}
        >
          Schedule Lucky Draw
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded ${activeTab === 'conduct' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('conduct')}
        >
          Conduct Lucky Draw
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('register')}
        >
          Register Customers
        </button>
      </div>
      {activeTab === 'schedule' && <ScheduleLuckyDraw />}
      {activeTab === 'conduct' && <ConductLuckyDraw />}
      {activeTab === 'register' && <RegisterCustomers />}
    </div>
  );
};

export default LuckyDraw;