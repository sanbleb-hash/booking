import React from 'react';

const MailList = () => {
	return (
		<div className='w-screen bg-brand-tertiary h-[25vh] md:h-[40vh]  '>
			<div className='flex flex-col items-center py-10  justify-center'>
				<h1 className='text-white  text-center text-lg md:text-2xl pb-4 '>
					Save time, save money!
				</h1>
				<p className=' text-gray-400 text-sm  md:text-lg text-center'>
					Sign up and we'll send the best deals to you
				</p>
				<form className='py-8'>
					<input
						type='email'
						placeholder=' Your email'
						className=' w-[350px] text-gray-700 border-0 ring-0 focus:ring-0 focus-border-0 rounded-md p-2 md:p-4'
					/>
					<button
						type='submit'
						className='bg-blue-600 text-white  rounded-sm px-6
                  ml-4 p-2 md:py-4'
					>
						{' '}
						subscribe
					</button>
				</form>
			</div>
		</div>
	);
};

export default MailList;
