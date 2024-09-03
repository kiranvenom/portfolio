import React from 'react';
import { motion } from 'framer-motion';
import { RevealLinks } from './RevealLinks';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const Menu = ({ setIsMenuOpen }) => {
	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const menuVariants = {
		hidden: { y: '100%' },
		visible: { y: '0%', transition: { duration: 0.5 } },
		exit: { y: '100%', transition: { duration: 0.5 } },
	};

	const div1Variants = {
		hidden: { y: '100%', opacity: 0 },
		visible: { y: '0%', opacity: 1, transition: { duration: 0.5 } },
		exit: {
			y: '100%',
			opacity: 0,
			transition: { duration: 0.5 },
		},
	};

	const div2Variants = {
		hidden: { y: '100%', opacity: 0 },
		visible: {
			y: '0%',
			opacity: 1,
			transition: { delay: 0.25, duration: 0.5 },
		},
		exit: {
			y: '100%',
			opacity: 0,
			transition: { delay: 0.5, duration: 0.5 },
		},
	};

	return (
		<motion.div
			initial='hidden'
			animate='visible'
			exit='exit'
			variants={menuVariants}
			style={{ zIndex: 55 }}
			className='fixed top-0 left-0 w-full h-screen bg-[#0D1321]'>
			<motion.div
				variants={div1Variants}
				initial='hidden'
				animate='visible'
				exit='exit'
				className='div1 bg-[#1b1c1e] h-full'>
				{/* Content of div1 */}
				<motion.div
					variants={div2Variants}
					initial='hidden'
					animate='visible'
					exit='exit'
					className='div2 bg-[#121315] h-full'>
					<div className='h-full flex p-20'>
						<div className='w-1/2'>
							<ul className='flex flex-col justify-end h-full'>
								<div onClick={closeMenu}>
									<RevealLinks
										linkName='Projects'
										to='/works'
									/>
								</div>
								<RevealLinks linkName='Services' />
								<RevealLinks linkName='Contacts' />
							</ul>
						</div>
						<div className='w-1/2'>
							<div className='flex justify-end items-end h-full'>
								<div className='flex flex-col h-full justify-between items-end'>
									<h2
										className='cursor-pointer'
										onClick={closeMenu}>
										Close
									</h2>
									<div>
										<h2 className=' font-blatant text-2xl'>
											km060360@gmail.com
										</h2>
										<p className='text-right font-blatant text-xl'>
											+91 9741 734 482
										</p>
										<div className='flex items-center justify-end gap-2 mt-6'>
											<FaLinkedin
												size={30}
												color='#0A66C2'
											/>
											<FaGithub size={30} />
											<MdOutlineMail
												size={30}
												color='red'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Menu;
