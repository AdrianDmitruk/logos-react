import React from 'react'
import { useSelector } from 'react-redux'

import { FoodCard, Skeletone, Info } from '../components'

import { useAppDispatch } from '../redux/store'
import { selectFilter } from '../redux/filter/selectors'
import { selectFoodData } from '../redux/food/selectors'
import { fetchFood } from '../redux/food/asyncActions'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const { categoryId, sort, searchValue } = useSelector(selectFilter)
  const { items, status } = useSelector(selectFoodData)

  const categories = [
    'Все закуски',
    'Горячие закуски',
    'Мясные блюда',
    'Супы',
    'Рыбные блюда',
    'Гриль меню',
    'Фирменные блюда',
  ]

  const getFood = async () => {
    const order = sort.sortProperty.includes('-') ? 'desc' : 'asc'
    const sortBy = sort.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    dispatch(
      fetchFood({
        order,
        sortBy,
        category,
        search,
      }),
    )

    window.scrollTo(0, 0)
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
    getFood()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort.sortProperty, searchValue])

  const food = items.map((obj: any) => <FoodCard key={obj.id} {...obj} />)
  const sceletons = [...new Array(5)].map((_, index) => (
    <Skeletone key={index} />
  ))

  return (
    <>
      <section className="mainsection">
        <div className="mainsection__container">
          <div className="mainsection__wrap">
            <div className="mainsection__border"></div>
            <h2 className="mainsection__title">
              {categories.map((categoryName, i) =>
                categoryId === i ? categoryName : '',
              )}
            </h2>
          </div>
          {status === 'error' ? (
            <div>
              <h2>Ошибка загрузки еды</h2>
            </div>
          ) : (
            <div className="mainsection__content">
              {status === 'loading' ? sceletons : food}
            </div>
          )}
        </div>
      </section>
      <Info />
    </>
  )
}

export default Home
