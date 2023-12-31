import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Loanding from './components/Loanding'
import { useState } from 'react'
import Nosotros from './pages/Nosotros'

function App() {

  const [Loading, setLoading] = useState(false)

  setTimeout(() => {
    setLoading(true)
  }, 2050)
 

  return (
    <div className='App'>
      {
        Loading
        ?<Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
       </Routes>
        :  <Loanding/>
      }
    
    </div>
  )
}

export default App
