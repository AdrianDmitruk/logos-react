import React from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Spinner from '../components/Spinner'

import arrow from '../assets/img/svg/arrow.svg'
import buyPage from '../assets/img/svg/buy-page.svg'

const FoolFood: React.FC = () => {
  const [food, setFood] = React.useState<{
    title: string
    imageUrl: string
    description: string
    herf: string
    price: number
    protein: string
    fats: string
    carbohydrates: string
    calories: string
  }>()
  const { id } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchFood() {
      try {
        const { data } = await axios.get(
          'https://6314cc32fa82b738f74e60f3.mockapi.io/items/' + id,
        )
        setFood(data)
      } catch (error) {
        alert('Ошиюка получения еды')
        navigate('/logos-react/')
      }
    }
    fetchFood()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!food) {
    return (
      <>
        <Spinner />
      </>
    )
  }

  return (
    <section className="food">
      <div className="food__container">
        <div className="food__back">
          <Link className="food_back-left" to={'/'}>
            <img src={arrow} alt="arrow" />
          </Link>
          <Link className="food_back-right" to={'/'}>
            Вернуться назад
          </Link>
        </div>
        <div className="food__block">
          <img className="food__block-img" src={food.imageUrl} alt="content" />
          <div className="food__block-info">
            <div className="food__info-header">
              <h3 className="food__header-title">{food.title}</h3>
              <p className="food__header-subtitle">{food.description}</p>
            </div>
            <div className="food__info-footer">
              <div className="food__footer-heft">Вес: {food.herf} г</div>
              <div className="food__footer-pay">
                <button className="food__pay-btn">
                  <div className="food__btn-name">Корзина</div>
                  <div className="food__btn-border"></div>
                  <img className="food__btn-img" src={buyPage} alt="buy-page" />
                </button>
                <div className="food__pay-price">{food.price} ₽</div>
              </div>
              <div className="food__footer-argument">
                <div className="food__argument-wrap">
                  <span className="food__wrap-title">Белки</span>
                  <span className="food__wrap-subtitle">{food.protein}</span>
                </div>
                <div className="food__argument-wrap">
                  <span className="food__wrap-title">Жиры</span>
                  <span className="food__wrap-subtitle">{food.fats}</span>
                </div>
                <div className="food__argument-wrap">
                  <span className="food__wrap-title">Углеводы</span>
                  <span className="food__wrap-subtitle">
                    {food.carbohydrates}
                  </span>
                </div>
                <div className="food__argument-wrap">
                  <span className="food__wrap-title">Ккал</span>
                  <span className="food__wrap-subtitle">{food.calories}</span>
                </div>
                <div className="food__argument-wrap">
                  <span className="food__wrap-title">Вес</span>
                  <span className="food__wrap-subtitle">{food.herf} г</span>
                </div>
              </div>
              <div className="food__footer-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoolFood
