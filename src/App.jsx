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
import useScrollToTop from './hook/useScrollToTop';
import Footer1 from './Components/Footer1';
import Contact from './pages/Contact';

const App = () => {
	useScrollToTop();
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
				<Route index path='/works/:id' element={<Work />} />
				<Route index path='/contact' element={<Contact />} />
			</Routes>

			<Footer1 />
		</>
	);
};

export default App;
