import React from 'react';
import ProjectCard from './ProjectCard';
import MovingText from './MovingText';
import ComeUpText from './ComeUpText';

const RecentWorks = () => {
	return (
		<>
			<div className='h-[70vh] flex flex-col justify-center items-start'>
				{/* <h1 className='text-8xl font-extrabold textStroke transition-all'>
					Recent <br /> Projects
				</h1> */}
				<MovingText text='Recent Projects' />
				<div
					style={{ fontFamily: 'var(--secondary-font)' }}
					className='flex justify-between w-full mt-10 items-center'>
					{/* <h1 className='capitalize font-blatant'>
						in the creative wilderness, <br /> client find My Work
						truly <br /> beloved
					</h1> */}
					<div>
						<ComeUpText text='In the creative wilderness,' />
						<ComeUpText text='client find My Work truly,' />
						<ComeUpText text='beloved' />
					</div>
					<h1 className='px-6 py-2 border rounded-full mt-4'>
						View All
					</h1>
				</div>
			</div>
			<ProjectCard
				src={'./src/assets/images/p1.png'}
				title='Artist Albumb'
			/>
			<ProjectCard
				src={'./src/assets/images/p2.png'}
				rr={true}
				title='Neras'
			/>
			<ProjectCard src={'./src/assets/images/p3.png'} title='Qtrip' />
		</>
	);
};

export default RecentWorks;
