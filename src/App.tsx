import { useEffect } from 'react'
import './App.css'
import { getValidToken, getArtistRelated, getArtistTopTracks } from './api/index'
function App() {
  useEffect(()=>{
    async function init() {
      const token = await getValidToken()
      if(!token){
        return
      }

      try {
        const topTracks = await getArtistRelated("0TnOYISbd1XYRBk9myaseg")
        console.log(topTracks)
      } catch (error) {
        console.log(error)
      }
    }
    init()
  },[])
  return (
    <>
      
    </>
  )
}

export default App
