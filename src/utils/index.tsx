export const formatDate = (dateString: string): string => {
  const date = new Date(dateString).toLocaleString('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return date;
};

export const getColorByCategory = (category: string) => {
  const colorCategory: { [key: string]: string } = {
    Общее: 'green',
    JavaScript: 'blue',
    TypeScript: 'red',
    React: 'yellow',
  };

  return colorCategory[category];
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const makeCategory = (slug: string): string => {
  if (typeof slug === 'string') {
    return slug.split('-').join(' ');
  }
  return '';
};
