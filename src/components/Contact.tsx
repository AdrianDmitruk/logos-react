import React from 'react'

import location from '../assets/img/svg/location-con.svg'
import message from '../assets/img/svg/message.svg'
import facebook from '../assets/img/svg/facebook.svg'
import vkontakte from '../assets/img/svg/vkontakte-logo.svg'
import youtube from '../assets/img/svg/youtube.svg'
import instagram from '../assets/img/svg/instagram.svg'

export const Contact: React.FC = () => {
  return (
    <div className="info__contakt">
      <div className="info__contakt-title">КОНТАКТЫ</div>
      <div className="info__contakt-borfer"></div>
      <div className="info__contakt-address">
        <img className="info__address-img" src={location} alt="location-con" />
        <div className="info__address-wrap">
          <span className="info__wrap-title">Наш адрес:</span>
          <span className="info__subtitle-title">
            МО, городской округ Красногорск, село Ильинкое, Экспериментальная
            улица, 10
          </span>
        </div>
      </div>
      <div className="info__contakt-address">
        <img className="info__address-img" src={message} alt="message" />
        <div className="info__address-wrap">
          <span className="info__wrap-title">Наша почта:</span>
          <a className="info__subtitle-title" href="/">
            auto.wash@gmail.com
          </a>
        </div>
      </div>
      <div className="info__contakt-borfer"></div>
      <div className="info__contakt-footer">
        <a className="info__footer-btn" href="/">
          ЗАБРОНИРОВАТЬ СТОЛ
        </a>
        <div className="info__footer-call">
          <a className="info__call-title" href="tel:+79175105759">
            +7 (917) 510-57-59
          </a>
          <span className="info__call-subtitle">
            Звоните или оставляйте заявку
          </span>
        </div>
      </div>
      <div className="info__contakt-social">
        <span className="info__social-name">Мы в соц сетях:</span>
        <a className="info__social-link" href="/">
          <img src={facebook} alt="facebook" />
        </a>
        <a className="info__social-link" href="/">
          <img src={vkontakte} alt="vkontakte" />
        </a>
        <a className="info__social-link" href="/">
          <img src={youtube} alt="youtube" />
        </a>
        <a className="info__social-link" href="/">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </div>
  )
}
