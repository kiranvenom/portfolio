const ImageShowCase = ({ image }) => {
	return (
		<div className='h-screen bg-slate-300 flex items-center justify-center'>
			<img className='w-[100vw] h-full object-cover' src={image} alt='' />
		</div>
	);
};

export default ImageShowCase;
