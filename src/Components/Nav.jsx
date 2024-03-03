import React, { useState, useEffect } from 'react';
import lofiAudio from '../assets/audio/lofi.mp3';
import { MdMusicNote } from 'react-icons/md';
import { MdMusicOff } from 'react-icons/md';

const MyComponent = () => {
	const [isPlaying, setIsPlaying] = useState(false);

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
		<nav className='flex text-white fixed top-0 w-full max-w-[1200px] z-10 backdrop-blur-md rounded-full mt-6 navBorder left-[50%]'>
			<div className='logo ml-6'>Kiran</div>
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
			<div className='menu mr-6'>Menu</div>
		</nav>
	);
};

export default MyComponent;
