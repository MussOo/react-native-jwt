export const actions = {
  SET_TOKEN: "SET_TOKEN",
  SET_REFRESH_TOKEN: "SET_REFRESH_TOKEN",
  DELETE_ALL: "DELETE_ALL",
  TEST: "TEST",
};

export function setToken(token) {
  return {
    type: actions.SET_TOKEN,
    payload: token,
  };
}

export function setRefreshToken(refreshToken) {
  return {
    type: actions.SET_REFRESH_TOKEN,
    payload: refreshToken,
  };
}

export function deleteAll() {
  return {
    type: actions.DELETE_ALL,
  };
}

export function test() {
  return {
    type: actions.TEST,
  };
}
