import React from 'react'

import onion from '../assets/img/svg/onion-1.svg'
import flash from '../assets/img/svg/flash.svg'
import chef from '../assets/img/svg/chef.svg'
import onionSecond from '../assets/img/svg/onion-2.svg'
import { Contact } from '../components'

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
        <Contact />
      </div>
    </section>
  )
}
