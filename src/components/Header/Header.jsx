import React,{useState,useEffect} from 'react'
import logo from '../../Assets/img/logo.png'
import {Link,useLocation} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faSignOut} from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../context/AuthContext'

export const Header = () => {

 const {user,setUser}=useAuth()
const location = useLocation()
let currentPage = location.pathname.slice(1)


useEffect(()=>{

if(currentPage!=='/'){
    currentPage=location.pathname.slice(1)
}else {
    currentPage='home'
}


},[location])

const logout =()=>{
  localStorage.removeItem("user_login")
  setUser(false)
  
}

  return (
    <header>

        <div className='brand' >
        <img src={logo} alt="" />
        <h1>Valorant WIKI</h1>
        </div>

        <nav>
        <ul className='navList'>
            <li className="navItem">
                <Link to='/weapons' className={currentPage === 'weapons' ? 'curLink' : 'navLink'} >Weapons</Link>
            </li>
            <li className="navItem">
                <Link to='/agents' className={currentPage === 'agents' ? 'curLink' : 'navLink'} >Agents</Link>
            </li>
            <li className="navItem">
                <Link to='/maps' className={currentPage === 'maps' ? 'curLink' : 'navLink'} >Maps</Link>
            </li>
            <li className="navItem">
                <Link to='/details' className='navLink' ><FontAwesomeIcon icon={faHome} /></Link>
            </li>
            <li className="navItem">
                <Link to='/login' className='navLink' onClick={logout} ><FontAwesomeIcon icon={faSignOut } /></Link>
            </li>
            
        </ul>
        </nav>
    </header>
  )
}
