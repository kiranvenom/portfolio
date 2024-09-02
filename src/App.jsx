import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './Components/Nav';
import CustomCursor from './Components/CustomCursor';
import Work from './pages/Work';
import Footer from './Components/Footer';
import AllWorks from './pages/AllWorks';
import Menu from './Components/Menu';
import { AnimatePresence } from 'framer-motion';

const App = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<Nav setIsMenuOpen={setIsMenuOpen} />
			<AnimatePresence>
				{isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
			</AnimatePresence>
			{/* <CustomCursor /> */}

			<Routes>
				<Route index path='/' element={<Home />} />
				<Route index path='/works' element={<AllWorks />} />
				{/* <Route path='/work' element={<Work />} /> */}
			</Routes>

			<div className='container'>
				<Footer />
			</div>
		</>
	);
};

export default App;
