import { useContext } from "react";
import { MyFetch } from "./Myfetch";

const BASE_URL = "http://127.0.0.1:3000";
const API_URL = `${BASE_URL}/api`;

export async function getAllContacts(state, dispatch, navigation) {
  return await MyFetch(
    `${API_URL}/contacts`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
    },
    { state, dispatch },
    navigation
  );
}

export async function getContactById(state, dispatch, id, navigation) {
  return MyFetch(
    `${API_URL}/contact/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
    },
    { state, dispatch },
    navigation
  );
}

export async function EditContact(data, state, dispatch, id, navigation) {
  return MyFetch(
    `${API_URL}/contact/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
      body: JSON.stringify(data),
    },
    { state, dispatch },
    navigation
  );
}

export async function NewContact(data, state, dispatch, navigation) {
  return MyFetch(
    `${API_URL}/contact`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
      body: JSON.stringify(data),
    },
    { state, dispatch },
    navigation
  );
}
