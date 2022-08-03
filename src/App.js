import React from 'react'

import Header from './components/Header'
import { Sort } from './components/Sort'
import { Categories } from './components/Categories'
import { PizzaBlock } from './components/PizzaBlock'
import { Testovij } from './components/Testovij'

import './scss/app.scss'

const pizzas = []

export default function App() {
  // https://62ea2bcaad295463258626d6.mockapi.io/pizzas  

  return (
    <div className="wrapper">
      <Testovij />

      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            {/* <Categories /> */}
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzas.map(obj =>
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
