import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Remplacez Switch par Routes
import Navigation from './components/Navigation';
import MyPirates from './pages/MyPirates';
import Gallery from './pages/Gallery';
import Marketplace from './pages/Marketplace';
import Blackjack from './pages/Blackjack';
import TreasureHunt from './pages/TreasureHunt';
import ChestUnlocker from './pages/ChestUnlocker';
import Jeweler from './pages/Jeweler';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes> {/* Remplacez Switch par Routes */}
          <Route path="/" element={<MyPirates />} />
          <Route path="/my-pirates" element={<MyPirates />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/blackjack" element={<Blackjack />} />
          <Route path="/treasure-hunt" element={<TreasureHunt />} />
          <Route path="/chest-unlocker" element={<ChestUnlocker />} />
          <Route path="/jeweler" element={<Jeweler />} />
        </Routes> {/* Remplacez Switch par Routes */}
      </BrowserRouter>
    </div>
  );
}

export default App;
