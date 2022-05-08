import React from 'react';
import Button from './button';

const Header = () => {
	return (
		<header className='w-screen h-[40vh] bg-brand-primary'>
			<div className='w-[90vw] text-white mx-auto '>
				<h1 className='text-5xl pb-5 font-semibold tracking-wider'>
					A lifetime of discounts? It's Genius.
				</h1>
				<h3 className=' text-2xl w-[80%] leading-10 tracking-wide  '>
					Get rewarded for your travels – unlock instant savings of 10% or more
					with a free Booking.com account.
				</h3>
				<Button
					title={'sign in / register'}
					color={'#003580'}
					margin={'10px'}
					type={'button'}
					className='px-4 py-3 bg-white'
				/>
			</div>
		</header>
	);
};

export default Header;
