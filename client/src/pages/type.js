import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/spinner';

const Type = () => {
	const navigate = useNavigate();
	const { typeId } = useParams();
	const [typeProperties, settypeProperties] = useState();
	const [loading, setSetLoading] = useState();

	useEffect(() => {
		// get hotels by type
		setSetLoading(true);
		const getByType = async () => {
			const { data } = await axios.get(
				`${process.env.REACT_APP_BACKEND_API}/api/hotels/type?type=${typeId}`
			);
			setSetLoading(false);
			settypeProperties(data);
		};
		getByType();
	}, [typeId]);

	return (
		<section className='text-white min-h-[70vh] w-[90vw] md:w-[80vw] mx-auto bg-gradient-to-r  from-white to-blue-200 flex flex-between flex-col gap-10 p-5  relative  '>
			<Link to='/'>
				<FaArrowAltCircleLeft fill='gray' size={32} />
			</Link>
			{loading ? (
				<Spinner />
			) : (
				<>
					<div className=' flex  items-center justify-center flex-col '>
						<div className='min-w-[75vw] min-h-[100px] bg-gradient-to-r from-blue-700 via-blue-200 to-blue-700 py-3 mt-3 rounded-md shadow-2xl px-5'>
							<h1 className='text-3xl md:text-4xl  '>{typeId}s</h1>
							<p className='px-3 pt-2'>
								check out these beautifull options below
							</p>
						</div>
					</div>

					<article className='mt-6 flex flex-wrap items-center justify-center md:justify-start gap-6 pb-10 '>
						{typeProperties?.length < 1 ? (
							<p className=' self-center text-2xl text-gray-600'>
								{' '}
								nothing to preview yet. 🤦‍♂️{' '}
							</p>
						) : (
							typeProperties?.map((article) => (
								<div
									key={article._id}
									className=' min-w-[30%] h-[200px] shadow-lg shadow-gray-500  rounded-md overflow-hidden relative cursor-pointer '
									onClick={() => navigate(`/hotels/${article._id}`)}
								>
									{' '}
									<h1 className=' absolute top-2 left-2 text-gray-600 bg-blue-200/70 p-2 capitalize'>
										{article.name}
									</h1>
									<img
										className=' w-full h-full object-cover'
										src={article?.photo.photo}
										alt={article.name}
									/>
									<p className=' bg-gray-500/60 text-sm italic p-2 absolute top-1/2 left-1/2 rounded-l-lg  '>
										{article.description.substring(20)}...
									</p>
								</div>
							))
						)}
					</article>
				</>
			)}
		</section>
	);
};

export default Type;
