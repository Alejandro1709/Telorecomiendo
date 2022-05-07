import Head from 'next/head'
import React from 'react'

interface LayoutProps {
  title: string;
  description?: string;
  tags?: string;
  children: JSX.Element | JSX.Element[];
}

function Layout({ title, description, tags, children }: LayoutProps) {
	return (
		<div className='h-screen'>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				{tags && <meta name='keywords' content={tags} />}
			</Head>

			<main className='h-full'>{children}</main>
		</div>
	)
}

export default Layout
