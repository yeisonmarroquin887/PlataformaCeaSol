import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Loanding from './components/Loanding'
import { useState } from 'react'

function App() {

  const [Loading, setLoading] = useState(false)

  setTimeout(() => {
    setLoading(true)
  }, 2050)
 

  return (
    <div className='App'>
      {
        false
        ?<Routes>
        <Route path='/' element={<Home/>}/>
       </Routes>
        :  <Loanding/>
      }
    
    </div>
  )
}

export default App
