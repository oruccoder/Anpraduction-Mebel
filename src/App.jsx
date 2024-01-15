import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import About from './pages/About'

function App() {

  return (   
      <BrowserRouter>
        <Routes>
          <Route exacth path='/' element={<Home />}></Route>
          <Route exacth path='/About' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
