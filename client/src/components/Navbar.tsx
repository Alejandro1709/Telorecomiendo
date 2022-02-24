import React, { useState } from 'react';

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <div
      className={`flex flex-col md:flex-row md:justify-between bg-white border-b`}
    >
      <div className='flex justify-between border-b md:border-0 p-4'>
        <h1 className='font-bold'>Telorecomiendo</h1>
        <button
          className='block md:hidden'
          onClick={() => setIsNavbarOpen(true)}
        >
          Show
        </button>
      </div>
      <ul className='md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Home</li>
        <li className='p-4'>Home</li>
        <li className='p-4'>Home</li>
      </ul>
    </div>
  );
}

export default Navbar;
