import React from 'react'
// import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';

const categories = [
  'Все закуски',
  'Горячие закуски',
  'Мясные блюда',
  'Супы',
  'Рыбные блюда',
  'Гриль меню',
  'Фирменные блюда',
]

type CategoriesProps = {
  value: number
  onClickCategory: (i: number) => void
}

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onClickCategory }) => {
    // useWhyDidYouUpdate('Categories', {value ,onClickCategory})

    return (
      <ul className="nav__ul">
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? 'nav__li nav__li--active' : 'nav__li'}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    )
  },
)
