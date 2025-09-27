import { spotifyApi, SpotifyAlbum, SpotifySeveralAlbum, tracks } from "../index";

async function getSeveralAlbum(ids : string[]):Promise<SpotifySeveralAlbum | void> {
    try {
        const res= await spotifyApi.get("/albums",{
            params:{ids:ids.join(",")}
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

async function getDetailAlbum(id:string | null):Promise<SpotifyAlbum | void> {
    try {
        const res = await spotifyApi.get( `/albums/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

async function getTracksAlbum(id:string | null):Promise<tracks | void> {
    try {
        const res = await spotifyApi.get(`/albums/${id}/tracks`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export { getSeveralAlbum, getDetailAlbum, getTracksAlbum }