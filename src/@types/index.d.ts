declare module 'qs';

declare interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
  data: {
    attributes: {
      title: string;
    };
  };
}

declare interface ICategoryAttribute {
  title: string;
  slug: string;
}

declare interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

declare interface IImageData {
  data: {
    attributes: {
      url: string;
      formats: {
        small: {
          url: string;
        };
      };
    };
  };
}

declare interface IArticlesAttribute {
  title: string;
  slug: string;
  content: string;
  category: ICategory;
  color: sting;
  link?: Url;
  linkcode?: Url;
  description: string;
  createdAt: string;
  image: IImageData;
}

declare interface IArticle {
  id: number;
  attributes: IArticlesAttribute;
  items: object;
}

declare type TDirection = 1 | -1;

declare interface IQueryOptions {
  filters: any;
  populate: any;
}
