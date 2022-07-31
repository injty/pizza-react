import React from 'react'

import Header from './components/Header'
import { Sort } from './components/Sort'
import { Categories } from './components/Categories'
import { PizzaBlock } from './components/PizzaBlock'
import { Testovij } from './components/Testovij'

import './scss/app.scss'





export default function App() {
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
            <PizzaBlock title='Meksikanskaya' price={345} />
            <PizzaBlock title='Italianskaya' price={333} />
          </div>

        </div>
      </div>
    </div>

  )
}
