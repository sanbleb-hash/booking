import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import NavBar from './components/navBar';
import Home from './pages/home';
import Hotel from './pages/hotels';
import Login from './pages/login';
import SearchPage from './pages/searchPage';
import SingleHotel from './pages/singleHotel';

function App() {
	return (
		<main className=' font-poppins  '>
			<Router>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/hotel' element={<Hotel />} />
					<Route path='/search' element={<SearchPage />} />
					<Route path='/hotels/:id' element={<SingleHotel />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}

export default App;
