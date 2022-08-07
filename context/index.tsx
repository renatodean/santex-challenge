import { createContext, useContext, useReducer } from "react";
import {
  initialState,
  StorageReducer,
  StorageStateInterface,
} from "../reducer";

const Context = createContext<
  [StorageStateInterface, React.Dispatch<React.SetStateAction<any>>]
>([initialState, () => {}]);

export const StorageProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(
    StorageReducer.reducer,
    StorageReducer.initialState
  );

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const useStorageContext = () => {
  return useContext(Context);
};
