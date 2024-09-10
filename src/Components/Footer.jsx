import { FaWhatsapp } from 'react-icons/fa';
import ScrollToTop from './ScrollToTop';
import MagneticButton from './MagneticButton';
import MovingText from './MovingText';

const Footer = () => {
	return (
		<>
			<div className='container'>
				<div className='flex justify-between items-end mt-28'>
					<h1 className='text-9xl font-extrabold leading-[50%] font-blatant'>
						Let's Talk
					</h1>
					{/* <h1 className='w-[fit-content] px-6 py-2 border rounded-full mt-4 mb-6'>
						Contact Me
					</h1> */}
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
					<MagneticButton>
						<div>
							<a
								target='_blank'
								href='https://wa.me/919741734482?text=Hello%20I%20am%20interested%20in%20your%20services'>
								{/* <div>
									<FaWhatsapp size={50} color='#0EC045' />
								</div> */}
								<div className='hover:drop-shadow-[0_0_15px_rgba(14,192,69,1)] transition duration-300'>
									<FaWhatsapp
										size={50}
										className='text-[#0EC045]'
									/>
								</div>
							</a>
						</div>
					</MagneticButton>
				</div>

				<div className='flex justify-between items-center mt-[6rem]'>
					<h1>©Kiran</h1>
					<ScrollToTop />
				</div>
			</div>
		</>
	);
};

export default Footer;
