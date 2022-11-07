import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getHotels, searchHotels } from '../utils/features/hotels/hotelsSlice';

const Location = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const city = useSelector((state) => state.hotels.city);

	useEffect(() => {
		dispatch(getHotels());
	}, [dispatch]);
	const page = 1;

	return (
		<div className='min-h-[300px] z-10 flex flex-wrap items-center mx-auto w-full  '>
			{city?.map((keyword, i) => (
				<div
					className='flex gap-4  p-2 flex-col rounded-md overflow-hidden h-[200px] md:h-[300px]'
					key={i}
					onClick={() => {
						dispatch(searchHotels({ keyword, page }));
						navigate(`/search?cities=${keyword}`);
					}}
				>
					<img
						src={
							keyword === 'joberg'
								? 'https://media.istockphoto.com/photos/johannesburg-sunrise-with-telkom-tower-cityscape-picture-id1170679782?b=1&k=20&m=1170679782&s=170667a&w=0&h=3v7O-SHRY4AUs9wMzUt1UTsDWJAJ5u_Wq1pS36WO0GA='
								: keyword === 'capetown'
								? 'https://media.istockphoto.com/photos/st-james-beach-cape-town-picture-id186254878?b=1&k=20&m=186254878&s=170667a&w=0&h=LNZL9qDvmB_JY2zqPUR6ZrOyk4Yl3_IZZY_V6MqkGBk='
								: keyword === 'durban'
								? 'https://media.istockphoto.com/id/1421536818/photo/silhouette-of-the-durban-sunrise.jpg?b=1&s=170667a&w=0&k=20&c=QeuHsyNZkBRv3Sgrc2-Bmf5Ocvwh8PtLyV0uJgrSYOw='
								: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957__340.jpg'
						}
						alt='placeholder'
						className='h-3/4 object-cover rounded-md w-[200px]'
					/>
					<div>
						<h1 className='text-gray-800 font-semibold'>
							{keyword === 'lodge' ? 'lodge/motel' : keyword}
						</h1>
					</div>
				</div>
			))}
		</div>
	);
};

export default Location;
