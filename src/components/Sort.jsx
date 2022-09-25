import React from "react";

//store
import {useSelector, useDispatch} from "react-redux";
import {setSortType} from "../store/slices/sortSlice";

export function Sort() {
	const list = [
		{name: "популярности (desc)", mode: "rating"},
		{name: "популярности (asc)", mode: "-rating"},
		{name: "цене (desc)", mode: "price"},
		{name: "цене (asc)", mode: "-price"},
		{name: "алфавиту (desc)", mode: "title"},
		{name: "алфавиту (asc)", mode: "-title"},
	];

	const dispatch = useDispatch();
	const sortType = useSelector((state) => state.sort.sortType);

	const [open, setOpen] = React.useState(false);

	const selectSortItem = (obj) => {
		setOpen(false);
		dispatch(setSortType(obj));
	};

	const sortRef = React.useRef();

	React.useEffect(() => {
		const closeEvent = (event) => {
			if (!event.path.includes(sortRef.current)) {
				setOpen(false);
			}
		};
		document.body.addEventListener("click", closeEvent);

		return () => document.body.removeEventListener("click", closeEvent);
	}, []);

	return (
		<div
			className='sort'
			ref={sortRef}>
			<div className='sort__label'>
				<svg
					width='10'
					height='6'
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
						fill='#2C2C2C'
					/>
				</svg>
				<b>Сортировка по:</b>
				<span onClick={() => setOpen(!open)}>{sortType.name}</span>
			</div>
			{open && (
				<div className='sort__popup'>
					<ul>
						{list.map((obj, index) => (
							<li
								key={index}
								className={sortType.name === obj.name ? "active" : ""}
								onClick={() => selectSortItem(obj)}>
								{obj.name}
							</li>
						))}
						;
					</ul>
				</div>
			)}
		</div>
	);
}
