import { ImLinkedin } from 'react-icons/im';
import { RiInstagramFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const SocialHandels = () => {
	return (
		<>
			<div className='flex flex-col items-center'>
				<h1 className='text-4xl text-center mb-8'>
					Checkout my <br />
					Social Handels
				</h1>
				<a
					className='flex items-center w-[50vw] justify-between text-4xl border-b pb-4 mb-4 hover:w-[52vw] transition-all'
					target='_blank'
					href='https://www.linkedin.com/in/kiran-kumar-m-495a6a1b7/'>
					<h1 className='font-blatant'>LinkedIn</h1>
					<ImLinkedin color='blue' />
				</a>
				<a
					className='flex items-center w-[50vw] justify-between text-4xl border-b pb-4 mb-4 hover:w-[52vw] transition-all'
					href='mailto:km060360@gmail.com'>
					<h1 className='font-blatant'>Email</h1>
					<MdEmail color='red' />
				</a>
				<a
					className='flex items-center w-[50vw] justify-between text-4xl border-b pb-4 mb-16 hover:w-[52vw] transition-all'
					target='_blank'
					href='https://github.com/kiranvenom/'>
					<h1 className='font-blatant'>Git Hub</h1>
					<FaGithub />
				</a>
			</div>
		</>
	);
};

export default SocialHandels;
