import React from 'react';
import { RiLoader2Fill } from 'react-icons/ri';

const Spinner = () => {
	return (
		<div className=' w-screen h-screen flex items-center justify-center relative'>
			<RiLoader2Fill className=' text-5xl animate-spin text-sky-500 self-center absolute top-[50%] left-[50%]' />
		</div>
	);
};

export default Spinner;
