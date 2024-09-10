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
					<h2 className='mx-10'>Web-Development</h2>
					<h2 className='mx-10'>FrontEnd</h2>
					<h2 className='mx-10'>BackEnd</h2>
				</Marquee>
				<Marquee
					className='font-bold text-9xl uppercase text-[#2c385b]'
					direction={direction !== 'down' ? 'right' : 'left'}
					autoFill>
					<h2 className='mx-10'>Web-Development</h2>
					<h2 className='mx-10'>FrontEnd</h2>
					<h2 className='mx-10'>BackEnd</h2>
				</Marquee>
			</div>
		</>
	);
};

export default Marquee1;
