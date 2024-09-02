import React from 'react';
import Nav from '../Components/Nav';
import HeroSection from '../Components/HeroSection';
import WorkAni from '../Components/WorkAni';
import RecentWorks from '../Components/RecentWorks';
import WhoIm from '../Components/WhoIm';
import Cards from '../Components/Cards';
import Testimonial from '../Components/Testimonial';
import Marquee1 from '../Components/Marquee';
import SocialHandels from '../Components/SocialHandels';

const Home = () => {
	return (
		<>
			<div className='container'>
				<HeroSection />
				<WorkAni />
				<RecentWorks />
				<WhoIm />
				<Cards />
			</div>
			<Testimonial />
			<div className='container'>
				<SocialHandels />
			</div>
			<Marquee1 />
		</>
	);
};

export default Home;
