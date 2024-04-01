
import { useState } from 'react'
import About from './About'
import './App.css'
import Cricket from './Cricket'
import Cricketcard from './Cricketcard'
import Favoritematch from './Favoritematch'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [favmatch,setFavmatch]=useState([]);
  function addFavorite(cricketObj){
    let newmatch=[...favmatch,cricketObj];
    setFavmatch(newmatch);
    console.log(newmatch);
  }
  return (
    <>
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Cricket addFavorite={addFavorite} />} ></Route>
      <Route path='/Favoritematch' element={<Favoritematch favmatch={favmatch}/>} ></Route>
      <Route path='/About' element={<About/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
    </>
  )
}

export default App
