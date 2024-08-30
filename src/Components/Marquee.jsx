import Marquee from 'react-fast-marquee';
import useScrollDirection from '../hook/useScrollDirection';

const Marquee1 = () => {
	let direction = useScrollDirection();
	return (
		<>
			<div className='my-[6rem] select-none'>
				<Marquee
					className='font-bold text-9xl uppercase text-[#2c385b]'
					direction={direction === 'down' ? 'right' : 'left'}
					autoFill>
					--- UI / UX --- Web Development --- FrontEnd --- BackEnd ---
				</Marquee>
				<Marquee
					className='font-bold text-9xl uppercase text-[#2c385b]'
					direction={direction !== 'down' ? 'right' : 'left'}
					autoFill>
					--- Let's Dive In! ---
				</Marquee>
			</div>
		</>
	);
};

export default Marquee1;
