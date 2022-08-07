import { REDUCER_ACTIONS } from "../constants";
import { Item } from "../types/product";

export const initialState = { showSnackbar: false, products: [] };

export interface StorageStateInterface {
  showSnackbar?: boolean;
  products: {
    product: Item;
    quantity: number;
  }[];
}

interface AddProductActionInterface {
  type: string;
  value: {
    product: Item;
    quantity: number;
  };
}

const addProduct = (
  state: StorageStateInterface,
  action: AddProductActionInterface
) => {
  const copyProducts = [...state.products];
  // Check if we have it already on the cart.
  const indexOfProduct = copyProducts.findIndex(
    (product) => product.product.slug === action.value.product.slug
  );
  if (indexOfProduct !== -1) {
    copyProducts[indexOfProduct].quantity =
      copyProducts[indexOfProduct].quantity + action.value.quantity;
  } else {
    copyProducts.push(action.value);
  }

  return {
    ...state,
    products: copyProducts,
  };
};

interface UpdateSnackbarActionInterface {
  type: string;
  value: boolean;
}

const updateSnackbar = (
  state: StorageStateInterface,
  action: UpdateSnackbarActionInterface
) => ({
  ...state,
  showSnackbar: action.value,
});

const createReducer =
  (handlers: any) =>
  (
    state: StorageStateInterface,
    action: AddProductActionInterface | UpdateSnackbarActionInterface
  ) => {
    if (!handlers.hasOwnProperty(action.type)) {
      return state;
    }
    return handlers[action.type](state, action);
  };

const storageReducerHandler = {
  [REDUCER_ACTIONS.ADD_PRODUCT]: addProduct,
  [REDUCER_ACTIONS.UPDATE_SNACKBAR]: updateSnackbar,
};

export const StorageReducer = {
  reducer: createReducer(storageReducerHandler),
  initialState,
};
