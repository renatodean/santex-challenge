import { Item } from "../types/product";

/**
 * From a given product it will return the price as a formated string
 * @param product
 * @param quantity
 * @returns string
 */
export const getPrice = (product: Item, quantity?: number) => {
  const { variants } = product || {};
  const productPrice = variants && variants.length > 0 ? variants[0].price : 0;

  return ((productPrice * (quantity || 1)) / 1000).toFixed(2);
};

/**
 * From a given product it will return the price as number
 * @param product
 * @param quantity
 * @returns number
 */
export const getPriceNumber = (product: Item, quantity?: number) => {
  const { variants } = product || {};
  const productPrice = variants && variants.length > 0 ? variants[0].price : 0;

  return (productPrice * (quantity || 1)) / 1000;
};

/**
 * From a given query from router it will return the query value
 * @param query
 * @returns string
 */
export const getQueryValue = (query: any) => {
  if (Array.isArray(query)) {
    return query[0];
  } else {
    return query || "";
  }
};
