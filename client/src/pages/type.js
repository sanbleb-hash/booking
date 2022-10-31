import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getByType } from '../utils/features/hotels/hotelsSlice';

const Type = () => {
	const { typeId } = useParams();
	const dispatch = useDispatch();
	const { hotels } = useSelector((state) => state.hotels);

	useEffect(() => {
		dispatch(getByType(typeId));

		console.log(hotels);
	}, [dispatch]);

	return <div className='w-screen min-h-screen bg-slate-100'>{typeId}</div>;
};

export default Type;
