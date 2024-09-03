import Card from './Card';

const Cards = () => {
	return (
		<>
			<div className='grid grid-cols-2 my-10'>
				<Card myNumber={25} desc='Projects' />
				<Card myNumber={200} desc='DSA Q solved' />
				<Card myNumber={15} desc='Technologies Used' />
				<Card myNumber={50} desc='GitHub Repositories' />
			</div>
		</>
	);
};

export default Cards;
