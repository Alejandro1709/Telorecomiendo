import React from 'react'

function Showcase() {
	return (
		<section className='flex flex-col md:flex-row md:justify-between mx-4 gap-4 md:mx-12 md:m-12'>
			<div className='flex flex-col md: justify-evenly md:gap-2'>
				<div className='mb-4 md:m-0 mt-4'>
					<h2 className='inline text-3xl md:text-4xl font-bold text-gray-800 leading-snug md:leading-none md:max-w-xl'>Yeah.. as you can see above those hotels are the most rated ones<span className='text-yellow-400'>!</span></h2>
					<p className='text-2xl mt-2 text-yellow-400 font-semibold'>Don&apos;t believe us?</p>
				</div>
				<div className='bg-white'>
					<div className='h-24 p-2 border overflow-scroll'>
						<p className='mb-2 p-2 bg-gray-50 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur officia eligendi odio omnis optio maxime ut reprehenderit alias similique!</p>
						<p className='mb-2 p-2 bg-gray-50 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur officia eligendi odio omnis optio maxime ut reprehenderit alias similique!</p>
						<p className='mb-2 p-2 bg-gray-50 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur officia eligendi odio omnis optio maxime ut reprehenderit alias similique!</p>
						<p className='bg-gray-50 p-2 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur officia eligendi odio omnis optio maxime ut reprehenderit alias similique!</p>
					</div>
				</div>
			</div>
			{/* Some Users that rented the hotel */}
			<div className='flex flex-col gap-4 h-60 overflow-scroll'>
				{/* Rating */}
				<div className='bg-gray-50 rounded-md border'>
					{/* Wrapper */}
					<div className='flex flex-row md:flex-col md:justify-center p-4 gap-1'>
						<div className='h-16 w-16 bg-blue-300 rounded-full' />
						<div className='flex flex-col justify-center'>
							<h2 className='text-xl'>Some user just bought</h2>
							<p>Hotel las palmeras del bahio for 2 guests</p>
						</div>
						<span>Just Now</span>
					</div>
				</div>
				{/* Rating */}
				<div className='bg-gray-100 rounded-md border'>
					{/* Wrapper */}
					<div className='flex flex-row md:flex-col md:justify-center p-4 gap-1'>
						<div className='h-16 w-16 bg-blue-300 rounded-full' />
						<div className='flex flex-col justify-center'>
							<h2 className='text-xl'>Some user just bought</h2>
							<p>Hotel las palmeras del bahio for 2 guests</p>
						</div>
						<span>Just Now</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Showcase