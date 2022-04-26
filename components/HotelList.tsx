import React, {useState } from 'react'
import HotelCard from './HotelCard'
import hotels from '../hotels'
import Hotel from '../types/hotel'

function HotelList() {

	const [mostRatedHotels, setMostRatedHotels] = useState<Array<Hotel>>(hotels)
	
	return (
		<div className='h-5/6 md:h-4/5'>
			<div className='grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 w-full overflow-x-scroll'>
				{mostRatedHotels.map(hotel => (
					<HotelCard key={hotel.id} hotel={hotel} />
				))}
			</div>
		</div>
	)
}

export default HotelList