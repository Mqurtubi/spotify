import spotifyApi from "../axiosInstances";
async function getSearch(q:string,type:string[]) {
    try {
        const res = await spotifyApi.get("/search/",{
            params:{
                q:q,
                type:type.join(",")
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export { getSearch }