import React from 'react';
import { Route, Routes } from 'react-router-dom';

//! import components
import Header from './components/Header';

//! import pages
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

import './scss/app.scss'

export default function App() {
	const [searchValue, setSearchValue] = React.useState('');

	return (
		<div className="wrapper">
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
			<div className="content">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}
