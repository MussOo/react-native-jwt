import { actions } from "../actions/ContactAction";

export function reducerContact(state, action) {
  switch (action.type) {
    case actions.SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case actions.DELETE_CONTACT:
      return {
        ...state,
        contacts: [],
      };
    default:
      throw new Error();
  }
}
