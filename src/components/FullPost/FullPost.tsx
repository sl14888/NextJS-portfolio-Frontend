import Image from 'next/image';
import React, { FC } from 'react';
import s from './FullPost.module.scss';
import oneImg from 'assets/images/1.jpg';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { formatDate } from 'utils';

interface IFullPost {
  data: IArticle;
}

const FullPost: FC<IFullPost> = ({ data }) => {
  const style = { backgroundColor: '#EDD950' } as React.CSSProperties;

  return (
    <div className={`${s.full_post} animate`}>
      <h1 className={`${s.title} animate`}>{data.attributes.title}</h1>
      <ul className={`${s.details} animate`}>
        <li>
          <div className={`${s.details__link} animate`}>
            <i style={style}></i>
            <div>{data.attributes.category.data.attributes.title}</div>
          </div>
        </li>
        <li>{formatDate(data.attributes.createdAt)}</li>
      </ul>
      <div className={`${s.text} animate`}>
        <img src={`${data.attributes.image.data.attributes.url}`} alt="1" />
        <ReactMarkdown>{data.attributes.content}</ReactMarkdown>
      </div>

      {/* Допилить категорию тегов */}
      {/* <ul className={s.tags}>
        <li>#test</li>
        <li>#test</li>
      </ul> */}
    </div>
  );
};

export default FullPost;
