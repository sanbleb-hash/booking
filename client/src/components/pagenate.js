import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchHotels } from '../utils/features/hotels/hotelsSlice';

const Pagenate = ({ destination }) => {
	const { page, pages } = useSelector((state) => state.hotels);
	const dispatch = useDispatch();

	return (
		<div>
			{pages > 1 && (
				<div className='flex items-center gap-6 pl-20'>
					{page > 1 && (
						<button
							onClick={() => {
								dispatch(searchHotels(`${destination},${page - 1}`));
							}}
						>
							prev
						</button>
					)}
					<button
						onClick={() => {
							dispatch(searchHotels(`${destination},${page + 1}`));
						}}
					>
						next
					</button>{' '}
				</div>
			)}
		</div>
	);
};

export default Pagenate;
