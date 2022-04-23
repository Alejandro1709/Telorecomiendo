import React from 'react'
import type { NextPage } from 'next'
import Layout from '../components/Layout'

const Home: NextPage = () => {
	return (
		<Layout
			title='hotelsnow.com | Home'
			description='Welcome to hotelsnow.com! In this website you will be able to rent a room in any of our available hotels around the world'
		>
			<header className='flex flex-col gap-4 md:gap-8 h-2/4 bg-yellow-400 p-8'>
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
				<div className='h-5/6 md:h-4/5'>
					<div className='grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 w-full overflow-x-scroll'>
						{/* Card */}
						<div className='m-2 bg-white rounded-md overflow-hidden shadow-md'>
							<div className='h-28 md:h-32 bg-red-400'>Top Image</div>
							<div className='flex flex-col p-2'>
								<div className='flex flex-col gap-1'>
									<h2 className='text-gray-500 font-bold'>Hotel las palmeras del bahio</h2>
									<p className='text-yellow-500 font-semibold text-sm mb-2'>Av cocolito 445, Mexico</p>
								</div>
								<div className='flex flex-row justify-between'>
									<button>Ver detalles</button>
									<span>90USD/NIGHT</span>
								</div>
							</div>
						</div>
						<div className='m-2 bg-white rounded-md overflow-hidden shadow-md'>
							<div className='h-28 md:h-32 bg-red-400'>Top Image</div>
							<div className='flex flex-col p-2'>
								<div className='flex flex-col gap-1'>
									<h2 className='text-gray-500 font-bold'>Hotel las palmeras del bahio</h2>
									<p className='text-yellow-500 font-semibold text-sm mb-2'>Av cocolito 445, Mexico</p>
								</div>
								<div className='flex flex-row justify-between'>
									<button>Ver detalles</button>
									<span>90USD/NIGHT</span>
								</div>
							</div>
						</div>
						<div className='m-2 bg-white rounded-md overflow-hidden shadow-md'>
							<div className='h-28 md:h-32 bg-red-400'>Top Image</div>
							<div className='flex flex-col p-2'>
								<div className='flex flex-col gap-1'>
									<h2 className='text-gray-500 font-bold'>Hotel las palmeras del bahio</h2>
									<p className='text-yellow-500 font-semibold text-sm mb-2'>Av cocolito 445, Mexico</p>
								</div>
								<div className='flex flex-row justify-between'>
									<button>Ver detalles</button>
									<span>90USD/NIGHT</span>
								</div>
							</div>
						</div>
						<div className='m-2 bg-white rounded-md overflow-hidden shadow-md'>
							<div className='h-28 md:h-32 bg-red-400'>Top Image</div>
							<div className='flex flex-col p-2'>
								<div className='flex flex-col gap-1'>
									<h2 className='text-gray-500 font-bold'>Hotel las palmeras del bahio</h2>
									<p className='text-yellow-500 font-semibold text-sm mb-2'>Av cocolito 445, Mexico</p>
								</div>
								<div className='flex flex-row justify-between'>
									<button>Ver detalles</button>
									<span>90USD/NIGHT</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</Layout>
	)
}

export default Home
