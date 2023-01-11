import Link from 'next/link';
import React from 'react';
import s from './HeroSection.module.scss';
import GlobalSvgSelector from 'assets/icons/GlobalSvgSelector';

const HeroSection = () => {
  return (
    <section className={s.hero}>
      <div className={s.wrapper}>
        <div className={s.text__block}>
          <h2 className={`${s.greetings} animate`}>
            Привет 👋, <span>я Данил</span>
          </h2>
          {/* <div className={s.subtitle}></div> */}
          <h1 className={`${s.title} animate`}>
            Я Frontend Разработчик React, NextJS. Люблю писать код и узнавать новое.
          </h1>
          <div className={`${s.btns} animate`}>
            <Link
              className={s.btn}
              target="_blank"
              href="https://sl14888.github.io/sitePortfolio/assets/Arsenyuk_danil_Resume.pdf"
            >
              Мой CV
            </Link>
            <Link className={s.btn} href="/portfolios">
              Мои проекты
            </Link>
          </div>
        </div>

        <div className={`${s.image} animate`}>
          <img
            src="http://localhost:1337/uploads/photo_2022_11_05_23_01_58_48b7af49f1.jpg"
            alt="main"
          />
        </div>
      </div>
      <div className={s.linking}>
        <div className={`${s.linking__list} animate`}>
          <Link target="_blank" href="https://github.com/sl14888">
            <GlobalSvgSelector id="github" />
          </Link>
          <Link target="_blank" href="https://vk.com/sl333333">
            <GlobalSvgSelector id="vk" />
          </Link>
          <Link target="_blank" href="mailto:sl13337@mail.ru">
            <GlobalSvgSelector id="mail" />
          </Link>
          <Link target="_blank" href="https://t.me/sl333333">
            <GlobalSvgSelector id="telegram" />
          </Link>
        </div>
        <div className={`${s.linking__email} animate`}>sl13337@mail.ru</div>
      </div>
    </section>
  );
};

export default HeroSection;
