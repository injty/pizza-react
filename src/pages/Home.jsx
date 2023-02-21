import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPizzas } from "../store/slices/fetchPizzasSlice";

import { Sort } from "../components/Sort";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import PizzaBlockSkeleton from "../components/PizzaBlock/PizzaBlockSkeleton";
import Pagination from "../components/Pagination";

export default function Home() {
  const dispatch = useDispatch();

  const categoryIndex = useSelector((state) => state.category.index);
  const sortTypeMode = useSelector((state) => state.sort.sortType.mode);
  const currentPage = useSelector((state) => state.page.pageIndex);
  const searchValue = useSelector((state) => state.search.value);
  const { items, status } = useSelector((state) => state.fetchPizzas);

  const getPizzas = async () => {
    const category = categoryIndex > 0 ? `&category=${categoryIndex}` : "";
    const sorted = `&sortBy=${sortTypeMode.replace("-", "")}`;
    const order = `&order=${sortTypeMode.includes("-") ? "asc" : "desc"}`;
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(fetchPizzas({ currentPage, category, sorted, order, search }));
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryIndex, sortTypeMode, currentPage, searchValue]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {
          // I'm very lazy, becouse I don't want to refactor 😒
          status === 'error'
            ? (<div>
              <h2>Error</h2>
              <p>Something went wrong</p>
            </div>) :
            (status === 'loading'
              ? [...new Array(3)].map((_, index) => <PizzaBlockSkeleton key={index} />)
              : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />))
        }
      </div>
      <Pagination />
    </div>
  );
}
