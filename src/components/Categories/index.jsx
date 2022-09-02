import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryIndex } from "../../store/slices/categoryIndexSlice.js"

export function Categories() {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]

	return (
		<div className="categories">
			<ul>
				{
					categories.map((category, index) =>
						<li
							key={index}
							className={
								value === index ? "active" : ""
							}
							onClick={() => onChangeCategory(index)}
						>
							{category}
						</li>
					)
				}
			</ul>
		</div>
	)
}
