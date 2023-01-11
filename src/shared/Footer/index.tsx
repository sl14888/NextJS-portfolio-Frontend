import GlobalSvgSelector from 'assets/icons/GlobalSvgSelector';
import Link from 'next/link';
import React from 'react';
import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer__left}>
        <h5>SL PORTFOLIO</h5>
        <p>Frontend Developer React.JS / UI Designer.</p>
      </div>
      <div className={s.footer__right}>
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
    </div>
  );
};
