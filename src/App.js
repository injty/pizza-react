import React, { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/slices/counterSlice';

// import components
import Header from './components/Header';

// import pages
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

import './scss/app.scss'

export const SearchContext = createContext('');

export default function App() {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();	

	const [searchValue, setSearchValue] = useState('');

	return (
		<div className="wrapper">

			<button onClick={() => dispatch(decrement())}>Down</button>
			<div>{count}</div>
			<button onClick={() => dispatch(increment())}>Up</button>

			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<div className="content">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</SearchContext.Provider>
		</div>
	)
}
