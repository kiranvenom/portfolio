import { useTransform, useScroll, motion } from 'framer-motion';
import img1 from '../assets/worksImg/gulfline.png';

const ImageParallax = () => {
	const { scrollY } = useScroll();

	const y = useTransform(scrollY, [900, 0], ['20%', '0%']);
	const marginTop = useTransform(scrollY, [0, 200], ['2.5rem', '0rem']);

	return (
		<div className='h-screen bg-slate-300 flex justify-center overflow-hidden'>
			<motion.div
				className='w-[80vw] h-full bg-cover bg-center'
				style={{
					backgroundImage: `url(${img1})`,
					backgroundPositionY: y,
					marginTop: marginTop,
				}}></motion.div>
		</div>
	);
};

export default ImageParallax;
