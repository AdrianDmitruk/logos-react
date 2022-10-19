import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from '../components'

import { useSelector } from 'react-redux'
import { selectCart } from '../redux/cart/selectors'
import { CartItem } from '../redux/cart/types'

export const Header = () => {
  const { items } = useSelector(selectCart)
  const isMounted = React.useRef(false)

  const totalCount = items.reduce(
    (sum: number, item: CartItem) => sum + item.count,
    0,
  )

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items)
      localStorage.setItem('cart', json)
    }
    isMounted.current = true
  }, [items])

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <Link className="header__logo" to="/logos-react/">
            LOGOS
          </Link>
          <Search />
          <div className="header__contact">
            <a className="header__contact-icon" href="tel:+79175105759">
              <img src="./img/svg/calling.svg" alt="calling" />
            </a>
            <div className="header__contact-info">
              <div className="header__info-title">Контакты:</div>
              <a className="header__info-number" href="tel:+79175105759">
                +7 (917) 510-57-59
              </a>
            </div>
          </div>
        </div>
        <Link className="header__btn" to="/logos-react/cart">
          <div className="header__btn-title">Корзина</div>
          <div className="header__btn-border"></div>
          <div className="header__btn-quantity">{totalCount}</div>
          <img
            className="header__btn-mobile"
            src="../img/svg/buy.svg"
            alt="buy"
          />
        </Link>
        <div className="burger__wrapper">
          <button
            className="burger"
            aria-label="Открыть меню"
            aria-expanded="false"
            data-burger
          >
            <span className="burger__line"></span>
          </button>
          <span className="burger__title">МЕНЮ</span>
        </div>
      </div>
    </header>
  )
}
