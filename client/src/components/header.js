import React from 'react';
import Button from './button';
import SearchComponent from './searchComponent';

const Header = () => {
	return (
		<header className='w-screen h-[40vh] bg-brand-primary pt-9 relative'>
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
					color={'#f5f5f5'}
					bg={'#3498DB'}
					margin={'10px'}
					type={'button'}
					style={{
						border: '2px solid #f5f5f5',
						borderRadius: '50px',
						padding: '100px',
						fontSize: '1.5rem',
						fontWeight: 'bold',
						color: 'red',
					}}
				/>
			</div>
			<SearchComponent />
		</header>
	);
};

export default Header;
