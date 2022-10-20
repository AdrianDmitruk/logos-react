import React from 'react'

import styles from './CartItem.module.scss'
import { useDispatch } from 'react-redux'
import { addItem, minusItem, removeItem } from '../../redux/cart/slice'
import { CartItem } from '../../redux/cart/types'

import min from '../../assets/img/svg/min.svg'
import pl from '../../assets/img/svg/pl.svg'
import delite from '../../assets/img/svg/delite.svg'

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
          <img src={min} alt="min" />
        </button>
        <div className={styles.cart__сounter__title}>{count}</div>
        <button onClick={onClickPlus} className={styles.cart__сounter__btn}>
          <img src={pl} alt="pl" />
        </button>
      </div>
      <div className={styles.cart__box__price}>{price * count} ₽</div>
      <button onClick={onClickRemove} className={styles.cart__box__delite}>
        <img src={delite} alt="delite" />
      </button>
    </div>
  )
}

export default CartItemBlock
