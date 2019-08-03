import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Reparos from './components/reparos/Reparos';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Reparos />
      </div>
    </div>
  );
}

export default App;
