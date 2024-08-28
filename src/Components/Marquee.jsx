import Marquee from 'react-fast-marquee';

const Marquee1 = () => {
	return (
		<>
			<div className='my-[6rem] select-none'>
				<Marquee
					className='font-bold text-9xl uppercase text-[#2c385b]'
					direction='right'
					autoFill>
					--- UI / UX --- Web Development --- FrontEnd --- BackEnd ---
				</Marquee>
				<Marquee
					className='font-bold text-9xl uppercase text-[#2c385b]'
					direction='left'
					autoFill>
					--- Let's Dive In! ---
				</Marquee>
			</div>
		</>
	);
};

export default Marquee1;
