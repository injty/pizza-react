// store
import { useSelector, useDispatch } from 'react-redux';
import { setIndex } from '../../store/slices/categoryIndexSlice';

export function Categories() {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]

	const dispatch = useDispatch();
	const categoryIndex = useSelector((state) => state.category.index);

	const changeCategoryId = (i) => {
		dispatch(setIndex(i));
	}


	return (
		<div className="categories">
			<ul>
				{categories.map((category, i) =>
					<li key={i}
						className={categoryIndex === i ? "active" : ""}
						onClick={() => changeCategoryId(i)}>
						{category}
					</li>
				)}
			</ul>
		</div>
	)
}
