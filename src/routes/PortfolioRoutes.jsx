import Navbar from '../Components/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../Pages/Home'

const PortfolioRoutes = () => {
	return (
		<>
			<Navbar />
			<div>
				<Routes>
					<Route path='home' element={<Home />} />

					<Route path='/*' element={<Navigate to='/home' />} />
				</Routes>
			</div>
		</>
	)
}

export default PortfolioRoutes
