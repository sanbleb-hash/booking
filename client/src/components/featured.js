import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../utils/features/hotels/hotelsSlice';

const Featured = () => {
	const { isLoading, hotels } = useSelector((state) => state.hotels);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getHotels());
	}, [dispatch]);
	const list = [
		'https://media.istockphoto.com/photos/classic-italian-appartement-picture-id1290254343?b=1&k=20&m=1290254343&s=170667a&w=0&h=fjFhURiEyDW8au7_iwhjkpxTvFzGM9bFY4SZxzlyMzU=',
		'https://www.istockphoto.com/photo/office-and-appartement-building-gm184624712-17923255?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fappartement&utm_term=appartement%3A%3A%3A',
		'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXBwYXJ0ZW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
	];

	if (isLoading) <span>loading...</span>;
	return (
		<section className='w-[90vw] mx-auto bg-slate-100 pt-16'>
			<div className='grid grid-rows-2 grid-cols-3 gap-4 h-[70vh]'>
				<div className='col-span-3 flex gap-3   '>
					{hotels?.map((hotel, i) => (
						<div
							className=' relative flex-1 bg-gray-400 rounded-xl overflow-hidden'
							key={hotel._id}
						>
							{list.map((p, idx) => (
								<img
									key={idx}
									src={p}
									alt='captown'
									className='w-full object-cover h-full'
								/>
							))}
							<div className='absolute top-3 left-3 flex-col items-start flex text-white justify-center'>
								<h1 className=' text-2xl'>{hotel.city}</h1>
								<p>450, 000 properties</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Featured;
