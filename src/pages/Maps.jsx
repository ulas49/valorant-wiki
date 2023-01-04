import { useContext,useEffect } from "react"
import AgentList from "../components/Agents/AgentList"
import MapList from "../components/Maps/MapList"
import {AppLevelContext} from '../context/AppLevelContext'
import { useAuth } from "../context/AuthContext"

export default function Maps(){
    const {user}=useAuth()
    const {fetchMaps} = useContext(AppLevelContext)
    useEffect(()=>{
        fetchMaps()
    },[])
    return (
       
         <>
       
       { user  ?  <MapList/> : <p className="Warning">Please Login!</p> }
        </>
       
    )
}