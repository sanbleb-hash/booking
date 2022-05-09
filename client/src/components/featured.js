import React from 'react';

const Featured = () => {
	return (
		<section className='w-[90vw] mx-auto bg-slate-100 pt-16'>
			<div className='grid grid-rows-2 grid-cols-3 gap-4 h-[70vh]'>
				<div className='col-span-3 flex gap-3   '>
					<div className=' relative flex-1 bg-gray-400 rounded-xl overflow-hidden'>
						<img
							src='https://images.unsplash.com/photo-1609024894319-4f497f8c991c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwZXRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
							alt='captown'
							className='w-full object-cover h-full'
						/>
						<div className='absolute top-3 left-3 flex-col items-start flex text-white justify-center'>
							<h1 className=' text-2xl'>capetown</h1>
							<p>450, 000 properties</p>
						</div>
					</div>
					<div className='flex-1 relative bg-gray-400 rounded-xl overflow-hidden'>
						<img
							src='https://images.unsplash.com/photo-1562590980-1bfb0699efd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwZXRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
							alt='stellenbosh'
							className='w-full h-full object-cover'
						/>
						<div className='absolute top-3 left-3 flex-col items-start flex text-white justify-center'>
							<h1 className=' text-2xl'>stellenbosh</h1>
							<p>450, 000 properties</p>
						</div>
					</div>
				</div>
				<div className='col-span-3 gap-3 flex  '>
					<div className='flex-1 relative bg-gray-400 rounded-xl overflow-hidden'>
						<img
							src='https://images.unsplash.com/photo-1609024894319-4f497f8c991c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwZXRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
							alt='capetown'
							className='w-full object-cover h-full'
						/>
						<div className='absolute top-3 left-3 flex-col items-start flex text-white justify-center'>
							<h1 className=' text-2xl'>capetown</h1>
							<p>450, 000 properties</p>
						</div>
					</div>
					<div className='flex-1 relative bg-gray-400 rounded-xl overflow-hidden'>
						<img
							src='https://images.unsplash.com/photo-1609024894319-4f497f8c991c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwZXRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
							alt='capetown'
							className='w-full h-full object-cover'
						/>
						<div className='absolute top-3 left-3 flex-col items-start flex text-white justify-center'>
							<h1 className=' text-2xl'>capetown</h1>
							<p>450, 000 properties</p>
						</div>
					</div>
					<div className='flex-1 relative bg-gray-400 rounded-xl overflow-hidden'>
						<img
							src='https://images.unsplash.com/photo-1609024894319-4f497f8c991c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwZXRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
							alt='capetown'
							className='w-full h-full object-cover'
						/>
						<div className='absolute top-3 left-3 flex-col items-start flex text-white justify-center'>
							<h1 className=' text-2xl'>capetown</h1>
							<p>450, 000 properties</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;
