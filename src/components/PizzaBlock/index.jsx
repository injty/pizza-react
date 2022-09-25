import React, {useState} from "react";

// store
import {useDispatch} from "react-redux";
import {addItem} from "../../store/slices/cartSlice";

// icons
import {TbPlus} from "react-icons/tb";

export function PizzaBlock({imageUrl, name, types, sizes, price, id}) {
	const dispatch = useDispatch();

	// types
	const typeNames = ["тонкое", "традиционное"];
	const [activeType, setActiveType] = useState(0);

	// sizes
	const [activeSize, setActiveSize] = useState(0);

	// pizza counter
	const onClickCounterChange = () => {
		const item = {
			name,
			id,
			price,
			imageUrl,
			size: activeSize,
			type: activeType,
		};
		dispatch(addItem(item));
	};

	return (
		<div className='pizza-block-wrapper'>
			<div className='pizza-block'>
				<img
					className='pizza-block__image'
					src={imageUrl}
					alt='Pizza'
				/>
				<h4 className='pizza-block__title'>{name}</h4>
				<div className='pizza-block__selector'>
					<ul>
						{types.map((type) => (
							<li
								key={type}
								className={
									types.length < 2 || activeType === type ? "active" : ""
								}
								onClick={() => setActiveType(type)}>
								{typeNames[type]}
							</li>
						))}
					</ul>
					<ul>
						{sizes.map((size, i) => (
							<li
								key={size}
								className={activeSize === i ? "active" : ""}
								onClick={() => setActiveSize(i)}>
								{size} sm.
							</li>
						))}
					</ul>
				</div>
				<div className='pizza-block__bottom'>
					<div className='pizza-block__price'>от {price} ₽</div>
					<div
						className='button button--outline button--add'
						onClick={onClickCounterChange}>
						<TbPlus />
						<span>Добавить</span>
						<i>0</i>
					</div>
				</div>
			</div>
		</div>
	);
}
