import {BrowserRouter , Route,Routes } from 'react-router-dom'
import Weapons from './pages/Weapons'
import Agents from './pages/Agents'
import Maps from './pages/Maps'
import './App.css'
import { Header } from './components/Header/Header'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import { useEffect } from 'react'
import { useAuth } from './context/AuthContext'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




function App() {

const {user,setUser} = useAuth()
useEffect(()=>{

setUser(JSON.parse(localStorage.getItem("user_login")))

},[])



  return (
    <BrowserRouter>
     
    <ToastContainer/>
  
    <Header/> 

    <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route  path='/weapons' element={<Weapons/>} />
    <Route  path='/agents' element={<Agents/>} />
    <Route  path='/maps' element={<Maps/>} />
    <Route path='/details' element={<Home/>} />
    
    </Routes>

    </BrowserRouter>
  )
}

export default App
