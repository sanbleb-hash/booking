import React, { useState } from 'react';
import {
	FaArrowAltCircleLeft,
	FaArrowAltCircleRight,
	FaTimes,
} from 'react-icons/fa';

const Hotels = () => {
	const [showModel, setShowModel] = useState(false);
	const [slideNumber, setSlideNumber] = useState(0);
	const photos = [
		{
			src: 'https://images.unsplash.com/photo-1562590980-1bfb0699efd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwZXRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
			alt: 'photo1',
		},
		{
			src: 'https://images.unsplash.com/photo-1586960805232-9ad00a8c0faf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcGV0b3dufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
			alt: 'photo2',
		},
		{
			src: 'https://images.unsplash.com/photo-1584278423151-33142ebe3aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcGV0b3dufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
			alt: 'photo3',
		},
		{
			src: 'https://images.unsplash.com/photo-1599407384287-374f7c6ec113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FwZXRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
			alt: 'photo4',
		},
		{
			src: 'https://images.unsplash.com/photo-1599407384144-77deae48a47a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FwZXRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
			alt: 'photo5',
		},
		{
			src: 'https://images.unsplash.com/photo-1554280678-c139e7e9a5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FwZXRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
			alt: 'photo6',
		},
	];
	const handleOpen = (i) => {
		setShowModel(true);
		setSlideNumber(i);
	};
	const handleslides = (direction) => {
		if (direction === 'left') {
			slideNumber > 0
				? setSlideNumber(slideNumber - 1)
				: setSlideNumber(photos.length - 1);
		} else {
			slideNumber < photos.length - 1
				? setSlideNumber(slideNumber + 1)
				: setSlideNumber(0);
		}
	};

	return (
		<main className='w-screen min-h-screen bg-slate-100 relative '>
			{showModel && (
				<div className='w-screen min-h-[90vh] bg-black/60  inset-0 sticky overflow-hidden'>
					<div className='flex items-center justify-center w-[75vw] h-[60vh] my-20 mx-auto border-2  '>
						<img
							src={photos[slideNumber].src}
							alt={photos[slideNumber].alt}
							className=' object-cover w-full h-full'
						/>

						<FaArrowAltCircleLeft
							className=' cursor-pointer absolute top-1/2 left-14 hover:scale-105 transition-all text-3xl text-slate-200 delay-100 ease-out '
							onClick={(left) => {
								handleslides();
							}}
						/>
						<FaArrowAltCircleRight
							className=' cursor-pointer absolute top-1/2 right-14 hover:scale-105 text-3xl text-slate-200 transition-all delay-100 ease-out'
							onClick={(right) => {
								handleslides();
							}}
						/>
						<span
							className='  absolute right-10 top-5 cursor-pointer   text-slate-200  
                  p-4 bg-gray-600 rounded-full'
						>
							<FaTimes
								className=' cursor-pointer hover:scale-110 transition-all  delay-100 ease-out  text-gray-200 text-2xl '
								onClick={() => setShowModel(false)}
							/>
						</span>
					</div>
				</div>
			)}

			<div className=' w-[90vw] mx-auto flex flex-col '>
				<section className='header-container flex  items-start py-5 justify-between  '>
					<div className=' flex-left-container flex flex-col items-start '>
						<h1 className='pb-5 text-2xl text-gray-700 text-center '>
							tower street hotel
						</h1>
						<div className='flex flex-col items-start '>
							<small className='text-gray-500'>5, boston rd, mst</small>
							<p className=' text-blue-500 text-sm'>
								Excelent location -500m from the center
							</p>
							<p className=' text-gray-600'>
								book a stay from $114 and enjoy the luxury of the tower street
								hotel
							</p>
						</div>
					</div>
					<button className='btn bg-blue-600 text-white hover:bg-opacity-90 px-4 py-2 transition-all delay-100 rounded-md '>
						Reserve or Book Now
					</button>
				</section>

				<section className='py-4'>
					<div className='flex  items-start gap-3 border border-slate-200 p-6 flex-wrap justify-start '>
						{photos.map((photo, index) => (
							<div
								key={index}
								className=' h-[250px]    max-w-[350px] rounded-md overflow-hidden '
							>
								<img
									src={photo.src}
									alt={photo.alt}
									className='w-full object-cover h-full'
									onClick={() => handleOpen(index)}
								/>
							</div>
						))}
					</div>
				</section>
				<section className='grid grid-cols-3 items-start justify-between py-5'>
					<div
						className='flex-description-left
               col-span-2
               '
					>
						<h1 className=' text-gray-800 font-semibold tracking-wide text-lg'>
							stay in the heart of Kraken
						</h1>
						<p className='text-gray-600 tracking-wide pr-4 '>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Perspiciatis numquam dolores a corporis modi ad earum in minus
							excepturi veniam et debitis, quasi repellendus repellat facere
							suscipit vitae ut sint?
						</p>
					</div>
					<div
						className=' flex-description-right
               bg-blue-200
               max-w-[250px]
               p-4 rounded-md
               '
					>
						<h1 className='text-gray-800 font-semibold pb-4 '>
							stay in the heart of Kraken
						</h1>
						<p>location is the best on the internet haha </p>
						<span className=' text-gray-600 py-3 inline-block '>
							<strong>$945</strong>(6 nights)
						</span>
						<button className='btn bg-blue-600 text-white hover:bg-opacity-90 px-4 py-2 transition-all delay-100 rounded-md '>
							Reserve or Book Now
						</button>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Hotels;
