import React from "react";

// store
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";

// icons
import { TbPlus } from "react-icons/tb";

const typeNames = ["тонкое", "традиционное"];

interface IPizzaBlock {
  imageUrl: string;
  name: string;
  types: [];
  sizes: [];
  price: string;
  id: string;
}

export const PizzaBlock = ({ imageUrl, name, types, sizes, price, id }: IPizzaBlock) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: { cart: { items: [] } }) => state.cart);

  // types
  const [activeType, setActiveType] = React.useState<number>(0);

  // sizes
  const [activeSize, setActiveSize] = React.useState<number>(0);

  // pizza counter
  const onClickCounterChange = () => {
    const item = {
      name,
      id,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

  return (
    <div className='pizza-block-wrapper'>
      <div className='pizza-block'>
        <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
        <h4 className='pizza-block__title'>{name}</h4>
        <div className='pizza-block__selector'>
          <ul>
            {types.map((type) => (
              <li key={type} className={types.length < 2 || activeType === type ? "active" : ""} onClick={() => setActiveType(type)}>
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li key={size} className={activeSize === i ? "active" : ""} onClick={() => setActiveSize(i)}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className='pizza-block__bottom'>
          <div className='pizza-block__price'>от {price} ₽</div>
          <div className='button button--outline button--add' onClick={onClickCounterChange}>
            <TbPlus />
            <span>Добавить</span>
            {items && items.map((el: { id: string; count: number }) => id === el.id && <i key={el.id}>{el.count}</i>)}
          </div>
        </div>
      </div>
    </div>
  );
};
