import React from 'react';
import { RiLoader2Fill } from 'react-icons/ri';

const Spinner = () => {
	return (
		<div className=' w-screen h-screen flex items-center justify-center'>
			<RiLoader2Fill className=' text-5xl animate-spin text-sky-500 self-center' />
		</div>
	);
};

export default Spinner;
