import PostCard from 'components/PostCard/PostCard';
import PostCardFullWidth from 'components/PostCardFullWidth/PostCardFullWidth';
import { FC } from 'react';

interface IPropTypes {
  posts: IArticle[];
}

const Posts: FC<IPropTypes> = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.slice(0, 1).map((post) => {
          return <PostCardFullWidth key={post.id} post={post.attributes} />;
        })}
      <div className="columns">
        {posts &&
          posts.slice(1).map((post) => {
            return <PostCard key={post.id} post={post.attributes} />;
          })}
      </div>
    </>
  );
};

export default Posts;
