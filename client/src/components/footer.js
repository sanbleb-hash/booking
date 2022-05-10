import React from 'react';

import { footerList } from './footerList';

const Footer = () => {
	return (
		<footer>
			<div className='w-screen bg-brand-primary  min-h-[20vh]'>
				<div className='flex flex-col items-center pt-5 justify-center w-full h-full'>
					<button
						className='px-4 rounded-sm mx-3 py-2  text-white capitalize font-semibold border-2 border-slate-100
                        bg-inherit hover:bg-blue-100/10
                        transition-all duration-200
                        '
						type='button'
					>
						list your property
					</button>
					<div
						className=' w-full mt-8 h-[1px] bg-white 
               '
					></div>
				</div>
			</div>
			<div className='w-screen bg-slate-100  min-h-[20vh]'>
				<div className='row'>
					<div className=' w-[90vw] mx-auto py-5 flex items-start justify-between text-gray-500'>
						<div className=''>
							{footerList.map((item) =>
								item.location.name.map((name, index) => (
									<div key={index} className=''>
										<h3 className='text-gray-500 '>{name}</h3>
									</div>
								))
							)}
						</div>
						<div className=''>
							{footerList.map((item) =>
								item.location.description.map((name, index) => (
									<div key={index} className=''>
										<h3 className='text-gray-500 '>{name}</h3>
									</div>
								))
							)}
						</div>
						<div className=''>
							{footerList.map((item) =>
								item.location.attributes.map((name, index) => (
									<div key={index} className=''>
										<h3 className='text-gray-500 '>{name}</h3>
									</div>
								))
							)}
						</div>
						<div className=''>
							{footerList.map((item) =>
								item.location.facilities.map((name, index) => (
									<div key={index} className=''>
										<h3 className='text-gray-500 '>{name}</h3>
									</div>
								))
							)}
						</div>
						<div className=''>
							{footerList.map((item) =>
								item.location.others.map((name, index) => (
									<div key={index} className=''>
										<h3 className='text-gray-500 '>{name}</h3>
									</div>
								))
							)}
						</div>
					</div>

					<h2 className=' text-center text-gray-400 py-5'>
						{' '}
						copyright Blessings of nino mult-medea &copy; {''}
						{new Date().getFullYear()}
					</h2>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
