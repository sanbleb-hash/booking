import React, { useState } from 'react';

const SearchPage = () => {
	const search = JSON.parse(localStorage.getItem('searchOptions'));
	const chechIn = search.dates[0].startDate;
	const chechout = search.dates[0].endDate;

	const [formData, setFormData] = useState({
		destination: search.destination || '',
		chechInDates: chechIn,
		chechout,

		minPrice: 0,
		maxPrice: 0,
		adults: search.occupants.adults || 1,
		children: search.occupants.children || 0,
		rooms: search.occupants.rooms || 1,
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const {
		destination,
		chechInDates: dates,
		minPrice,
		maxPrice,
		adults,
		children,
		rooms,
	} = formData;

	return (
		<section className='w-screen py-[40vh ] min-h-screen bg-slate-100'>
			<h1 className=' pb-5 text-2xl text-gray-700 text-center py-5'>
				Search Results
			</h1>
			<div className='grid grid-cols-3 items-start w-[90vw] mx-auto '>
				<form className='flex flex-col items-center max-w-[300px] justify-center'>
					<div
						className='flex flex-col  rounded-lg text-gray-500 bg-yellow-400
            p-4'
					>
						<h1 className='text-left  text-xl font-semibold text-gray-600'>
							search
						</h1>
						<div className='flex py-2 flex-col'>
							<label className='text-gray-500'>destination</label>
							<input
								onChange={handleChange}
								type='text'
								name='destination'
								value={destination}
								className='border-0 focus:ring-0 text-gray-500 text-sm rounded-md p-1 pl-4 right-0'
							/>
						</div>
						<div className='flex py-2 flex-col'>
							<label className='text-gray-500'>check in dates</label>
							<input
								onChange={handleChange}
								type='text'
								name='dates'
								value={dates.toLocaleString('us')}
								className='border-0 focus:ring-0 text-sm rounded-md p-1 pl-4 right-0'
							/>
						</div>
						<div>
							<p>Options</p>
							<div className='flex justify-between items-center py-1 gap-3 '>
								<label className='text-sm text-gray-500'>
									min price per night
								</label>
								<input
									onChange={handleChange}
									type='number'
									name='minPrice'
									value={minPrice}
									className='border-0 focus:ring-0 text-sm rounded-md w-20 p-1 pl-4 right-0'
								/>
							</div>
							<div className='flex justify-between items-center py-1 gap-3 '>
								<label className='text-sm text-gray-500'>
									max price per night
								</label>
								<input
									onChange={handleChange}
									type='number'
									name='maxPrice'
									value={maxPrice}
									className='border-0 focus:ring-0 text-sm rounded-md w-20 p-1 pl-4 right-0'
								/>
							</div>
							<div className='flex justify-between items-center py-1 gap-3 '>
								<label className='text-sm text-gray-500'>adults</label>
								<input
									onChange={handleChange}
									type='number'
									name='adults'
									value={adults}
									className='border-0 focus:ring-0 text-sm rounded-md w-20 p-1 pl-4 right-0'
								/>
							</div>
							<div className='flex justify-between items-center py-1 gap-3 '>
								<label className='text-sm text-gray-500'>children</label>
								<input
									onChange={handleChange}
									type='number'
									name='children'
									value={children}
									className='border-0 focus:ring-0 text-sm rounded-md w-20 p-1 pl-4 right-0'
								/>
							</div>
							<div className='flex justify-between items-center py-1 gap-3'>
								<label className='text-sm text-gray-500'>rooms</label>
								<input
									onChange={handleChange}
									type='number'
									name='rooms'
									value={rooms}
									className='border-0 focus:ring-0 h-[30px] text-sm rounded-md w-20 p-1 pl-4 right-0'
								/>
							</div>
						</div>
						<button
							type='submit'
							className='bg-blue-500 hover:bg-blue-700 mt-3 text-white font-bold py-2 px-4 rounded-md'
						>
							{' '}
							search
						</button>
					</div>
				</form>

				<aside className='flex flex-col items-start col-span-2'>
					<div className='flex  border border-gray-300 shadow-md w-full items-start h-[150px]'>
						<div className='flex gap-4 h-full p-2 flex-col rounded-md overflow-hidden'>
							<img
								src='https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg'
								alt='placeholder'
								className='h-full object-cover rounded-md w-[200px]'
							/>
						</div>
						<div className='flex  gap-4 h-full p-2 items-start justify-between '>
							<div className='p-2 flex-col flex '>
								<h1 className='text-gray-800 font-semibold pb-2'>
									pastena hotels
								</h1>
								<small className='max-w-max bg-green-500 px-1 rounded-sm text-gray-50'>
									8free airport taxis
								</small>
								<small className='  rounded-sm text-gray-500'>
									studio apartments with gyser
								</small>
								<small className='  rounded-sm text-green-300'>
									free cancellation
								</small>
								<small className='  rounded-sm  text-green-500'>
									you can cancel anytime before check in
								</small>
							</div>

							<div className='flex-col flex items-start '>
								<h1 className='text-gray-800 font-semibold pb-2 '>excelent</h1>
								<small className='max-w-max bg-green-500 px-1 rounded-sm text-gray-50'>
									$123/night
								</small>

								<small className='  rounded-sm text-gray-500'>
									incluides taxes
								</small>
								<button
									className='  rounded-sm
                        mt-4 px-2 text-sm 
                        border border-gray-200
hover:bg-green-300 hover:border-green-500
                          text-gray-50 bg-green-500'
								>
									see availability
								</button>
							</div>
						</div>
					</div>
				</aside>
			</div>
		</section>
	);
};

export default SearchPage;
