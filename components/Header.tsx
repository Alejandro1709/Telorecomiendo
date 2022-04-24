import React from 'react'
import Navbar from './Navbar'

interface HeaderProps {
    children?: JSX.Element | Array<JSX.Element>
	pad?: number | string
}

function Header({ children, pad }: HeaderProps) {
	return (
		<header className={`flex flex-col gap-4 md:gap-8 bg-yellow-400 p-${pad ? pad : 8}`}>
			<Navbar />
			{children ? children : null}
		</header>
	)
}

export default Header