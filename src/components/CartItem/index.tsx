import React from 'react'

import styles from './CartItem.module.scss'
import { useDispatch } from 'react-redux'
import { addItem, minusItem, removeItem } from '../../redux/cart/slice'
import { CartItem } from '../../redux/cart/types'

type CartItemProps = {
  id: string
  title: string
  price: number
  imageUrl: string
  count: number
  description: string
}

const CartItemBlock: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  imageUrl,
  count,
  description,
}) => {
  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItem),
    )
  }

  const onClickMinus = () => {
    dispatch(minusItem(id))
  }
  const onClickRemove = () => {
    dispatch(removeItem(id))
  }

  return (
    <div className={styles.cart__box}>
      <img className={styles.cart__box__img} src={imageUrl} alt="content" />
      <div className={styles.cart__box__info}>
        <h2 className={styles.cart__info__title}>{title}</h2>
        <p className={styles.cart__info__subtitle}>{description}</p>
      </div>
      <div className={styles.cart__box__сounter}>
        <button
          onClick={onClickMinus}
          disabled={count === 1}
          className={styles.cart__сounter__btn}
        >
          <img src="./img/svg/min.svg" alt="min" />
        </button>
        <div className={styles.cart__сounter__title}>{count}</div>
        <button onClick={onClickPlus} className={styles.cart__сounter__btn}>
          <img src="./img/svg/pl.svg" alt="pl" />
        </button>
      </div>
      <div className={styles.cart__box__price}>{price * count} ₽</div>
      <button onClick={onClickRemove} className={styles.cart__box__delite}>
        <img src="./img/svg/delite.svg" alt="delite" />
      </button>
    </div>
  )
}

export default CartItemBlock
