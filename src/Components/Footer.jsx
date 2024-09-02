import { FaWhatsapp } from 'react-icons/fa';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
	return (
		<>
			<div className='flex justify-between items-end mt-28'>
				<h1 className='text-9xl font-extrabold leading-[50%]'>
					Let's Talk
				</h1>
				<h1 className='w-[fit-content] px-6 py-2 border rounded-full mt-4 mb-6'>
					Contact Me
				</h1>
			</div>

			<div className='flex justify-between my-[2rem] py-[2rem] border-t border-b'>
				<div className='flex gap-16 items-center'>
					<div>
						<h4>Email</h4>
						<a
							className='text-2xl font-blatant'
							href='mailto:km060360@gmail.com'>
							km060360@gmail.com
						</a>
					</div>
					<div>
						<h4>Call</h4>
						<a
							className='text-2xl font-blatant'
							href='tel:+9741734482'>
							+91 9741734482
						</a>
					</div>
				</div>
				<FaWhatsapp size={50} />
			</div>

			<div className='flex justify-between items-center mt-[6rem] mb-4'>
				<h1>©Kiran</h1>
				<ScrollToTop />
			</div>
		</>
	);
};

export default Footer;
