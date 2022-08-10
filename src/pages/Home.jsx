import React, { useState, useEffect } from 'react'

import { Sort } from '../components/Sort'
import { Categories } from '../components/Categories'
import { PizzaBlock } from '../components/PizzaBlock'
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton'


export default function Home() {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	// category
	const [categoryIndex, setCategoryIndex] = React.useState(0)

	useEffect(() => {
		setIsLoading(true);

		const category = categoryIndex > 0 ? `category=${categoryIndex}&order=desc` : '';

		fetch(`https://62ea2bcaad295463258626d6.mockapi.io/pizzas?${category}`)
			.then((res) => res.json())
			.then((data) => {
				setItems(data);
				setIsLoading(false)
			});
		window.scrollTo(0, 0);
	}, [categoryIndex]);

	return (
		<div className='container'>
			<div className="content__top">
				<Categories value={categoryIndex} onChangeCategory={(index) => setCategoryIndex(index)} />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					isLoading
						? [...new Array(6)].map((_, index) => <PizzaBlockSkeleton
							key={index}
						/>
						)
						: items.map(obj =>
							<PizzaBlock
								key={obj.id}
								{...obj}
							/>
						)
				}
			</div>
		</div>
	)
}
