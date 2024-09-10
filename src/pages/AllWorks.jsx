import AllworksProject from '../Components/AllworksProject';
import { projects } from '../../projects.json';
import { CiCircleChevDown } from 'react-icons/ci';

const AllWorks = () => {
	return (
		<div className='mt-[6rem]'>
			<div className='container'>
				<div className='h-[75vh] center flex-col'>
					<h1 className='text-center text-8xl font-blatant'>
						Engineering Digital Experiences, <br /> One Project at a
						Time
					</h1>
					<p className='mt-6 w-[30vw] text-center text-[#d7d7d7]'>
						My full-stack solutions are tailored to meet the unique
						needs of each client, transforming ideas into reality
					</p>
					<CiCircleChevDown
						strokeWidth={1}
						size={30}
						className='animate-bounce mt-4 text-[#d7d7d7]'
					/>
				</div>

				<div>
					{projects.map((project, idx) => (
						<AllworksProject
							key={idx}
							project={project}
							idx={idx}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllWorks;
