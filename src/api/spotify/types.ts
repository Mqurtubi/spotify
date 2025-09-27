//types untuk response token
interface SpotifyAuthResponse{
    access_token:string,
    token_type:string,
    expires_in:number
}

//types untuk route album
interface SpotifySeveralAlbum{
    albums:SpotifyAlbum[]
}

interface SpotifyAlbum{
    total_tracks:number,
    href:string,
    id:string,
    images:images[],
    name:string,
    release_date:string,
    artists:artists[],
    tracks:tracks,
    genres:string[],
    label:string,
    popularity:number
}

//types untuk route artist
interface SpotifySeveralArtist{
    artists:SpotifyArtist[]
}

interface SpotifyArtist{
    followers:{
        href:string,
        total:number
    },
    genres:string[],
    href:string,
    id:string,
    images:images[],
    name:string,
    popularity:string,
    type:string
}

interface SpotifyArtistAlbum{
    href:string,
    limit:number,
    next:string,
    offset:number,
    previous:string,
    total:number,
    items:itemsAlbum[],
}

interface SpotiftArtistsTopTracks{
    tracks:tracks[]
}

interface tracks{
    href:string,
    limit:number,
    next:string,
    offset:number,
    previous:string,
    total:number,
    items:items[],
}

interface items{
    artists:artists[],
    duration_ms:number,
    href:string,
    id:string,
    is_playable:boolean,
    name:string,
}

interface itemsAlbum{
    total_tracks:string,
    href:string,
    id:string,
    images:images[],
    name:string,
    release_date:string,
    type:string,
    artists:artists[]
}

interface images{
    url:string,
    height:number
    width:number
}

interface artists{
    href:string,
    id:string,
    name:string,
    type:string
}



export type {SpotifyAuthResponse,SpotifyAlbum,SpotifySeveralAlbum, tracks, SpotifyArtist, SpotifySeveralArtist, SpotifyArtistAlbum, SpotiftArtistsTopTracks}