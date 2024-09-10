import React, { useState, useEffect } from 'react';
import lofiAudio from '../assets/audio/lofi.mp3';
import { MdMusicNote } from 'react-icons/md';
import { MdMusicOff } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { RiMenu3Fill } from 'react-icons/ri';
import MagneticButton from './MagneticButton';

const MyComponent = ({ setIsMenuOpen }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const openMenu = () => {
		setIsMenuOpen(true);
	};

	useEffect(() => {
		const audio = new Audio(lofiAudio);
		return () => {
			audio.pause();
			audio.src = '';
		};
	}, []);

	const toggleAudio = () => {
		setIsPlaying(!isPlaying);
	};

	useEffect(() => {
		const audio = new Audio(lofiAudio);
		if (isPlaying) {
			audio.play();
		} else {
			audio.pause();
		}
		return () => {
			audio.pause();
			audio.src = '';
		};
	}, [isPlaying]);

	return (
		<nav className='flex text-white fixed top-0 w-full max-w-[1200px] z-50 backdrop-blur-md rounded-full mt-6 navBorder left-[50%]'>
			<Link to='/' className='logo ml-6'>
				Kiran
			</Link>
			{isPlaying ? (
				<MdMusicNote
					className='cursor-pointer'
					size={20}
					onClick={toggleAudio}
				/>
			) : (
				<MdMusicOff
					className='cursor-pointer'
					size={20}
					onClick={toggleAudio}
				/>
			)}
			<div className='menu mr-6'>
				<div
					className='cursor-pointer flex items-center gap-4'
					onClick={openMenu}>
					<h2>Menu</h2>{' '}
					<MagneticButton>
						<div>
							<RiMenu3Fill
								size={40}
								className='border border-slate-500 rounded-full p-2'
							/>
						</div>
					</MagneticButton>
				</div>
			</div>
		</nav>
	);
};

export default MyComponent;
