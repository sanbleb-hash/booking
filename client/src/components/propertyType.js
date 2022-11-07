import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getHotels } from '../utils/features/hotels/hotelsSlice';

const PropertyType = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { types } = useSelector((state) => state.hotels);

	useEffect(() => {
		dispatch(getHotels());
	}, [dispatch]);
	console.log(types);

	return (
		<div className='min-h-[300px] z-10 flex flex-wrap items-center mx-auto w-full '>
			{types?.map((property, i) => (
				<div
					className='flex gap-4 h-full p-2 flex-col rounded-md overflow-hidden'
					key={i}
					onClick={() => navigate(`/featured/${property}`)}
				>
					<img
						src={
							property === 'b&b'
								? 'https://media.istockphoto.com/photos/classic-italian-appartement-picture-id1290254343?b=1&k=20&m=1290254343&s=170667a&w=0&h=fjFhURiEyDW8au7_iwhjkpxTvFzGM9bFY4SZxzlyMzU='
								: property === 'hotel'
								? 'https://cdn.pixabay.com/photo/2014/05/18/19/15/walkway-347319__340.jpg'
								: 'https://media.istockphoto.com/id/157334908/photo/motel-sign-sunset.jpg?b=1&s=170667a&w=0&k=20&c=0EUS8XFrdpvd4aP80HpXUemrqaaG3YBFuykcsdQOQeA='
						}
						alt='placeholder'
						className='h-3/4 object-cover rounded-md w-[200px]'
					/>
					<div>
						<h1 className='text-gray-800 font-semibold'>
							{property === 'lodge' ? 'lodge/motel' : property}
						</h1>
					</div>
				</div>
			))}
		</div>
	);
};

export default PropertyType;
