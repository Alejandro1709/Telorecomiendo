import React from 'react'
import HotelCard from './HotelCard'

function HotelList() {
	return (
		<div className='h-5/6 md:h-4/5'>
			<div className='grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 w-full overflow-x-scroll'>
				<HotelCard />
				<HotelCard />
				<HotelCard />
				<HotelCard />
			</div>
		</div>
	)
}

export default HotelList