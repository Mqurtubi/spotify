import { useEffect } from 'react'
import './App.css'
import { getValidToken, getSeveralCategories, getCategories } from './api/index'
function App() {
  useEffect(()=>{
    async function init() {
      const token = await getValidToken()
      if(!token){
        return
      }

      try {
        const severalCategories = await getSeveralCategories()
        const categories = await getCategories("dinner")
        console.log(severalCategories)
        console.log(categories)
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
