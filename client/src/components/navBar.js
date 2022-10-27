import React, { useState } from 'react';
import { GiCheckeredFlag } from 'react-icons/gi';
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

	console.log(user);
	return (
		<nav className=' w-screen h-[25vh] bg-[#003580] my-auto pt-8  '>
			<div className='nav-container flex flex-col items-start justify-between w-[90vw] h-[18vh] m-auto  '>
				<div className='top-nav flex items-center justify-between w-full text-white '>
					<h1 className='font-semibold text-3xl'>
						<Link to='/'>Booking.com </Link>
					</h1>
					<div className='flex items-center justify-center w'>
						<span className='flex items-center justify-center text-2xl '>
							<h3>zar </h3>
							<GiCheckeredFlag className='mx-4 rounded-xl shadow-md shadow-slate-300 text-4xl ' />
							<IoMdHelpCircleOutline size='40' />
						</span>
						<div className='btns '>
							<button
								className='px-4 rounded-sm mx-3 py-2  text-white capitalize font-semibold border-2 border-slate-100
                        bg-inherit hover:bg-blue-100/10
                        transition-all duration-200
                        '
								type='button'
							>
								list your property
							</button>
							<Button
								title={'register'}
								color={'#003580'}
								size={'10px'}
								type={'button'}
								onClick={() => {
									navigate('/login');
								}}
							/>
							{user ? (
								<span
									onMouseEnter={() => setIsModalOpen(!isModalOpen)}
									className='text-white text-3xl relative px-3 z-50'
								>
									{user?.name}
									{isModalOpen && (
										<span
											className='shadow-lg shadow-white p-3 text-white bg-inherit absolute -bottom-16 -left-2'
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
				<div className='bottom-nav flex items-center justify-between w-[60vw] text-white '>
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
