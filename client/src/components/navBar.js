import React, { useState } from 'react';
import { GiSouthAfricaFlag } from 'react-icons/gi';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { userLogout } from '../utils/features/auth/authSlice';
import Button from './button';
import { navDetails } from './nav-list';

const NavBar = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();

	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<nav className=' w-screen h-[25vh] bg-[#003580] my-auto pt-8  '>
			<div className='nav-container flex flex-col items-start justify-between w-[90vw] h-[18vh] mx-auto  '>
				<div className='top-nav flex items-center justify-between w-full text-white mx-auto '>
					<h1 className='font-semibold text-xl md:text-3xl'>
						<Link to='/'>Booking.com </Link>
					</h1>
					<div className='flex  items-center  justify-center w'>
						<span className='hidden  md:flex items-center justify-center text-2xl '>
							<h3>zar </h3>
							<GiSouthAfricaFlag className='mx-4 rounded-xl shadow-md shadow-slate-300 text-4xl ' />
							<IoMdHelpCircleOutline size='40' />
						</span>
						<div className='btns flex flex-col gap-2 md:flex-row '>
							<button
								className='px-2 text-sm md:text-lg md:px-4 rounded-sm mx-3 py-2  text-white capitalize md:font-semibold border-2 border-slate-100
                        bg-inherit hover:bg-blue-100/10
                        transition-all duration-200
                        '
								type='button'
								onClick={() => {
									navigate('/create-hotels');
								}}
							>
								list your property
							</button>
							{!user && (
								<Button
									title={'register'}
									color={'#003580'}
									size={'10px'}
									type={'button'}
									onClick={() => {
										navigate('/login');
									}}
								/>
							)}
							{user ? (
								<span
									onMouseEnter={() => setIsModalOpen(!isModalOpen)}
									className='text-white text-sm  md:text-lg lg:text-3xl relative px-3 z-50'
								>
									{user?.name}
									{isModalOpen && (
										<span
											className='shadow-md text-sm  md:text-lg shadow-yellow-200 p-3 text-white bg-blue-800 absolute -bottom-16  left-1'
											onMouseEnter={() => setIsModalOpen(true)}
											onMouseLeave={() => setIsModalOpen(false)}
											onClick={() => {
												dispatch(userLogout());
												setIsModalOpen(false);
											}}
										>
											{' '}
											logout
										</span>
									)}
								</span>
							) : (
								<Button
									text={`text-brand-primary`}
									title={'sign in'}
									color={'#003580'}
									margin={'10px'}
									type={'button'}
									className='px-4 py-3 '
									onClick={() => {
										navigate('/login');
									}}
								/>
							)}
						</div>
					</div>
				</div>
				<div className='bottom-nav flex items-center justify-between w-[90vw] lg:w-[60vw] text-white text-xs  md:text-lg lg:text-xl mx-auto  '>
					{navDetails.map((nav, index) => (
						<NavLink
							key={index}
							to={nav.link}
							className={({ isActive }) =>
								isActive
									? ' border-2 border-white py-2 px-4 bg-blue-900 rounded-full'
									: 'rounded-full hover:bg-blue-400/25  px-4 py-3 transition-all duration-200'
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
