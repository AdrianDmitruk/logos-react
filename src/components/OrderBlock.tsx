import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/img/svg/arrow.svg'

export const OrderBlock: React.FC = () => {
  return (
    <section className="order">
      <div className="order__container">
        <Link className="order__cart" to="/cart">
          <img className="order__cart-img" src={arrow} alt="arrow" />
          <span className="order__cart-name">в корзину</span>
        </Link>
        <div className="order__title">
          <div className="order__title-border"></div>
          <h3 className="order__title-name">Оформление заказа</h3>
        </div>
        <div className="order__contakt">
          <div className="order__contakt-title title">
            1. Контактная информация
          </div>
          <div className="order__contakt-form">
            <input
              className="order__contakt-input"
              type="text"
              placeholder="Имя*"
            />
            <input
              className="order__contakt-input"
              type="number"
              placeholder="Телефон*"
            />
          </div>
        </div>
        <div className="order__delivery">
          <div className="order__delivery-title title">2. Доставка</div>
          <div className="order__delivery-check">
            <div className="order__check-box order__check-box--active">
              Доставка
            </div>
            <div className="order__check-box">Самовывоз</div>
          </div>
          <div className="order__delivery-name">Выберите ресторан</div>
          <div className="order__delivery-rest"></div>
        </div>
      </div>
    </section>
  )
}
