import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export const fetchCategories = async () => api.get('/api/categories');

export const fetchCategoriesPortfolio = async () => api.get('/api/category-portfolios');

export const fetchPosts = async (queryString: string) =>
  api.get(`/api/posts?${queryString}`);

export const fetchPostsBySlug = async (queryString: string) =>
  api.get(`/api/posts?${queryString}`);

export const fetchPortfolio = async (queryString: string) =>
  api.get(`/api/portfolios?${queryString}`);

export const fetchPortfolioSlag = async (queryString: string) =>
  api.get(`/api/portfolios?${queryString}`);
