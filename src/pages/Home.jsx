import { useState, useEffect, useContext } from 'react'

import { SearchContext } from '../App';

import { Sort } from '../components/Sort'
import { Categories } from '../components/Categories'
import { PizzaBlock } from '../components/PizzaBlock'
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton'
import Pagination from '../components/Pagination'


export default function Home() { 
	const { searchValue } = useContext(SearchContext);

	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	//* Sort states
	const [categoryIndex, setCategoryIndex] = useState(0);
	const [sortType, setSortType] = useState({
		name: 'популярности (desc)',
		sort: 'rating'
	})

	//* Pagination state 
	const [currentPage, setCurrentPage] = useState('1');


	useEffect(() => {
		setIsLoading(true);

		const category = categoryIndex > 0 ? `&category=${categoryIndex}` : '';
		const sorted = `&sortBy=${sortType.sort.replace("-", "")}`;
		const order = `&order=${sortType.sort.includes('-') ? 'asc' : 'desc'}`;

		fetch(`https://62ea2bcaad295463258626d6.mockapi.io/pizzas?page=${currentPage}&limit=4${category}${sorted}${order}&search=${searchValue}`)
			.then((res) => res.json())
			.then((data) => {
				setItems(data);
				setIsLoading(false)
			});
		// window.scrollTo(0, 0);
	}, [categoryIndex, sortType, currentPage, searchValue]);

	return (
		<div className='container'>
			<div className="content__top">
				<Categories value={categoryIndex} onChangeCategory={(index) => setCategoryIndex(index)} />
				<Sort value={sortType.name} onSelectedSort={(obj) => setSortType(obj)} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					isLoading
						? [...new Array(4)].map((_, index) => <PizzaBlockSkeleton
							key={index}
						/>
						)
						: items.map(
							obj => <PizzaBlock
								key={obj.id}
								{...obj}
							/>
						)
				}
			</div>
			<Pagination onPageChanging={num => setCurrentPage(num)} />
		</div>
	)
}
