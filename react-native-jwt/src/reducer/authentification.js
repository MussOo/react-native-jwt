import { actions } from "../actions/AuthentificationAction";

export function reducerAuthentification(state, action) {
  switch (action.type) {
    case actions.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case actions.SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.payload,
      };
    case actions.DELETE_ALL:
      return {
        token: null,
        refreshToken: null,
        user: null,
      };
    case actions.TEST:
      return {
        ...state,
        token: "test",
      };

    default:
      throw new Error();
  }
}
