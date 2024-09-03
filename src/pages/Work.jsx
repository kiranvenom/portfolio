import { useParams } from 'react-router-dom';
import EnhancedMinimalButton from '../Components/EnhancedMinimalButton';
import IconRenderer from '../Components/IconRenderer';
import ImageParallax from '../Components/ImageParallax';
import ImageShowCase from '../Components/ImageShowCase';

import img2 from '../assets/worksImg/laptopMockup.jpg';
import img3 from '../assets/worksImg/mobileMockup.jpg';

import { projects } from '../../projects.json';
import { useEffect, useState } from 'react';

import { FaRegHandPointRight } from 'react-icons/fa6';
import ProjectWorkNav from '../Components/ProjectWorkNav';

const Work = () => {
	const { id } = useParams();
	const [project, setProject] = useState(null);

	useEffect(() => {
		const retrieveProject = projects.find((proj) => proj.title === id);
		setProject(retrieveProject);
	}, [id]);

	if (!project) return <div>Loading...</div>;

	const icons = project?.technologies;

	// Find the index of the current project
	const currentIndex = projects.findIndex((proj) => proj.title === id);

	// Get the previous and next projects
	const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
	const nextProject =
		currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

	return (
		<div className='mt-[8rem]'>
			<div className='container'>
				<div className='h-[50vh] flex flex-col justify-between'>
					<h1 className='text-6xl capitalize'>{project?.title}</h1>
					<div className='pb-14 flex items-end justify-between'>
						<div>
							<h2 className='font-blatant mb-2'>
								Technologies used
							</h2>

							<div className='flex'>
								<IconRenderer icons={icons} />
							</div>
						</div>

						<EnhancedMinimalButton href={project?.visitLink}>
							visit
						</EnhancedMinimalButton>
					</div>
				</div>
			</div>

			<ImageParallax />

			<div className='h-[50vh]'>
				<div className='flex justify-start items-center h-full container gap-24'>
					<h2 className='text-2xl'>About</h2>
					<div className='font-blatant'>
						<h2 className='pt-16 mb-6 text-2xl'>
							{project?.about?.title}
						</h2>
						<p>{project?.about?.description}</p>
					</div>
				</div>
			</div>

			<ImageShowCase image={img2} />

			<div className='h-[50vh]'>
				<div className='flex justify-start items-center h-full container gap-24'>
					<h2 className='text-2xl'>Technologies</h2>
					<div className='font-blatant'>
						<h2>{project?.technologiesDesc?.description}</h2>
					</div>
				</div>
			</div>

			<ImageShowCase image={img3} />

			<div className='h-[50vh]'>
				<div className='flex justify-start items-center h-full container gap-24'>
					<h2 className='text-2xl'>Role / Responsibilities </h2>
					<div className='font-blatant'>
						{project?.responsibilities?.description.map(
							(list, idx) => {
								return (
									<div
										className='flex gap-4 rounded-md bg-[#131a29] p-2 my-1 border border-[#353535]'
										key={idx}>
										<FaRegHandPointRight
											color='white'
											size={25}
										/>{' '}
										<h1>{list}</h1>
									</div>
								);
							},
						)}
					</div>
				</div>
			</div>
			<ProjectWorkNav
				prevProject={prevProject}
				nextProject={nextProject}
			/>
		</div>
	);
};

export default Work;
