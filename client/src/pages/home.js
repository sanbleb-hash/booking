import React from 'react';
import Featured from '../components/featured';
import Header from '../components/header';
import MailList from '../components/mailList';
import PropertyType from '../components/propertyType';

const Home = () => {
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
			<section className='w-[90vw] py-10 mx-auto'>
				<h1 className=' pb-5 text-2xl text-gray-700'>
					Explore Other Locations
				</h1>
				<PropertyType />
			</section>
			<MailList />
		</main>
	);
};

export default Home;
