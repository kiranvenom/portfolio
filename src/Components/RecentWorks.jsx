import React from 'react';
import ProjectCard from './ProjectCard';

const RecentWorks = () => {
	return (
		<>
			<div className='h-[70vh] flex flex-col justify-center items-start'>
				<h1 className='text-9xl font-extrabold'>
					Recent <br /> Works
				</h1>
				<div
					style={{ fontFamily: 'var(--secondary-font)' }}
					className='flex justify-between w-full mt-10 items-center'>
					<h1>
						in the creative wilderness, <br /> client find our Work
						truly <br /> beloved
					</h1>
					<h1 className='px-6 py-2 border rounded-full mt-4'>
						Contact Me
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
