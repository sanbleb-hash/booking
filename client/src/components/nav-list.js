import { MdSingleBed, MdAttractions, MdLocalTaxi } from 'react-icons/md';
import { CgAirplane } from 'react-icons/cg';
import { FaCar } from 'react-icons/fa';

export const navDetails = [
	{ caption: 'stays', link: '/hotels', icon: <MdSingleBed /> },
	{ caption: 'filghts', link: '/flights', icon: <CgAirplane /> },
	{ caption: 'car rentals', link: '/car-rentals', icon: <FaCar /> },
	{ caption: 'attractions', link: '/attractions', icon: <MdAttractions /> },
	{ caption: 'Airport taxis', link: '/airport-taxis', icon: <MdLocalTaxi /> },
];
