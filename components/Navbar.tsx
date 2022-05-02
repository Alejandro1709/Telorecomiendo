import React from 'react'

function Navbar() {
	return (
		<nav
			className='flex flex-col gap-4 md:flex-row md:gap-0 justify-between items-center'
			role='navigation'
		>
			<h1 className='text-3xl font-semibold text-white select-none'>
        hotelsnow.com
			</h1>
			<ul className='flex align-baseline md:gap-4 gap-2'>
				<li className='text-white font-semibold text-lg cursor-pointer hover:text-black'>
          Home
				</li>
				<li className='text-white font-semibold text-lg cursor-pointer hover:text-black'>
          Hotels
				</li>
				<li className='text-white font-semibold text-lg cursor-pointer hover:text-black'>
          Countries
				</li>
				<li className='text-white font-semibold text-lg cursor-pointer hover:text-black'>
          Account
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
