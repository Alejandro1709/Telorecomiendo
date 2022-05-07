import React from 'react'
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import HotelList from '../components/HotelList'
import Header from '../components/Header'

const HomePage: NextPage = () => {
	return (
		<Layout
			title='hotelsnow.com | Home'
			description='Welcome to hotelsnow.com! In this website you will be able to rent a room in any of our available hotels around the world'
		>
			<Header>
				<HotelList />
			</Header>
			{/* <Showcase /> */}
			<div className='h-60 px-8'>
				<div className='h-full bg-white'>
					<h2 className='text-3xl p-4 border-b font-semibold'>Lets get you started</h2>
				</div>
			</div>
		</Layout>
	)
}

export default HomePage
