import React from 'react'

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
              <img
                className="info__card-img"
                src="../img/svg/onion-1.svg"
                alt="onion"
              />
              <div className="info__card-title--one">Свежайшие продукты</div>
            </div>
            <div className="info__right-card">
              <img
                className="info__card-img"
                src="../img/svg/flash.svg"
                alt="flash"
              />
              <div className="info__card-title--two">Быстрая доставка</div>
            </div>
            <div className="info__right-card">
              <img
                className="info__card-img"
                src="../img/svg/chef.svg"
                alt="chef"
              />
              <div className="info__card-title--tre">Лучшие повора</div>
            </div>
            <div className="info__right-card">
              <img
                className="info__card-img"
                src="../img/svg/onion-2.svg"
                alt="onion"
              />
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
              src="../img/svg/location-con.svg"
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
            <img
              className="info__address-img"
              src="../img/svg/message.svg"
              alt="message"
            />
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
              <img src="../img/svg/facebook.svg" alt="facebook" />
            </a>
            <a className="info__social-link" href="/">
              <img src="../img/svg/vkontakte-logo.svg" alt="vkontakte" />
            </a>
            <a className="info__social-link" href="/">
              <img src="../img/svg/youtube.svg" alt="youtube" />
            </a>
            <a className="info__social-link" href="/">
              <img src="../img/svg/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

