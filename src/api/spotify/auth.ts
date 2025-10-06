import { apiClient } from "../axiosClient";
import axios from "axios";
export function login() {
  window.location.href = `${apiClient.defaults.baseURL}/login`;
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

export async function getUserProfile(accessToken: string) {
  const res = await apiClient.get(`/me?access_token=${accessToken}`);
  return res.data;
}

export async function name(accessToken: string) {
  const res = await apiClient.get(`/me/playlists?access_token=${accessToken}`);
  return res.data;
}
