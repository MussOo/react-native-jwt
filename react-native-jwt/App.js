import React, { useReducer, useEffect } from "react";
import { StyleSheet } from "react-native";

import { ContextAuth } from "./src/context/storeAuth";

import { reducerAuthentification } from "./src/reducer/authentification";
import Navigation from "./src/components/Navigation/Navigation";

import useContact from "./src/hooks/useContact";
export default function App() {
  const InitialState = {
    token: null,
    refreshToken: null,
    user: null,
  };

  const [state, dispatch] = useReducer(reducerAuthentification, InitialState);

  return (
    <ContextAuth.Provider value={{ stateAuth: state, dispatchAuth: dispatch }}>
      <Navigation />
    </ContextAuth.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
