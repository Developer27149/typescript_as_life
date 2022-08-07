export const getLocalStorageItem = (key: string) => {
  return JSON.parse(localStorage.getItem(`blog_${key}`));
};

export const saveLocalStorageItem = (key: string, value: unknown) =>
  localStorage.setItem(`blog_${key}`, JSON.stringify(value));

export const removeLocalStorageItem = (key: string) =>
  localStorage.removeItem(`blog_${key}`);
