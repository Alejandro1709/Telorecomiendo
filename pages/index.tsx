import React from 'react'
import type { NextPage } from 'next'
import Layout from '../components/Layout'

const Home: NextPage = () => {
	return (
		<Layout
			title='hotelsnow.com | Home'
			description='Welcome to hotelsnow.com! In this website you will be able to rent a room in any of our available hotels around the world'
		>
			<header className='h-2/4 bg-yellow-400 p-8'>
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
				fkfk
			</header>
		</Layout>
	)
}

export default Home
