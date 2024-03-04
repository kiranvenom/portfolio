import Marquee from 'react-fast-marquee';

const Marquee1 = () => {
	return (
		<>
			<div className='my-[6rem]'>
				<Marquee
					className='font-bold text-9xl uppercase text-[#2c385b]'
					direction='right'
					autoFill
					speed={80}>
					--- UI / UX --- Web Development --- FrontEnd --- BackEnd ---
				</Marquee>
				<Marquee
					className='font-bold text-9xl uppercase text-[#2c385b]'
					direction='left'
					autoFill
					speed={80}>
					--- Let's Dive In! ---
				</Marquee>
			</div>
		</>
	);
};

export default Marquee1;
