import React, {useState} from 'react'
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

	return (
		<Layout title={currentHotel !== undefined ? currentHotel.name : 'Hotel Name'} description={currentHotel !== undefined ? currentHotel.desc : 'Hotel Description'}>
			<Header>
				<div className='flex flex-row justify-between items-center'>
					<span className='p-2 bg-white rounded-md hover:bg-gray-200'>
						<Link href='/'>Go back</Link>
					</span>
					<h2 className='text-2xl text-center font-semibold text-white'>{currentHotel !== undefined ? currentHotel.name : 'Hotel Name'}</h2>
					<span className='p-2 bg-white rounded-md hover:bg-gray-200'>
						<Link href='/'>Share</Link>
					</span>
				</div>
			</Header>
			<div>
				fkfk
			</div>
		</Layout>
	)
}

export default HotelPage