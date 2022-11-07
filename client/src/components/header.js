import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './button';
import SearchComponent from './searchComponent';

const Header = () => {
	const navigate = useNavigate();

	return (
		<header className='w-screen h-[50vh] bg-brand-primary pt-9 relative'>
			<div className='w-[90vw] text-white mx-auto '>
				<h1 className='text-xl md:text-3xl lg:text-5xl pb-5 font-semibold tracking-wider'>
					A lifetime of discounts? It's Genius.
				</h1>
				<h3 className=' text-sm md:text-lg  lg:text-2xl w-[80%] leading-10 tracking-wide  '>
					Get rewarded for your travels – unlock instant savings of 10% or more
					with a free Booking.com account.
				</h3>
				<span className='mt-5 inline-block '>
					<Button
						title={'sign in / register'}
						color={'#f5f5f5'}
						bg={'#3498DB'}
						margin={'10px'}
						type={'button'}
						onClick={() => navigate('/login')}
					/>
				</span>
			</div>
			<SearchComponent />
		</header>
	);
};

export default Header;
