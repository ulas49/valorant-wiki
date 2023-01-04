import { useEffect,useContext } from "react"
import WeaponList from "../components/Weapons/WeaponList"
import {AppLevelContext} from '../context/AppLevelContext'
import { useAuth } from "../context/AuthContext"

export default function Weapons(){
    const {user}=useAuth()
    const {fetchWeapons} = useContext(AppLevelContext)
    useEffect(()=>{
        fetchWeapons() 
    },[])
    return (
        <>
        { user  ?  <WeaponList/> : <p className="Warning">Please Login!</p> }
            
        </>
    )
}