import React from 'react';
import Nav from './Components/Nav';
import HeroSection from './Components/HeroSection';
import WorkAni from './Components/WorkAni';
import RecentWorks from './Components/RecentWorks';
import WhoIm from './Components/WhoIm';
import Cards from './Components/Cards';
import Testimonial from './Components/Testimonial';
import Marquee1 from './Components/Marquee';
import Footer from './Components/Footer';

const App = () => {
	return (
		<>
			<Nav />
			<div className='container'>
				<HeroSection />
				<WorkAni />
				<RecentWorks />
				<WhoIm />
				<Cards />
			</div>
			<Testimonial />
			<Marquee1 />
			<div className='container'>
				<Footer />
			</div>
		</>
	);
};

export default App;
