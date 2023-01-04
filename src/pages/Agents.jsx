import { useEffect,useContext } from "react"
import AgentList from "../components/Agents/AgentList"
import {AppLevelContext} from '../context/AppLevelContext'
import { useAuth } from "../context/AuthContext"

export default function Agents(){
    
    const {user}=useAuth()

    const {fetchAgents} = useContext(AppLevelContext)
    useEffect(()=>{
        fetchAgents()
        
    },[])
    

    return (
        <>
        
        { user  ?  <AgentList/> : <p className="Warning">Please Login!</p> }
            
        </>
    )
}