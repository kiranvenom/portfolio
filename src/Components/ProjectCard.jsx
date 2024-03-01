import React from 'react';

const ProjectCard = ({ src, rr, title }) => {
	return (
		<>
			<div
				className={
					rr
						? 'flex items-center justify-between flex-row-reverse my-4'
						: 'flex items-center justify-between my-4'
				}>
				<div>
					<h1 className='text-5xl mb-4'>{title}</h1>
					<h2 className='mb-4'>UI / UX , Web Development</h2>
					<h1 className='px-6 py-2 border rounded-full w-[fit-content]'>
						view Project
					</h1>
				</div>
				<div>
					<div
						style={{
							width: '800px',
						}}>
						<img
							className='w-full rounded-lg'
							src={src}
							alt={title}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
