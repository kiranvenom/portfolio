import { ImLinkedin } from 'react-icons/im';
import { RiInstagramFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';

const SocialHandels = () => {
	return (
		<>
			<div className='flex flex-col items-center'>
				<h1 className='text-4xl text-center mb-8'>
					Checkout my <br />
					Social Handels
				</h1>
				<a
					className='flex items-center w-[50vw] justify-between text-4xl border-b pb-4 mb-4 hover:w-[54vw] transition-all'
					href='#'>
					<h1>LinkedIn</h1>
					<ImLinkedin color='blue' />
				</a>
				<a
					className='flex items-center w-[50vw] justify-between text-4xl border-b pb-4 mb-4 hover:w-[54vw] transition-all'
					href='#'>
					<h1>Instagram</h1>
					<RiInstagramFill color='pink' />
				</a>
				<a
					className='flex items-center w-[50vw] justify-between text-4xl border-b pb-4 mb-16 hover:w-[54vw] transition-all'
					href='#'>
					<h1>Git Hub</h1>
					<FaGithub />
				</a>
			</div>
		</>
	);
};

export default SocialHandels;
