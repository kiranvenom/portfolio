import React from 'react';
import Nav from './Components/Nav';
import HeroSection from './Components/HeroSection';
import WorkAni from './Components/WorkAni';
import RecentWorks from './Components/RecentWorks';
import WhoIm from './Components/WhoIm';
import Cards from './Components/Cards';

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
		</>
	);
};

export default App;
