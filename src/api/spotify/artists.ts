import spotifyApi from "../axiosInstances";
import {
  SpotifyArtist,
  SpotifySeveralArtist,
  SpotifyArtistAlbum,
  SpotiftArtistsTopTracks,
} from "./types";
import { getTopArtistsUser } from "./auth";
async function getArtist(id: string | null): Promise<SpotifyArtist | void> {
  try {
    const res = await spotifyApi.get(`/artists/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function getSeveralArtist(
  ids: string[]
): Promise<SpotifySeveralArtist | void> {
  try {
    const res = await spotifyApi.get("/artists", {
      params: { ids: ids.join(",") },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function getArtistAlbum(id: string): Promise<SpotifyArtistAlbum | void> {
  try {
    const res = await spotifyApi.get(`/artists/${id}/albums`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function getArtistTopTracks(
  id: string
): Promise<SpotiftArtistsTopTracks | void> {
  try {
    const res = await spotifyApi.get(`/artists/${id}/top-tracks`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function getArtistRelated(): Promise<SpotifySeveralArtist | void> {
  //   const artists = await getTopArtistsUser();
  //   const id = artists.items[0].id;
  try {
    const res = await spotifyApi.get(
      `/artists/1Xyo4u8uXC1ZmMpatF05PJ/related-artists`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
export {
  getArtist,
  getSeveralArtist,
  getArtistAlbum,
  getArtistTopTracks,
  getArtistRelated,
};
