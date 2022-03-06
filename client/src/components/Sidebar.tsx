import React, { useState, useEffect } from 'react';
import HotelCard from './HotelCard';
import axios from 'axios';

function Sidebar() {
  const [hotels, setHotels] = useState([
    {
      _id: '',
      hotelTitle: '',
      hotelWebsite: '',
      hotelPrice: 0,
      hotelLocation: '',
    },
  ]);

  useEffect(() => {
    const fetchHotels = async () => {
      const { data } = await axios.get('http://localhost:2000/api/v1/hotels');

      setHotels(data);
    };

    fetchHotels();

    return () => {
      setHotels([]);
    };
  }, []);

  return (
    <div className='hidden md:h-auto md:block md:w-1/4 border-r md:overflow-scroll'>
      {hotels && hotels.length > 0 ? (
        hotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)
      ) : (
        <div>No Hotels Were Found</div>
      )}
    </div>
  );
}

export default Sidebar;
