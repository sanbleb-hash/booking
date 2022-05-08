import React from 'react';
import { GiCheckeredFlag } from 'react-icons/gi';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import Button from './button';
import { navDetails } from './nav-list';

const NavBar = () => {
	return (
		<nav className=' w-screen h-[38vh] bg-[#003580]  '>
			<div className='nav-container flex flex-col items-start justify-between w-[90vw] h-[30vh] m-auto  '>
				<div className='top-nav flex items-center justify-between w-full text-white '>
					<h1 className='font-semibold text-3xl'>Booking.com</h1>
					<div className='flex items-center justify-center w'>
						<span className='flex items-center justify-center text-2xl '>
							<h3>zar </h3>
							<GiCheckeredFlag className='mx-4 rounded-xl shadow-md shadow-slate-300 text-4xl ' />
							<IoMdHelpCircleOutline size='40' />
						</span>
						<div className='btns '>
							<Button
								title={'list your property'}
								color={'#003580'}
								margin={'10px'}
								type={'button'}
								className='px-4 py-3 text-white'
							/>
							<Button
								title={'register'}
								color={'#f5f5f5'}
								size={'10px'}
								type={'button'}
								className='px-4 py-3 bg-white hover:bg-blue-500'
							/>
							<Button
								text={`text-brand-primary`}
								title={'sign in'}
								color={'#f5f5f5'}
								margin={'10px'}
								type={'button'}
								className='px-4 py-3 '
							/>
						</div>
					</div>
				</div>
				<div className='bottom-nav flex items-center justify-between w-[60vw] text-white '>
					{navDetails.map((nav, index) => (
						<NavLink
							key={index}
							to={nav.link}
							className={({ isActive }) =>
								isActive
									? ' border-2 border-white py-2 px-4 bg-blue-900 rounded-full'
									: 'rounded-full hover:bg-brand-secondary  px-4 py-3 '
							}
						>
							<span className='flex gap-2 items-center '>
								<h4 className='text-2xl'>{nav.icon}</h4>
								{nav.caption}
							</span>
						</NavLink>
					))}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
