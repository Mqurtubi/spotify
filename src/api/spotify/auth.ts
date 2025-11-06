import { apiClient } from "../axiosClient";
import axios from "axios";
export function login() {
  window.location.href = `${apiClient.defaults.baseURL}/login`;
}
export function logout() {
  window.location.href = `${apiClient.defaults.baseURL}/logout`;
}
export async function getTokenAuth(code: string | null) {
  if (!code) return null;

  try {
    const res = await axios.get(
      `http://127.0.0.1:3001/auth/token?code=${code}`,
      { withCredentials: true }
    );

    console.log("Backend response:", res.data);
    return res.data;
  } catch (err: any) {
    console.error("getTokenAuth error:", err.response?.data || err.message);
    return null;
  }
}

export async function getValidTokenAuth() {
  const access_token = localStorage.getItem("access_token");
  const expire_token = localStorage.getItem("expire_token_auth");
  if (access_token && Date.now < expire_token) {
    return access_token;
  }
  return await getRefreshTokenAuth();
}

export async function getRefreshTokenAuth() {
  const refreshToken = localStorage.getItem("refresh_token");
  if (!refreshToken) return null;
  try {
    const res = await axios.get(
      `http://127.0.0.1:3001/auth/refresh?refresh_token=${refreshToken}`
    );
    const { access_token, expires_in } = res.data;
    localStorage.setItem("access_token", access_token);
    const expire = Date.now() + expires_in * 1000;
    localStorage.setItem("spotify_token_expire_auth", expire.toString());
    return access_token;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserProfile() {
  const res = await axios.get(`http://127.0.0.1:3001/auth/me`, {
    withCredentials: true,
  });
  return res.data;
}

export async function getPlaylistUser() {
  const res = await axios.get(`http://127.0.0.1:3001/auth/me/playlists`, {
    withCredentials: true,
  });
  return res.data;
}
