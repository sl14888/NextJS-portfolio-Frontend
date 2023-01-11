import { useRouter } from 'next/router';
import s from './TabsFilter.module.scss';
import { FC } from 'react';
import Link from 'next/link';

interface IPropTypes {
  categories: ICategory[];
}

const TabsFilter: FC<IPropTypes> = ({ categories }) => {
  const router = useRouter();

  const isActiveLink = (category: ICategory) => {
    return category.attributes.slug === router.query.portfolios;
  };

  return (
    <ul className={`${s.tabs_filter}`}>
      <li
        className={`${
          router.pathname === '/portfolios' ? `${s.tabs_btn__active}` : `${s.tabs_btn}`
        }`}
      >
        <Link href="/portfolios">Всё</Link>
      </li>

      {categories.map((category) => {
        return (
          <li
            key={category.id}
            className={`${
              isActiveLink(category) ? `${s.tabs_btn__active}` : `${s.tabs_btn}`
            }`}
          >
            <Link href={`/category/portfolios/${category.attributes.slug}`}>
              {category.attributes.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TabsFilter;
