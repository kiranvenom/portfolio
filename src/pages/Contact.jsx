import { CiCircleChevDown } from 'react-icons/ci';
import ContactForm from '../Components/ContactForm';
import { useEffect, useState } from 'react';

const Contact = () => {
	return (
		<div className='mt-[6rem]'>
			<div className='container'>
				<div className='h-[75vh] center flex-col'>
					<h1 className='text-center text-8xl font-blatant'>
						Let's build something amazing together.
					</h1>
					<p className='mt-6 w-[30vw] text-center'>
						Connect with me and let's turn your ideas into reality.
						Together, we can create innovative and impactful.
					</p>
					<CiCircleChevDown
						strokeWidth={1}
						size={30}
						className='animate-bounce mt-4'
					/>
				</div>
				<div className='h-[75vh]'>
					<div className='flex items-center justify-between'>
						<h2 className='text-6xl font-blatant'>Say Hello!</h2>
					</div>
					<div className='h-full'>
						<ContactForm />
					</div>
				</div>
				<div className='h-[10vh] mt-16'></div>
			</div>
		</div>
	);
};

export default Contact;
