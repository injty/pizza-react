import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Search from "./Search";
import logotype from "../assets/img/pizza-logo.svg";
import { TbShoppingCart } from "react-icons/tb";

export default function Header() {
  const { totalPrice, totalCount } = useSelector((state) => state.cart);

  React.useEffect(() => {}, []);

  return (
    <div className='header'>
      <div className='container'>
        <Link to='/'>
          <div className='header__logo'>
            <img width='38' src={logotype} alt='Pizza logo' />{" "}
            <div>
              {" "}
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className='header__cart'>
          <Link to='/cart' className='button button--cart'>
            <span>{totalPrice} ₽</span>
            <div className='button__delimiter'></div>
            <TbShoppingCart />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
