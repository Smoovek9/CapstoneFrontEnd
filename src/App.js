import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
