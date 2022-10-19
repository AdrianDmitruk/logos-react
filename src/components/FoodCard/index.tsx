import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { selectCartItemById } from '../../redux/cart/selectors'
import { CartItem } from '../../redux/cart/types'
import { addItem, minusItem, removeItem } from '../../redux/cart/slice'

export type FoodCardProps = {
  id: string
  title: string
  price: number
  imageUrl: string
  description: string
  herf: string
}

export const FoodCard: React.FC<FoodCardProps> = ({
  id,
  title,
  price,
  imageUrl,
  description,
  herf,
}) => {
  const dispatch = useDispatch()
  const cardItem = useSelector(selectCartItemById(id))

  const addedCount = cardItem ? cardItem.count : 0

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      description,
      count: 0,
    }
    dispatch(addItem(item))
  }
  const onClickMinus = () => {
    if (addedCount > 1) {
      dispatch(minusItem(id))
    } else {
      dispatch(removeItem(id))
    }
  }

  const onClickPlus = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      description,
      count: 0,
    }
    dispatch(addItem(item))
  }

  return (
    <div className="mainsection__card">
      <Link to={`/logos-react/food/${id}`} className="mainsection__card-header">
        <img
          className="mainsection__header-img"
          src={imageUrl}
          alt="content1"
        />
        {addedCount === 0 ? null : (
          <div className="mainsection__header-quant">{addedCount}</div>
        )}
      </Link>
      <div className="mainsection__card-footer">
        <div className="mainsection__footer-first">
          <h3 className="mainsection__first-title">{title}</h3>
          <span className="mainsection__first-herf">Вес: {herf} г</span>
        </div>
        <p className="mainsection__footer-second">{description}</p>

        {addedCount === 0 ? (
          <div className="mainsection__footer-third">
            <span className="mainsection__third-price">{price} ₽</span>
            <button className="mainsection__third-btn" onClick={onClickAdd}>
              <div className="mainsection__btn-title">В корзину</div>
              <img
                className="mainsection__btn-img"
                src="./img/svg/buy.svg"
                alt="buy"
              />
            </button>
          </div>
        ) : (
          <div className="mainsection__footer-third">
            <button className="mainsection__third-plus" onClick={onClickMinus}>
              <img src="./img/svg/minus.svg" alt="minus" />
            </button>
            <span className="mainsection__third-price">{price} ₽</span>
            <button className="mainsection__third-minus" onClick={onClickPlus}>
              <img src="./img/svg/plus.svg" alt="plus" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
