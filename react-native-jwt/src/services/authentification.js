const BASE_URL = "http://127.0.0.1:8000";
const API_URL = `${BASE_URL}`;

export async function Auth(data) {
  return await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function register(data) {
  return fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export default {
  Auth,
  register,
};
