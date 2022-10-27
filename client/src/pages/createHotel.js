import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { createHotel } from '../utils/features/hotels/hotelsSlice';

const CreateHotel = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);

	const [formData, setFormData] = useState({
		user: user?._id,
		name: '',
		city: '',
		description: '',
		type: '',
		address: '',
		distance: '',
		cheapestPrice: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		const token = user?.token;
		console.log(token);

		dispatch(createHotel(formData, token));
	};

	const { name, city, description, type, address, distance, cheapestPrice } =
		formData;

	return (
		<div className=' w-screen min-h-[70vh]  grid place-items-center mb-4 text-gray-600   '>
			<h1 className='text-center text-3xl md:text-5xl py-8'>
				create a new attraction
			</h1>

			<form
				onSubmit={handleSubmit}
				className=' w-[60vw]  flex items-center justify-center flex-col gap-5 mx-20  '
			>
				<div className='flex flex-col md:flex-row gap-3 items-center  justify-between mx-auto w-3/4'>
					<div className='flex flex-col flex-1 md:w-[33%] w-full'>
						<label className='text-sm text-gray-400 pb-2' htmlFor='city'>
							city
						</label>
						<input
							type='text'
							name='city'
							value={city}
							onChange={handleChange}
							placeholder='city of the attraction'
							className='focus:border-b-2 border-gray-400 focus:border-gray-400 focus:shadow-md  focus:border-0 focus:ring-0 bg-slate-100'
						/>
					</div>
					<div className='flex flex-col flex-1 md:w-[33%] w-full'>
						<label className='text-sm text-gray-400 pb-2' htmlFor='distance'>
							distance
						</label>
						<input
							type='number'
							name='distance'
							value={distance}
							onChange={handleChange}
							placeholder='distance'
							className='focus:border-b-2 border-gray-400 focus:border-gray-400 focus:shadow-md  focus:border-0 focus:ring-0 bg-slate-100'
						/>
					</div>
					<div className='flex flex-col w-full flex-1 md:w-[33%]'>
						<label className='text-sm text-gray-400 pb-2' htmlFor='type'>
							type
						</label>
						<select
							name='type'
							value={type}
							onChange={handleChange}
							className='focus:border-b-2 w-full border-gray-400 focus:border-gray-400 focus:shadow-md  focus:border-0 focus:ring-0 bg-slate-100'
						>
							<option className='bg-blue-800 text-white'>b&b</option>
							<option className='bg-blue-800 text-white'>hotel</option>
							<option className='bg-blue-800 text-white'>lodge</option>
						</select>
					</div>
				</div>
				<div className='flex flex-col md:flex-row gap-3 items-center  justify-between mx-auto w-3/4'>
					<div className='flex flex-col flex-1 w-full md:w-[33%]'>
						<label className='text-sm text-gray-400 pb-2' htmlFor='name'>
							name{' '}
						</label>
						<input
							type='text'
							name='name'
							value={name}
							onChange={handleChange}
							placeholder='name of the attraction'
							className='focus:border-b-2 border-gray-400 focus:border-gray-400 focus:shadow-md focus:border-0 focus:ring-0 bg-slate-100'
						/>
					</div>

					<div className='flex flex-col flex-1 w-full md:w-[33%] '>
						<label className='text-sm text-gray-400 pb-2' htmlFor='address'>
							address
						</label>
						<input
							type='address'
							name='address'
							value={address}
							onChange={handleChange}
							placeholder='enter address'
							className=' py-2 pl-3 border  border-gray-400 focus:border-0 focus:border-gray-400 focus:shadow-md  focus:ring-0 bg-slate-100'
						/>
					</div>

					<div className='flex flex-col flex-1 w-full md:w-[30%]'>
						<label
							className='text-sm text-gray-400 pb-2'
							htmlFor='cheapestPrice'
						>
							cheapest
						</label>
						<input
							type='number'
							name='cheapestPrice'
							value={cheapestPrice}
							onChange={handleChange}
							placeholder='cheapest price'
							className='focus:border-b-2 border-gray-400 focus:border-gray-400 focus:shadow-md focus:border-0 focus:ring-0 bg-slate-100'
						/>
					</div>
				</div>

				<div className='flex flex-col w-3/4 '>
					<label className='text-sm text-gray-400 pb-2' htmlFor='description'>
						description
					</label>
					<input
						type='text'
						name='description'
						value={description}
						onChange={handleChange}
						placeholder='enter description'
						className='focus:border-b-2 border-gray-400 focus:border-gray-400 focus:shadow-md focus:border-0 focus:ring-0 bg-slate-100'
					/>
				</div>

				<button type='submit'> send</button>
			</form>
		</div>
	);
};

export default CreateHotel;
