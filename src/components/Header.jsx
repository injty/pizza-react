// store
import {useSelector} from "react-redux";

// router
import {Link} from "react-router-dom";

// components
import Search from "./Search";

// images
import logotype from "../assets/img/pizza-logo.svg";

// icons
import {TbShoppingCart} from "react-icons/tb";

export default function Header() {
	const {total, items} = useSelector((state) => state.cart);

	return (
		<div className='header'>
			<div className='container'>
				<Link to='/'>
					<div className='header__logo'>
						<img
							width='38'
							src={logotype}
							alt='Pizza logo'
						/>
						<div>
							<h1>React Pizza</h1>
							<p>самая вкусная пицца во вселенной</p>
						</div>
					</div>
				</Link>
				<Search />
				<div className='header__cart'>
					<Link
						to='/cart'
						className='button button--cart'>
						<span>{total} ₽</span>
						<div className='button__delimiter'></div>
						<TbShoppingCart />
						<span>{items.length}</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
