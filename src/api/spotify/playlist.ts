import axios from "axios";
import spotifyApi from "../axiosInstances";

async function getPlaylistTopIndo() {
  try {
    const res = await spotifyApi.get(`/search`, {
      params: {
        q: "top 50 indonesia",
        type: "playlist",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function getPlaylistTopGlobal() {
  try {
    const res = await spotifyApi.get(`/search`, {
      params: {
        q: "best playlist world",
        type: "playlist",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export { getPlaylistTopIndo, getPlaylistTopGlobal };
