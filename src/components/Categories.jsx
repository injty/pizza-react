import React from 'react'

export function Categories() {
  const [categoryIndex, setCategoryIndex] = React.useState(0)
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  const onClickChangeCategoryIndex = (i) => {
    setCategoryIndex(i)
  }

  return (
    <div className="categories">
      <ul>
        {
          categories.map((category, index) =>
            <li
              key={index}
              className={
                categoryIndex === index ? "active" : ""
              }
              onClick={() => onClickChangeCategoryIndex(index)}
            >
              {category}
            </li>
          )
        }
      </ul>
    </div>
  )
}