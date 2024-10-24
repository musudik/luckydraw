import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import ManageLeaders from './components/ManageLeaders';
import LuckyDraw from './components/LuckyDraw/LuckyDraw';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <LuckyDraw />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-leaders" element={<ManageLeaders />} />
          {/* Add routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;