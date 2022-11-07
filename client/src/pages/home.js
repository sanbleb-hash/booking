import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Featured from '../components/featured';
import Header from '../components/header';
import MailList from '../components/mailList';
import PropertyType from '../components/propertyType';
import Spinner from '../components/spinner';
import { getHotels } from '../utils/features/hotels/hotelsSlice';
import Location from './location';

const Home = () => {
	const { isLoading } = useSelector((state) => state.hotels);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getHotels());
	}, [dispatch]);

	if (isLoading) {
		<span className=''>loading...</span>;
	}

	if (isLoading) {
		<Spinner />;
	}
	return (
		<main className=''>
			<Header />
			<Featured />
			<section className='w-[90vw] py-10 mx-auto'>
				<h1 className=' pb-5 text-2xl text-gray-700'>
					Browse by property type
				</h1>
				<PropertyType />
			</section>
			<section className='w-[90vw] py-5 mx-auto'>
				<h1 className=' pb-5 text-2xl text-gray-700'>
					Explore Other Locations
				</h1>
				<Location />
			</section>
			<MailList />
		</main>
	);
};

export default Home;
