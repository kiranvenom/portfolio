import { useEffect, useState } from 'react';

const Card = ({ myNumber = 20 }) => {
	let inter;
	const [number, setNumber] = useState(0);

	const handleNumber = () => {};

	useEffect(() => {
		inter = setInterval(() => {
			if (number < myNumber) {
				setNumber((prev) => prev + 1);
			} else {
				clearInterval(inter);
			}
		}, 200);

		return () => {
			clearInterval(inter);
		};
	}, [number]);

	return (
		<>
			<div
				onMouseEnter={handleNumber}
				className='p-8 m-4 rounded-3xl flex flex-col justify-between h-[45vh] bg-[#131a2a] card'>
				<h1 className='text-8xl'>
					{number}
					<sup>+</sup>
				</h1>
				<h1 className='self-end text-4xl font-extralight'>Projects</h1>
			</div>
		</>
	);
};

export default Card;
