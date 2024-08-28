import Card from './Card';

const Cards = () => {
	return (
		<>
			<div className='grid grid-cols-2 my-10'>
				<Card myNumber={45} />
				<Card myNumber={5} />
				<Card myNumber={25} />
				<Card myNumber={50} />
			</div>
		</>
	);
};

export default Cards;
