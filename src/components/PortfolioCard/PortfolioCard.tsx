import Link from 'next/link';
import { FC } from 'react';
import s from './PortfolioCard.module.scss';

interface IPropTypes {
  post: IArticlesAttribute;
}

const PortfolioCard: FC<IPropTypes> = ({ post }) => {
  return (
    <div className={`${s.card} animate`}>
      <div className={s.card__info}>
        <div className={s.card__title}>{post.title}</div>
        <div className={s.card__descr}>{post.description}</div>
        <div className={s.card__btns}>
          <Link href={post.link}>
            <div>Посетить</div>
          </Link>
          <Link href={post.linkcode}>
            <div>Исходный код</div>
          </Link>
        </div>
      </div>
      <div className={s.card__img}>
        <img src={`http://localhost:1337${post.image.data.attributes.url}`} alt="1" />
      </div>
    </div>
  );
};

export default PortfolioCard;
