import GlobalSvgSelector from 'assets/icons/GlobalSvgSelector';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import s from './Tabs.module.scss';

interface IPropTypes {
  categories: ICategory[];
}

const Tabs: FC<IPropTypes> = ({ categories }) => {
  const router = useRouter();

  const isActiveLink = (category: ICategory) => {
    return category.attributes.slug === router.query.category;
  };

  return (
    <div className={s.tabs}>
      <ul className={s.tabs_items}>
        <li
          className={`${
            router.pathname === '/blog' ? `${s.tabs_item__active}` : `${s.tabs_item}`
          }`}
        >
          <Link href="/blog">Все</Link>
        </li>
        {categories.map((category) => {
          return (
            <li
              key={category.id}
              className={`${
                isActiveLink(category) ? `${s.tabs_item__active}` : `${s.tabs_item}`
              }`}
            >
              <Link href={`/category/${category.attributes.slug}`}>
                {category.attributes.title}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <div className={s.search}>
        <GlobalSvgSelector id="search" />
        <input type="text" placeholder="В разработке..." />
      </div> */}
    </div>
  );
};

export default Tabs;
