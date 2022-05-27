import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Home } from './pages/Home/Home';
import { Admin } from './pages/Admin/Admin';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/home' element={<Home />} />
					<Route path='/admin' element={<Admin />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
