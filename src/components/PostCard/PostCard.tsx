/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { getColorByCategory } from 'utils';
import s from './PostCard.module.scss';

interface IPropTypes {
  post: IArticlesAttribute;
}

const PostCard: FC<IPropTypes> = ({ post }) => {
  const selectedColor = getColorByCategory(post.category.data.attributes.title);

  const style = { backgroundColor: selectedColor } as React.CSSProperties;

  return (
    <Link href={`/post/${post.slug}`} className={`${s.post_link} animate`}>
      <div className={s.post_body}>
        <div className={s.post_image}>
          <img
            src={`http://localhost:1337${post.image.data.attributes.url}`}
            alt="post"
          />
        </div>
        <div className={s.post_info}>
          <div className={s.post_category}>
            <i style={style}></i>
            {post.category.data.attributes.title}
          </div>
          <h2 className={s.post_title}>{post.title}</h2>
          <p className={s.post_descr}>{post.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
