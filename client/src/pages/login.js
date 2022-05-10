import React, { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
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
	const handleSubmit = (e) => {
		e.preventDefault();
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
							className=''
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
						className='w-full'
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
						className=''
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
							className=''
						/>
					</div>
				)}
				<button type='submit'></button>
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
