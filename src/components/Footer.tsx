import React from 'react'

export const Footer: React.FC = () => {
  return (
    <div className="footer__container">
      <div className="footer__info">
        <a className="footer__logo" href="/">
          LOGOS
        </a>
        <div className="footer__copy">
          © ООО СК «АПШЕРОН» Все права защищены. 2010-2020
        </div>
        <a className="footer__link" href="/">
          Пользовательское соглашение
        </a>
        <a className="footer__link" href="/">
          Карта сайта
        </a>
        <a className="footer__link" href="/">
          Политика конфиденциальности
        </a>
      </div>
      <div className="footer__nav">
        <ul className="footer__ul">
          <li className="footer__li">
            <a href="/">О ресторане</a>
          </li>
          <li className="footer__li">
            <a href="/">Условия доставки</a>
          </li>
          <li className="footer__li">
            <a href="/">Возврат товара</a>
          </li>
          <li className="footer__li">
            <a href="/">Акции</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
