import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import NavBar from './components/navBar';
import CreateHotel from './pages/createHotel';
import Home from './pages/home';
import CreatedHotel from './pages/editHotel';
import Hotels from './pages/hotels';
import Login from './pages/login';
import SearchPage from './pages/searchPage';
import Hotel from './pages/singleHotel';
import Type from './pages/type';

function App() {
	return (
		<main className=' font-poppins  '>
			<Router>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/hotels' element={<Hotels />} />
					<Route path='/search' element={<SearchPage />} />
					<Route path='/hotels/:id' element={<Hotel />} />
					<Route path='/create-hotels' element={<CreateHotel />} />
					<Route path='/edit-hotel' element={<CreatedHotel />} />

					<Route path='/featured/:typeId' element={<Type />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}

export default App;
