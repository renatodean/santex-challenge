import { REDUCER_ACTIONS } from "../../constants";
import { Item } from "../../types/product";

interface addProductInterface {
  product: Item;
  quantity: number;
}

export const addProduct = (product: addProductInterface) => ({
  type: REDUCER_ACTIONS.ADD_PRODUCT,
  value: product,
});

export const updateSnackbar = (value: boolean) => ({
  type: REDUCER_ACTIONS.UPDATE_SNACKBAR,
  value,
});
