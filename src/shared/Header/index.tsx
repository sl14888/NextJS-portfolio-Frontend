import GlobalSvgSelector from 'assets/icons/GlobalSvgSelector';
import { Theme } from 'context/ThremeContext';
import { useTheme } from 'hooks/useTheme';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import s from './Header.module.scss';

export default function Header() {
  const router = useRouter();

  const theme = useTheme();

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  const isActiveLink = (category: ICategory) => {
    return category.attributes.slug === router.query.category;
  };

  return (
    <header className={s.root}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <Link href="/">
            <GlobalSvgSelector id="logo" />
            SL PORTFOLIO
          </Link>
        </div>
        <ul className={s.menu}>
          <li
            className={`${router.pathname === '/' ? `${s.link__active}` : `${s.link}`}`}
          >
            <Link href="/">Главная</Link>
          </li>
          <li
            className={`${
              router.pathname === '/blog' ? `${s.link__active}` : `${s.link}`
            }`}
          >
            <Link href="/blog">Блог</Link>
          </li>
          <li
            className={`${
              router.pathname === '/portfolios' ? `${s.link__active}` : `${s.link}`
            }`}
          >
            <Link href="/portfolios">Проекты</Link>
          </li>
          <li onClick={changeTheme}>
            {theme.theme === Theme.LIGHT ? (
              <GlobalSvgSelector id="change-theme-light" />
            ) : (
              <GlobalSvgSelector id="change-theme-dark" />
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
