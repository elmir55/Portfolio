import React from 'react'
import { Header } from '../Header'
// import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'

export  function Layout() {
		return (
				<>
						<Header />  
						<Outlet />
						<Footer />
				</>
		)
}
