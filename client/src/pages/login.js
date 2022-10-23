import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import { registerStart, registerUser } from '../utils/features/auth/authSlice';

const Login = () => {
	const dispatch = useDispatch();

	const [isLogin, setIsLogin] = useState(false);
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		email: '',
		conformPassword: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(registerStart);
		if (isLogin) {
			const formData = {
				password,
				email,
			};
			const { data } = await axios.post('/api/auth', formData);
			dispatch(registerUser({ payload: data }));
		}
	};
	const { username, password, email, conformPassword } = formData;

	return (
		<div className=' w-screen min-h-[70vh]  grid place-items-center mb-4 '>
			<h1 className='text-center text-3xl md:text-5xl py-8'>
				{!isLogin ? 'register' : 'login'}
			</h1>
			<form
				onSubmit={handleSubmit}
				className=' w-[60vw]  flex items-center justify-center flex-col gap-5   '
			>
				{!isLogin && (
					<div className='flex flex-col w-3/4'>
						<label htmlFor='username'>username</label>
						<input
							type='text'
							name='username'
							value={username}
							onChange={handleChange}
							placeholder='username'
							className='focus:border-b-2 border-gray-400 focus:border-gray-400 focus:shadow-md focus:border-0 focus:ring-0 bg-slate-100'
						/>
					</div>
				)}
				<div className='flex flex-col w-3/4 '>
					<label htmlFor='email'>email</label>
					<input
						type='email'
						name='email'
						value={email}
						onChange={handleChange}
						placeholder='enter email'
						className='focus:border-b-2 border-gray-400 focus:border-gray-400 focus:shadow-md focus:border-0 focus:ring-0 bg-slate-100'
					/>
				</div>
				<div className='flex flex-col w-3/4'>
					<label htmlFor='password'>password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={handleChange}
						placeholder='password'
						className='focus:border-b-2 border-gray-400 focus:border-gray-400 focus:shadow-md focus:border-0 focus:ring-0 bg-slate-100'
					/>
				</div>
				{!isLogin && (
					<div className='flex flex-col w-3/4'>
						<label htmlFor='password'>confirm password</label>
						<input
							type='password'
							name='conformPassword'
							value={conformPassword}
							onChange={handleChange}
							placeholder='confirm password'
							className='focus:border-b-2 border-gray-400 focus:border-gray-400 focus:shadow-md focus:border-0 focus:ring-0 bg-slate-100'
						/>
					</div>
				)}
				<button type='submit'> send</button>
			</form>

			<span className='pt-3 flex gap-2'>
				already have account{' '}
				<p
					onClick={() => setIsLogin(!isLogin)}
					className=' underline text-blue-700 cursor-pointer hover:text-blue-500  transition-all delay-75 ease-linear '
				>
					{!isLogin ? 'login' : 'register'}
				</p>{' '}
			</span>
		</div>
	);
};

export default Login;
