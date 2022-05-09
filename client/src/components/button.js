import React from 'react';

const Button = ({ title, color, bg, margin, type }) => {
	return (
		<button
			className={`px-4 rounded-sm mx-3 py-2  bg-white capitalize font-semibold`}
			type={type}
			style={{
				color: color,
				margin: margin,
				background: bg,
			}}
		>
			{title}
		</button>
	);
};

export default Button;
