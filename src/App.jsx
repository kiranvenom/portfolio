import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './Components/Nav';
import CustomCursor from './Components/CustomCursor';

const App = () => {
	return (
		<>
			<Nav />
			<CustomCursor />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/work' element={<div>fd</div>} />
			</Routes>
		</>
	);
};

export default App;
