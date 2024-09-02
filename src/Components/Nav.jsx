import React, { useState, useEffect } from 'react';
import lofiAudio from '../assets/audio/lofi.mp3';
import { MdMusicNote } from 'react-icons/md';
import { MdMusicOff } from 'react-icons/md';
import { Link } from 'react-router-dom';

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
				<h2 className='cursor-pointer' onClick={openMenu}>
					Menu
				</h2>
			</div>
		</nav>
	);
};

export default MyComponent;
