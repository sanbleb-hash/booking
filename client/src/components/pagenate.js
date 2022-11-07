import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchHotels } from '../utils/features/hotels/hotelsSlice';

const Pagenate = ({ keyword }) => {
	const [page, setPageUp] = useState(1);
	const { pages } = useSelector((state) => state.hotels);
	const dispatch = useDispatch();

	return (
		<div>
			{pages > 1 && (
				<div className='flex items-center gap-6 pl-20'>
					{page > 1 && (
						<button
							onClick={() => {
								setPageUp(page - 1);
								dispatch(searchHotels({ keyword, page }));
							}}
							className='cursor-pointer hover:border-b hover:border-0 hover:shadow-md hover:shadow-blue-300 transition-all ease-in-out delay-75 border px-3 py-1'
						>
							prev
						</button>
					)}
					{page < pages && (
						<button
							onClick={() => {
								dispatch(searchHotels({ keyword, page }));
								setPageUp(page + 1);
							}}
							className='cursor-pointer hover:border-b hover:border-0 hover:shadow-md hover:shadow-blue-300 transition-all ease-in-out delay-75 border px-3 py-1'
						>
							next
						</button>
					)}{' '}
				</div>
			)}
		</div>
	);
};

export default Pagenate;
