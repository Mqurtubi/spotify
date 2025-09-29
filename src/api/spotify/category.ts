import spotifyApi from "../axiosInstances";

async function getSeveralCategories() {
    try {
        const res = await spotifyApi("/browse/categories")
        return res.data
    } catch (error) {
        console.log(error)
    }
}

async function getCategories(id:string) {
    try {
        const res = await spotifyApi(`/browse/categories/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export {getSeveralCategories,getCategories}