import React from 'react';
import axios from 'axios';
import { useState,useEffect,createContext } from 'react';




export const AppLevelContext = createContext();
const API  = 'https://valorant-api.com/v1';


function AppLevelProvider({children}) {
const [weapons,setWeapons] = useState([])
const [agents,setAgents] = useState([])
const [maps,setMaps] = useState([])



const fetchAgents = async ()=>{
    const response = await axios.get(`${API}/agents?isPlayableCharacter=true`)
    setAgents(response.data.data)
}

const fetchMaps = async ()=>{
    const response = await axios.get(`${API}/maps`)
    setMaps(response.data.data)
}

const fetchWeapons = async ()=>{
    const response = await axios.get(`${API}/weapons`)
    setWeapons(response.data.data)
}
const data = {
    weapons,
    setWeapons,
    agents,
    setAgents,
    maps,
    setMaps,
    fetchAgents,
    fetchMaps,
    fetchWeapons
    
    
    
}

    return (
        <AppLevelContext.Provider value={data} >

            {children}

        </AppLevelContext.Provider>
    )
}




export default AppLevelProvider