import { motion } from 'framer-motion';

const EnhancedMinimalButton = ({ children, href }) => {
	return (
		<motion.a
			href={href}
			target='_blank'
			className='relative px-8 py-2 text-lg font-medium text-white border border-[#414141] rounded-full shadow-md focus:outline-none overflow-hidden'
			whileHover={{
				scale: 1.05,
				boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
			}}
			whileTap={{
				scale: 0.95,
			}}>
			<motion.div
				className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20'
				initial={{ x: '-100%' }}
				animate={{ x: '100%' }}
				transition={{
					duration: 1.5,
					ease: 'easeInOut',
					repeat: Infinity,
					repeatType: 'loop',
				}}></motion.div>
			<span className='relative z-10 font-blatant text-2xl'>
				{children}
			</span>
		</motion.a>
	);
};

export default EnhancedMinimalButton;
