export const actions = {
  SET_CONTACTS: "SET_CONTACTS",
  DELETE_CONTACT: "DELETE_CONTACT",
};

export function setContacts(contacts) {
  return {
    type: actions.SET_CONTACTS,
    payload: contacts,
  };
}

export function deleteContact(id) {
  return {
    type: actions.DELETE_CONTACT,
    payload: id,
  };
}
