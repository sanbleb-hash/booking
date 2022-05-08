import React from 'react';

const Button = ({ title, text, color, margin, type, size }) => {
	return (
		<button
			className={`px-4 rounded-sm mx-3 py-2  text-white capitalize font-semibold bg-${color} text-brand-primary`}
			style={{ backgroundColor: color, margin: margin }}
			type={type}
		>
			{title}
		</button>
	);
};

export default Button;
