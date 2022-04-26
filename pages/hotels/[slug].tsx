import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Hotel from '../../types/hotel'
import hotels from '../../hotels'

function HotelPage() {

	const router = useRouter()

	const {slug} = router.query

	const hotel = hotels.find((h) => h.slug === slug)

	const [currentHotel, setCurrentHotel] = useState<Hotel | undefined>(hotel)

	useEffect(() => {
		setCurrentHotel(hotel)
	}, [])
	

	return (
		<Layout title={currentHotel !== undefined ? currentHotel.name : 'Hotel Name'} description={currentHotel !== undefined ? currentHotel.desc : 'Hotel Description'}>
			<Header>
				<div className='flex flex-row justify-between items-center'>
					<span className='p-2 bg-white rounded-md hover:bg-gray-200'>
						<Link href='/'>Go back</Link>
					</span>
					<h2 className='md:text-2xl text-center font-semibold text-white'>{currentHotel !== undefined ? currentHotel.name : 'Hotel Name'}</h2>
					<span className='p-2 bg-white rounded-md hover:bg-gray-200'>
						<Link href='/'>Share</Link>
					</span>
				</div>
			</Header>
			<section className='flex flex-col md:flex-row-reverse m-8 gap-8'>
				{/* Image */}
				<div className='bg-gray-100 w-full h-64' />
				<div className='w-full h-64'>
					<ul className='text-lg'>
						<li><strong>Name:</strong> {currentHotel?.name}.</li>
						<li><strong>Address:</strong> {currentHotel?.address}.</li>
						<li><strong>Price:</strong> {currentHotel?.price}USD/Night.</li>
					</ul>
					{/* Gallery */}
					<div className='flex flex-wrap md:grid md:grid-cols-4 sm:grid-cols-2 gap-2 mt-4'>
						<div className='h-[150px] w-[150px] bg-red-200'></div>
						<div className='h-[150px] w-[150px] bg-red-200'></div>
						<div className='h-[150px] w-[150px] bg-red-200'></div>
						<div className='h-[150px] w-[150px] bg-red-200'></div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default HotelPage