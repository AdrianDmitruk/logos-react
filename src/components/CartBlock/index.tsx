import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CartBlock.module.scss'
import CartItem from '../CartItem'

import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cart/selectors'

export const CartBlock: React.FC = () => {
  const { totalPrice, items, delivery } = useSelector(selectCart)

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0,
  )

  return (
    <section className={styles.cart}>
      <div className={styles.container}>
        <Link className={styles.btn__back} to="/logos-react/">
          <img
            className={styles.btn__back__img}
            src="./img/svg/arrow.svg"
            alt="arrow"
          />
          <span>к выбору блюда</span>
        </Link>
        <div className={styles.title__wrapper}>
          <div className={styles.title__border}></div>
          <h3 className={styles.title__name}>КОРЗИНА</h3>
          <div className={styles.title__info}>
            (в корзине
            <div className={styles.title__info__count}>{totalCount}</div>
            товара)
          </div>
        </div>

        {!totalCount ? (
          <div className={styles.cart__none}>
            <img
              className={styles.cart__none__img}
              src="./img/svg/cart-none.svg"
              alt="cart"
            />
            <h3 className={styles.cart__none__title}>КОРЗИНА ПУСТАЯ</h3>
            <Link className={styles.cart__none__btn} to="/">
              Посмотреть меню
            </Link>
          </div>
        ) : (
          <>
            <div className={styles.cart__wrapper}>
              {items.map((item: any) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <h2 className={styles.title__add}>ДОБАВИТЬ К ЗАКАЗУ</h2>
            <div className={styles.rec}>
              <div className={styles.rec__box}>
                <img
                  className={styles.rec__box__img}
                  src="./img/content/content1.jpg"
                  alt="content1"
                />
                <h4 className={styles.rec__box__title}>КВАС АНАНАСОВЫЙ</h4>
                <div className={styles.rec__box__btn}>
                  <div className={styles.rec__btn__name}>Добавить</div>
                  <button className={styles.rec__btn__link}>
                    <img src="./img/svg/pl.svg" alt="pl" />
                  </button>
                </div>
                <span className={styles.rec__box__price}>1640 ₽</span>
              </div>
              <div className={styles.rec__box__border}></div>
              <div className={styles.rec__box}>
                <img
                  className={styles.rec__box__img}
                  src="./img/content/content1.jpg"
                  alt="content1"
                />
                <h4 className={styles.rec__box__title}>КВАС АНАНАСОВЫЙ</h4>
                <div className={styles.rec__box__btn}>
                  <div className={styles.rec__btn__name}>Добавить</div>
                  <button className={styles.rec__btn__link}>
                    <img src="./img/svg/pl.svg" alt="pl" />
                  </button>
                </div>
                <span className={styles.rec__box__price}>1640 ₽</span>
              </div>
              <div className={styles.rec__box__border}></div>
              <div className={styles.rec__box}>
                <img
                  className={styles.rec__box__img}
                  src="./img/content/content1.jpg"
                  alt="content1"
                />
                <h4 className={styles.rec__box__title}>КВАС АНАНАСОВЫЙ</h4>
                <div className={styles.rec__box__btn}>
                  <div className={styles.rec__btn__name}>Добавить</div>
                  <button className={styles.rec__btn__link}>
                    <img src="./img/svg/pl.svg" alt="pl" />
                  </button>
                </div>
                <span className={styles.rec__box__price}>1640 ₽</span>
              </div>
              <div className={styles.rec__box__border}></div>
              <div className={styles.rec__box}>
                <img
                  className={styles.rec__box__img}
                  src="./img/content/content1.jpg"
                  alt="content1"
                />
                <h4 className={styles.rec__box__title}>КВАС АНАНАСОВЫЙ</h4>
                <div className={styles.rec__box__btn}>
                  <div className={styles.rec__btn__name}>Добавить</div>
                  <button className={styles.rec__btn__link}>
                    <img src="./img/svg/pl.svg" alt="pl" />
                  </button>
                </div>
                <span className={styles.rec__box__price}>1640 ₽</span>
              </div>
            </div>
            <div className={styles.border}></div>
            <div className={styles.offer}>
              <div className={styles.offer__left}>
                <div className={styles.offer__left__first}>
                  <div className={styles.offer__first__name}>Итого:</div>
                  <div className={styles.offer__first__price}>
                    {totalPrice} ₽
                  </div>
                </div>

                {delivery >= 0 ? (
                  <div className={styles.offer__left__second__delivery}>
                    <div className={styles.offer__second__name__delivery}>
                      Доставка бесплатная!
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={styles.offer__left__second}>
                      <div className={styles.offer__second__name}>
                        До бесплатной доставки не хватет:
                      </div>
                      <div className={styles.offer__second__price}>
                        {delivery >= 0 ? 0 : Math.abs(delivery)} ₽
                      </div>
                    </div>
                    <div className={styles.offer__left__therd}>
                      Минимальная сума заказа 1500 ₽
                    </div>
                  </>
                )}
              </div>
              <a className={styles.offer__right} href="/">
                Оформить заказ
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
