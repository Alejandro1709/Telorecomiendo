import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className='flex flex-col md:flex-row h-full'>
        {/* Sidebar */}
        <Sidebar />
        {/* Main  */}
        <h2>Main</h2>
      </div>
    </div>
  );
}

export default App;
