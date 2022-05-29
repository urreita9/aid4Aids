import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Home } from './pages/Home/Home';
import { Admin } from './pages/Admin/Admin';
import { RequireAuth } from './Auth/RequireAuth';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />

					<Route
						path='/admin'
						element={
							<RequireAuth>
								<Admin />
							</RequireAuth>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
