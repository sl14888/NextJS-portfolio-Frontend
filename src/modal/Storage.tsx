export const storage = {
  setItem: (name: string, item: any) => {
    localStorage.setItem(name, JSON.stringify(item));
  },

  getItem: (name: string) => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(name);
      if (item) {
        return JSON.parse(item);
      }
    }
  },
};
