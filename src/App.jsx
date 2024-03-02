import React from 'react';
import Nav from './Components/Nav';
import HeroSection from './Components/HeroSection';
import WorkAni from './Components/WorkAni';
import RecentWorks from './Components/RecentWorks';

const App = () => {
	return (
		<>
			<Nav />
			<div className='container'>
				<HeroSection />
				<WorkAni />
				<RecentWorks />
			</div>
		</>
	);
};

export default App;
