import { useState, useEffect, useReducer, useContext } from "react";
import { reducerContact } from "../reducer/contact";
import { getAllContacts } from "../services/Contact";
import { ContextAuth } from "../context/storeAuth";

export default function useContact(StateAuth) {
  const initialState = { contacts: [] };
  const [state, dispatch] = useReducer(reducerContact, initialState); // context Contact

  const { stateAuth, dispatchAuth } = useContext(ContextAuth); // context Auth
  useEffect(() => {
    if (StateAuth.token) {
      getAllContacts(stateAuth, dispatchAuth).then((data) => {
        dispatch({ type: "SET_CONTACTS", payload: data });
      });
      console.log("useEffect");
    }
  }, [StateAuth.token]);

  return { state, dispatch };
}
