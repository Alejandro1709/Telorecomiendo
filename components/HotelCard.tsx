import React from 'react'

function HotelCard() {
	return (
		<div className='m-2 bg-white rounded-md overflow-hidden shadow-md'>
			<div className='h-28 md:h-32 bg-red-400'>Top Image</div>
			<div className='flex flex-col p-2'>
				<div className='flex flex-col justify-center gap-1 md:gap-0.5 mb-2 md:mb-4 select-none'>
					<h2 className='text-gray-500 font-bold mb-1'>Hotel las palmeras del bahio</h2>
					<p className='text-yellow-500 font-semibold text-sm mb-1'>Av cocolito 445, Mexico</p>
				</div>
				<div className='flex flex-row items-center justify-between'>
					<button className='bg-gray-300 p-1.5 px-2 rounded-lg hover:bg-gray-400'>Ver +</button>
					<span className='font-semibold text-gray-500 select-none'><span className='text-yellow-400 font-bold'>90USD</span>/NIGHT</span>
				</div>
			</div>
		</div>
	)
}

export default HotelCard