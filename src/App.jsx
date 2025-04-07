
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
   const [login, setlogin] = useState(false);
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' element={login==true?<Home/>:<Navigate to={"/login"}/>}/>
          <Route path='/login' element={login==false?<Login setlogin={setlogin} />:<Navigate to={"/"}/>}/>
          <Route path='/register' element={<Signup/>}/>
           

      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
