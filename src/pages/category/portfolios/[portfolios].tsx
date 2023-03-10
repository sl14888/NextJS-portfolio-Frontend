import { AxiosResponse } from 'axios';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { capitalizeFirstLetter, makeCategory } from 'utils';
import { fetchPortfolio, fetchCategoriesPortfolio } from '../../../http';

import Head from 'next/head';
import qs from 'qs';
import { FC } from 'react';
import TabsFilter from 'components/TabsFilter/TabsFilter';
import PortfolioCard from 'components/PortfolioCard/PortfolioCard';

interface IPropType {
  categories: {
    items: ICategory[];
  };
  portfolio: {
    items: IArticle[];
  };
  slug: string;
}

const portfolios: FC<IPropType> = ({ categories, portfolio, slug }) => {
  const formattedCategory = () => {
    return capitalizeFirstLetter(makeCategory(slug));
  };

  return (
    <>
      <Head>
        <title>SL PORTFOLIO - Категория: {formattedCategory()}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TabsFilter categories={categories.items} />

      {portfolio.items.map((post) => {
        return <PortfolioCard key={post.id} post={post.attributes} />;
      })}
    </>
  );
};

export default portfolios;

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const options: IQueryOptions = {
    populate: ['category_portfolio', 'image'],
    filters: {
      category_portfolio: {
        slug: query.portfolios,
      },
    },
  };

  const queryString = qs.stringify(options);

  const { data }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchPortfolio(
    queryString
  );

  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategoriesPortfolio();

  return {
    props: {
      categories: {
        items: categories.data,
      },
      portfolio: {
        items: data.data,
      },
      slug: query.portfolios,
    },
  };
};
