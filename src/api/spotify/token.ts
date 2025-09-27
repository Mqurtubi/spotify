import axios from "axios";
import { SpotifyAuthResponse } from "./types";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const CLIENT_SERVER = import.meta.env.VITE_SPOTIFY_CLIENT_SERVER

async function getToken(): Promise<SpotifyAuthResponse | null>{
    try {
        const res= await axios.post<SpotifyAuthResponse>(
            "https://accounts.spotify.com/api/token",
            new URLSearchParams({
                grant_type:"client_credentials"}),
            {
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded",
                    Authorization:`Basic ${btoa(CLIENT_ID+":"+CLIENT_SERVER)}`
                }
            }
        )
        return res.data
    } catch (error) {
        console.error("Unexpected error:", error);
        return null
    }
}

async function getValidToken(): Promise<string | null>{
    let token=localStorage.getItem("spotify_token")
    const expire=localStorage.getItem("spotify_token_expire")

    if(!token || (expire&&Date.now() > parseInt(expire))){
        const res = await getToken()
        token = res?.access_token ?? null

        if(token){
            const expireTime = Date.now() + res!.expires_in * 1000
            localStorage.setItem("spotify_token",token)
            localStorage.setItem("spotify_token_expire",expireTime.toString())
        }
    }
    return token
}

export {getToken, getValidToken}