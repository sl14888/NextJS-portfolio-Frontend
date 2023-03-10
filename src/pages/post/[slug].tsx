import axios, { AxiosResponse } from 'axios';
import { fetchPostsBySlug } from '../../http';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import qs from 'qs';
import { FC } from 'react';
import FullPost from 'components/FullPost/FullPost';

interface IPropTypes {
  data: IArticle;
  notFound?: boolean;
}

const Post: FC<IPropTypes> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.attributes.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullPost data={data} />
    </>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const praramsString = qs.stringify({
    populate: ['image', 'category'],
    filters: {
      slug: {
        $eq: params?.slug,
      },
    },
  });

  const { data }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchPostsBySlug(
    praramsString
  );

  if (data.data.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data.data[0],
    },
  };
};
