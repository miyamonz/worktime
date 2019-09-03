import React, { useReducer, useContext } from "react";

const initialState = {
  days: [{ day: new Date(2019, 9 - 1, 1), projectA: null, projectB: null  }]
};
const Store = React.createContext();

//ここにreducer
const reducer = (state = {}, action) => {
  if (typeof action === "function") {
    return { ...state, ...action(state) };
  }
  return state;
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};

export { Store, Provider };
export default () => useContext(Store);
