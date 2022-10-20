import React from 'react'

import onion from '../assets/img/svg/onion-1.svg'
import flash from '../assets/img/svg/flash.svg'
import chef from '../assets/img/svg/chef.svg'
import onionSecond from '../assets/img/svg/onion-2.svg'
import location from '../assets/img/svg/location-con.svg'
import message from '../assets/img/svg/message.svg'
import facebook from '../assets/img/svg/facebook.svg'
import vkontakte from '../assets/img/svg/vkontakte-logo.svg'
import youtube from '../assets/img/svg/youtube.svg'
import instagram from '../assets/img/svg/instagram.svg'

export const Info: React.FC = () => {
  return (
    <section className="info">
      <div className="info__container">
        <div className="info__cafe">
          <div className="info__cafe-left">
            <div className="info__cafe-title">НАШЕ КАФЕ</div>
            <div className="info__cafe-subtitle">
              Мы расположены в одном из самых живописных мест города — на берегу
              реки, это ваш оазис в черте города, куда можно сбежать от шумного
              и пыльного мегаполиса. Мы, действительно уникальные, ведь все
              продумано до мелочей: проект построен из дикого закарпатского
              сруба, камин в основном зале ресторана и панорамные окна с видом
              на реку, уютные беседки на берегу реки и лучшая видовая террасса,
              шатер с посадкой на 200 человек, сказочный детский домик и
              бассейн.
            </div>
            <a className="info__cafe-btn" href="/">
              ПОСМОТРЕТЬ МЕНЮ
            </a>
          </div>
          <div className="info__cafe-right">
            <div className="info__right-card">
              <img className="info__card-img" src={onion} alt="onion" />
              <div className="info__card-title--one">Свежайшие продукты</div>
            </div>
            <div className="info__right-card">
              <img className="info__card-img" src={flash} alt="flash" />
              <div className="info__card-title--two">Быстрая доставка</div>
            </div>
            <div className="info__right-card">
              <img className="info__card-img" src={chef} alt="chef" />
              <div className="info__card-title--tre">Лучшие повора</div>
            </div>
            <div className="info__right-card">
              <img className="info__card-img" src={onionSecond} alt="onion" />
              <div className="info__card-title--for">Свежайшие продукты</div>
            </div>
          </div>
        </div>
        <div className="info__contakt">
          <div className="info__contakt-title">КОНТАКТЫ</div>
          <div className="info__contakt-borfer"></div>
          <div className="info__contakt-address">
            <img
              className="info__address-img"
              src={location}
              alt="location-con"
            />
            <div className="info__address-wrap">
              <span className="info__wrap-title">Наш адрес:</span>
              <span className="info__subtitle-title">
                МО, городской округ Красногорск, село Ильинкое,
                Экспериментальная улица, 10
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
      </div>
    </section>
  )
}
