import React from 'react';
import { FaNodeJs, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import {
	SiMongodb,
	SiExpress,
	SiVite,
	SiVercel,
	SiTailwindcss,
} from 'react-icons/si';

const iconMap = {
	nodejs: <FaNodeJs size={30} color='#8DC84B' />,
	js: <FaJs size={30} color='#F0DC4E' />,
	react: <FaReact size={30} color='#00D8FF' />,
	mongo: <SiMongodb size={30} color='#599735' />,
	express: <SiExpress size={30} color='#1E1E1E' />,
	vite: <SiVite size={30} color='#9D5CFE' />,
	vercel: <SiVercel size={30} color='#000000' />,
	github: <FaGithub size={30} color='#000000' />,
	tailwind: <SiTailwindcss size={30} color='#38BDF8' />,
};

const IconRenderer = ({ icons }) => {
	return (
		<div className='icon-container flex items-center gap-2 bg-white px-2 py-2 rounded-lg'>
			{icons?.map((iconName) => (
				<span key={iconName} className='icon'>
					{iconMap[iconName] || null}
				</span>
			))}
		</div>
	);
};

export default IconRenderer;
