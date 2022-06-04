import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PropertyType = () => {
	const [propertyType, setPropertyType] = useState('');

	useEffect(() => {
		const fetchProperty = async () => {
			const { data } = await axios.get(
				'http://localhost:1337/api/properties?populate[name]'
			);
			setPropertyType(data);
		};
		fetchProperty();
	}, []);

	return (
		<div className='h-[300px] z-10 flex items-center'>
			{propertyType &&
				propertyType.data.map((property) => (
					<div
						className='flex gap-4 h-full p-2 flex-col rounded-md overflow-hidden'
						key={property.id}
					>
						<img
							src={property.attributes.image}
							alt='placeholder'
							className='h-3/4 object-cover rounded-md w-[200px]'
						/>
						<div>
							<h1 className='text-gray-800 font-semibold'>
								{property.attributes.type}
							</h1>
							<p className='text-gray-500'>858,567 hotels</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default PropertyType;
