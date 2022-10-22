import React from 'react'
import { Link } from 'react-router-dom'
import { Search, SidebarData } from '../components'

import { useSelector } from 'react-redux'
import { selectCart } from '../redux/cart/selectors'
import { CartItem } from '../redux/cart/types'

import buy from '../assets/img/svg/buy.svg'
import calling from '../assets/img/svg/calling.svg'
import cross from '../assets/img/svg/cross.svg'

export const Header = () => {
  const { items } = useSelector(selectCart)
  const isMounted = React.useRef(false)

  const totalCount = items.reduce(
    (sum: number, item: CartItem) => sum + item.count,
    0,
  )

  const [sidebar, setSidebar] = React.useState(false)

  const showSidebar = () => setSidebar(!sidebar)

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
          <Link className="header__logo" to="/">
            LOGOS
          </Link>
          <Search />
          <div className="header__contact">
            <a className="header__contact-icon" href="tel:+79175105759">
              <img src={calling} alt="calling" />
            </a>
            <div className="header__contact-info">
              <div className="header__info-title">Контакты:</div>
              <a className="header__info-number" href="tel:+79175105759">
                +7 (917) 510-57-59
              </a>
            </div>
          </div>
        </div>
        <Link className="header__btn" to="/cart">
          <div className="header__btn-title">Корзина</div>
          <div className="header__btn-border"></div>
          <div className="header__btn-quantity">{totalCount}</div>
          <img className="header__btn-mobile" src={buy} alt="buy" />
        </Link>
        <div className="burger__wrapper">
          <button onClick={showSidebar} className="burger">
            <span className="burger__line"></span>
          </button>
          <span className="burger__title">МЕНЮ</span>
        </div>
        <nav className={sidebar ? 'nuv-menu active' : 'nuv-menu'}>
          <ul onClick={showSidebar} className="nuv-menu-items">
            <li className="nuvbur-menu-toogle">
              <Link to="#" className="menu-bars">
                <img src={cross} alt="search" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
