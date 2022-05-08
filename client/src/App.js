import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './pages/home';
import Hotels from './pages/hotels';
import SingleHotel from './pages/singleHotel';

function App() {
	return (
		<main className=' font-poppins  '>
			<Router>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/hotels' element={<Hotels />} />
					<Route path='/hotels/:id' element={<SingleHotel />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
