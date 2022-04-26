import React from 'react'
import HotelCard from './HotelCard'

interface Hotel {
	id: string | number,
	name: string,
	slug: string,
	desc?: string
	address: string,
	price: string | number
}

function HotelList() {
	const hotels: Array<Hotel> = [
		{
			id: 1,
			name: 'Hotel las palmeras del bahio',
			slug: 'hotel-las-palmeras-del-bahio',
			desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis et totam impedit culpa? Explicabo minima repellendus temporibus deserunt odio necessitatibus?',
			address: 'Av Cocolito 445, Mexico',
			price: 90
		},
		{
			id: 2,
			name: 'Hotel aguarias del estado',
			slug: 'hotel-aguarias-del-estado',
			desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis et totam impedit culpa? Explicabo minima repellendus temporibus deserunt odio necessitatibus?',
			address: 'Av las amarillas 420, Mexico',
			price: 90
		},
		{
			id: 3,
			name: 'Hotel los delfines',
			slug: 'hotel-los-delfines',
			desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis et totam impedit culpa? Explicabo minima repellendus temporibus deserunt odio necessitatibus?',
			address: 'Av conquistadores 445, Lima Perú',
			price: 90
		},
		{
			id: 4,
			name: 'Hotel las palmeras del bahio',
			slug: 'hotel-las-palmeras-del-bahio',
			desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis et totam impedit culpa? Explicabo minima repellendus temporibus deserunt odio necessitatibus?',
			address: 'Av Cocolito 445, Mexico',
			price: 90
		}
	]
	return (
		<div className='h-5/6 md:h-4/5'>
			<div className='grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 w-full overflow-x-scroll'>
				{hotels.map(hotel => (
					<HotelCard key={hotel.id} hotel={hotel} />
				))}
			</div>
		</div>
	)
}

export default HotelList