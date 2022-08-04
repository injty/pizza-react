import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import { Sort } from './components/Sort'
import { Categories } from './components/Categories'
import { PizzaBlock } from './components/PizzaBlock'
import PizzaBlockSkeleton from './components/PizzaBlock/PizzaBlockSkeleton'
import { Testovij } from './components/Testovij'

import './scss/app.scss'

export default function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("https://62ea2bcaad295463258626d6.mockapi.io/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false)
      })
  }, [])


  return (
    <div className="wrapper">
      <Testovij />

      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading
                ? [...new Array(6)].map((_, index) =>
                  <PizzaBlockSkeleton
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
      </div>
    </div>
  )
}
