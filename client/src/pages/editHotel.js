import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { IoMdSend } from 'react-icons/io';
import { RiLoader4Fill } from 'react-icons/ri';
import { editHotel } from '../utils/features/hotels/hotelsSlice';
import Spinner from '../components/spinner';

const CreatedHotel = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [loading, setIsLoading] = useState(false);

	const [showUpload, setShowUpLoad] = useState(false);
	const user = useSelector((state) => state.auth.user);
	const { isLoading, hotel } = useSelector((state) => state.hotels);

	const [formData, setFormData] = useState({
		user: hotel?.user,
		name: hotel.name || '',
		city: hotel.city || '',
		description: hotel.description || '',
		type: hotel.type || '',
		address: hotel.address || '',
		distance: hotel.distance || '',
		cheapestPrice: hotel.cheapestPrice || '',
		photo: {},
	});

	const handleChange = (e) => {
		if (e.target.files) {
			setFormData((prevState) => ({
				...prevState,
			}));
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		const token = user?.token;

		dispatch(editHotel(formData, token))
			.unwrap()
			.then(() => {
				// We got a good response so navigate the user
				navigate('/');
				toast.success('your attraction has been successfully updated!');
			})
			.catch(toast.error);
	};

	const upLoadToCloudnary = async (e, imageField = 'photo') => {
		e.preventDefault();
		const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/upload`;
		try {
			setShowUpLoad(true);
			const {
				data: { signature, timestamp },
			} = await axios.post(
				process.env.REACT_APP_BACKEND_API + '/api/resource/upload'
			);

			const upload = e.target.files[0];
			const formInput = new FormData();

			formInput.append('file', upload);
			formInput.append('signature', signature);
			formInput.append('timestamp', timestamp);

			formInput.append('api_key', process.env.REACT_APP_CLOUDINARY_API_KEY);
			const { data } = await axios.post(url, formInput, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});

			setShowUpLoad(false);
			toast.success('image successfully uploaded');
			setFormData({
				...formData,
				photo: { photo: data.secure_url, public_id: data.public_id },
			});
		} catch (err) {
			toast.error({ message: err.message });
		}
	};
	if (isLoading) {
		<Spinner />;
	}

	const {
		name,
		city,
		description,
		type,
		address,
		distance,
		cheapestPrice,
		photo,
	} = formData;

	return (
		<div className=' w-screen min-h-[70vh]  grid place-items-center mb-4 text-gray-600   '>
			<h1 className='text-center text-3xl md:text-5xl py-8'>
				add more or twick your attraction
			</h1>

			<form
				onSubmit={handleSubmit}
				className=' w-[60vw]  flex items-center justify-center flex-col gap-5 mx-20  '
			>
				<label
					className='text-lg text-gray-400 pb-2 self-center md:self-start flex items-center gap-4 md:pl-28 '
					htmlFor='photo'
				>
					click to add burner photo <HiOutlinePhotograph size={30} />
				</label>

				{showUpload && (
					<RiLoader4Fill className=' animate-spin' fill='green' size={32} />
				)}

				<input
					hidden
					type='file'
					id='photo'
					onChange={upLoadToCloudnary}
					placeholder='cheapest price'
					className='focus:border-b-2 border-gray-400 focus:border-gray-400 focus:shadow-md focus:border-0 focus:ring-0 bg-slate-100'
				/>
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
					<textarea
						type='text'
						name='description'
						value={description}
						onChange={handleChange}
						placeholder='enter description'
						className='focus:border-b-2 border-gray-400 focus:border-gray-400 focus:shadow-md focus:border-0 focus:ring-0 bg-slate-100'
					/>
				</div>
				{photo && photo.length && (
					<input type='text' disabled value={photo.photo} />
				)}

				<button className=' self-end  ' type='submit'>
					{' '}
					{loading ? (
						<RiLoader4Fill className=' animate-spin text-blue-900 size={25} ' />
					) : (
						<span className='flex gap-2 items-center hover:border border-blue-900 hover:text-white px-4 py-1 hover:bg-blue-200 transition-all ease-linear '>
							post <IoMdSend size={25} />
						</span>
					)}
				</button>
			</form>
		</div>
	);
};

export default CreatedHotel;
