interface Hotel {
	id: string | number,
	name: string,
	slug: string,
	desc?: string
	address: string,
	price: string | number
}

export default Hotel