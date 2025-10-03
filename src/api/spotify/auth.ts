const BASE_URL = "http://localhost:3001/auth";

export function login() {
  window.location.href = `${BASE_URL}/login`;
}
