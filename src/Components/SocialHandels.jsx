import { ImLinkedin } from 'react-icons/im';
import { RiInstagramFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import links from '../utils/links';

const SocialHandels = () => {
	return (
		<>
			<div className='flex flex-col items-center mt-24'>
				<h1 className='text-4xl text-center mb-8'>
					Checkout my <br />
					Social Handels
				</h1>

				<a
					className='flex items-center w-[50vw] justify-between text-4xl border-b pb-4 mb-4 hover:w-[60vw] transition-all duration-500'
					target='_blank'
					href={`${links.linkedIn}`}>
					<h1 className='font-blatant'>LinkedIn</h1>
					<ImLinkedin color='blue' />
				</a>
				<a
					className='flex items-center w-[50vw] justify-between text-4xl border-b pb-4 mb-4 hover:w-[60vw] transition-all duration-500'
					target='_blank'
					href={`mailto:${links.email}`}>
					<h1 className='font-blatant'>Email</h1>
					<MdEmail color='red' />
				</a>
				<a
					className='flex items-center w-[50vw] justify-between text-4xl border-b pb-4 mb-16 hover:w-[60vw] transition-all duration-500'
					target='_blank'
					href={`${links.gitHub}`}>
					<h1 className='font-blatant'>Git Hub</h1>
					<FaGithub />
				</a>
			</div>
		</>
	);
};

export default SocialHandels;
