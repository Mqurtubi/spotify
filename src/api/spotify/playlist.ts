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
        q: "top 50 global",
        type: "playlist",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function getPlaylistFeatured() {
  try {
    const res = await spotifyApi.get(`/browse/featured-playlists`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export { getPlaylistTopIndo, getPlaylistTopGlobal, getPlaylistFeatured };
