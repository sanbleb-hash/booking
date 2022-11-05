import React, { useState } from 'react';
import { FaBed, FaUser } from 'react-icons/fa';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchHotels } from '../utils/features/hotels/hotelsSlice';

const SearchComponent = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const [options, setOptions] = useState({
		adults: 1,
		children: 0,
		rooms: 1,
	});
	const [showOptins, setShowOptions] = useState(false);

	const [showDatePicker, setShowDatePicker] = useState(false);
	const [text, setText] = useState('');

	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);

	const handleChangeoptions = (name, oparation) => {
		setOptions({
			...options,
			[name]: oparation === 'increase' ? options[name] + 1 : options[name] - 1,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/search?cities=${text}`);
		dispatch(searchHotels(text));
		localStorage.setItem(
			'searchOptions',
			JSON.stringify({ occupants: options, dates: date, destination: text })
		);
	};

	return (
		<div className='absolute w-[90vw] mx-auto h-[30px] bottom-0 left-[5vw] '>
			<form
				onSubmit={handleSubmit}
				className='w-full border-[5px] border-yellow-300 bg-slate-50 flex items-center justify-between   '
			>
				<div className='flex-1 flex items-center pl-5'>
					<FaBed className=' text-2xl  text-gray-400 ' />
					<input
						type='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder='where are you going ?'
						className='h-full w-full border-0 text-gray-400  ring-0 focus:ring-0 active:border-0 py-4'
					/>
				</div>
				<div
					className=' flex items-center pl-5 border-l-[5px] h-full border-r-[5px] text-gray-600 border-yellow-400 px-5 '
					onClick={() => {
						setShowDatePicker((prev) => !prev);
					}}
				>
					{`${format(date[0].startDate, 'MM-dd-yyyy')}  to  ${format(
						date[0].endDate,
						'MM-dd-yyyy'
					)}
                  `}
				</div>
				{showDatePicker && (
					<DateRange
						className='absolute z-50 -bottom-[380px] left-[30vw]'
						editableDateInputs={true}
						onChange={(item) => setDate([item.selection])}
						moveRangeOnFirstSelection={false}
						ranges={date}
					/>
				)}
				<div className=' flex items-center pl-5 gap-4 relative  flex-1 '>
					<FaUser className=' text-2xl  text-gray-400 ' />
					<p
						className=' text-gray-600'
						onClick={() => {
							setShowOptions(!showOptins);
							setShowDatePicker((prev) => !prev);
						}}
					>{`${options.adults} adults, ${options.children} children, ${options.rooms} rooms`}</p>
					{showOptins && (
						<div className='flex z-50 flex-col w-[250px]  shadow-xl bg-blue-200 h-[150px] pb-5 justify-between items-center absolute -bottom-[180px] text-gray-600  '>
							<span className='flex items-center justify-between w-[80%]  text-xl gap-4'>
								<button
									type='button'
									className=' font-semibold active:scale-105 transition-all '
									onClick={() => handleChangeoptions('adults', 'increase')}
								>
									+
								</button>
								adults
								<button
									type='button'
									className=' font-semibold active:scale-105 transition-all '
									disabled={options.adults === 1}
									onClick={() => handleChangeoptions('adults', 'decrease')}
								>
									-
								</button>
							</span>
							<span className='flex items-center justify-between w-[80%] text-xl gap-4'>
								<button
									type='button'
									className=' font-semibold active:scale-105 transition-all '
									onClick={() => handleChangeoptions('children', 'increase')}
								>
									+
								</button>
								children
								<button
									type='button'
									className=' font-semibold active:scale-105 transition-all '
									disabled={options.children === 0}
									onClick={() => handleChangeoptions('children', 'decrease')}
								>
									-
								</button>
							</span>
							<span className='flex items-center justify-between w-[80%] text-xl gap-4'>
								<button
									type='button'
									className=' font-semibold active:scale-105 transition-all '
									onClick={() => handleChangeoptions('rooms', 'increase')}
								>
									+
								</button>
								rooms
								<button
									type='button'
									className='  font-semibold active:scale-105 transition-all '
									disabled={options.rooms === 1}
									onClick={() => handleChangeoptions('rooms', 'decrease')}
								>
									-
								</button>
							</span>
						</div>
					)}
				</div>
				<button
					type='submit'
					className='  border-l-[5px] border-yellow-400 px-4 py-3 text-white bg-blue-600 capitalize font-semibold active:scale-105 transition-all h-full border-2  w-[150px]'
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default SearchComponent;
