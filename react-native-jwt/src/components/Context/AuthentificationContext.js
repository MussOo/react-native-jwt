import React, { useEffect, useContext, useState, useReducer } from "react";
import { ContextAuth } from "../../context/storeAuth";
import { reducerAuthentification } from "../../reducer/authentification";

export default function AuthentificationContext({ children }) {
  const InitialState = {
    token: null,
    refreshToken: null,
    user: null,
  };

  const [state, dispatch] = useReducer(reducerAuthentification, InitialState);

  return (
    <ContextAuth.Provider
      value={{
        stateAuthentification: state,
        dispatchAuthentification: dispatch,
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
}
