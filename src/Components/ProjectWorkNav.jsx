import React from 'react';
import { Link } from 'react-router-dom';

const ProjectWorkNav = ({ prevProject, nextProject }) => {
	return (
		<div className='h-[50vh]'>
			<div className='flex items-center h-full'>
				{prevProject && (
					<div className='w-[50%] h-full center flex-col'>
						<p className='mb-2 font-blatant'>Prev</p>
						<Link to={`/works/${prevProject.title}`}>
							<h2 className='text-4xl'>{prevProject.title}</h2>
						</Link>
					</div>
				)}
				{nextProject && (
					<div className='w-[50%] h-full center flex-col'>
						<p className='mb-2 font-blatant'>Next</p>
						<Link to={`/works/${nextProject.title}`}>
							<h2 className='text-4xl'>{nextProject.title}</h2>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectWorkNav;
