import { useEffect } from 'react'
import { getValidToken} from './api/index'
import Navbar from './components/layout/Navbar'
function App() {
  useEffect(()=>{
    async function init() {
      const token = await getValidToken()
      if(!token){
        return
      }
    }
    init()
  },[])
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default App
